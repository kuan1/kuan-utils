!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("kuan-fullScreen",[],t):"object"==typeof exports?exports["kuan-fullScreen"]=t():e["kuan-fullScreen"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/kuan-utils/",n(n.s=25)}({25:function(e,t,n){"use strict";function r(){var e=document;return!!(e.fullscreen||e.webkitIsFullScreen||e.mozIsFullScreen||e.msIsFullScreen)}function u(){if(!r()){var e=document.documentElement,t=e.requestFullscreen||e.webkitRequestFullscreen||e.msRequestFullscreen||e.mozRequestFullScreen||null;t&&t.call(e)}}function l(){if(r()){var e=document,t=e.exitFullscreen||e.msExitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||null;t&&t.call(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={is:r,set:u,close:l,toggle:function(){r()?l():u()}}}}).default}));