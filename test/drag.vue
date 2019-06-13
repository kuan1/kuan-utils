<template>
  <div style="position: relative;height: 50vh;background: #eee">
    <button @click="destoryDrag">销毁</button>
    <button ref="btn">拖拽</button>
  </div>
</template>

<script>
import drag from '../src/drag'

export default {
  mounted() {
    this.dragable()
  },
  methods: {
    destoryDrag() {
      drag.destory()
    },
    dragable() {
      drag.init(this.$refs.btn)
    }
  }
}
</script>

<style>
</style>
