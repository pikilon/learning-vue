import { template } from './view.js'

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
          console.log('this.title', this.title);
        }
      },
    },
})