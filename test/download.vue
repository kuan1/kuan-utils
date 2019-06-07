<template>
  <div>
    <h2>download</h2>
    <input type="text" v-model="text">
    <button @click="download">downloadStr</button>
    <ul>
      <li>download</li>
      <li>downloadBlob</li>
      <li>downloadStr</li>
      <li>downloadImage</li>
    </ul>
  </div>
</template>

<script>
import download from '../src/downloadUtil'

export default {
  data() {
    return {
      text: '测试文字'
    }
  },
  methods: {
    download() {
      console.log(this.text)
      download.downloadStr(this.text)
    }
  }
}
</script>

<style>
</style>
