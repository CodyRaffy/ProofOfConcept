const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This helper function is not strictly necessary.
// I just don't like repeating the path.join a dozen times.
function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  entry: './src/public/components/index.tsx',
  output: {
    path: __dirname + "/dist/public",
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      actions: srcPath('public/actions'),
      apis: srcPath('public/apis'),
      components: srcPath('public/components'),
      containers: srcPath('public/containers'),
      reducers: srcPath('public/reducers'),
      types: srcPath('public/types'),
      shared: srcPath('shared'),
      store: srcPath('public/Store'),
      types: srcPath('public/types')
    }
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|eot)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Kagami",
      template: "./src/public/index-template.html"
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};