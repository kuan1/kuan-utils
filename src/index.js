// 测试使用页面

/* eslint-disable */
import {cookie, timeUtils, copy, media, download} from './lib'
import jsonToExcel from './lib/jsonToExcel'

const {recorder} = media

const $ = (name) => {
  return document.querySelector(name)
}

// 前端录音功能
window.stopRecord = async () => {
  recorder.stop()
}

window.startRecording = async () => {
  recorder.start()
}

window.obtainRecord = async () => {
  download.downloadBlob('out.wav', recorder.getBlob())
}

window.playRecord = async () => {
  recorder.play(document.querySelector('audio'))
}

// 设置cookie
$('#set-cookie').onclick = () => {
  const name = 'aa'
  const ipt = $('#cookie-input')
  const val = ipt.value
  cookie.setCookie(name, val, 1)
  ipt.value = ''
  alert('已保存')
}

$('#get-cookie').onclick = () => {
  const name = 'aa'
  $('#cookie-input').value = cookie.getCookie(name)
}

// 时间
function setTestTime() {
  // 多长时间之前
  const time = $('#ago-time').textContent
  $('#ago-text').innerHTML = timeUtils.timeAgo(new Date(time))
  // 还有多长时间
  const targetTime = $('#target-time').innerHTML
  $('#remain-time').innerHTML = timeUtils.remainTime(new Date(targetTime))
}

setTestTime()

// 剪切板
$('#clipboard-btn').onclick = () => {
  const {value} = $('#clipboard-input')
  if (copy(value)) {
    alert('复制成功')
  } else {
    alert('失败')
  }
}

// JSON to Excel
$('#excelBtn').onclick = () => {
  const data = {
    a: 1,
    b: 2,
    c: 3
  }
  jsonToExcel({
    header: {
      a: '这是a',
      b: '这是b',
      c: '这是c'
    },
    data: [data]
  })
}
