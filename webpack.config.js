/**
 * Created by xutao on 2017/6/9.
 */
"use strict";

var pwd = process.cwd();
var fs = require('fs');
var path = require('path');
var pkgConfig = require('./package.json');
var webpack = require('webpack');

module.exports = {
  entry: ['webpack/hot/dev-server', __dirname + '/src/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: function (absPath) {
          return /node_modules/.test(absPath);
        },
        loader: 'babel'
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './build',
    inline: true,
    hot: true,
    headers: {
      "Cache-Control": "no-cache"
    },
    port: 8080
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules'
    ]
  }
};
