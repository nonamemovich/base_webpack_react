const htmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer');
const path = require('path');

const htmlPlugin = new htmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

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

const postCss = {
	loader: 'postcss-loader',
	options: {
		plugins: [autoprefixer({ browsers: ['last 2 versions'] })],
	},
}

const sassLoader = {
	loader: 'sass-loader',
	options: {
		outputStyle: 'expanded',
		sourceMap: true,
	},
}

module.exports = {
	context: path.resolve(__dirname),
	entry: { main: './src/app.jsx' },
	mode: 'development',
	resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules',
		],
	},
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
				use: [ styleLoader, scssLoader, postCss, sassLoader ]
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