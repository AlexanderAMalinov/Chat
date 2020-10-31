import '@babel/polyfill';

import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  devtool: false,
  entry: {
    main: [
      '@babel/polyfill',
      './src/index.jsx',
    ],
  },
  output: {
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
  ],
};
