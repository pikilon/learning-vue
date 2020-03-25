
import { template } from './view.js'
import question from '../question/index.js'
import { COLLECTIONS_STORE } from '../../store/collections.js';

const { mapGetters } = Vuex;

export default Vue.extend({
  template,
  components: { 'new-question': question },
  props: {
    slug: String
  },
  computed: {
    ...mapGetters([COLLECTIONS_STORE.GETTERS.ONE]),
    collection() { return this[COLLECTIONS_STORE.GETTERS.ONE](this.slug)},
  }
})