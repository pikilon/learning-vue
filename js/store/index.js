import css from './css.js'
import questions from './css.js'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: [ 'questions' ]
})

export const store = new Vuex.Store({
  modules: { css, questions },
  plugins: [ vuexLocal ],
})