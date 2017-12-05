const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   devtool: 'inline-source-map',
   module: {
    loaders: [
        { 
            test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"
        }
    ]
   }
 });