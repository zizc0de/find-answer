const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const host = 'localhost';
const port = 4000;

module.exports = {
	module: {
		rules: [
		{			
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.html$/,
			use: [
			{
				loader: "html-loader"
			}
			]
		},
		{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, "css-loader", "style-loader"]
		},
		{
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "sass-loader"]
		},
		{
			test: /\.(png|jpg|svg)$/,
			loader: "url-loader?limit=100000"
		},
		{
			test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
			loader: 'file-loader',
		}
		]
	},
	devtool: 'inline-source-map',
	entry: {
		app: './src/index.js'
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		hot: true,
		port: port,
		historyApiFallback: true
	},
	plugins: [
	new CleanWebpackPlugin(['dist']),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		template: "./src/index.html",
		filename: "./index.html"
	}),
	new MiniCssExtractPlugin({
		filename: "[name].css",
		chunkFileName: "[id].css"
	})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};