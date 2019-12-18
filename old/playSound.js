export default {
  _audio: null,
  get audio() {
    if (!this._audio) {
      this._audio = document.createElement('audio')
      this._audio.style.display = 'none'
      document.body.appendChild(this._audio)
    }
    return this._audio
  },
  play(src) {
    if (!src) return
    const audio = this.audio
    audio.src = src
    audio.play()
  },
  pause() {
    this.audio.pause()
  }
}


// // https://zhuanlan.zhihu.com/p/28745323

// const audioContext = new (window.AudioContext || window.webkitAudioContext)()

// function request(url) {
//   return new Promise(resolve => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.responseType = 'arraybuffer'
//     xhr.onload = () => {
//       audioContext.decodeAudioData(xhr.response, buffer => {
//         if (!buffer) {
//           alert('error decoding file data: ' + url)
//         }
//         resolve(buffer)
//       })
//     }
//     xhr.send()
//   })
// }

// export default async function playSound(url) {
//   // 请求音频数据
//   const buffer = await request(url)

//   const source = audioContext.createBufferSource()
//   source.buffer = buffer
//   source.connect(audioContext.destination)
//   source.start()
// }
