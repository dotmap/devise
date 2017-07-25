'use strict'
process.env.NODE_ENV = 'development'

const FriendlyErrors = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const base = require('./webpack.base')

base.devtool = 'eval-source-map'
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrors()
)

module.exports = base
