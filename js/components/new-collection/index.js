import { template } from './view.js'
import { COLLECTIONS_STORE } from '../../store/collections.js';

const TITLE_MIN_LENGTH = 4

export default Vue.extend({
  template,
  data: () => ({
    valid: true,
    title: '',
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length >= TITLE_MIN_LENGTH) || `Name must at leat than ${TITLE_MIN_LENGTH} characters`,
    ],
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        const payload = {
          title: this.title,
          slug: this.slug
        }
        this.$store.commit(COLLECTIONS_STORE.MUTATIONS.NEW, payload )
      }
    },
  },
  computed: {
    slug(){
      return _.kebabCase(this.title)
    }
  }
})