<template>
  <div>
    <h2>playSound</h2>
    <button @click="play">播放</button>
  </div>
</template>

<script>
import playSound from '../src/playSound'

export default {
  methods: {
    play() {
      playSound.play('http://www.luzhongkuan.cn/web/msg.mp3')
    }
  }
}
</script>

<style>
</style>
