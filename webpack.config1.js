var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
	{
	test: /\.js[x]?$/,
	exclude: /node_modules/,
	loader: 'babel-loader?presets[]=es2015&presets[]=react'
	},
	{
	   test: /\.(png|jpg|gif)$/,
	   loader: 'url-loader?limit=8192' // ����� limit=8192 ��ʾ�� base64 ���� <= ��K ��ͼ��
	},
    {
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	},
    ]
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
};