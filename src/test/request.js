import {createApi} from '../'

const request = createApi({
  options: {
  },
  Alert: console.log,
  handleError: (error) => {
    console.log('自定义错误：', error)
  }
})

request.get('http://api.luzhongkuan.cn/api/location2').then(res => {
  console.log(1, res)
})
