!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("kuan-uploader",[],e):"object"==typeof exports?exports["kuan-uploader"]=e():t["kuan-uploader"]=e()}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/kuan-utils/",r(r.s=36)}({36:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{f(n.next(t))}catch(t){i(t)}}function u(t){try{f(n.throw(t))}catch(t){i(t)}}function f(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}f((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(r(37));function u(t,e){return new Promise((function(r,n){var o=new FileReader,i=File.prototype,u=i.slice||i.mozSlice||i.webkitSlice,f=Math.ceil(t.size/10485760),s=0,l=new a.default;function h(){var e=10485760*s,r=e+10485760>=t.size?t.size:e+10485760,n=u.call(t,e,r);o.readAsArrayBuffer(n)}o.onload=function(t){for(var n=t.target.result||"",o="",i=n instanceof ArrayBuffer?new Uint8Array(n):"",a=i?i.byteLength:0,u=0;u<a;u++)o+=String.fromCharCode(Number(i[u]));if(l.appendBinary(o),s++,e?e(Math.ceil(s/f*100)+"%"):console.log("读取文件",Math.ceil(s/f*100)+"%"),s<f)h();else{var c=l.end();r(c)}},o.onerror=function(t){n(t)},h()}))}function f(t){var e=t.accept,r=void 0===e?"image/*":e,n=t.multiple,o=void 0!==n&&n,i="kuan-upload-input",a=document.getElementById(i);return a||((a=document.createElement("input")).id=i,a.type="file",a.style.display="none",document.body.appendChild(a)),a.value="",a.accept=r,a.multiple=o,a.click(),new Promise((function(t){if(!a)return t(null);a.onchange=function(){var e=a.files;e&&e.length&&t(e)}}))}function s(t){return n(this,void 0,void 0,(function(){var e,r,n,i,a,s,l,h,c,p,d,y,b,g,v;return o(this,(function(o){switch(o.label){case 0:return r=(e=t||{}).multiple,n=void 0===r||r,i=e.accept,a=void 0===i?"image/*":i,s=e.needMD5,l=void 0===s||s,h=e.readProcess,c=void 0===h?function(){}:h,[4,f({multiple:n,accept:a})];case 1:if(!(p=o.sent()))return[2,[]];d=[],y=0,o.label=2;case 2:return y<p.length?(b=p[y],g=void 0,l?[4,u(b,c)]:[3,4]):[3,7];case 3:return g=o.sent(),[3,5];case 4:g=(new Date).getTime(),o.label=5;case 5:v=b.name.substring(b.name.lastIndexOf(".")||0,b.name.length),d.push({file:b,md5:g,name:g+v}),o.label=6;case 6:return y++,[3,2];case 7:return[2,d]}}))}))}function l(t){return n(this,void 0,void 0,(function(){var e;return o(this,(function(r){switch(r.label){case 0:return(e=t||{}).multiple=!1,[4,s(e)];case 1:return[2,r.sent()[0]]}}))}))}function h(t){var e=t.url,r=t.data,n=t.onProgress,o=t.toast,i=void 0===o?alert:o,a=t.withCredentials,u=void 0!==a&&a;return new Promise((function(t,o){var a=new XMLHttpRequest;if(!a.upload)return o(new Error("xhr no upload methods"));a.upload.addEventListener("progress",(function(t){n&&n({data:r,loaded:t.loaded,total:t.total})}),!1),a.onreadystatechange=function(){if(4===a.readyState)if(200===a.status)try{var e=JSON.parse(a.responseText);t(e)}catch(e){t(a.responseText)}else{var r="发生错误 "+a.status,n=new Error(r);n.response=a,i(r),o(n)}},a.withCredentials=u||!1,a.open("POST",e,!0),a.send(r)}))}e.getFileMD5=u,e.selectFile=f,e.getFiles=s,e.getFile=l,e.upload=h,e.default={getFileMD5:u,getFiles:s,getFile:l,upload:h}},37:function(t,e,r){t.exports=function(t){"use strict";var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function r(t,e){var r=t[0],n=t[1],o=t[2],i=t[3];n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&o|~n&i)+e[0]-680876936|0)<<7|r>>>25)+n|0)&n|~r&o)+e[1]-389564586|0)<<12|i>>>20)+r|0)&r|~i&n)+e[2]+606105819|0)<<17|o>>>15)+i|0)&i|~o&r)+e[3]-1044525330|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&o|~n&i)+e[4]-176418897|0)<<7|r>>>25)+n|0)&n|~r&o)+e[5]+1200080426|0)<<12|i>>>20)+r|0)&r|~i&n)+e[6]-1473231341|0)<<17|o>>>15)+i|0)&i|~o&r)+e[7]-45705983|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&o|~n&i)+e[8]+1770035416|0)<<7|r>>>25)+n|0)&n|~r&o)+e[9]-1958414417|0)<<12|i>>>20)+r|0)&r|~i&n)+e[10]-42063|0)<<17|o>>>15)+i|0)&i|~o&r)+e[11]-1990404162|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&o|~n&i)+e[12]+1804603682|0)<<7|r>>>25)+n|0)&n|~r&o)+e[13]-40341101|0)<<12|i>>>20)+r|0)&r|~i&n)+e[14]-1502002290|0)<<17|o>>>15)+i|0)&i|~o&r)+e[15]+1236535329|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&i|o&~i)+e[1]-165796510|0)<<5|r>>>27)+n|0)&o|n&~o)+e[6]-1069501632|0)<<9|i>>>23)+r|0)&n|r&~n)+e[11]+643717713|0)<<14|o>>>18)+i|0)&r|i&~r)+e[0]-373897302|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&i|o&~i)+e[5]-701558691|0)<<5|r>>>27)+n|0)&o|n&~o)+e[10]+38016083|0)<<9|i>>>23)+r|0)&n|r&~n)+e[15]-660478335|0)<<14|o>>>18)+i|0)&r|i&~r)+e[4]-405537848|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&i|o&~i)+e[9]+568446438|0)<<5|r>>>27)+n|0)&o|n&~o)+e[14]-1019803690|0)<<9|i>>>23)+r|0)&n|r&~n)+e[3]-187363961|0)<<14|o>>>18)+i|0)&r|i&~r)+e[8]+1163531501|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n&i|o&~i)+e[13]-1444681467|0)<<5|r>>>27)+n|0)&o|n&~o)+e[2]-51403784|0)<<9|i>>>23)+r|0)&n|r&~n)+e[7]+1735328473|0)<<14|o>>>18)+i|0)&r|i&~r)+e[12]-1926607734|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n^o^i)+e[5]-378558|0)<<4|r>>>28)+n|0)^n^o)+e[8]-2022574463|0)<<11|i>>>21)+r|0)^r^n)+e[11]+1839030562|0)<<16|o>>>16)+i|0)^i^r)+e[14]-35309556|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n^o^i)+e[1]-1530992060|0)<<4|r>>>28)+n|0)^n^o)+e[4]+1272893353|0)<<11|i>>>21)+r|0)^r^n)+e[7]-155497632|0)<<16|o>>>16)+i|0)^i^r)+e[10]-1094730640|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n^o^i)+e[13]+681279174|0)<<4|r>>>28)+n|0)^n^o)+e[0]-358537222|0)<<11|i>>>21)+r|0)^r^n)+e[3]-722521979|0)<<16|o>>>16)+i|0)^i^r)+e[6]+76029189|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((i=((i+=((r=((r+=(n^o^i)+e[9]-640364487|0)<<4|r>>>28)+n|0)^n^o)+e[12]-421815835|0)<<11|i>>>21)+r|0)^r^n)+e[15]+530742520|0)<<16|o>>>16)+i|0)^i^r)+e[2]-995338651|0)<<23|n>>>9)+o|0,n=((n+=((i=((i+=(n^((r=((r+=(o^(n|~i))+e[0]-198630844|0)<<6|r>>>26)+n|0)|~o))+e[7]+1126891415|0)<<10|i>>>22)+r|0)^((o=((o+=(r^(i|~n))+e[14]-1416354905|0)<<15|o>>>17)+i|0)|~r))+e[5]-57434055|0)<<21|n>>>11)+o|0,n=((n+=((i=((i+=(n^((r=((r+=(o^(n|~i))+e[12]+1700485571|0)<<6|r>>>26)+n|0)|~o))+e[3]-1894986606|0)<<10|i>>>22)+r|0)^((o=((o+=(r^(i|~n))+e[10]-1051523|0)<<15|o>>>17)+i|0)|~r))+e[1]-2054922799|0)<<21|n>>>11)+o|0,n=((n+=((i=((i+=(n^((r=((r+=(o^(n|~i))+e[8]+1873313359|0)<<6|r>>>26)+n|0)|~o))+e[15]-30611744|0)<<10|i>>>22)+r|0)^((o=((o+=(r^(i|~n))+e[6]-1560198380|0)<<15|o>>>17)+i|0)|~r))+e[13]+1309151649|0)<<21|n>>>11)+o|0,n=((n+=((i=((i+=(n^((r=((r+=(o^(n|~i))+e[4]-145523070|0)<<6|r>>>26)+n|0)|~o))+e[11]-1120210379|0)<<10|i>>>22)+r|0)^((o=((o+=(r^(i|~n))+e[2]+718787259|0)<<15|o>>>17)+i|0)|~r))+e[9]-343485551|0)<<21|n>>>11)+o|0,t[0]=r+t[0]|0,t[1]=n+t[1]|0,t[2]=o+t[2]|0,t[3]=i+t[3]|0}function n(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return r}function o(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return r}function i(t){var e,o,i,a,u,f,s=t.length,l=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=s;e+=64)r(l,n(t.substring(e-64,e)));for(o=(t=t.substring(e-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)i[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(r(l,i),e=0;e<16;e+=1)i[e]=0;return a=(a=8*s).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),f=parseInt(a[1],16)||0,i[14]=u,i[15]=f,r(l,i),l}function a(t){var r,n="";for(r=0;r<4;r+=1)n+=e[t>>8*r+4&15]+e[t>>8*r&15];return n}function u(t){var e;for(e=0;e<t.length;e+=1)t[e]=a(t[e]);return t.join("")}function f(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function s(t){var e,r=[],n=t.length;for(e=0;e<n-1;e+=2)r.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,r)}function l(){this.reset()}return u(i("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(r,n){var o,i,a,u,f=this.byteLength,s=e(r,f),l=f;return n!==t&&(l=e(n,f)),s>l?new ArrayBuffer(0):(o=l-s,i=new ArrayBuffer(o),a=new Uint8Array(i),u=new Uint8Array(this,s,o),a.set(u),i)}}(),l.prototype.append=function(t){return this.appendBinary(f(t)),this},l.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,o=this._buff.length;for(e=64;e<=o;e+=64)r(this._hash,n(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},l.prototype.end=function(t){var e,r,n=this._buff,o=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=n.charCodeAt(e)<<(e%4<<3);return this._finish(i,o),r=u(this._hash),t&&(r=s(r)),this.reset(),r},l.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},l.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},l.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},l.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},l.prototype._finish=function(t,e){var n,o,i,a=e;if(t[a>>2]|=128<<(a%4<<3),a>55)for(r(this._hash,t),a=0;a<16;a+=1)t[a]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(n[2],16),i=parseInt(n[1],16)||0,t[14]=o,t[15]=i,r(this._hash,t)},l.hash=function(t,e){return l.hashBinary(f(t),e)},l.hashBinary=function(t,e){var r=u(i(t));return e?s(r):r},l.ArrayBuffer=function(){this.reset()},l.ArrayBuffer.prototype.append=function(t){var e,n,i,a,u,f=(n=this._buff.buffer,i=t,a=!0,(u=new Uint8Array(n.byteLength+i.byteLength)).set(new Uint8Array(n)),u.set(new Uint8Array(i),n.byteLength),a?u:u.buffer),s=f.length;for(this._length+=t.byteLength,e=64;e<=s;e+=64)r(this._hash,o(f.subarray(e-64,e)));return this._buff=e-64<s?new Uint8Array(f.buffer.slice(e-64)):new Uint8Array(0),this},l.ArrayBuffer.prototype.end=function(t){var e,r,n=this._buff,o=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=n[e]<<(e%4<<3);return this._finish(i,o),r=u(this._hash),t&&(r=s(r)),this.reset(),r},l.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},l.ArrayBuffer.prototype.getState=function(){var t,e=l.prototype.getState.call(this);return e.buff=(t=e.buff,String.fromCharCode.apply(null,new Uint8Array(t))),e},l.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var r,n=t.length,o=new ArrayBuffer(n),i=new Uint8Array(o);for(r=0;r<n;r+=1)i[r]=t.charCodeAt(r);return e?i:o}(t.buff,!0),l.prototype.setState.call(this,t)},l.ArrayBuffer.prototype.destroy=l.prototype.destroy,l.ArrayBuffer.prototype._finish=l.prototype._finish,l.ArrayBuffer.hash=function(t,e){var n=u(function(t){var e,n,i,a,u,f,s=t.length,l=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=s;e+=64)r(l,o(t.subarray(e-64,e)));for(t=e-64<s?t.subarray(e-64):new Uint8Array(0),n=t.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<n;e+=1)i[e>>2]|=t[e]<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(r(l,i),e=0;e<16;e+=1)i[e]=0;return a=(a=8*s).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),f=parseInt(a[1],16)||0,i[14]=u,i[15]=f,r(l,i),l}(new Uint8Array(t)));return e?s(n):n},l}()}}).default}));