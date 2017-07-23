/* global describe it expect */
import store from '../../../client/store'

describe('Default State', () => {
  it('Starts at count: 0', () => {
    expect(store.state.count).to.equal(0)
  })
})
