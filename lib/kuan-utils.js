(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/defineProperty"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define("kuan-utils", ["@babel/runtime/regenerator", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "axios"], factory);
	else if(typeof exports === 'object')
		exports["kuan-utils"] = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/defineProperty"), require("axios"));
	else
		root["kuan-utils"] = factory(root["@babel/runtime/regenerator"], root["@babel/runtime/helpers/toConsumableArray"], root["@babel/runtime/helpers/asyncToGenerator"], root["@babel/runtime/helpers/typeof"], root["@babel/runtime/helpers/defineProperty"], root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
var requestAnimationFrame = window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
  return window.setTimeout(callback, 1000 / 60);
};
var cancelAnimationFrame = window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
  return clearTimeout(id);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  requestAnimationFrame: requestAnimationFrame,
  cancelAnimationFrame: cancelAnimationFrame
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
function format() {
  var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';
  var date = d instanceof Date ? d : toDate(d);
  var o = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    //月份
    'D+': date.getDate(),
    //日
    'H+': date.getHours(),
    //小时
    'm+': date.getMinutes(),
    //分
    's+': date.getSeconds(),
    //秒
    'q+': Math.floor((date.getMonth() + 3) / 3),
    //季度
    'S+': date.getMilliseconds() //毫秒

  };

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      if (k == 'Y+') {
        fmt = fmt.replace(RegExp.$1, ('' + o[k]).substr(4 - RegExp.$1.length));
      } else if (k == 'S+') {
        var lens = RegExp.$1.length;
        lens = lens == 1 ? 3 : lens;
        fmt = fmt.replace(RegExp.$1, ('00' + o[k]).substr(('' + o[k]).length - 1, lens));
      } else {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
  }

  return fmt;
}
function toDate() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (s instanceof Date) return s;
  return new Date(s.replace(/-/g, '/').replace(/(\.\d+)?/g, '').replace('T', ' '));
}
/* harmony default export */ __webpack_exports__["default"] = ({
  format: format,
  toDate: toDate
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWx", function() { return isWx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAliPay", function() { return isAliPay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPc", function() { return isPc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhone", function() { return isPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNum", function() { return isNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdCard", function() { return isIdCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImage", function() { return isImage; });
/**
 * @desc   判断浏览器类型
 * @return {Boolean}
 */
var userAgent = '';

if (typeof navigator !== 'undefined') {
  userAgent = navigator.userAgent.toLowerCase();
} // ios浏览器


var isIOS = /iPhone|iPad|iPod|iOS/i.test(userAgent); // 微信浏览器

var isWx = /micromessenger/i.test(userAgent); // 支付宝

var isAliPay = /alipayclient/.test(userAgent);
/**
 * @desc   判断是否pc页面
 * @return {Boolean}
 */

var isPc = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent);
/**
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */

function isPhone(str) {
  return /^(0|86|17951)?1[3456789]\d{9}$/.test(str);
}
/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */

function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
/**
 * @desc   判断是否是数字
 * @param  {String|Number} str
 * @return {Boolean}
 */

function isNum(str) {
  return /^[0-9]+([.]{1}[0-9]+){0,1}$/.test(str);
}
/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */

function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}
/**
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */

function isUrl(str) {
  // eslint-disable-next-line
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}
/**
 * @param url 图片地址
 * @returns {boolean}
 */

function isImage(url) {
  if (!url) return false;
  var index = url.lastIndexOf('.');
  if (index === -1) return false;
  var suffix = url.substr(index + 1);
  var str = suffix.substr(0, suffix.indexOf('?'));
  return /png|gif|svg|jpg|icon|jpeg]/i.test(str);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  isIOS: isIOS,
  isWx: isWx,
  isAliPay: isAliPay,
  isPc: isPc,
  isPhone: isPhone,
  isEmail: isEmail,
  isNum: isNum,
  isIdCard: isIdCard,
  isUrl: isUrl,
  isImage: isImage
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTranstion", function() { return scrollToTranstion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony import */ var _animationFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var timer;
function scrollToTranstion() {
  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (timer) Object(_animationFrame__WEBPACK_IMPORTED_MODULE_0__["cancelAnimationFrame"])(timer);
  var c = document.documentElement.scrollTop || document.body.scrollTop;
  var distance = c - top; // 到达目标值或者滚动达不到目标停止

  if (Math.abs(distance) <= 1) return;
  var y = c - distance / 10;

  if (Math.abs(distance) / 10 < 1) {
    y = c - (distance < 0 ? -1 : 1);
  }

  window.scrollTo(0, y);
  if (y <= 0 && top <= 0) return;
  timer = Object(_animationFrame__WEBPACK_IMPORTED_MODULE_0__["requestAnimationFrame"])(function () {
    scrollToTranstion(top);
  });
}
function scrollToTop() {
  scrollToTranstion(0);
}
/* harmony default export */ __webpack_exports__["default"] = (scrollToTranstion);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return rgb2hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2rgb", function() { return hex2rgb; });
/**
 * @desc 随机生成颜色
 * @return {String}
 */
function random() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}
/**
 * rgb to hex
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @return {string} hex
 */

function rgb2hex(r, g, b) {
  var rgb = b | g << 8 | r << 16;
  return '#' + (0x1000000 + rgb).toString(16).slice(1);
}
/**
 * hexo to rgb
 * @param {string} hex
 * @return {string} rgb
 */

function hex2rgb(hex) {
  if (!/^#?([0-9a-fA-F]{3}|[#-9a-fA-F]{6})$/.test(hex)) return '';
  var str = hex.replace('#', '');

  if (str.length === 3) {
    str = str.split('').map(function (v) {
      return v + v;
    }).join('');
  }

  var n = parseInt(str, 16);
  var r = n >> 16 & 255;
  var g = n >> 8 & 255;
  var b = n & 255;
  return r + ',' + g + ',' + b;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  random: random,
  rgb2hex: rgb2hex,
  hex2rgb: hex2rgb
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (input) {
  var el = document.createElement('textarea');
  el.value = input;
  el.setAttribute('readonly', '');
  el.style.contain = 'strict';
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  el.style.fontSize = '12pt';
  var selection = document.getSelection();
  var originalRange = false;

  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }

  document.body.appendChild(el);
  el.select();
  el.selectionStart = 0;
  el.selectionEnd = input.length;
  var success = false;

  try {
    success = document.execCommand('copy');
    /* eslint-disable */
  } catch (err) {}

  document.body.removeChild(el);

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  return success;
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// 防抖函数
var timer;
function debounce(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数');
  }

  timer && clearTimeout(timer);
  timer = setTimeout(function () {
    fn();
  }, time);
}
/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @desc 深拷贝，支持常见类型
 * @param {any} values
 */
function deepClone(values) {
  var copy;
  if (values === null || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(values) !== 'object') return values;

  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  if (values instanceof Array) {
    copy = [];

    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }

    return copy;
  } // Handle Object


  if (values instanceof Object) {
    copy = {};

    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }

    return copy;
  }

  throw new Error("deep clone isn't supported.");
}
/* harmony default export */ __webpack_exports__["default"] = (deepClone);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePhone", function() { return hidePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byteSize", function() { return byteSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlEncode", function() { return htmlEncode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeAgo", function() { return timeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remainTime", function() { return remainTime; });
/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/**
 * @desc 隐藏手机号
 * @param {*} str
 * @returns {number}
 */

function hidePhone() {
  var phone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phone.toString().replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
/**
 * @desc 获取字符串字节
 * @param {*} str
 * @returns {number}
 */

function byteSize(str) {
  return new Blob([str]).size;
}
/**
 * @desc html转化防止xs攻击
 * @params str {string}
 * @returns {string}
 */

function htmlEncode(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2f;');
}
/**
 * @desc 格式化货币
 * @param num {string || number}
 * @returns {string}
 */

function formatCurrency(num) {
  return (+num || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */

function timeAgo(startTime) {
  var currentTime = new Date().getTime();
  var time = currentTime - _day__WEBPACK_IMPORTED_MODULE_0__["default"].toDate(startTime);
  var day = Math.floor(time / (1000 * 60 * 60 * 24));
  var hour = Math.floor(time / (1000 * 60 * 60));
  var min = Math.floor(time / (1000 * 60));
  var month = Math.floor(day / 30);
  var year = Math.floor(month / 12);
  if (year) return year + '年前';
  if (month) return month + '个月前';
  if (day) return day + '天前';
  if (hour) return hour + '小时前';
  if (min) return min + '分钟前';else return '刚刚';
}
/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */

function remainTime(endTime) {
  var startDate = new Date(); // 开始时间

  var endDate = new Date(endTime); // 结束时间

  var t = endDate.getTime() - startDate.getTime(); // 时间差

  var d = 0;
  var h = 0;
  var m = 0;
  var s = 0;

  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }

  return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒';
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullScreen", function() { return fullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullScreen", function() { return isFullScreen; });
// 切换全屏方法
function fullScreen() {
  var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !isFullScreen();
  var dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  var open_list = ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen'];
  var cancel_list = ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen'];
  var fn = void 0;

  if (isOpen) {
    fn = open_list.find(function (n) {
      return Boolean(dom[n]);
    });
    fn && dom[fn]();
  } else {
    fn = cancel_list.find(function (n) {
      return Boolean(document[n]);
    });
    fn && document[fn]();
  }
} // 判断是否是全屏

function isFullScreen() {
  return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
}
/* harmony default export */ __webpack_exports__["default"] = (fullScreen);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/**
 *
 * @param name {string}
 * @param search {string}  [a=1&b=2]
 * @returns {string || null}
 */
function get(name, search) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = (search || window.location.search.substr(1)).match(reg);
  if (r != null) return decodeURIComponent(r[2]); // unescape （w3c推荐使用decodeURI() 和 decodeURIComponent()）

  return null;
}
/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */

function parse(url) {
  url = url == null ? window.location.href : url;
  var search = url.includes('?') ? url.substr(url.lastIndexOf('?') + 1) : '';

  if (!search) {
    return {};
  }

  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}
/**
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}
 */

function stringify(obj) {
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        var arrStr = "".concat(key, "[").concat(i, "]=").concat(encodeURIComponent(value[i]));
        pairs.push(arrStr);
      }

      continue;
    }

    pairs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key])));
  }

  return pairs.join('&');
}
/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  parse: parse,
  stringify: stringify
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalData", function() { return setLocalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalData", function() { return getLocalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLocalData", function() { return clearLocalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCache", function() { return createCache; });
/**
 * 设置localStorage过期时间
 * @param key{string}
 * @param value{string}
 * @param maxAge{number} 分钟 (默认7天)
 */
function setLocalData(key, value) {
  var maxAge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60 * 24 * 7;
  var data = {
    value: value,
    maxAge: maxAge * 60000,
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(data));
}
function getLocalData(key) {
  try {
    var dataStr = localStorage.getItem(key);
    if (!dataStr) return null;

    var _JSON$parse = JSON.parse(dataStr),
        value = _JSON$parse.value,
        maxAge = _JSON$parse.maxAge,
        timestamp = _JSON$parse.timestamp;

    var data = maxAge + timestamp > Date.now() ? value : null;
    if (!data) localStorage.removeItem(key); // 超时删除缓存

    return data;
  } catch (e) {
    console.error(e);
    localStorage.removeItem(key);
    return null;
  }
}
function clearLocalData(key) {
  localStorage.remove(key);
} // 创建localStorage缓存,有效时间默认1天，用于用户信息

function createCache(key) {
  var maxAge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60 * 24;
  return {
    get: function get() {
      return getLocalData(key);
    },
    set: function set(userInfo) {
      console.log("localData\u5B58\u5165".concat(key, "\u6709\u6548\u65F6\u95F4\uFF1A").concat(maxAge, "\u5206\u949F"));
      setLocalData(key, userInfo, maxAge);
    },
    clear: function clear() {
      localStorage.removeItem(key);
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  get: getLocalData,
  set: setLocalData,
  clear: clearLocalData,
  create: createCache
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
var timer;
/**
 * @description: 函数节流
 * @param {fn} Function
 * @param {time} Number 截流时间
 */

function throttle(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数');
  }

  if (!timer) {
    timer = setTimeout(function () {
      fn();
      timer = null;
    }, time);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (throttle);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadImages; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 预加载图片
 * @params {array} images 图片地址
 */
function loadImages() {
  var srcArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolve) {
    var images = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set(srcArr));

    var loaded = [];

    function push() {
      loaded.push(this.src);

      if (loaded.length === images.length) {
        resolve(loaded);
      }
    }

    for (var i = 0; i < images.length; i++) {
      var img = new Image();
      img.src = images[i];
      img.onload = push;
      img.onerror = push;
    }
  });
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // 加载sdk

var PromiseSDK;

function loadWechatJSSDK() {
  if (PromiseSDK) {
    return PromiseSDK;
  } // 短时间内,多次调用时; 避免重复加载


  PromiseSDK = new Promise(function (resolve, reject) {
    var loaded = typeof wx !== 'undefined';

    if (loaded) {
      resolve();
      return;
    }

    var script = document.createElement('script');
    script.src = '//res.wx.qq.com/open/js/jweixin-1.4.0.js ';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return PromiseSDK;
} // 获取分享配置


function getConfig() {
  return _getConfig.apply(this, arguments);
} // 分享内容，分享配置


function _getConfig() {
  _getConfig = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var href, _ref2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            href = window.location.href.split('#')[0];
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              url: "//www.luzhongkuan.cn/api2/wx/shareConfig?url=".concat(encodeURIComponent(href))
            });

          case 3:
            _ref2 = _context2.sent;
            data = _ref2.data;

            if (!data.success) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", data.data);

          case 7:
            return _context2.abrupt("return", Promise(Error('获取分享配置失败')));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getConfig.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userShareData, userConfig) {
    var defaultShare, config;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_validate__WEBPACK_IMPORTED_MODULE_3__["isWx"]) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return loadWechatJSSDK();

          case 4:
            defaultShare = {
              title: document.title,
              // 分享标题
              desc: '没有描述...',
              // 分享描述
              link: window.location.href,
              // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://lib.luzhongkuan.cn/images/logo.png' // 分享图标

            }; // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            // appId: '', // 必填，公众号的唯一标识
            // timestamp: , // 必填，生成签名的时间戳
            // nonceStr: '', // 必填，生成签名的随机串
            // signature: '',// 必填，签名
            // jsApiList: [] // 必填，需要使用的JS接口列表

            _context.t0 = userConfig;

            if (_context.t0) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return getConfig();

          case 9:
            _context.t0 = _context.sent;

          case 10:
            config = _context.t0;
            wx.config(config);
            wx.ready(function () {
              var shareData = _objectSpread({}, defaultShare, {}, userShareData); // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容


              wx.updateAppMessageShareData(shareData);
              var timelineData = {
                title: shareData.desc || shareData.title,
                // 分享标题
                link: shareData.link,
                // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: shareData.imgUrl // 分享图标

              }; // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）

              wx.updateTimelineShareData(timelineData);
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return _filters__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "qs", function() { return _qs__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _localData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localData", function() { return _localData__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _deepClone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return _deepClone__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _copy__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadImages", function() { return _loadImages__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _scrollTo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return _scrollTo__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return _scrollTo__WEBPACK_IMPORTED_MODULE_10__["scrollToTop"]; });

/* harmony import */ var _wxShare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wxShare", function() { return _wxShare__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayjs", function() { return _day__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _fullScreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullScreen", function() { return _fullScreen__WEBPACK_IMPORTED_MODULE_13__["default"]; });



 // qs

 // localStorage util

 // deep clone

 // copy fn

 // throttle fn

 // debounce fn

 // random color

 // preload images

 // window scrollTop transition

 // wx share

 // 格式化时间

 // 格式化时间



/***/ })
/******/ ]);
});