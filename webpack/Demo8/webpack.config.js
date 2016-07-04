/**
 * Created by leiyouwho on 7/4/16.
 */

var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};