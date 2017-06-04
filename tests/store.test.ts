declare const jest
declare const test
declare const describe
declare const expect

import store from '../client/store'

describe('Default state', () => {
  test('count', () => {
    expect(store.state.count).toBe(0))
  })
})

describe('Mutations', () => {
  test('INCREMENT', async () => {
    await store.commit('INCREMENT')
    expect(store.state.count).toBe(1)
  })

  test('DECREMENT', async () => {
    await store.commit('DECREMENT')
    expect(store.state.count).toBe(0)
  })
})

describe('Actions', () => {
  test("incrementAsync", async () => {
    await store.dispatch('incrementAsync').then(() => {
      expect(store.state.count).toBe(1)
    })
  })
})
