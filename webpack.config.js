'use strict';

let path = require('path');

module.exports = {
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
