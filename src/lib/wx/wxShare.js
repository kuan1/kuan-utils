// 微信分享, 使用方法 【loadWechatJSSDK动态引入微信sdk js文件，getWechatConfig获取需要注入的参数】
import { loadWechatJSSDK, isWechat, getWechatConfig } from './tools'
// import moment from 'moment'

// 微信分享的默认数据
const getDefaultData = () => ({
  title: '', // 分享标题
  desc: '！', // 分享描述
  link: window.location.origin + '/user/from', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  imgUrl: '', // 分享图标
  type: 'link', // 分享类型,music、video 或 link，不填默认为link
  dataUrl: '', // 如果 type 是 music 或 video，则要提供数据链接，默认为空
  success() {
  }, // 用户确认分享后执行的回调函数
  cancel() {
  } // 用户取消分享后执行的回调函数
})

// 分享到朋友圈
function menuShareTimeline(shareConfig) {
  const { desc, link, imgUrl, success } = shareConfig
  const timeLineConfig = {
    title: desc, // 分享标题
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl, // 分享图标
    success // 用户确认分享后执行的回调函数
  }
  wx.onMenuShareTimeline(timeLineConfig)
}

// 分享给朋友
function menuShareAppMessage(shareConfig) {
  const {
    title,
    link,
    imgUrl,
    success,
    cancel,
    desc,
    type,
    dataUrl
  } = shareConfig
  const appMsgConfig = {
    title, // 分享标题
    desc, // 分享描述
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl, // 分享图标
    type, // 分享类型,music、video 或 link，不填默认为link
    dataUrl, // 如果 type 是 music 或 video，则要提供数据链接，默认为空
    success, // 用户确认分享后执行的回调函数
    cancel // 用户取消分享后执行的回调函数
  }
  // 注意: 下个微信版本, 会取消[分享成功, 分享失败]的回调;
  wx.onMenuShareAppMessage(appMsgConfig) // 分享给朋友
}

// 微信分享 export default
export default async function wechatShare(shareData) {
  if (!isWechat) {
    // 服务器渲染时也是非微信浏览器, 非微信浏览器 不进行微信分享
    return
  }
  // 同时获取 微信签名, 和 微信 JS-SDK
  const [wechatConfig] = await Promise.all([
    getWechatConfig(),
    loadWechatJSSDK()
  ])
  wx.config(wechatConfig) // 配置微信参数, 为 jsapi 授权
  const shareConfig = { ...getDefaultData(), ...shareData }
  wx.ready(() => {
    menuShareTimeline(shareConfig) // 分享到朋友圈
    menuShareAppMessage(shareConfig) // 分享给朋友
  })
}
