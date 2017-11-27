const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common,{
  devtool: 'inline-source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].style.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    })
  ],
  devServer: {
    contentBase: './src',
    allowedHosts: ['dev.wapa.taobao.com','dev.m.taobao.com', 'dev.waptest.taobao.com'],
    clientLogLevel: 'info', // none, error, warning
    inline: true,
    hot: true,
    open: true, // When open is enabled, the dev server will open the browser.
    headers: {
      "Cache-Control": "no-cache"
    },
    port: 8080,
    publicPath: '/'
  },
});