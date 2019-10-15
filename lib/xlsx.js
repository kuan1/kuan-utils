(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/helpers/toConsumableArray"), require("xlsx"));
	else if(typeof define === 'function' && define.amd)
		define("xlsx", ["@babel/runtime/helpers/toConsumableArray", "xlsx"], factory);
	else if(typeof exports === 'object')
		exports["xlsx"] = factory(require("@babel/runtime/helpers/toConsumableArray"), require("xlsx"));
	else
		root["xlsx"] = factory(root["@babel/runtime/helpers/toConsumableArray"], root["xlsx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__8__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONToExcel", function() { return JSONToExcel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excelToJSON", function() { return excelToJSON; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);


/**
 * json导出excel
 * @param name：文件名字，string
 * @param data： 内容： array
 * @param header： 标题： Object{key: 对应名字}
 * @param skipHeader: 是否隐藏头部
 */

var JSONToExcel = function JSONToExcel(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'excel' : _ref$name,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      _ref$skipHeader = _ref.skipHeader,
      skipHeader = _ref$skipHeader === void 0 ? true : _ref$skipHeader;

  var cloneData = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(data);

  cloneData.unshift(header);
  var ws = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.json_to_sheet(cloneData, {
    header: Object.keys(header),
    skipHeader: skipHeader
  });
  var wb = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.book_new();
  xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.book_append_sheet(wb, ws, 'SheetJS');
  /* generate file and send to client */

  xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.writeFile(wb, "".concat(name, ".xlsx"));
};
var excelToJSON = function excelToJSON(file) {
  if (!file) return;
  var suffix = file.name.split('.')[1];

  if (suffix !== 'xls' && suffix !== 'xlsx') {
    alert('导入的文件格式不正确!');
    return;
  }

  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var wb = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.read(e.target.result, {
        type: 'binary'
      });
      resolve(xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
    };

    reader.readAsBinaryString(file);
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  JSONToExcel: JSONToExcel,
  excelToJSON: excelToJSON
});

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ })

/******/ });
});