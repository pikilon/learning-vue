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
    GET_ONE: `${STORE}_get_one`
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
  [COLLECTIONS_STORE.GETTERS.GET_ONE]: (state, slug) => state[slug]
}


export default {
  state,
  mutations,
  getters,
}