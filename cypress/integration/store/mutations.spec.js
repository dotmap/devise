/* global describe it expect */
import store from '../../../client/store'

describe('INCREMENT', () => {
  it('Increments state.count', () => {
    store.commit('INCREMENT')
    expect(store.state.count).to.equal(1)
  })
})

describe('DECREMENT', () => {
  it('Decrements state.count', () => {
    store.commit('DECREMENT')
    expect(store.state.count).to.equal(0)
  })
})
