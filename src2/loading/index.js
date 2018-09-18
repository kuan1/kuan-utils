import './index.scss'

let timer

function show(text = '加载中', delay = 3000) {
  if (timer) clearTimeout(timer)
  let container = document.getElementById('loading-container')
  if (!container) {
    container = document.createElement('div')
    container.id = 'loading-container'
    container.innerHTML = `
      <div class="spinner-snake"></div>
      <span class="loading-tip">${text}</span>
    `
  }
  container.style.display = 'flex'
  document.body.appendChild(container)
  hide(delay)
}

function hide(delay = 300) {
  timer = setTimeout(() => {
    const container = document.getElementById('loading-container')
    if (container) {
      container.style.display = 'none'
    }
  }, delay)
}

export default {
  show,
  hide
}
