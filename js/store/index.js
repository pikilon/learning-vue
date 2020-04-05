import css from './css.js'
import collections from './collections.js'

const vuexLocal = new window.VuexPersistence.VuexPersistence({
  storage: window.localStorage,
  modules: [ 'collections' ]
})

export const store = new Vuex.Store({
  modules: { css, collections },
  plugins: [ vuexLocal.plugin ],
})