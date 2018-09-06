// 获取全部utils
import { throttle, debounce, deepClone, randomColor } from './utils' // 工具类
import createApi from './createApi'
import localData from './localData'
import * as qs from './qs'
import * as cookie from './cookie'
import * as time from './time'
import * as math from './math'
import copy from './copy'
import download from './download'
import * as validate from './validate'

export {
  localData, // localStorage工具类 *
  cookie, // cookie工具类 *
  validate, // 验证
  qs, // url参数 *
  throttle, // 函数节流
  debounce, // 函数防抖
  deepClone, // 深拷贝
  randomColor, // 随机颜色
  createApi, // http
  time, // 时间处理
  math, // js精度计算
  copy, // copy
  download // 下载
}
