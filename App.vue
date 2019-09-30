
<template>
  <div class="test-container">
    <h1 class="pointer">
      <a href="https://github.com/kuan1/kuan-utils">kuan-utils</a>
    </h1>
    <p>
      <span class="pointer" @click="is = ''">首页</span>
    </p>
    <ul v-if="!is">
      <li v-for="(item, key) in components" @click="is = key" class="pointer" :key="key">{{key}}</li>
    </ul>
    <component :is="is"/>
  </div>
</template>

<script>
import components from './gh'

// https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js

export default {
  components,
  data() {
    return {
      components,
      is: ''
    }
  }
}
</script>

<style>
.test-container {
  max-width: 1000px;
  margin: 20px auto;
}
.pointer {
  cursor: pointer;
}
</style>
