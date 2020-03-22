const STORE = 'collections'
export const COLLECTIONS_STORE = {
  STORE,
  MUTATIONS : {
    ADD: `${STORE}_add`,
    ADD_QUESTION_INDEX: `${STORE}_question_add`,
    REMOVE_QUESTION_INDEX: `${STORE}_question_remove`,
    SET_TITLE: `${STORE}_set_title`,
    NEW: `${STORE}_new`,
  },
  GETTERS: {
    ONE: `${STORE}_get_one`,
    ONE_TITLE: `${STORE}_get_one_title`,
    LINKS: `${STORE}_links`,
  }
}

const state = {}
const mutations = {
  [COLLECTIONS_STORE.MUTATIONS.NEW]: function(state, titleSlug) {
    titleSlug.questions = []
    Vue.set(state, titleSlug.slug, titleSlug)
  },
}
const getters = {
  [COLLECTIONS_STORE.GETTERS.ONE]: state => slug => state[slug],
  [COLLECTIONS_STORE.GETTERS.ONE_TITLE]: state => slug => state[slug] ? state[slug].title : false,
  [COLLECTIONS_STORE.GETTERS.LINKS]: state => Object.values(state),
}


export default {
  state,
  mutations,
  getters,
}