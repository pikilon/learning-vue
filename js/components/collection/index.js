
import { template } from './view.js'
import question from '../new-question/index.js'

export default Vue.extend({
  template,
  components: { 'new-question': question },
  props: {
    slug: String
  }
})