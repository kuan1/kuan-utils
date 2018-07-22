const path = require('path')
const base = require('./webpack.base.conf')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = merge(base, {
  context: path.resolve(__dirname, '../'),
  entry: './src/lib',
  output: {
    filename: 'kuan-utils.min.js',
    library: 'utils',
    libraryTarget: 'umd'
    // libraryExport: 'default'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '..')})
    // ,
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // })
  ]
})

module.exports = config
