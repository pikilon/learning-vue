import { cloneToObject } from '../utils/cloneToObject.js'
import { localStorageSet } from '../utilities/localStorage.js'

export const QUESTIONS_STORE = {
  MUTATIONS : {
    ADD: 'questions_add',
    REMOVE: 'questions_remove',
  },
  GETTERS: {
    ANSWERS: 'questions_answers',
  },
}

const state = []
const mutations = {
  [QUESTIONS_STORE.MUTATIONS.ADD]: function(state, question) {
    state.push(question)
  },
  [QUESTIONS_STORE.MUTATIONS.REMOVE]: function(state, index) {
    Vue.delete(state, index)
  }
}

const getters = {
  [QUESTIONS_STORE.GETTERS.ANSWERS]: function(state) { return
    state.map(({answer}) => answer)
  }
}

export default {
  state,
  mutations,
  getters,
}