(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("filters", [], factory);
	else if(typeof exports === 'object')
		exports["filters"] = factory();
	else
		root["filters"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
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

/***/ 4:
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

/***/ })

/******/ });
});