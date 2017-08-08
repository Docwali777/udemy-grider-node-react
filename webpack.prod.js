const webpack = require('webpack');
const path = require('path');

const keys  = require('./env.production')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: ["babel-polyfill",'./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(jpeg|jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader', options: {limit: 40000}
          },
            {
              loader: 'url-loader', options: {limit: 100000}
            }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      parallel: {
      cache: true,
      workers: 2 // for e.g
    },
      beautify: true,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false,
      warnings: false
    }),
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('production'),
     'process.env.REACT_APP_STRIPE_KEY': JSON.stringify('pk_test_rM0r4CXtfaDluXMl9zvDq9I4')
   }),
    new HtmlWebpackPlugin({
      title: 'Node and React Full Stack',
      template: './src/index.html',
      filename: 'index.html',
      link: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    }),
    new CleanWebpackPlugin(['public'], {
      verbose: false,
      dry: true
    }),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
  ]
}
