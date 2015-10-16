var path = require("path");

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var postcssLoader = require('postcss-loader');
var postcssImport = require('postcss-import');


module.exports = {
  entry: {
    main: ["./src/main.js"],
    styles: ["./src/css/main.css"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].css",
    chunkFilename: "[id].css"
  },
  module: {
    loaders: [
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
        new ExtractTextPlugin("[name].css", {allChunks: true})
  ],
  devServer: {
    contentBase: './build/',
    port: 1337,
    hot: true
  }
}
