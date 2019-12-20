import css from './css.js'
import questions from './questions.js'

const vuexLocal = new window.VuexPersistence.VuexPersistence({
  storage: window.localStorage,
  modules: [ 'questions' ]
})

export const store = new Vuex.Store({
  modules: { css, questions },
  plugins: [ vuexLocal.plugin ],
})