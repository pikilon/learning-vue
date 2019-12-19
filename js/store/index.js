import css from './css.js'
export const store = new Vuex.Store({
  state: {
    css: css.store
  },
  mutations: {
    ...css.mutations
  },
  getters: {
    ...css.getters
  }
})