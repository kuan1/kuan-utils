export function download(href, filename = `${Date.now()}.txt`) {
  const a = document.createElement('a')
  a.download = filename
  a.style.display = 'none'
  a.href = href
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function downloadBlob(filename, blob) {
  const a = document.createElement('a')
  a.download = filename
  a.innerHTML = '下载'
  document.body.appendChild(a)
  a.href = URL.createObjectURL(blob);
  a.click()
  document.body.removeChild(a)
}

export default {
  download,
  downloadBlob
}
