!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("kuan-smoothScroll",[],t):"object"==typeof exports?exports["kuan-smoothScroll"]=t():e["kuan-smoothScroll"]=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}({2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=window;t.requestAnimationFrame=o.requestAnimationFrame=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},t.cancelAnimationFrame=o.cancelAnimationFrame=o.cancelAnimationFrame||o.webkitCancelAnimationFrame||o.mozCancelAnimationFrame||o.msCancelAnimationFrame||o.oCancelAnimationFrame||function(e){return clearTimeout(e)},t.default={requestAnimationFrame:t.requestAnimationFrame,cancelAnimationFrame:t.cancelAnimationFrame}},24:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(2)).default.requestAnimationFrame;t.default=function(e,t,n){void 0===t&&(t=150);var o=document.documentElement.scrollTop||document.body.scrollTop,i=e-o,u=0,a=function(){var c,l,m,f,s=(c=u+=10,l=o,m=i,(c/=t/2)<1?m/2*c*c+l:-m/2*(--c*(c-2)-1)+l);f=s,document.documentElement.scrollTop=f,document.body.scrollTop=f,u<t&&Math.abs(e-o)>2?r(a):"function"==typeof n&&n()};a()}}}).default}));