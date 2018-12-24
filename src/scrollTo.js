export function scrollToTranstion(top = 0) {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  // if (c > 0) {
  //   const y = c - c / 8
  //   window.scrollTo(0, y < 1 ? 0 : y)
  //   window.requestAnimationFrame(scrollToTop)
  // }

  const distance = c - top
  if (Math.abs(distance) < 1) return

  let y = c - distance / 8
  if (Math.abs(distance) / 8 < 1) {
    y = c - (distance < 0 ? -1 : 1)
  }

  window.scrollTo(0, y)
  window.requestAnimationFrame(() => {
    scrollToTranstion(top)
  })
}

export function scrollToTop() {
  scrollToTranstion(0)
}

export default scrollToTranstion
