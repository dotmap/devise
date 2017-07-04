import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit('INCREMENT')
        resolve()
      }, 200)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
