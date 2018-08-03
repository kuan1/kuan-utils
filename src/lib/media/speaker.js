const speaker = new window.SpeechSynthesisUtterance()

// 停止语音
export function stop() {
  window.speechSynthesis.cancel()
}

// 播放语音
export function speak(text) {
  stop()
  speaker.text = text
  window.speechSynthesis.speak(speaker)
}

export default {
  speak,
  stop
}
