const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: false
  });

module.exports = merge(common, {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dest',
    filename: "bundle.js"
  },
  module: {
    loaders: [
        { test: /\.scss$/,
            use: extractSass.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
            })
          }
        ],
      },
    plugins: [ 
      extractSass, 
      new UglifyJSPlugin() ]
});