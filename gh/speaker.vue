<template>
  <div>
    <h2>语音朗读</h2>
    <input type="text" v-model="text">
    <button @click="speak">朗读</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script>
import speaker from '../src/speaker'

speaker.onend(() => {
  console.log('结束')
})

export default {
  data() {
    return {
      text: '测试文字'
    }
  },
  methods: {
    speak() {
      speaker.speak(this.text)
    },
    stop() {
      speaker.stop()
    }
  }
}
</script>

<style>
</style>
