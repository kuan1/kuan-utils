let speaker: any;

// 停止语音
export function stop() {
  window.speechSynthesis.cancel();
}

// 播放语音
export function speak(text: string) {
  stop();
  if (!speaker) {
    speaker = new window.SpeechSynthesisUtterance();
  }
  speaker.text = text;
  window.speechSynthesis.speak(speaker);
}

// 监听语音结束
export function onend(callback: Function = () => {}) {
  if (!speaker) {
    speaker = new window.SpeechSynthesisUtterance();
  }
  speaker && (speaker.onend = callback);
}

export default {
  speak,
  stop,
  onend
};
