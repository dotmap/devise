import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface IState {
  count: number
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
   async incrementAsync({ commit }: ICommit) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('INCREMENT')
        resolve()
      }, 200)
    })
  }
}

const store = new Vuex.Store({
  actions,
  mutations,
  state
})

export default store
