import { color } from '../src'

const hex = color.rgb2hex(0, 255, 255)
const rgb = color.hexo2rgb('fff0ff')

console.log(rgb, hex)