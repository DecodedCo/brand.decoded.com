var path = require("path");

var Webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var postcssLoader = require('postcss-loader');
var postcssImport = require('postcss-import');

var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');


module.exports = {
  devtool: 'eval',
  entry: {
    main: [
      // For hot style updates
      'webpack/hot/dev-server',
      // The script refreshing the browser on none hot updates
      'webpack-dev-server/client?http://localhost:8080',
      "./src/main.js",
      "./src/css/main.css"]
  },
  output: {
    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1!postcss-loader')
      }
    ]
  },
  postcss: function () {
    // The context of this function is the webpack loader-context
    // see: http://webpack.github.io/docs/loaders.html#loader-context

    return [
      postcssImport({
        // see postcss-import docs to learn about onImport callback
        // https://github.com/postcss/postcss-import

        onImport: function (files) {
          files.forEach(this.addDependency);
        }.bind(this)
      })
    ];
  },
  plugins: [
        new ExtractTextPlugin("[name].css", {allChunks: true}),
        new Webpack.HotModuleReplacementPlugin()
  ]
}
