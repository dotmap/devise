import vue from 'rollup-plugin-vue'
import flow from 'rollup-plugin-flow'
import alias from 'rollup-plugin-alias'
import buble from 'rollup-plugin-buble'
import serve from 'rollup-plugin-serve'
import commonjs from 'rollup-plugin-commonjs'
import butternut from 'rollup-plugin-butternut'
import livereload from 'rollup-plugin-livereload'
import nodeResolve from 'rollup-plugin-node-resolve'
import nodeGlobals from 'rollup-plugin-node-globals'

const plugins = [
  alias({
    vue$: 'vue/dist/vue.common.js'
  }),
  flow(),
  vue({
    css: './public/assets/css/app.css'
  }),
  buble({
    objectAssign: 'Object.assign'
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  nodeGlobals()
]

const config = {
  entry: './src/app.js',
  dest: './public/assets/js/app.js',
  format: 'es',
  sourceMap: true,
  plugins: plugins
}

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

if (isProduction) {
  config.sourceMap = false
  config.plugins.push(butternut)
}

if (isDevelopment) {
  config.plugins.push(livereload())
  config.plugins.push(serve({
    contentBase: './public/',
    port: 8080,
    open: true
  }))
}

export default config
