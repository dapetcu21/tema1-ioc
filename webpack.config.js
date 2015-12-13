const HTMLWebpack = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    main: './src',
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  devtool: debug ? '#source-map' : null,
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: ExtractText.extract('style', 'css?sourceMap!autoprefixer!sass') },
      { test: /\.sass$/, loader: ExtractText.extract('style', 'css?sourceMap!autoprefixer!sass?indentedSyntax=true') },
      { test: /\.css$/, loader: ExtractText.extract('style', 'css?sourceMap!autoprefixer') },
      { test: /\.(png|jpg|woff2?|ttf|eot|svg)(\?|$)/, loader: 'file' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  babel: {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['transform-decorators-legacy'],
  },
  plugins: [
    new ExtractText('bundle.css', { disable: debug, allChunks: true }),
    new HTMLWebpack({
      inject: true,
      template: 'src/assets/index.html',
    }),
    new webpack.DefinePlugin({
      __DEV__: debug,
    }),
  ],
};

if (debug) {
  config.babel.plugins.push(
    ['react-transform', {
      'transforms': [{
        'transform': 'react-transform-hmr',
        'imports': ['react'],
        'locals': ['module'],
      }, {
        'transform': 'react-transform-catch-errors',
        'imports': ['react', 'redbox-react'],
      }],
    }]
  );

} else {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
}

module.exports = config;
