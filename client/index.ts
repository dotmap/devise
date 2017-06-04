import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'
import router from './router'
import store from './store'

sync(store, router)

const app = new Vue({
  render: h => h(App),
  router,
  store
})

app.$mount('#app')

export { app, router, store }
