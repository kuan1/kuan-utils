import { loadWechatJSSDK } from './tools';

const onBridgeReady = new Promise(resolve => {
  const isReady = typeof WeixinJSBridge !== 'undefined';
  if (isReady) {
    resolve();
    return;
  }
  if (document.addEventListener) {
    document.addEventListener('WeixinJSBridgeReady', resolve, false);
  } else if (document.attachEvent) {
    document.attachEvent('WeixinJSBridgeReady', resolve);
    document.attachEvent('onWeixinJSBridgeReady', resolve);
  }
});

export function wechatPay(config) {
  console.info('wechatPay', config);
  return new Promise(async (resolve, reject) => {
    await onBridgeReady;
    // eslint-disable-next-line
    WeixinJSBridge.invoke('getBrandWCPayRequest', config, res => {
      const { err_msg = '' } = res;
      const isSuccess = err_msg === 'get_brand_wcpay_request:ok';
      const isCancel = err_msg === 'get_brand_wcpay_request:cancel';
      const isFail = err_msg === 'get_brand_wcpay_request:fail';
      if (isSuccess) {
        resolve('success');
        return;
      } else if (isCancel) {
        resolve('cancel');
        return;
      } else if (isFail) {
        resolve('fail');
        return;
      }
      reject();
    });
  });
}

export function chooseWXPay(config) {
  return new Promise(async resolve => {
    await loadWechatJSSDK();
    await onBridgeReady;
    const option = Object.assign(
      {
        timestamp: config.timeStamp,
        success(res) {
          console.info('success', res);
          resolve('success');
        },
        fail(res) {
          console.info('fail', res);
          resolve('fail');
        },
        complete(res) {
          console.info('complete', res);
        },
        cancel(res) {
          console.info('cancel', res);
          resolve('cancel');
        },
      },
      config
    );
    console.info('chooseWXPay', option);
    wx.chooseWXPay(option);
  });
}
