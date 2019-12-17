<template>
  <div style="position: relative;height: 50vh;background: #eee">
    <button @click="destoryDrag">销毁</button>
    <button ref="btn">拖拽</button>
    <p>{{data}}</p>
  </div>
</template>

<script>
import Drag from '../src/Drag'

export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.dragable()
  },
  methods: {
    destoryDrag() {
      this.drag.destory()
    },
    dragable() {
      this.drag = new Drag(this.$refs.btn, (data) => {
        this.data = data
      })
    }
  }
}
</script>

<style>
</style>
