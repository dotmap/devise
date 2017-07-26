const fs = require('fs')
const webpack = require('webpack')
const { send } = require('micro')
const DashboardPlugin = require('webpack-dashboard/plugin')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.dev')

config.entry.client = [
  'webpack-hot-middleware/client?reload=true',
  config.entry.client
]

const compiler = webpack(config)
compiler.apply(new DashboardPlugin())

const middleware = next => {
  const mw = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    quiet: true
  })
  return (req, res) => mw(req, res, () => next(req, res))
}

const hotMiddleware = next => {
  const mw = webpackHotMiddleware(compiler, {
    log: () => {}
  })
  return (req, res) => mw(req, res, () => next(req, res))
}

const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8')

const microService = async (req, res) => send(res, 200, html)

module.exports = [ hotMiddleware, middleware ].reduce(
  (p, c) => c(p),
  microService
)
