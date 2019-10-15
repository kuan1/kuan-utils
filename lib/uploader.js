(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/slicedToArray"), require("spark-md5"));
	else if(typeof define === 'function' && define.amd)
		define("uploader", ["@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/slicedToArray", "spark-md5"], factory);
	else if(typeof exports === 'object')
		exports["uploader"] = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/slicedToArray"), require("spark-md5"));
	else
		root["uploader"] = factory(root["@babel/runtime/regenerator"], root["@babel/runtime/helpers/asyncToGenerator"], root["@babel/runtime/helpers/slicedToArray"], root["spark-md5"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__25__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__25__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileMD5", function() { return getFileMD5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFile", function() { return selectFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiles", function() { return getFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFile", function() { return getFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_3__);




/*
 * @Description: 图片上传
 * @Author: your name
 */

/**
 * @description: 获取文件md5值
 * @param {fileObject} file 文件对象
 * @param {Function} processFn 读取md5进度
 * @return:
 */

function getFileMD5(file, processFn) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader(); //分块读取文件对象
    // file的slice方法，注意它的兼容性，在不同浏览器的写法不同

    var blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
    var chunkSize = 10 * 1024 * 1024; //分块大小，20M

    var chunks = Math.ceil(file.size / chunkSize); //总块数

    var currentChunk = 0; //当前块数

    var spark = new spark_md5__WEBPACK_IMPORTED_MODULE_3___default.a(); //获取MD5对象

    fileReader.onload = function (e) {
      //数据加载完毕事件
      var binaryStr = '';
      var bytes = new Uint8Array(e.target.result);
      var length = bytes.byteLength;

      for (var i = 0; i < length; i++) {
        binaryStr += String.fromCharCode(bytes[i]); //二进制转换字符串
      }

      spark.appendBinary(binaryStr);
      currentChunk++;

      if (processFn) {
        processFn("".concat(Math.ceil(currentChunk / chunks * 100), "%"));
      } else {
        console.log('读取文件', "".concat(Math.ceil(currentChunk / chunks * 100), "%"));
      }

      if (currentChunk < chunks) {
        loadNext(); //读取下一块数据
      } else {
        var fileMd5 = spark.end(); //得到文件MD5值

        resolve(fileMd5);
      }
    };

    fileReader.onerror = function (e) {
      reject(e);
    };

    function loadNext() {
      var start = currentChunk * chunkSize;
      var end = start + chunkSize >= file.size ? file.size : start + chunkSize; //根据开始和结束位置，切割文件

      var b = blobSlice.call(file, start, end); //readAsBinaryString ie浏览器不兼容此方法
      //fileReader.readAsBinaryString(blobSlice.call(file, start, end));

      fileReader.readAsArrayBuffer(b); //ie，chrome，firefox等主流浏览器兼容此方法
    }

    loadNext();
  });
}
/**
 * @description: js触发获取文件
 * @param {String} accept 文件类型
 * @param {Boolean} multiple 是否多选
 * @return:
 */

function selectFile(_ref) {
  var _ref$accept = _ref.accept,
      accept = _ref$accept === void 0 ? 'image/*' : _ref$accept,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple;
  var id = 'kuan-upload-input';

  var _input = document.getElementById(id);

  if (!_input) {
    _input = document.createElement('input');
    _input.id = id;
    _input.type = 'file';
    _input.style.display = 'none';
    document.body.appendChild(_input);
  }

  _input.value = '';
  _input.accept = accept;
  _input.multiple = multiple;

  _input.click();

  return new Promise(function (resolve) {
    _input.onchange = function () {
      var _input2 = _input,
          _input2$files = _input2.files,
          files = _input2$files === void 0 ? [] : _input2$files;

      if (files.length) {
        resolve(files);
      }
    };
  });
}
/**
 * @description: 获取文件
 * @param {String} accept 获取文件类型
 * @param {Boolean} multiple 是否上传多张图片
 * @param {Boolean} needMD5 是否获取文件md5
 * @param {Function || null} readProcess 获取md5值进度
 * @return: Promise={file, md5}
 */

function getFiles() {
  return _getFiles.apply(this, arguments);
}
/**
 * @description: 单个获取文件
 */

function _getFiles() {
  _getFiles = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var _ref2,
        multiple,
        _ref2$accept,
        accept,
        _ref2$needMD,
        needMD5,
        readProcess,
        files,
        res,
        i,
        file,
        md5,
        suffix,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, multiple = _ref2.multiple, _ref2$accept = _ref2.accept, accept = _ref2$accept === void 0 ? 'image/*' : _ref2$accept, _ref2$needMD = _ref2.needMD5, needMD5 = _ref2$needMD === void 0 ? true : _ref2$needMD, readProcess = _ref2.readProcess;
            _context.next = 3;
            return selectFile({
              multiple: multiple,
              accept: accept
            });

          case 3:
            files = _context.sent;
            res = [];
            i = 0;

          case 6:
            if (!(i < files.length)) {
              _context.next = 21;
              break;
            }

            file = files[i];
            md5 = void 0;

            if (!needMD5) {
              _context.next = 15;
              break;
            }

            _context.next = 12;
            return getFileMD5(file, readProcess);

          case 12:
            md5 = _context.sent;
            _context.next = 16;
            break;

          case 15:
            md5 = new Date().getTime();

          case 16:
            suffix = file.name.substring(file.name.lastIndexOf('.') || 0, file.name.length);
            res.push({
              file: file,
              md5: md5,
              name: md5 + suffix
            });

          case 18:
            i++;
            _context.next = 6;
            break;

          case 21:
            return _context.abrupt("return", res);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFiles.apply(this, arguments);
}

function getFile() {
  return _getFile.apply(this, arguments);
}
/**
 * @description: 上传文件
 * @param {String} url 上传地址
 * @param {FormData} data 上传对象
 * @param {withCredentials} Boolean 是否携带cookie
 * @param {Function} 进度
 * @return: Promise
 */

function _getFile() {
  _getFile = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var options,
        _ref4,
        _ref5,
        item,
        _args2 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            options.multiple = false;
            _context2.next = 4;
            return getFiles(options);

          case 4:
            _ref4 = _context2.sent;
            _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 1);
            item = _ref5[0];
            return _context2.abrupt("return", item);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFile.apply(this, arguments);
}

function upload(_ref3) {
  var url = _ref3.url,
      data = _ref3.data,
      onProgress = _ref3.onProgress,
      _ref3$toast = _ref3.toast,
      toast = _ref3$toast === void 0 ? alert : _ref3$toast,
      _ref3$withCredentials = _ref3.withCredentials,
      withCredentials = _ref3$withCredentials === void 0 ? false : _ref3$withCredentials;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    if (!xhr.upload) return reject(new Error('xhr no upload methods'));
    xhr.upload.addEventListener('progress', function (e) {
      if (onProgress) onProgress({
        data: data,
        loaded: e.loaded,
        total: e.total
      });
    }, false);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            var res = JSON.parse(xhr.responseText);
            resolve(res);
          } catch (e) {
            resolve(xhr.responseText);
          }
        } else {
          var msg = "\u53D1\u751F\u9519\u8BEF ".concat(xhr.status);
          var err = new Error(msg);
          err.response = xhr;
          toast(msg);
          reject(err);
        }
      }
    };

    xhr.withCredentials = withCredentials;
    xhr.open('POST', url, true);
    xhr.send(data);
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getFileMD5: getFileMD5,
  getFiles: getFiles,
  getFile: getFile,
  upload: upload
});

/***/ })

/******/ });
});