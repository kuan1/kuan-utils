// 节流函数
export function throttle(fn, time = 300) {
  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数')
  }
  let startTime = new Date()
  return () => {
    const currentTime = new Date()
    if (currentTime - startTime > time) {
      startTime = currentTime
      fn()
    }
  }
}

// 防抖函数
export function debounce(fn, time = 300) {
  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数')
  }
  let timer
  return () => {
    timer && clearTimeout(timer)

    timer = setTimeout(() => {
      fn()
    }, time)
  }
}

/**
 * @desc 深拷贝，支持常见类型
 * @param {any} values
 */
export function deepClone(values) {
  let copy

  if (values === null || typeof values !== 'object') return values

  if (values instanceof Date) {
    copy = new Date()
    copy.setTime(values.getTime())
    return copy
  }

  if (values instanceof Array) {
    copy = []
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i])
    }
    return copy
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {}
    for (const attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr])
    }
    return copy
  }

  throw new Error('deep clone isn\'t supported.')
}

/**
 * @desc 随机生成颜色
 * @return {String}
 */
export function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6)
}
