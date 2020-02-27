const path = require('path');

const shouldMinimize = process.env.NO_MINIFY !== 'true';

module.exports = {
  mode: 'production',
  entry: {
    index: './index.js',
    one: './use-one.js',
    two: './use-two.js'
  },
  output: {
    filename: '[name].js',
    path: path.join( __dirname, 'build' )
  },
  optimization: {
    minimize: shouldMinimize,
    concatenateModules: false
  }
}