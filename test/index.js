import wxShare from '../src/wxShare'
// import axios from 'axios'

// async function getConfig() {
//   const href = window.location.href.split('#')[0]
//   const { data } = await axios({
//     url: `//www.luzhongkuan.cn/api2/wx/shareConfig?url=${encodeURIComponent(
//       href
//     )}`
//   })
//   if (data.success) {
//     return data.data
//   }
//   return Promise(Error('获取分享配置失败'))
// }

async function share() {
  // const config = await getConfig()
  wxShare({
    title: '就是为了测试一下', // 分享标题
    desc: '这里是自定义分享', // 分享描述
    link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'http://lib.luzhongkuan.cn/images/logo.png' // 分享图标
  })
}

share()
