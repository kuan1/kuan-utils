// 环境判断
import axios from 'axios'

let userAgent = '';
if (typeof navigator !== 'undefined') {
  userAgent = navigator.userAgent.toLowerCase();
}
export const isWechat = userAgent.indexOf('micromessenger') > -1;
export const isiOS = userAgent.indexOf('applewebkit') >= 0;

// 获取微信签名
const debug = false;
const jsApiList = ['onMenuShareAppMessage', 'onMenuShareTimeline', 'getLocation', 'chooseWXPay'];

export async function getWechatConfig() {
  // 去掉 hash
  const { origin, pathname, search } = window.location;
  const encodeURL = encodeURIComponent(origin + pathname + search); // 去除hash
  const { data } = await axios({
    method: 'get',
    // 不写 http, https 协议, 自动匹配通讯协议;
    url: '//wechat.halobear.com/token/getWechat',
    params: { url: encodeURL },
  });
  // const data = {
  //    appId: 'wxb43a4c82b5203c21',
  //    nonceStr: 'yhFuI31bnRZkW6gj',
  //    timestamp: 1523355137,
  //    url: 'http://wechat.halobear.com/token/getWechat',
  //    signature: '496285e039a3b743b4e702a8279f157341be223f',
  // };
  return Object.assign(data, {
    debug,
    jsApiList, // 必填，需要使用的JS接口列表
  });
  // 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  // 开启调试模式, 调用的所有 api 的返回值会在客户端 alert 出来
  //  {
  //    debug: true,
  //    appId: '', // 必填，公众号的唯一标识
  //    timestamp: '', // 必填，生成签名的时间戳
  //    nonceStr: '', // 必填，生成签名的随机串
  //    signature: '', // 必填，签名
  //    jsApiList: [], // 必填，需要使用的JS接口列表
  //  }
}

// 异步加载 微信 JS SDK 的 promise;
let PromiseSDK;
export function loadWechatJSSDK() {
  if (PromiseSDK) {
    return PromiseSDK;
  }
  // 短时间内,多次调用时; 避免重复加载
  PromiseSDK = new Promise((resolve, reject) => {
    const loaded = typeof wx !== 'undefined';
    if (loaded) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = '//res.wx.qq.com/open/js/jweixin-1.2.0.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return PromiseSDK;
}
