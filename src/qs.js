/**
 *
 * @param name {string}
 * @param search {string}  [a=1&b=2]
 * @returns {string || null}
 */
export function get(name, search = window.location.href.split("?")[1]) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = (search || "").match(reg);
  if (r != null) return decodeURIComponent(r[2]); // unescape （w3c推荐使用decodeURI() 和 decodeURIComponent()）
  return null;
}

/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export function parse(url) {
  const search = url || window.location.href.split("?")[1];
  if (!search) return {};
  return decodeURIComponent(search)
    .split("&")
    .reduce((obj, item) => {
      const [key = "", value = ""] = item.split("=");
      obj[key] = value;
      return obj;
    }, {});
}

/**
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}
 */
export function stringify(obj) {
  if (!obj) return "";
  const pairs = [];

  for (const key in obj) {
    const value = obj[key];

    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        const arrStr = `${key}[${i}]=${encodeURIComponent(value[i])}`;
        pairs.push(arrStr);
      }
      continue;
    }

    pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  }

  return pairs.join("&");
}

export default {
  get,
  parse,
  stringify
};
