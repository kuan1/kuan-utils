!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("kuan-validate",[],t):"object"==typeof exports?exports["kuan-validate"]=t():e["kuan-validate"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/kuan-utils/",n(n.s=6)}({6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="";"undefined"!=typeof navigator&&(r=navigator.userAgent.toLowerCase()),t.isIOS=/iPhone|iPad|iPod|iOS/i.test(r),t.isIphoneX=/iPhone[\s\S]*OS X/.test(r),t.isWx=/micromessenger/i.test(r),t.isAliPay=/alipayclient/.test(r),t.isPc=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(r),t.isPhone=function(e){return/^(0|86|17951)?1\d{10}$/.test(e)},t.isEmail=function(e){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e)},t.isNum=function(e){return/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(e)},t.isIdCard=function(e){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e)},t.isUrl=function(e){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(e)},t.isImage=function(e){if(!e)return!1;var t=e.lastIndexOf(".");if(-1===t)return!1;var n=e.substr(t+1),r=n.substr(0,n.indexOf("?"));return/png|gif|svg|jpg|icon|jpeg]/i.test(r)}}}).default}));