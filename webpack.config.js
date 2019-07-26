const NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'GrowPA'
  },

  optimization: {
    minimize: NODE_ENV != 'development'
  },

  devtool: NODE_ENV == 'development' ? 'source-map' : null,

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
