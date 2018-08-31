import {localData} from '../'

/**
 * 用户信息储存工具类 数据格式{token: '134', ...}
 * @param key {String} 储存localStorage对应key
 * @param maxAge {Number} 有效时间
 * @returns {*}
 */
export default (key = 'BEAR_USER_INFO', maxAge = 60 * 24) => {
  return {
    getUser() { // 获取用户信息
      return localData.get(key)
    },
    saveUser(userInfo) {
      localData.set(key, userInfo, maxAge)
    },
    getToken() {
      const userInfo = this.getUser()
      return userInfo ? userInfo.token : null
    }
  }
}
