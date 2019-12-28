import { template } from "./view.js"
import newCollection from "../new-collection/index.js"

export default Vue.extend({
  template,
  components: { newCollection },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  })
})