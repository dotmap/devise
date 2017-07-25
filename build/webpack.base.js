'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cwd = file => {
  return path.join(process.cwd(), file || '')
}

const loadersOptions = () => {
  const isProd = process.env.NODE_ENV === 'production'

  function generateLoader (langs) {
    langs.unshift('css-loader?sourceMap&-autoprefixer')
    if (!isProd) {
      return ['vue-style-loader'].concat(langs).join('!')
    }
    return ExtractTextPlugin.extract({
      fallback: 'vue-style-loader',
      use: langs.join('!')
    })
  }

  return {
    minimize: isProd,
    options: {
      // Get context for css-loader
      context: process.cwd(),
      vue: {
        loaders: {
          css: generateLoader([]),
          sass: generateLoader(['sass-loader?indentedSyntax&sourceMap']),
          scss: generateLoader(['sass-loader?sourceMap']),
          less: generateLoader(['less-loader?sourceMap']),
          stylus: generateLoader(['stylus-loader?sourceMap']),
          js: 'babel-loader'
        }
      }
    }
  }
}

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath),
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../client'),
      components: path.join(__dirname, '../client/components')
    },
    modules: [
      // Dot hell elimination
      cwd('node_modules'),
      cwd('client')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.es6$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Devise',
      template: path.resolve(__dirname, 'index.html'),
      filename: path.join(__dirname, '../dist/index.html')
    }),
    new webpack.LoaderOptionsPlugin(loadersOptions()),
    new CopyWebpackPlugin([
      {
        from: cwd('./static'),
        to: './'
      }
    ])
  ],
  target: 'web'
}
