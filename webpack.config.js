const htmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new htmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const path = require('path');
const scssLoader = {
    loader: "css-loader",
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: "[name]_[local]_[hash:base64]",
      sourceMap: true,
      minimize: true
     }
};

const styleLoader = {
	loader: "style-loader"
};

module.exports = {
	entry: { main: './src/app.jsx' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundled.js'
	},
	module: {
		rules:[
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}, {
				test: /\.scss$/,
				use: [ styleLoader, scssLoader]
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg/,
				use: {
						loader: 'svg-url-loader',
						options: {}
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		hot: true
	},
	plugins: [htmlPlugin]
};