
import { template } from './view.js'
import question from '../question/index.js'
import { COLLECTIONS_STORE } from '../../store/collections.js';

const { mapState } = Vuex;

export default Vue.extend({
  template,
  components: { 'vue-question': question },
  props: {
    slug: String
  },
  computed: {
    ...mapState({
      allCollections: state => state.collections
    }),
    questions() {
      const collection = this.allCollections[this.slug]
      return collection.questions;
    },
  }
})