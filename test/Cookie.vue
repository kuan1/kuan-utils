<template>
  <div class="test-item">
    <h2>测试cookie</h2>
    <input type="text" v-model="text">
    <button @click="save">保存</button>
    <button @click="get">获取</button>
    <button @click="remove">删除</button>

  </div>
</template>

<script>
import cookieUtil from '../src/cookieUtil'

const key = 'aa'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    save() {
      cookieUtil.set(key, this.text || '没有内容')
    },
    get() {
      this.text = cookieUtil.get(key)
    },
    remove() {
      cookieUtil.remove(key)
    }
  }
}
</script>

<style>
</style>
