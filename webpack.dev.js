const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"
            }
        ]
    }
});