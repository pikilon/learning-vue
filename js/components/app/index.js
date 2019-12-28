import { template } from "./view.js"

export default Vue.extend({
  template,
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  })
})