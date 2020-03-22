export const QUESTIONS_STORE = {
  MUTATIONS : {
    ADD: 'questions_add',
    REMOVE: 'questions_remove',
  },
  GETTERS: {
    COLLECTION_QUESTIONS: 'collection_questions',
    ANSWERS: 'questions_answers',
    AMOUNT: 'questions_amount',
  },
}

const state = {}
const mutations = {
  [QUESTIONS_STORE.MUTATIONS.ADD]: function(state, question) {
    Vue.set(state, question.statement, question)

  },
  [QUESTIONS_STORE.MUTATIONS.REMOVE]: function(state, question) {
    Vue.delete(state, question.statement)
  }
}

const getters = {
  [QUESTIONS_STORE.GETTERS.COLLECTION_QUESTIONS]: state => statementsArray => statementsArray.map(statement => state[statement])
}


export default {
  state,
  mutations,
  getters,
}