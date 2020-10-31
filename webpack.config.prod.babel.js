import '@babel/polyfill';

import path from 'path';

import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
  devtool: false,
  entry: {
    main: [
      '@babel/polyfill',
      './src/index.jsx',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true }),
    ],
  },
};
