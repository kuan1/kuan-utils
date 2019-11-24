(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/defineProperty"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define("wxShare", ["@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/defineProperty", "axios"], factory);
	else if(typeof exports === 'object')
		exports["wxShare"] = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/defineProperty"), require("axios"));
	else
		root["wxShare"] = factory(root["@babel/runtime/regenerator"], root["@babel/runtime/helpers/asyncToGenerator"], root["@babel/runtime/helpers/defineProperty"], root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

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