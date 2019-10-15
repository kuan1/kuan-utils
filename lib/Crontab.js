(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"));
	else if(typeof define === 'function' && define.amd)
		define("Crontab", ["@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], factory);
	else if(typeof exports === 'object')
		exports["Crontab"] = factory(require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"));
	else
		root["Crontab"] = factory(root["@babel/runtime/helpers/toConsumableArray"], root["@babel/runtime/helpers/classCallCheck"], root["@babel/runtime/helpers/createClass"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Crontab; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




/**
 * 定时任务管理器
 * @params list {Array}
 */
var Crontab =
/*#__PURE__*/
function () {
  function Crontab() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$isDebug = _ref.isDebug,
        isDebug = _ref$isDebug === void 0 ? true : _ref$isDebug,
        _ref$autoStart = _ref.autoStart,
        autoStart = _ref$autoStart === void 0 ? true : _ref$autoStart;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Crontab);

    this.isDebug = isDebug; // 是否是debug模式

    this.list = []; // 任务列表

    this.add(list); // 添加任务
    // 自动开始执行任务

    if (autoStart) {
      this.start();
    }
  } // 开始执行


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Crontab, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.stop();
      this.exec();
      if (!this.list.length) return;
      this.timer = setTimeout(function () {
        _this.start();
      }, 1000 * 60);
    } // 停止

  }, {
    key: "stop",
    value: function stop() {
      if (this.timer) clearTimeout(this.timer);
    } // 执行任务

  }, {
    key: "exec",
    value: function exec() {
      var _this2 = this;

      var now = new Date();
      var nowTime = [now.getMinutes(), now.getHours(), now.getDate(), now.getMonth(), now.getDay()];
      this.list.forEach(function (item) {
        var _item$time = item.time,
            time = _item$time === void 0 ? [] : _item$time,
            _item$task = item.task,
            task = _item$task === void 0 ? function () {} : _item$task,
            _item$name = item.name,
            name = _item$name === void 0 ? '任务' : _item$name,
            _item$once = item.once,
            once = _item$once === void 0 ? false : _item$once;

        if (_this2.shouldExec(time, nowTime)) {
          var format = function format(n) {
            return n > 9 ? n : "0".concat(n);
          };

          _this2.log("\n".concat(format(nowTime[1]), ":").concat(format(nowTime[0])));

          _this2.log("".concat(name, " \u5F00\u59CB\u6267\u884C ..."));

          try {
            task();
          } catch (e) {
            _this2.log(e);
          }

          _this2.log("".concat(name, " \u6267\u884C\u5B8C\u6210"));

          if (once) {
            _this2.remove(name);
          }
        }
      });
    } // 设置任务列表

  }, {
    key: "add",
    value: function add() {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // 任务必须有时间、任务、任务名字
      var filetrList = list.filter(function (item) {
        return item.time && item.task && item.name;
      });

      if (filetrList.length < list.length) {
        this.log("\u5B9A\u65F6\u4EFB\u52A1\u88AB\u8FC7\u6EE4\u6389 ".concat(list.length - filetrList.length, " \u4E2A"));
      }

      this.list = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.list), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filetrList));
      this.log("\u5F53\u524D\u5B9A\u65F6".concat(this.list.length, "\u4E2A\u4EFB\u52A1..."));
      this.start();
    } // 删除任务

  }, {
    key: "remove",
    value: function remove(name) {
      var list = this.list;
      this.list = list.filter(function (item) {
        return item.name !== name;
      });

      if (list.length !== this.list) {
        this.log("".concat(name, " \u88AB\u5220\u9664"));
      }

      this.start();
    } // 执行日志

  }, {
    key: "log",
    value: function log(str) {
      if (!this.isDebug) return;
      console.log(str);
    } // 判断是否需要执行

  }, {
    key: "shouldExec",
    value: function shouldExec() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var nowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var isEqual = true;

      for (var i = 0; i < nowTime.length; i++) {
        if (time[i] === '*') continue;

        if (nowTime[i] !== time[i]) {
          isEqual = false;
          break;
        }
      }

      return isEqual;
    }
  }]);

  return Crontab;
}();
/**
 * time ['分', '时', '天', '月', '星期']
 * */
// const list = [
//   {
//     name: '测试任务1',
//     time: ['*', '*', '*', '*', '*'],
//     once: true,
//     task: () => {}
//   },
//   {
//     name: '测试任务2',
//     time: ['*', '*', '*', '*', '*'],
//     task: () => {}
//   }
// ]
// new Crontab(list)




/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ })

/******/ });
});