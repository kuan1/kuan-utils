class Danmaku {
  constructor(options) {
    this.options = options
    this.container = this.options.container
    this.danTunnel = {
      right: {},
      top: {},
      bottom: {}
    }
    this.danIndex = 0
    this.dan = []
    this._opacity = this.options.opacity || 1
    this.events = this.options.events
    this.unlimited = this.options.unlimited
    this.showing = true
    this.paused = false
    this._measure('')

    this.frame()
  }

  reload(newAPI) {
    this.options.api = newAPI
    this.dan = []
    this.clear()
    this.load()
  }

  send(dan, callback) {
    const danmakuData = {
      token: this.options.api.token,
      id: this.options.api.id,
      author: this.options.api.user,
      time: this.options.time(),
      text: dan.text,
      color: dan.color,
      type: dan.type
    }
    this.options.apiBackend.send({
      url: this.options.api.address + 'v3/',
      data: danmakuData,
      success: callback,
      error: msg => {
        this.options.error(msg || this.options.tran('Danmaku send failed'))
      }
    })

    this.dan.splice(this.danIndex, 0, danmakuData)
    this.danIndex++
    const danmaku = {
      text: this.htmlEncode(danmakuData.text),
      color: danmakuData.color,
      type: danmakuData.type,
      border: `2px solid ${this.options.borderColor}`
    }
    this.draw(danmaku)

    this.events && this.events.trigger('danmaku_send', danmakuData)
  }

  frame() {
    if (this.dan.length && !this.paused && this.showing) {
      this.draw(this.dan) // todo
    }
    window.requestAnimationFrame(() => {
      this.frame()
    })
  }

  opacity(percentage) {
    if (percentage !== undefined) {
      const items = this.container.getElementsByClassName(
        'dplayer-danmaku-item'
      )
      for (let i = 0; i < items.length; i++) {
        items[i].style.opacity = percentage
      }
      this._opacity = percentage

      this.events && this.events.trigger('danmaku_opacity', this._opacity)
    }
    return this._opacity
  }

  /**
   *
   *  @param {Object Array} dan - {text, color, type}
   *
   * text - danmaku content
   * color - danmaku color, default: `#fff`
   * type - danmaku type, `right` `top` `bottom`, default: `right`
   */
  draw(dan) {
    if (!this.showing) return

    const itemHeight = this.options.height
    const danWidth = this.container.offsetWidth
    const danHeight = this.container.offsetHeight
    const itemY = parseInt(danHeight / itemHeight) // 弹幕行数

    const danItemRight = ele => {
      const eleWidth = ele.offsetWidth || parseInt(ele.style.width)
      const eleRight =
        ele.getBoundingClientRect().right ||
        this.container.getBoundingClientRect().right + eleWidth
      return this.container.getBoundingClientRect().right - eleRight
    }

    const danSpeed = width => (danWidth + width) / 5

    const getTunnel = (ele, type, width) => {
      const tmp = danWidth / danSpeed(width)

      for (let i = 0; this.unlimited || i < itemY; i++) {
        const item = this.danTunnel[type][i + '']
        if (item && item.length) {
          if (type !== 'right') {
            continue
          }
          for (let j = 0; j < item.length; j++) {
            const danRight = danItemRight(item[j]) - 10
            if (
              danRight <=
                danWidth - tmp * danSpeed(parseInt(item[j].style.width)) ||
              danRight <= 0
            ) {
              break
            }
            if (j === item.length - 1) {
              this.danTunnel[type][i + ''].push(ele)
              ele.addEventListener('animationend', () => {
                this.danTunnel[type][i + ''].splice(0, 1)
              })
              return i % itemY
            }
          }
        } else {
          this.danTunnel[type][i + ''] = [ele]
          ele.addEventListener('animationend', () => {
            this.danTunnel[type][i + ''].splice(0, 1)
          })
          return i % itemY
        }
      }
      return -1
    }

    if (Object.prototype.toString.call(dan) !== '[object Array]') {
      dan = [dan]
    }

    const docFragment = document.createDocumentFragment()

    for (let i = 0; i < dan.length; i++) {
      dan[i].type = utils.number2Type(dan[i].type)
      if (!dan[i].color) {
        dan[i].color = 16777215
      }
      const item = document.createElement('div')
      item.classList.add('dplayer-danmaku-item')
      item.classList.add(`dplayer-danmaku-${dan[i].type}`)
      if (dan[i].border) {
        item.innerHTML = `<span style="border:${dan[i].border}">${
          dan[i].text
        }</span>`
      } else {
        item.innerHTML = dan[i].text
      }
      item.style.opacity = this._opacity
      item.style.color = utils.number2Color(dan[i].color)
      item.addEventListener('animationend', () => {
        this.container.removeChild(item)
      })

      const itemWidth = this._measure(dan[i].text)
      let tunnel

      // adjust
      switch (dan[i].type) {
        case 'right':
          tunnel = getTunnel(item, dan[i].type, itemWidth)
          if (tunnel >= 0) {
            item.style.width = itemWidth + 1 + 'px'
            item.style.top = itemHeight * tunnel + 'px'
            item.style.transform = `translateX(-${danWidth}px)`
          }
          break
        case 'top':
          tunnel = getTunnel(item, dan[i].type)
          if (tunnel >= 0) {
            item.style.top = itemHeight * tunnel + 'px'
          }
          break
        case 'bottom':
          tunnel = getTunnel(item, dan[i].type)
          if (tunnel >= 0) {
            item.style.bottom = itemHeight * tunnel + 'px'
          }
          break
        default:
          console.error(`Can't handled danmaku type: ${dan[i].type}`)
      }

      if (tunnel >= 0) {
        // move
        item.classList.add('dplayer-danmaku-move')

        // insert
        docFragment.appendChild(item)
      }
    }

    this.container.appendChild(docFragment)

    return docFragment
  }

  play() {
    this.paused = false
  }

  pause() {
    this.paused = true
  }

  _measure(text) {
    if (!this.context) {
      const measureStyle = getComputedStyle(
        this.container.getElementsByClassName('danmaku-item')[0],
        null
      )
      this.context = document.createElement('canvas').getContext('2d')
      this.context.font = measureStyle.getPropertyValue('font')
    }
    return this.context.measureText(text).width
  }

  seek() {
    this.clear()
    for (let i = 0; i < this.dan.length; i++) {
      if (this.dan[i].time >= this.options.time()) {
        this.danIndex = i
        break
      }
      this.danIndex = this.dan.length
    }
  }

  clear() {
    this.danTunnel = {
      right: {},
      top: {},
      bottom: {}
    }
    this.danIndex = 0
    this.options.container.innerHTML = ''

    this.events && this.events.trigger('danmaku_clear')
  }

  htmlEncode(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2f;')
  }

  resize() {
    const danWidth = this.container.offsetWidth
    const items = this.container.getElementsByClassName('danmaku-item')
    for (let i = 0; i < items.length; i++) {
      items[i].style.transform = `translateX(-${danWidth}px)`
    }
  }

  hide() {
    this.showing = false
    this.pause()
    this.clear()
  }

  show() {
    this.seek()
    this.showing = true
    this.play()
  }

  unlimit(boolean) {
    this.unlimited = boolean
  }
}

export default Danmaku
