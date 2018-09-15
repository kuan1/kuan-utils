const path = require('path')
const base = require('./webpack.base.conf')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = (dir) => path.resolve(__dirname, '..', dir)

const config = merge(base, {
  context: path.resolve(__dirname, '../'),
  entry: {
    'kuan-utils': resolve('src'),
    'kuan-utils2': resolve('src2')
  },
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'commonjs2'
    // libraryExport: 'default'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parallel: true,
          warnings: false,
          compress: {
            drop_console: true,
          }
        }
      })
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(['lib'], {root: path.resolve(__dirname, '..')})
  ]
})

module.exports = config
