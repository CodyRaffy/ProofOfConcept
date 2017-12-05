const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   // Should be able to take out entry and output look into why I can't
   entry: "./src/js/index.js",
   output: {
       filename: "./dest/bundle.js"
   },
   devtool: 'inline-source-map',
   module: {
    loaders: [
        { 
            test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"
        }
    ]
   }
 });