// 防抖函数
let timer
export function debounce(fn, time = 300) {
  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数')
  }
  timer && clearTimeout(timer)
  timer = setTimeout(() => {
    fn()
  }, time)
}

export default debounce
