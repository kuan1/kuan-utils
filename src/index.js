// cookie
import getCookie from './lib/cookie/getCookie';
import setCookie from './lib/cookie/setCookie';
import removeCookie from './lib/cookie/removeCookie';

// device
import isPc from './lib/device/isPc';

// url
import getQueryString from './lib/url/getQueryString';
import parseQueryString from './lib/url/parseQueryString';
import stringfyQueryString from './lib/url/stringfyQueryString';

// time
import formatPassTime from './lib/time/formatPassTime';
import formatRemainTime from './lib/time/formatRemainTime';

// object
import deepClone from './lib/object/deepClone';
import isEmptyObject from './lib/object/isEmptyObject';

// random
import randomColor from './lib/random/randomColor';
import randomNum from './lib/random/randomNum';

// regexp
import isEmail from './lib/regexp/isEmail';
import isIdCord from './lib/regexp/isIdCard';
import isPhoneNum from './lib/regexp/isPhoneNum';
import isUrl from './lib/regexp/isUrl';

// listener
import mousewheel from './lib/listener/mousewheel';

// keycode
import getKeyName from './lib/keycode/getKeyName';

// function
import debounce from './lib/function/debounce';
import thorottle from './lib/function/throttle';

export {
  getCookie,
  setCookie,
  removeCookie,
  isPc,
  getQueryString,
  parseQueryString,
  stringfyQueryString,
  formatPassTime,
  formatRemainTime,
  deepClone,
  isEmptyObject,
  randomColor,
  randomNum,
  isEmail,
  isIdCord,
  isPhoneNum,
  isUrl,
  mousewheel,
  getKeyName,
  debounce,
  thorottle
};
