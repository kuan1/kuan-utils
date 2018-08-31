const getMessage = (status) => {
  const codeMessage = {
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '接口地址地址不存在',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  return codeMessage[status] || '请求失败'
}

/**
 * @param error {Error} 请求返回错误
 * @param Alert {Function} 提示函数
 * @param handleError {Function} 自定义错误处理
 * @param message {String} 后台返回错误信息
 */
function errorHandle({error, Alert, handleError = () => {}}) {
  const {status = '', config = {}, data = {}} = error.response || {} // 状态吗
  const msg = data.info || getMessage(status) // 提示信息
  const errorMsg = !status ? '网络超时' : `${status}: ${msg}`
  if (msg) {
    Alert(`${config.url || ''}： ${errorMsg}`)
  }
  handleError(status, msg, error) // 自定义错误处理
}

export default errorHandle
