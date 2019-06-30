module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  globals: {
    wx: true,
    AlipayJSBridge: true
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
