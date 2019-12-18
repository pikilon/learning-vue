import { cloneToObject } from '../utils/cloneToObject.js'

const store = {css: {body: { counter: 1, styleString: 'body {background: aqua}'}}}
const mutations = {
  addCss(state, event) {
    const {key, styleString} = event
    const newStyles = cloneToObject(state.css)
    if (newStyles[key]) {
      newStyles[key].counter++
    } else {
      newStyles[key] = { counter: 1, styleString }
    }
    state.css = newStyles
  },
  removeCss(state, key) {
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
  allCss: state => Object.values(state.css).map(({styleString}) => styleString).join('\n\n')
}

export default {
  store,
  mutations,
  getters,
}