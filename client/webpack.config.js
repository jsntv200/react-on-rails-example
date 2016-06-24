const webpack = require('webpack');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';
const nodeEnv = isDev ? 'development' : 'production';

var config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './src',
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: '../app/assets/webpack',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],

  module: {
    loaders: [{
      test: require.resolve('react'),
      loader: 'imports',
      query: {
        shim: 'es5-shim/es5-shim',
        sham: 'es5-shim/es5-sham'
      }
    },{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
};

module.exports = config;

if (isDev) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
  config.plugins.push(new webpack.optimize.DedupePlugin());
}
