module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dest',
    filename: "bundle.js"
    
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets:['es2015']} },
      {test: /\.scss$/,
        use: [
          {
             loader: "style-loader" // creates style nodes from JS strings 
          }, 
          {
            loader: "css-loader" // translates CSS into CommonJS
          }, 
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
}