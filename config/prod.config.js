"use strict";

const pwd = process.cwd();
const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcDir = path.join(pwd, 'src');
const buildDir = path.join(pwd, 'build');

module.exports = merge(common,{
  output: {
    path: buildDir,
    filename: '[name].js',
    // publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin([buildDir], {
      verbose: true,
      allowExternal: true
    }),
    new UglifyJSPlugin(),
    new CopyWebpackPlugin([
      {
        context: srcDir,
        from: 'pages/**/*.html',
        to: buildDir + '/[path]/[name].html'
      }
    ])
  ]
});