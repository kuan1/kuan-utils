/**
 * 预加载图片
 * @params {array} images 图片地址
 */
export default function loadImages(images = []) {
  return new Promise(resolve => {
    const loaded = []

    function push() {
      loaded.push(this.src)
      if (loaded.length == images.length) {
        resolve(loaded)
      }
    }
    for (let i = 0; i < images.length; i++) {
      const img = new Image()
      img.src = images[i]
      img.onload = push
      img.onerror = push
    }
  })
}
