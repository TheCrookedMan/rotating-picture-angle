var path = require('path')
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: "[name].js"
  },
  devServer:{
    contentBase: path.join(__dirname, "../src"),
    index: 'index.html',
    hot: true,
    watchContentBase: true,
    noInfo: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
  },
  plugins: [
    new htmlPlugin({
      // filename: './src/index.html',
        template: './src/index.html',
        inject: true
    })
  ]
};
