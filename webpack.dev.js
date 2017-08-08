const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const keys =  require('./env.development')
console.log(keys.REACT_APP_STRIPE_KEY);
module.exports = {
  entry: [
    "babel-polyfill",
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017', 'react', 'stage-0'],
           plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Node and React Full Stack',
      template: path.join(__dirname,'./src/index.html'),
      filename: 'index.html',
      link: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    }),
    new CleanWebpackPlugin(['public'], {
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_STRIPE_KEY': JSON.stringify(keys.REACT_APP_STRIPE_KEY)
    }),
  ]
}
