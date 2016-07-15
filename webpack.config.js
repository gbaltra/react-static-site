var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./src/data');

module.exports = {
  entry: './src/entry.jsx',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('main', data.routes, data)
  ]
}
