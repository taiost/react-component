/**
 * Created by xutao on 2017/6/9.
 */
"use strict";

const pwd = process.cwd();
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = path.join(pwd, 'src');

module.exports = {
  entry: () => {
    let foundScripts = glob.sync('pages/*/*.js?(x)', {
      cwd: srcDir
    });

    // 生成 entry 映射表
    let ret = {};
    foundScripts.forEach((scriptPath) => {
      console.log(scriptPath);
      ret[scriptPath.replace(/^(.*)\.(js(x?))$/, '$1')] = srcDir + '/' + scriptPath;
    });
    return ret;
  },
  output: {
    path: path.join(pwd, 'build'),
    filename: '[name].js',
    // publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: function (absPath) {
          return /node_modules/.test(absPath);
        },
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules'
    ]
  }
};
