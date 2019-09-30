export default class Drag {
  constructor(el, onchange) {
    this.el = el
    this.onchange = onchange
    this.init(el, onchange)
  }
  init(el, onchange) {
    this.el = el
    el.style.position = 'absolute'
    el.style.cursor = 'move'
    const maxLeft = el.parentNode.clientWidth - el.clientWidth
    const maxTop = el.parentNode.clientHeight - el.clientHeight
    el.onmousedown = function(e) {
      const disX = e.clientX - el.offsetLeft
      const disY = e.clientY - el.offsetTop
      document.onmousemove = function(e) {
        //  获取到鼠标拖拽后的横向位移(距离父级元素)
        const l = e.clientX - disX
        //  获取到鼠标拖拽后的纵向位移(距离父级元素)
        const t = e.clientY - disY

        el.style.left = l + 'px'
        el.style.top = t + 'px'

        if (e.clientX - disX <= 0) {
          el.style.left = 0 + 'px'
        } else if (e.clientX - disX >= maxLeft) {
          el.style.left = maxLeft + 'px'
        }

        if (e.clientY - disY <= 0) {
          el.style.top = 0 + 'px'
        } else if (e.clientY - disY >= maxTop) {
          el.style.top = maxTop + 'px'
        }

        return false
      }

      // 松开事件后，移除事件
      document.onmouseup = function() {
        // 将此时的位置传出去
        if (typeof onchange === 'function') {
          onchange({
            x: el.style.left.replace('px', ''),
            y: el.style.top.replace('px', '')
          })
        }
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
  destory() {
    if (this.el) {
      this.el.onmousedown = null
    }
  }
}
