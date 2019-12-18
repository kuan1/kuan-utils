let speaker

// 停止语音
export function stop() {
  window.speechSynthesis.cancel()
}

// 播放语音
export function speak(text) {
  stop()
  if (!speaker) {
    speaker = new window.SpeechSynthesisUtterance()
  }
  speaker.text = text
  window.speechSynthesis.speak(speaker)
}

// 监听语音结束
export function onend(callback) {
  if (!speaker) {
    speaker = new window.SpeechSynthesisUtterance()
  }
  speaker.onend = callback
}

export default {
  speak,
  stop,
  onend
}
