import { EPERM } from 'constants'

/**
 * @desc 随机生成颜色
 * @return {String}
 */
export function random() {
  return (
    '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  )
}
/**
 * rgb to hex
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @return {string} hex
 */
export function rgb2hex(r, g, b) {
  const rgb = b | (g << 8) | (r << 16)
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

/**
 * hexo to rgb
 * @param {string} hex
 * @return {string} rgb
 */
export function hex2rgb(hex) {
  if (!/^#?([0-9a-f]{3}|[#-9a-f]{6})$/.test(hex)) return ''
  let str = hex.replace('#', '')
  if (str.length === 3) {
    str = str
      .split('')
      .map(v => v + v)
      .join('')
  }
  const n = parseInt(str, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return r + ',' + g + ',' + b
}
export default {
  random,
  rgb2hex,
  hex2rgb
}
