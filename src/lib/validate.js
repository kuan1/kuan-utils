/**
 * @desc   判断浏览器类型
 * @return {Boolean}
 */
let userAgent = '';
if (typeof navigator !== 'undefined') {
  userAgent = navigator.userAgent.toLowerCase();
}

// ios浏览器
export const isiOS = userAgent.indexOf('applewebkit') >= 0;

// 微信浏览器
export const isWx = userAgent.indexOf('micromessenger') > -1;

// 支付宝
export const isAliPay = userAgent.indexOf('alipayclient') >= 0;

/**
 * @desc   判断是否pc页面
 * @return {Boolean}
 */
export const isPc = !(/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent));

/**
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isPhone(str) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
}

/**
 * @desc   判断是否是数字
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isNum(str) {
  return /^[0-9]+([.]{1}[0-9]+){0,1}$/.test(str);
}

/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
export function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}

/**
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}
