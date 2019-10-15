(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("localData", [], factory);
	else if(typeof exports === 'object')
		exports["localData"] = factory();
	else
		root["localData"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
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

/***/ })

/******/ });
});