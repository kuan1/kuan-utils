## 使用demo

```
import { notification } from 'antd'
import { routerRedux } from 'dva/router'

import createApi from '../kuan-utils/createApi'
import { getToken } from '../authority'
import store from '../../index'

const wareRoomId = 'wareRoomId'

// http请求封装
const request = createApi({
  options: {
    timeout: 100000,
    headers: {
      'X-Halo-App': 'yuncang-dashboard',
    },
  },
  getHeaders() {
    return {
      'X-Wareroom-Id': store.getState().login.wareRoomId,
      token: getToken()
    }
  }, // 动态设置headers
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
    if (status === 403) {
      dispatch(routerRedux.push('/exception/403'))
      return
    }
    if (status <= 504 && status >= 500) {
      dispatch(routerRedux.push('/exception/500'))
      // return
    }
    // if (status >= 404 && status < 422) {
    //   dispatch(routerRedux.push('/exception/404'))
    // }
  },
})

export default request

```
