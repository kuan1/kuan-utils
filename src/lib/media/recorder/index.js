import HZRecorder from './HZRecorder'

export default {
  recorder: '', // 实例化对象
  start(onProgress = (e) => console.log(e)) { // 开始录音
    if (this.recorder) return
    HZRecorder.get((rec) => {
      // 获取录音对象
      this.recorder = rec
      this.recorder.start()

      // 开始录音后就可以实时监视声音录制过程
      if (onProgress) {
        this.recorder.onProgress(onProgress)
      }
    })
  },
  stop() { // 停止播放
    if (!this.recorder) return
    this.recorder.stop()
  },
  play(audio) { // 播放
    this.recorder.play(audio)
  },
  getBlob() {
    if (!this.recorder) return null
    return this.recorder.getBlob()
  },
  upload(callback) {
    if (!this.recorder) return null
    this.recorder.upload((data) => {
      callback(data)
    })
  }
}
