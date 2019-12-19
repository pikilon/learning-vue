import { cloneToObject } from '../utils/cloneToObject.js'

const store = {}
const mutations = {
  css_add: function(state, event) {
    const {key, styleString} = event
    const newStyles = cloneToObject(state.css)
    if (newStyles[key]) {
      newStyles[key].counter++
    } else {
      newStyles[key] = { counter: 1, styleString }
    }
    state.css = newStyles
  },
  css_remove: function(state, key) {
    if (!state.css[key]) return
    const newStyles = cloneToObject(state.css)
    if (newStyles[key].counter <= 1) {
      delete newStyles[key]
    } else {
      newStyles[key].counter--
    }
    state.css = newStyles
  }
}

const getters = {
  css_all: state => Object.values(state.css).map(({styleString}) => styleString).join('\n\n')
}

export default {
  store,
  mutations,
  getters,
}