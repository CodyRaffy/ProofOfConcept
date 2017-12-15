const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./dest/public/[name].[contenthash].css",
    disable: false
  });

module.exports = merge(common, {
  module: {
    rules: [
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