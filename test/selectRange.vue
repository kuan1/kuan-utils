<template>
  <div>
    <h2>selectRange</h2>
    <pre>
      getCursortPosition,
      setCursorPosition,
      getSelectText,
      setSelectText,
      insertAfterText
    </pre>
    <textarea @input="change" ref="text" cols="30" rows="10"></textarea>
    <p></p>
    <button @click="insert">插入文字</button>
    <button @click="select">选中文字</button>
  </div>
</template>

<script>
import selectRange from '../src/selectRange'

export default {
  methods: {
    change() {
      console.log(selectRange.getCursortPosition(this.$refs.text))
    },
    insert() {
      const { text } = this.$refs
      const pos = text.value.length > 10 ? text.value.length - 10 : 0
      selectRange.setCursorPosition(text, pos)
      selectRange.insertAfterText(text, '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈')
    },
    select() {
      const { text } = this.$refs
      selectRange.setSelectText(text, 0, text.value.length)
      console.log(selectRange.getSelectText())
    }
  }
}
</script>

<style>
</style>
