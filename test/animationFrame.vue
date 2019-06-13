<template>
  <div>
    <h2>animationFrame</h2>
    <button @click="start">开始</button>
    <button @click="stop">结束</button>
  </div>
</template>

<script>
import { requestAnimationFrame, cancelAnimationFrame } from '../src/animationFrame'

export default {
  methods: {
    start() {
      this.timer = requestAnimationFrame(() => {
        console.log(Date.now())
        this.start()
      })
    },
    stop() {
      cancelAnimationFrame(this.timer)
    }
  }
}
</script>

<style>
</style>
