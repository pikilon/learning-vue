export const QUESTIONS_STORE = {
  MUTATIONS : {
    ADD: 'questions_add',
    REMOVE: 'questions_remove',
  },
  GETTERS: {
    ANSWERS: 'questions_answers',
    AMOUNT: 'questions_amount',
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
  [QUESTIONS_STORE.GETTERS.ANSWERS]: function(state) {return _.shuffle(state.map(({right}) => right))},
  [QUESTIONS_STORE.GETTERS.AMOUNT]: function(state) {return state.length},
}

export default {
  state,
  mutations,
  getters,
}