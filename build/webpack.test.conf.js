const path = require('path')
const base = require('./webpack.base.conf')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = merge(base, {
  context: path.resolve(__dirname, '../'),
  output: {
    path: path.resolve(__dirname, '..', 'test'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CleanWebpackPlugin(['test'], {root: path.resolve(__dirname, '..')})
    // ,
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // })
  ]
})

module.exports = config
