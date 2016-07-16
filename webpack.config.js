var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
    // reloads browser when the watched files change
    new BrowserSyncPlugin({
      // use existing Apache virtual host
      proxy: 'http://localhost/',
      //tunnel: true,
      // watch the built files and the index file
      files: ['dist/*']
    }),
    new StaticSiteGeneratorPlugin('main', data.routes, data),
    new CopyWebpackPlugin([
            { from: 'src/api', to: 'api' }
    ])
  ]
}
