const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');

const hotRailsPort = process.env.HOT_RAILS_PORT || 3500;

config.entry.push(
  `webpack-dev-server/client?http://localhost:${hotRailsPort}`,
  'webpack/hot/only-dev-server'
);

config.output = {
  filename: 'webpack-bundle.js',
  path: path.join(__dirname, 'public'),
  publicPath: `http://localhost:${hotRailsPort}/`,
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

const moduleBabel = {
  test: /\.jsx?$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: {
    plugins: [
      ['react-transform', {
        superClasses: [
          'React.Component',
          'BaseComponent',
          'Component'
        ],
        transforms: [{
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module'],
        }]
      }]
    ]
  }
};

const moduleCSS = {
  test: /\.css$/,
  loaders: [
    'style',
    'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
    'postcss',
  ]
};

const moduleSCSS = {
  test: /\.scss$/,
  loaders: [
    'style',
    'css?modules&importLoaders=3&localIdentName=[name]__[local]__[hash:base64:5]',
    'postcss',
    'sass',
    'sass-resources',
  ]
};

config.module.loaders.push(moduleBabel, moduleCSS, moduleSCSS);

module.exports = config;
