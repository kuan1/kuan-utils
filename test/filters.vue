<template>
  <div>
    <h2>filters 格式化</h2>
    <ul>
      <li>{{17638190467 | hidePhone}}</li>
      <li>{{100000 | formatCurrency}}</li>
      <li>{{'2010-10-10' | timeAgo}}</li>
      <li>{{'2100-10-10' | remainTime}}</li>
      <li>{{html | htmlEncode}}</li>
    </ul>
  </div>
</template>

<script>
import { filters } from '../src';

export default {
  data() {
    return {
      html: `<h2>filters 格式化</h2>`
    }
  },
  filters: {
    ...filters
  },
  mounted() {
  }
}
</script>

<style>
</style>
