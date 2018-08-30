// 获取全部utils
// import jsonToExcel from './lib/jsonToExcel' // 导出excel
import createApi from './lib/createApi'
import {throttle, debounce, deepClone, randomColor} from './lib/tools' // 工具类
import * as qs from './lib/qs' // url参数
import * as timeUtils from './lib/timeUtils' // 时间工具类
import * as cookie from './lib/cookie' // cookie工具类
import * as math from './lib/math' // js精度计算
import localData from './lib/localData' // localStorage工具类
import copy from './lib/copy' // 复制
import download from './lib/download' // 下载
import media from './lib/media'

export {
  // jsonToExcel,
  createApi,
  throttle, // 函数节流
  debounce, // 函数防抖
  deepClone, // 深拷贝
  randomColor, // 随机颜色
  qs, //
  timeUtils,
  cookie,
  math,
  localData,
  copy,
  download,
  media
}
