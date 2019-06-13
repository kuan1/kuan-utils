export const requestAnimationFrame = window.requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  (callback => window.setTimeout(callback, 1000 / 60))

export const cancelAnimationFrame = window.cancelAnimationFrame = window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.msCancelAnimationFrame ||
  window.oCancelAnimationFrame ||
  (id => clearTimeout(id))

export default {
  requestAnimationFrame,
  cancelAnimationFrame
}