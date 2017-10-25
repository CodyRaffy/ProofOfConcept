module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dest',
    filename: "bundle.js"
    
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}