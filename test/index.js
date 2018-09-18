import './index.scss'
import xlsx from '../src2/xlsx'
import loading from '../src2/loading'
import {downloadStr} from '@/download'

const {container, fileInput} = init()

initEvent(container, fileInput)

// 创建页面
function init() {
  let container = document.getElementById('upload-container')
  let fileInput = document.getElementById('upload-input')
  if (fileInput) {
    return {
      container,
      fileInput
    }
  }
  container = document.createElement('div')
  container.innerHTML = '请将文件拖拽到此处'
  container.id = 'upload-container'
  fileInput = document.createElement('input')
  fileInput.id = 'upload-input'
  fileInput.type = 'file'
  fileInput.style.display = 'none'
  container.appendChild(fileInput)
  document.body.appendChild(container)
  return {
    container,
    fileInput
  }
}

async function upload(e) {
  const [file] = e.dataTransfer.files
  loading.show('正在获取获取excel内容', 1000000)
  if (!file) {
    alert('请上传文件')
  }
  console.log(file)
  try {
    const data = await xlsx.excelToJSON(file)
    console.log(data)
    downloadStr(JSON.stringify(data.slice(0, 1000)), 'mapData.JSON')
  } catch (e) {
    alert('获取excel内容失败:' + e.message)
  }
  loading.hide()
}

// 监听事件
function initEvent(container, input) {
  container.ondragover = (e) => {
    e.preventDefault()
  }
  container.ondrop = (e) => {
    e.preventDefault(e)
    upload(e)
  }
  container.onclick = () => {
    input.click()
  }
}
