import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface state {
  count: number;
}

const state: state = {
  count: 0
}

const mutations = {
  INCREMENT(state: state) {
    state.count++
  },
  DECREMENT (state: state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }: { commit: Function }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
