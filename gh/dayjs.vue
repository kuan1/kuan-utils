<template>
  <div>
    <h2>dayjs</h2>
    <pre>{{code}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: `
        dayjs.toDate(timeStr)
        dayjs.format(timeStr, 'YYYY-MM-DD')
      `
    }
  }
}
</script>

<style>
</style>
