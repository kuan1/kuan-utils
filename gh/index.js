function requireAll() {
  const r = require.context('./', false, /.*\.vue/)
  return r.keys().reduce((collect = {}, key) => {
    const name = key
      .replace('.vue', '')
      .replace(/^\.\//, '')
      .replace(/^\S/, s => {
        return s.toLowerCase()
      })
    collect[name] = r(key).default
    return collect
  }, {})
}

export default requireAll()
