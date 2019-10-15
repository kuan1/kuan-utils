(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("validate", [], factory);
	else if(typeof exports === 'object')
		exports["validate"] = factory();
	else
		root["validate"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
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

/***/ })

/******/ });
});