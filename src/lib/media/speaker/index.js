const index = new window.SpeechSynthesisUtterance()

// 停止语音
export function stop() {
  window.speechSynthesis.cancel()
}

// 播放语音
export function speak(text) {
  stop()
  index.text = text
  window.speechSynthesis.speak(index)
}

export function onend(callback) {
  index.onend = callback
}

export default {
  speak,
  stop,
  onend
}
