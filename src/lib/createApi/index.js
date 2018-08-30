import axios from 'axios'
import errorHandle from './errorHandle' // 错误处理

/**
 * @param config {Object} 创建http请求配置参数
 * @returns {AxiosInstance}
 */
const createApi = (config) => {
  const {
    tokenKey = 'BEAR_TOKEN', // localStorage缓存
    options = {}, // 默认axios配置
    handleError, // 自定义错误处理
    Alert = alert // 错误提示
  } = config

  const service = axios.create(options)

  // 请求前更改配置
  service.interceptors.request.use(config => {
    const token = localStorage.getItem(tokenKey) // token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}` // Authorization
    }
    return config
  })

  service.interceptors.response.use(response => {
    // 状态码200处理
    const {data} = response
    if (!data.success && !data.iRet) { // 后台自定义错误
      const message = data.info || data.error
      const error = new Error(message)
      error.response = response
      errorHandle({
        error, handleError, Alert, message
      })
      throw error
    }
    return response.data
  }, error => {
    // 状态码不是200处理
    errorHandle({
      error, handleError, Alert
    })
    return Promise.reject(error)
  })

  return service
}

export default createApi
