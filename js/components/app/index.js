import { template } from "./view.js"
import newCollection from "../new-collection/index.js"

export default Vue.extend({
  template,
  components: { newCollection },
  mounted(){
    console.log('this.$route', this.$route);
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  })
})