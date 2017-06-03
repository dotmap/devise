import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface IState {
  count: number;
}

interface ICommit {
  commit(mutationType: string): any
}

const state: IState = {
  count: 0
}

const mutations = {
  INCREMENT(state: IState) {
    state.count++
  },
  DECREMENT(state: IState) {
    state.count--
  }
}

const actions = {
  incrementAsync({ commit }: ICommit) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  actions,
  mutations,
  state
})

export default store
