/*
 * @Description: 锁定滚动
 */
let top = 0

function lock(isFixed = true) {
  let bodyEl = document.body

  if (isFixed) {
    top = window.scrollY

    bodyEl.style.position = 'fixed'
    bodyEl.style.top = `-${top}px`
  } else {
    bodyEl.style.position = ''
    bodyEl.style.top = ''

    window.scrollTo(0, top) // 回到原先的top
  }
}

export default lock
