<template>
  <div class="color-tool">
    <span class="label">颜色转化工具：</span>
    <input v-model="hex" @input="hex2rgb" type="text" class="k-input" placeholder="输入#000或者#00000或者000">
    <input v-model="rgb" @input="rgb2hex" type="text" class="k-input" placeholder="输入rgb(0,0,0)或者0,0,0">
    <div class="preview-box" :style="{background}"></div>
  </div>
</template>

<script>
import color from '../src/color'

export default {
  data() {
    return {
      hex: '',
      rgb: ''
    }
  },
  computed: {
    background() {
      const { hex } = this
      if (!hex) return ''
      if (hex.startsWith('#')) return hex
      return `#${hex}`
    }
  },
  methods: {
    hex2rgb() {
      this.rgb = `rgba(${color.hex2rgb(this.hex)}, 1)`
    },
    rgb2hex() {
      const arr = this.rgb.split(',')
      if (arr.length >= 3) {
        const params = arr.map(item => item.replace(/\D/g, ''))
        this.hex = color.rgb2hex(...params)
      }
    }
  }
}
</script>

<style scoped>
.label {
  font-size: 16px;
}
.color-tool {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0 20px;
}
.k-input {
  width: 280px;
  margin-right: 16px;
  font-size: 20px;
}
.preview-box {
  width: 30px;
  height: 30px;
  background: #363636;
}
</style>
