let timer

/**
 * @description: 函数节流
 * @param {fn} Function
 * @param {time} Number 截流时间
 */
export function throttle(fn, time = 300) {
  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数')
  }
  if (!timer) {
    timer = setTimeout(() => {
      fn()
      timer = null
    }, time)
  }
}

export default throttle
