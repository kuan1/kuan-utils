
<template>
  <div class="test-container">
    <h1>kuan-utils</h1>
    <measure />
  </div>
</template>

<script>

// https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js
import Measure from './test/Measure'

export default {
  components: {
    Measure
  }
}
</script>

<style>
.test-container {
  max-width: 1000px;
  margin: 20px auto;
}
</style>
