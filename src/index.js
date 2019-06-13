import validate from './validate'
import * as filters from './filters'

export { default as qs } from './qs' // qs
export { default as localData } from './localData' // localStorage util
export { default as deepClone } from './deepClone' // deep clone
export { default as copy } from './copy' // copy fn
export { default as throttle } from './throttle' // throttle fn
export { default as debounce } from './debounce' // debounce fn
export { default as color } from './color' // random color
export { default as loadImages } from './loadImages' // preload images
export { default as scrollTo, scrollToTop } from './scrollTo' // window scrollTop transition
export { default as wxShare } from './wxShare' // wx share
export { default as dayjs } from './day' // 格式化时间
export { default as fullScreen } from './fullScreen' // 格式化时间

export {
  validate,
  filters
}
