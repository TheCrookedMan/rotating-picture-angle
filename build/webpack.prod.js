var path = require('path')
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: "./src/crpa.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "crpa.js"
  }
};