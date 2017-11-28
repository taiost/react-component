"use strict";

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pwd = process.cwd();
const fs = require('fs');
const path = require('path');

module.exports = merge(common,{
  output: {
    path: path.join(pwd, 'src'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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