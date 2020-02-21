const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
   entry: {
      textformater: './src/index.js'
   },
   output: {
      filename: "[name].js"
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: "babel-loader",
                  options: {
                     presets: ['@babel/preset-env']
                  }
               },
            ]
         },
         {
            test: /\.html$/,
            use: [
               {
                  loader: "html-loader",
               }
            ]
         },
         {
            test: /\.scss$/,
            use: [
               'style-loader',
               'css-loader',
               'postcss-loader',
               'sass-loader',
            ]
         },
      ]
   },

   plugins: [
      new webpack.LoaderOptionsPlugin({
         options: {
            postcss: [
               autoprefixer()
            ]
         }
      }),
      new HtmlWebPackPlugin({
         template: "./src/index.html",
         filename: "./index.html",
         inject: ['head']
      }),
      new MiniCssExtractPlugin({
         filename: "[name].css",
         chunkFilename: "[id].css"
      })
   ]
}