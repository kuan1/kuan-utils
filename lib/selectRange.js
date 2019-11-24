(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("selectRange", [], factory);
	else if(typeof exports === 'object')
		exports["selectRange"] = factory();
	else
		root["selectRange"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCursortPosition", function() { return getCursortPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCursorPosition", function() { return setCursorPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectText", function() { return getSelectText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectText", function() { return setSelectText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfterText", function() { return insertAfterText; });
/**
 * https://github.com/ovenslove/vue-mdEditor/blob/master/static/js/rangeFn.js
 */
// 获取光标位置
function getCursortPosition(textDom) {
  var cursorPos = 0;

  if (document.selection) {
    // IE Support
    textDom.focus();
    var selectRange = document.selection.createRange();
    selectRange.moveStart('character', -textDom.value.length);
    cursorPos = selectRange.text.length;
  } else if (textDom.selectionStart || textDom.selectionStart == '0') {
    // Firefox support
    cursorPos = textDom.selectionStart;
  }

  return cursorPos;
} // 设置光标位置

function setCursorPosition(textDom, pos) {
  if (textDom.setSelectionRange) {
    // IE Support
    textDom.focus();
    textDom.setSelectionRange(pos, pos);
  } else if (textDom.createTextRange) {
    // Firefox support
    var range = textDom.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
} // 获取选中文字

function getSelectText() {
  var userSelection,
      text = '';

  if (window.getSelection) {
    // Firefox support
    userSelection = window.getSelection();
    text = userSelection.toString();
  } else if (document.selection) {
    // IE Support
    userSelection = document.selection.createRange();
    text = userSelection.text;
  }

  return text;
}
/**
* 选中特定范围的文本
* 参数：
*     textDom  [JavaScript DOM String] 当前对象
*     startPos  [Int]  起始位置
*     endPos  [Int]  终点位置
*/

function setSelectText(textDom, startPos, endPos) {
  startPos = parseInt(startPos);
  endPos = parseInt(endPos);
  var textLength = textDom.value.length;

  if (textLength) {
    if (!startPos) {
      startPos = 0;
    }

    if (!endPos) {
      endPos = textLength;
    }

    if (startPos > textLength) {
      startPos = textLength;
    }

    if (endPos > textLength) {
      endPos = textLength;
    }

    if (startPos < 0) {
      startPos = textLength + startPos;
    }

    if (endPos < 0) {
      endPos = textLength + endPos;
    }

    if (textDom.createTextRange) {
      // IE Support
      var range = textDom.createTextRange();
      range.moveStart("character", -textLength);
      range.moveEnd("character", -textLength);
      range.moveStart("character", startPos);
      range.moveEnd("character", endPos);
      range.select();
    } else {
      // Firefox support
      textDom.setSelectionRange(startPos, endPos);
      textDom.focus();
    }
  }
}
/**
* 在光标后插入文本
* 参数：
*     textDom  [JavaScript DOM String] 当前对象
*     value  [String]  要插入的文本
*/

function insertAfterText(textDom, value) {
  var selectRange;

  if (document.selection) {
    // IE Support
    textDom.focus();
    selectRange = document.selection.createRange();
    selectRange.text = value;
    textDom.focus();
  } else if (textDom.selectionStart || textDom.selectionStart == '0') {
    // Firefox support
    var startPos = textDom.selectionStart;
    var endPos = textDom.selectionEnd;
    var scrollTop = textDom.scrollTop;
    textDom.value = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length);
    textDom.focus();
    "";
    textDom.selectionStart = startPos + value.length;
    textDom.selectionEnd = startPos + value.length;
    textDom.scrollTop = scrollTop;
  } else {
    textDom.value += value;
    textDom.focus();
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getCursortPosition: getCursortPosition,
  setCursorPosition: setCursorPosition,
  getSelectText: getSelectText,
  setSelectText: setSelectText,
  insertAfterText: insertAfterText
});

/***/ })

/******/ });
});