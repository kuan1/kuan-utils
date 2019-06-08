import { cancelAnimationFrame, requestAnimationFrame } from './animationFrame'

let timer

export function scrollToTranstion(top = 0) {
  if (timer) cancelAnimationFrame(timer)

  const c = document.documentElement.scrollTop || document.body.scrollTop

  const distance = c - top
  if (Math.abs(distance) < 1) return

  let y = c - distance / 10
  if (Math.abs(distance) / 10 < 1) {
    y = c - (distance < 0 ? -1 : 1)
  }

  window.scrollTo(0, y)
  timer = requestAnimationFrame(() => {
    scrollToTranstion(top)
  })
}

export function scrollToTop() {
  scrollToTranstion(0)
}

export default scrollToTranstion
