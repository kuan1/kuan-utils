let context

export default el => {
  if (!context) {
    const measureStyle = getComputedStyle(el, null)
    context = document.createElement('canvas').getContext('2d')
    context.font = measureStyle.getPropertyValue('font')
  }
  return context.measureText(text).width
}
