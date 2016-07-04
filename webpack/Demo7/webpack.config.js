/**
 * Created by leiyouwho on 7/4/16.
 */

var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "bundle.js"
  }
};