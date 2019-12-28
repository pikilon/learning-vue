import css from './css.js'
import questions from './questions.js'
import collections from './collections.js'

const vuexLocal = new window.VuexPersistence.VuexPersistence({
  storage: window.localStorage,
  modules: [ 'questions', 'collections' ]
})

export const store = new Vuex.Store({
  modules: { css, questions, collections },
  plugins: [ vuexLocal.plugin ],
})