<template>
  <div>
    <h2 @click="to(200)" style="padding-bottom: 100vh;">scrollTo</h2>
    <button @click="to(30)">回返顶部</button>
  </div>
</template>

<script>
import scrollTo from '../src/scrollTo'
export default {
  methods: {
    to(y = 0) {
      scrollTo(y)
    }
  }
}
</script>

<style>
</style>
