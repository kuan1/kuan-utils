const audioContext = new (window.AudioContext ||
  window.webkitAudioContext)()

function request(url) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    console.log(url)
    xhr.responseType = 'arraybuffer'
    xhr.onload = () => {
      audioContext.decodeAudioData(xhr.response, buffer => {
        if (!buffer) {
          alert('error decoding file data: ' + url)
        }
        resolve(buffer)
      })
    }
    xhr.send()
  })
}

export default async function playSound(url) {
  // 请求音频数据
  const buffer = await request(url)

  const source = audioContext.createBufferSource()
  source.buffer = buffer
  source.connect(audioContext.destination)
  source.start()
}