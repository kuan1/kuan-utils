!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("kuan-eleSize",[],t):"object"==typeof exports?exports["kuan-eleSize"]=t():e["kuan-eleSize"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/kuan-utils/",n(n.s=24)}({24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,r=[],i=[];return function e(t){if(!t)return;var n=function(e){var t=e.ownerDocument&&e.ownerDocument.defaultView;t&&t.opener||(t=window);return t.getComputedStyle(e)}(t).getPropertyValue("display"),i=t.nodeName.toLowerCase();"none"!=n&&"body"!=i?e(t.parentNode):(r.push(t),"body"!=i&&e(t.parentNode))}(e),function(){for(var e=0;e<r.length;e++){var t=r[e].style.visibility||"",n=r[e].style.display||"",o=r[e].getAttribute("style");r[e].setAttribute("style","visibility:hidden;display:block !important;"+o),i[e]={visibility:t,display:n}}}(),t=e.clientWidth,n=e.clientHeight,function(){for(var e=0;e<r.length;e++){var t=i[e],n=t.visibility,o=t.display;r[e].style.visibility=n,r[e].style.display=o}}(),{width:t,height:n}}}}).default}));