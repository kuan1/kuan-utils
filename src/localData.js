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
    const data = maxAge + timestamp > Date.now() ? value : null
    if (!data) localStorage.removeItem(key) // 超时删除缓存
    return data
  } catch (e) {
    console.error(e)
    localStorage.removeItem(key)
    return null
  }
}

// 创建localStorage缓存，用于用户信息
export function createCache(key, maxAge = 60 * 24) {
  return {
    getCache() {
      return getLocalData(key)
    },
    saveCache(userInfo) {
      setLocalData(key, userInfo, maxAge)
    }
  }
}

export default {
  get: getLocalData,
  set: setLocalData,
  create: createCache
}
