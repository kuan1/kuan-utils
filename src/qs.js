/**
 *
 * @param name {string}
 * @param search {string}  [a=1&b=2]
 * @returns {string || null}
 */
export function get(name, search) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = (search || window.location.search.substr(1)).match(reg)
  if (r != null) return decodeURIComponent(r[2]) // unescape （w3c说一起用这个方法推荐使用decodeURI() 和 decodeURIComponent()）
  return null
}

/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export function parse(url) {
  url = url == null ? window.location.href : url
  const search = url.includes('?')
    ? url.substring(url.lastIndexOf('?') + 1)
    : ''
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

/**
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}
 */
export function stringify(obj) {
  if (!obj) return ''
  const pairs = []

  for (const key in obj) {
    const value = obj[key]

    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(
          encodeURIComponent(key + '[' + i + ']') +
            '=' +
            encodeURIComponent(value[i])
        )
      }
      continue
    }

    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }

  return pairs.join('&')
}

export default {
  get,
  parse,
  stringify
}
