const { buildLib } = require('kuan-pack')
const config = require('kuan-pack/build/webpack.lib.min.conf')
const { fileDisplay, resolve } = require('./utils')

const targets = fileDisplay(resolve('src'))

const entry = {}
targets.forEach(item => {
  const fileName = item.replace('/', '').replace('.js', '')
  const name = fileName === 'index' ? 'kuan-utils' : fileName
  entry[name] = resolve(`src${item}`)
})

buildLib({
  extend(config) {
    config.output.path = resolve('lib')
    config.output.filename = '[name].js'
    config.output.library = '[name]'
    config.entry = entry
  },
  config
})