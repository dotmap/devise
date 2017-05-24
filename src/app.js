import Vue from 'vue'
import App from './components/App.vue'

const app = new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
