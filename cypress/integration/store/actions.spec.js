/* global describe it expect */
import store from '../../../client/store'

describe('asyncIncrement', () => {
  it('Increments store.count after 200 milliseconds', () => {
    store.dispatch('incrementAsync').then(() => {
      expect(store.state.count).to.equal(1)
    })
  })
})
