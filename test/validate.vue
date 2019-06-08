<template>
  <div>
    <h2>validate</h2>
    <div>
      <ul>
        <li v-for="item in data" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        'isIOS',
        'isWx',
        'isAliPay',
        'isPc',
        'isPhone',
        'isEmail',
        'isNum',
        'isIdCard',
        'isUrl',
        'isImage'
      ]
    }
  }
}
</script>

<style>
</style>
