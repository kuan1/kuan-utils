process.env.NODE_ENV = 'production'

const { build } = require('kuan-pack')

build({
  entry: `${__dirname}/../test`
})
