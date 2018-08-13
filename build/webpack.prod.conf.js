const path = require('path')
const base = require('./webpack.base.conf')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = merge(base, {
  context: path.resolve(__dirname, '../'),
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    filename: 'kuan-utils.min.js',
    library: 'utils',
    libraryTarget: 'umd'
    // libraryExport: 'default'
  },
  optimization: {
    namedChunks: false,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      cacheGroups: {
        commons: {
          // chunks: 'initial', // "initial", "async", "all"
          name: 'commons',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          // chunks: 'initial', // "initial", "async", "all"
          test: /node_modules/,
          name: 'vendor',
          priority: -10,
          enforce: true,
        },
        xlsx: {
          // chunks: 'initial', // "initial", "async", "all"
          test: /xlsx/,
          name: 'xlsx',
          priority: -9,
          enforce: true,
        }
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['lib'], {root: path.resolve(__dirname, '..')})
    // ,
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // })
  ]
})

module.exports = config
