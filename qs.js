!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("kuan-qs",[],n):"object"==typeof exports?exports["kuan-qs"]=n():e["kuan-qs"]=n()}(this,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/kuan-utils/",t(t.s=30)}({30:function(e,n,t){"use strict";function o(e,n){void 0===n&&(n=window.location.href.split("?")[1]);var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),o=(n||"").match(t);return null!=o?decodeURIComponent(o[2]):null}function r(e){return void 0===e&&(e=window.location.href.split("?")[1]),e?decodeURIComponent(e).split("&").reduce((function(e,n){var t=n.split("="),o=t[0],r=void 0===o?"":o,u=t[1],i=void 0===u?"":u;return e[r]=i,e}),{}):{}}function u(e){if(!e)return"";var n=[];for(var t in e){var o=e[t];if(o instanceof Array)for(var r=0;r<o.length;++r){var u=t+"["+r+"]="+encodeURIComponent(o[r]);n.push(u)}else n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]))}return n.join("&")}Object.defineProperty(n,"__esModule",{value:!0}),n.get=o,n.parse=r,n.stringify=u,n.default={get:o,parse:r,stringify:u}}}).default}));