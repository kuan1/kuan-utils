!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("kuan-xlsx",[],t):"object"==typeof exports?exports["kuan-xlsx"]=t():e["kuan-xlsx"]=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/kuan-utils/",n(n.s=59)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new Promise((function(t,n){var r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onerror=n,r.onload=function(){return t(e)}}))}},59:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{l(r.next(e))}catch(e){u(e)}}function a(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},u=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a,l=i(n(1));function c(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){return e="https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.5/xlsx.full.min.js",a?[2,e]:[2,a=l.default(e)]}))}))}t.JSONToExcel=function(e){return r(void 0,void 0,void 0,(function(){var t,n,r,i,a,l,s,f,d,h,p;return o(this,(function(o){switch(o.label){case 0:return[4,c()];case 1:return o.sent(),t=e.name,n=void 0===t?"excel":t,r=e.data,i=void 0===r?[]:r,a=e.header,l=void 0===a?{}:a,s=e.skipHeader,f=void 0===s||s,(d=u(i)).unshift(l),function(e,t){if(!t.length)return[];for(var n=t.map((function(e){return Object.values(e).map((function(e){var t=e?e.toString().length*(e.toString().charCodeAt(0)>255?2:1):10;return{wch:Math.max(10,t+2)}}))})),r=n[0],o=1;o<n.length;o++)for(var u=0;u<n[o].length;u++)r[u].wch<n[o][u].wch&&(r[u].wch=n[o][u].wch);e["!cols"]=r}(h=XLSX.utils.json_to_sheet(d,{header:Object.keys(l),skipHeader:f}),d),p=XLSX.utils.book_new(),XLSX.utils.book_append_sheet(p,h,"SheetJS"),XLSX.writeFile(p,n+".xlsx"),[2]}}))}))},t.excelToJSON=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return e?[4,c()]:[2];case 1:return n.sent(),"xls"!==(t=e.name.split(".")[1])&&"xlsx"!==t?(alert("导入的文件格式不正确!"),[2]):[2,new Promise((function(t,n){var r=new FileReader;r.onload=function(e){if(!e.target)return n("event target undefined");var r=e.target,o=XLSX.read(r.result,{type:"binary"});t(XLSX.utils.sheet_to_json(o.Sheets[o.SheetNames[0]]))},r.readAsBinaryString(e)}))]}}))}))},t.default={JSONToExcel:t.JSONToExcel,excelToJSON:t.excelToJSON}}}).default}));