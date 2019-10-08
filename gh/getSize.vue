<template>
  <div class="get-size">
    <h2>获取隐藏预算尺寸</h2>
    <div ref="container" class="ref">
      <div class="inner"></div>
    </div>
    <div>{{size}}</div>
  </div>
</template>

<script>
import getSize from '../src/getSize'

export default {
  data() {
    return {
      size: ''
    }
  },
  mounted() {
    this.size = getSize(this.$refs.container)
  }
}
</script>

<style lang="scss">
.get-size .ref {
  display: none;
}
.get-size .inner {
  height: 210px;
  background: red;
}
</style>
