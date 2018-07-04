const htmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new htmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const path = require('path');

module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [htmlPlugin]
};