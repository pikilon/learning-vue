const STORE = 'collections'
export const COLLECTIONS_STORE = {
  STORE,
  MUTATIONS : {
    ADD: `${STORE}_add`,
    ADD_QUESTION_INDEX: `${STORE}_question_add`,
    REMOVE_QUESTION_INDEX: `${STORE}_question_remove`,
    SET_TITLE: `${STORE}_set_title`,
  },
}

const COLLECTION_DEFAULT_STATE = (title) => ({
  slug: _.kebabCase(title),
  title,
  questions: [],
})

const state = {}
const mutations = {
  [COLLECTIONS_STORE.MUTATIONS.SET_TITLE]: function(state, collectionSlug, title ) {
    const slug = _.kebabCase(title)
    const existing = state[collectionSlug]
    let toUpdate = { slug, title }
    if (existing) {
      toUpdate = {...existing, ...toUpdate}
      Vue.delete(state, collectionSlug)
    }
    Vue.set(state, slug, toUpdate)
  },
  [COLLECTIONS_STORE.MUTATIONS.ADD_QUESTION_INDEX]: function(state, collectionSlug, questionIndex) {
    state[collectionSlug].push(questionIndex)
  },
  [COLLECTIONS_STORE.MUTATIONS.SET_TITLE]: function(state, title) {
    const newCollection = COLLECTION_DEFAULT_STATE(title)
    Vue.set(state, newCollection.slug, newCollection)
  },

}


export default {
  state,
  mutations,
}