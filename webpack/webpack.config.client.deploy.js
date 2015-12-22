var webpack = require('webpack');
var config = require('./webpack.config.client');
var _ = require('lodash');
var dirs = require('../dirs');
var RunInMeteorPlugin = require('webpack-meteor-tools/lib/RunInMeteorPlugin');

var config = module.exports = _.assign(_.clone(config), {
  plugins: (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new RunInMeteorPlugin({
      meteor: dirs.meteor,
      target: 'client',
      mode: 'production',
      key: 'client',
    }),
  ]),
});