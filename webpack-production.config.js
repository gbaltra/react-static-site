var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

// strip out console.log statements
/*webpackConfig.module.loaders.push({
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'strip?strip[]=console.log!babel'
});*/

/*webpackConfig.plugins.push(
  new webpack.ProvidePlugin({
    React: "React", react: "React", "window.react": "React", "window.React": "React"
  })
)*/

// set node env to production
webpackConfig.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	})
);

module.exports = webpackConfig;
