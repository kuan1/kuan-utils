import axios from 'axios'

/**
 * @param status 状态码
 * @returns {*|string}
 */
const getMessage = status => {
  const codeMessage = {
    400: '请求有错误',
    401: '没有权限',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '接口地址地址不存在',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误',
    502: '网关错误',
    503: '服务不可用',
    504: '网络超时'
  }
  return codeMessage[status] || '请求失败'
}

/**
 * @param error {Error} 请求返回错误
 * @param Alert {Function} 提示函数
 * @param handleError {Function} 自定义错误处理
 * @param message {String} 后台返回错误信息
 */
function errorHandle({ error, Alert, handleError = () => {} }) {
  const { status = '', config = {}, data = {} } = error.response || {} // 状态吗
  const msg = status ? data.info || getMessage(status) : '网络超时' // 提示信息
  if (msg && alert !== false) {
    const errorMsg =
      config.alertDetail === true
        ? `${status} ${config.url || ''}：\n ${msg}`
        : msg
    Alert(errorMsg)
  }
  handleError(status, msg, error) // 自定义错误处理
}

/**
 * @param config {Object} 创建http请求配置参数
 * @returns {AxiosInstance}
 */
const createApi = config => {
  const {
    options = {}, // 默认axios配置
    getHeaders = () => {}, // 获取token方法
    handleError = () => {}, // 自定义错误处理
    Alert = alert // 错误提示
  } = config

  const service = axios.create(options)

  // 请求前更改配置
  service.interceptors.request.use(config => {
    const data = getHeaders(config) || {} // 动态设置headers
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        if (key === 'token') {
          config.headers.Authorization = `Bearer ${value}`
        } else {
          config.headers[key] = value
        }
      }
    })
    return config
  })

  service.interceptors.response.use(
    response => {
      // 状态码200处理
      const { data = {} } = response
      if (!data.success && !data.iRet) {
        // 后台自定义错误
        const message = data.info || data.error || ''
        const error = new Error(message) // eslint-disable-line
        error.response = response
        errorHandle({
          error,
          handleError,
          Alert,
          message
        })
        throw error
      }
      return response.data
    },
    error => {
      // 状态码不是200处理
      errorHandle({
        error,
        handleError,
        Alert
      })
      return Promise.reject(error)
    }
  )

  return service
}

export default createApi
