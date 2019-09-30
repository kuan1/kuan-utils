<template>
  <div>
    <h2>loadImages</h2>
    <p>{{isLoad ? '预加载图片' : '正在加载图片...'}}</p>
    <ul v-if="isLoad">
      <li>
        <img v-for="item in urls" :key="item" :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import loadImages from '../src/loadImages'
export default {
  data() {
    return {
      isLoad: false,
      urls: [
        'http://pic.kuan1.top/9aabe2bf2f2b5b0a7992f8cdfb94e27e.jpg',
        "http://pic.kuan1.top/010f4865e592f1fe1d4c4df12ceb249b.jpg",
        "http://pic.kuan1.top/c2a3e02b9beef37e9eb4d31d81befe1c.jpg",
        "http://pic.kuan1.top/75ef537e05b106aefc50a51767f874ad.jpg",
        "http://pic.kuan1.top/2d9a62a76e8011b914b38ef6b56e3094.jpg"
      ]
    }
  },
  async mounted() {
    this.isLoad = await loadImages(this.urls)
  }
}
</script>

<style>
</style>
