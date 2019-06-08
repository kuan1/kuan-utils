<template>
  <div>
    <h2>fullScreen</h2>
    <button @click="toggle">全屏</button>
  </div>
</template>

<script>
import fullScreen from '../src/fullScreen'
export default {
  methods: {
    toggle() {
      fullScreen()
    }
  }
}
</script>

<style>
</style>
