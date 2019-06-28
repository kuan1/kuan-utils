module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    wx: true,
    AlipayJSBridge: true,
    _hmt: true
  },
  rules: {
    parser: 'babel-eslint',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
