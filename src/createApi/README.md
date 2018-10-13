## config 新增 alert、alertDetail 参数

```
  request({
    url: '',
    alert: false, // 默认true
    alertDetail: true // 默认false
  })
```

## 使用 demo

```
import { notification } from 'antd'
import { routerRedux } from 'dva/router'

import createApi from './kuan-utils/createApi'
import { getToken } from './authority'
import store from '../index'

// http请求封装
const request = createApi({
  options: {
    timeout: 100000,
    headers: {
      'X-Halo-App': 'yuncang-dashboard',
    },
  },
  getHeaders() { // 动态设置headers
    return {
      'X-Wareroom-Id': store.getState().login.wareRoomId,
      token: getToken()
    }
  },
  Alert(message) { // 提示错误
    notification.error({
      message,
    })
  },
  handleError(status) { // 自定义错误
    const {dispatch} = store

    if (status === 401) {
      dispatch({
        type: 'login/logout',
      })
      return
    }
    if (process.env.NODE_ENV !== 'development') {
      if (status === 403) {
        dispatch(routerRedux.push('/exception/403'))
        return
      }
      if (status <= 504 && status >= 500) {
        dispatch(routerRedux.push('/exception/500'))
      }
    }
  },
})

export default request
```
