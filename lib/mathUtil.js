!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("kuan-mathUtil",[],e):"object"==typeof exports?exports["kuan-mathUtil"]=e():t["kuan-mathUtil"]=e()}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=20)}({20:function(t,e,r){"use strict";function n(t,e){var r,n;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{n=e.toString().split(".")[1].length}catch(t){n=0}var o=Math.abs(r-n),u=Math.pow(10,Math.max(r,n));if(o>0){var i=Math.pow(10,o);r>n?(t=Number(t.toString().replace(".","")),e=Number(e.toString().replace(".",""))*i):(t=Number(t.toString().replace(".",""))*i,e=Number(e.toString().replace(".","")))}else t=Number(t.toString().replace(".","")),e=Number(e.toString().replace(".",""));return(t+e)/u}function o(t,e){var r,n;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{n=e.toString().split(".")[1].length}catch(t){n=0}var o=Math.pow(10,Math.max(r,n));return((t*o-e*o)/o).toFixed(r>=n?r:n)}function u(t,e){var r=0,n=t.toString(),o=e.toString();try{r+=n.split(".")[1].length}catch(t){}try{r+=o.split(".")[1].length}catch(t){}return Number(n.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,r)}function i(t,e){var r=0,n=0;try{r=t.toString().split(".")[1].length}catch(t){}try{n=e.toString().split(".")[1].length}catch(t){}return Number(t.toString().replace(".",""))/(Number(e.toString().replace(".",""))*Math.pow(10,r-n))}Object.defineProperty(e,"__esModule",{value:!0}),e.add=n,e.sub=o,e.mul=u,e.div=i,e.default={add:n,sub:o,mul:u,div:i}}}).default}));