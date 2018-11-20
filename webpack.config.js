'use strict'
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
let CopyWebpackPlugin = require('copy-webpack-plugin');

let sassStyle = {
  loader: 'style-resources-loader',
  options: {
    patterns: [
      path.resolve(__dirname, 'sass/_variables.sass'),
    ],
  },
};

module.exports = {
  mode: 'development',
  entry: [
    './js/main.js',
    './sass/main.sass',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.sass$/,
        include: path.resolve(__dirname, "./sass"),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            }
          },
          'extract-loader',
          'css-loader?-url',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          },
          sassStyle,
        ]
      },

      {
        test: /\.sass$/,
        include: path.resolve(__dirname, "./js"),
        use: [
          'vue-style-loader',
          'css-loader?-url',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          },
          sassStyle,
        ]
      },

      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },


    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'public', to: '../build' }]),

    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      plugins: [
        require('imagemin-jpegtran')(),
        require('imagemin-jpeg-recompress')(),
        require('imagemin-optipng')({
          optimizationLevel: 3
        }),
        require('imagemin-pngquant')(),
      ],
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),

    new VueLoaderPlugin(),
  ]
}
