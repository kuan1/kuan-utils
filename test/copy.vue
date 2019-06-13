<template>
  <div>
    <input type="text" v-model="text">
    <button @click="copy">复制</button>
  </div>
</template>

<script>
import { copy } from '../src';

export default {
  data() {
    return {
      text: '测试文字'
    }
  },
  methods: {
    copy() {
      if (copy(this.text)) {
        alert('成功')
      } else {
        alert('失败')
      }
    }
  }
}
</script>

<style>
</style>
