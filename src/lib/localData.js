/**
 * 设置localStorage过期时间
 * @param key{string}
 * @param value{string}
 * @param maxAge{number} 分钟 (默认30天)
 */
export function setLocalData(key, value, maxAge = 1000 * 60 * 60 * 24 * 30) {
  const data = {
    value,
    maxAge: maxAge * 60000,
    timestamp: Date.now()
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalData(key) {
  try {
    const dataStr = localStorage.getItem(key)
    if (!dataStr) return null
    const { value, maxAge, timestamp } = JSON.parse(dataStr)
    return maxAge + timestamp > Date.now() ? value : null
  } catch (e) {
    console.error(e)
    return null
  }
}

export default {
  get: getLocalData,
  set: setLocalData
}
