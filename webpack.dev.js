const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   devtool: 'inline-source-map',
   module: {
    rules: [
        { 
            test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"
        }
    ]
   }
 });