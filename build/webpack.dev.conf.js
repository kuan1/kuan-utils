const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const ip = require('ip')

const common = require('./webpack.base.conf.js');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const PORT = 8089

const webpackConfig = merge(common, {
  mode: 'development',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: 'static',
        ignore: ['.*'],
      },
    ]),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      favicon: resolve('static/favicon.ico')
    })
  ],
  devServer: {
    // hot: true,
    // inline: true,
    // contentBase: [path.join(__dirname, '../public'),],
    port: process.env.PORT || 8089,
    publicPath: '/',
    host: '0.0.0.0',
    openPage: '',
    useLocalIp: true,
    historyApiFallback: false,
    noInfo: false,
    stats: 'minimal',
    open: true
  },
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || PORT
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      webpackConfig.devServer.port = port

      webpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${ip.address()}:${port}`],
        }
      }))

      resolve(webpackConfig)
    }
  })
})

