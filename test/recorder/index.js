/* eslint-disable */
import HZRecorder from './HZRecorder'

let recorder = '' // 实例化对象

// 开始录音 【callback返回声音参数：，开始返回：'start'，没有收到信息返回：'error'】
function start(callback) {
  // 有语音播放对象
  if (recorder) {
    recorder.stop()
  }
  HZRecorder.get(rec => {
    recorder = rec
    recorder.start()
    let timer
    let isStart
    let onEnd
    // 最长录音时间12秒
    const endTimer = setTimeout(() => {
      const isError = !isStart
      onEnd(isError)
    }, 3000)
    recorder.onProgress((voice) => {

      // 录音开始
      const onStart = () => {
        if (callback) {
          isStart = true
          callback('start')
        }
      }

      // 录音结束
      onEnd = (isError) => {
        if (endTimer) clearTimeout(endTimer)
        if (timer) clearTimeout(timer)
        isStart = false
        stop()
        if (callback) {
          callback(isError ? 'error' : 'end')
        }
      }

      callback(voice) // for debug
      if (!isStart && voice > 20) { // 判断录音开始
        onStart()
      }
      if (isStart) {
        if (voice < 20) { // 准备结束录音
          if (timer) return
          timer = setTimeout(() => {
            onEnd() // 录音结束
          }, 2000)
        } else { // 2秒内再次说话结束录音
          if (timer) {
            clearTimeout(timer)
            timer = ''
          }
        }
      }
    })
  })
}

// 停止录音
function stop() {
 if (!recorder) return
  console.log('真正体制')
  recorder.stop()
}

// 播放录音
function play(audio) {
  if (!recorder) return
  recorder.play(audio)
}

// 获取文件
function getBlob() {
  if (!recorder) return null
  return recorder.getBlob()
}

// 上传文件
function upload(callback) {
  if (!recorder) return
  recorder.upload(callback)
}

export default {
  start,
  stop,
  play,
  getBlob,
  upload
}
