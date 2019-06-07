<template>
  <div>
    <h2>微信分享</h2>
    <pre>{{options}}</pre>
  </div>
</template>

<script>
/*
 * @Author: luzhongk@126.com
 * @Description: 
 */
import { wxShare } from '../src'

async function share() {
  const options = {
    title: '就是为了测试一下', // 分享标题
    desc: '这里是自定义分享', // 分享描述
    link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'http://lib.luzhongkuan.cn/images/logo.png' // 分享图标
  }
  await wxShare(options)
  return options
}

export default {
  data() {
    return {
      options: {}
    }
  },
  async mounted() {
    this.options = await share()
  }
}
</script>

<style>
</style>
