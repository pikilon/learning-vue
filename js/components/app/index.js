import { template } from "./view.js"
import newCollection from "../new-collection/index.js"
import collection from "../collection/index.js"


export default Vue.extend({
  template,
  components: { newCollection, collection },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    collectionSlug() { return this.$route.params.collectionSlug },
  }
})