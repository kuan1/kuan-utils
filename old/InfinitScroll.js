/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 09:18:10
 * @LastEditTime: 2019-08-09 09:18:10
 * @LastEditors: your name
 */
import { requestAnimationFrame, cancelAnimationFrame } from './animationFrame'

class InfinitScroll {
  constructor(el) {
    this.timer = null
    this.itemClass = '.item-container'
    this.el = el
    this.width = 0
    this.clientWidth = 0
    this.left = 0
    this.init()
  }

  init() {
    if (!this.el) return
    this.clientWidth = this.left = document.documentElement.clientWidth
    const items = this.el.querySelectorAll(this.itemClass)
    let width = 0
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      width += item.clientWidth
    }
    this.width = width
    this.el.style.width = `${width}px`
    this.el.style.left = `${this.left}px`
    this.start()
  }
  start() {
    this.top()
    this.timer = requestAnimationFrame(() => {
      if (this.left <= -this.width) {
        this.left = this.clientWidth
      } else {
        this.left -= 1
      }
      this.el.style.left = `${this.left}px`
      this.start()
    })
  }
  top() {
    if (this.timer) cancelAnimationFrame(this.timer)
  }
}

export default InfinitScroll

// `
// <div class='container'>
// div.item-container*10
// </div>
// `
