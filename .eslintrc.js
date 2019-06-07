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
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
