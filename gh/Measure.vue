<template>
  <div class="test-item">
    <h2>
      <span ref="title">{{title}}</span>
    </h2>
    <div>标题长度{{length}}</div>
    <input @input="setLength" type="text" v-model="title">
  </div>
</template>

<script>
import measure from '../src/measure'

export default {
  data() {
    return {
      title: 'measure',
      length: 0
    }
  },
  mounted() {
    this.setLength()
  },
  methods: {
    setLength() {
      console.log(measure(this.$refs.title))
      this.length = measure(this.$refs.title)
    }
  }
}
</script>

<style>
</style>
