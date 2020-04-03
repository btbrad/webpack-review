const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const isDev = process.env.NODE_ENV  === 'development'
console.log('是否为开发环境', process.env.NODE_ENV)

const commonConfig = {
  mode: process.env.NODE_ENV,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  // devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      // {
      //   test: /\.(jpeg|png|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name]_[hash].[ext]'
      //     }
      //   }
      // },
      {
        test: /\.(jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.css$/,
        use: [ isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader", 'sass-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // new webpack.HotModuleReplacementPlugin({
    //   // Options...
    // })
  ],
  optimization: { 
    // usedExports: true 
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: '[name].bundle.js'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   compress: true,
  //   port: 9527,
  //   open: true,
  //   hot: true,
  //   hotOnly: true,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:9092"
  //     }
  //   }
  // }
} 

module.exports = () =>{
  if (isDev) {
    console.log('开发模式', isDev)
    return merge(commonConfig, devConfig)
  } else {
    console.log('生产模式', !isDev)
    return merge(commonConfig, prodConfig)
  }
}