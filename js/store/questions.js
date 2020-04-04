import { COLLECTIONS_STORE } from './collections.js'

export const QUESTIONS_STORE = {
  MUTATIONS : {
    ADD: 'questions_add',
    REMOVE: 'questions_remove',
  },
  ACTIONS: {
    ADD_TO_COLLECTION: 'add_to_collection',
  },
  GETTERS: {
    RANDOM: 'random_questions',
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
const actions = {
  [QUESTIONS_STORE.ACTIONS.ADD_TO_COLLECTION]: ({commit}, {question, collectionSlug}) => {
    commit(QUESTIONS_STORE.MUTATIONS.ADD, question)
    commit(COLLECTIONS_STORE.MUTATIONS.ADD_QUESTION, {collectionSlug, questionStatement: question.statement})
  }
}

const getters = {
  [QUESTIONS_STORE.GETTERS.COLLECTION_QUESTIONS]: state => statementsArray => statementsArray.map(statement => state[statement]),
  [QUESTIONS_STORE.GETTERS.RANDOM]: state => _.shuffle(state),
}


export default {
  state,
  mutations,
  getters,
  actions,
}