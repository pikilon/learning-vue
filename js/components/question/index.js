import { QUESTION_TYPES } from '../../constants.js'
import { template } from './view.js'
import { QUESTIONS_STORE } from '../../store/questions.js'

const INPUT_PLACEHOLDERS = {
  [QUESTION_TYPES.TEXT]: 'EG: How Many days has September',
  [QUESTION_TYPES.COLOR]: 'Color code: #ff0000',
  [QUESTION_TYPES.IMAGE]: 'Image Url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg',

}

export default Vue.extend({
  template,
  props: {
    new: Boolean,
  },
  data() {
    return {
      type: QUESTION_TYPES.TEXT,
      statement: '',
      answer: '',
      isEditing: true,
      types: Object.values(QUESTION_TYPES),
    }
  },
  computed: {
    isNew() { return !this.statement },
    isImage() { return this.type === QUESTION_TYPES.IMAGE},
    isColor() { return this.type === QUESTION_TYPES.COLOR},

    imgSrc() { return !this.isNew && this.type !== QUESTION_TYPES.IMAGE && this.question.statement },
    title() {
      if (this.type === QUESTION_TYPES.COLOR) return 'color'
      if (this.type === QUESTION_TYPES.IMAGE) return 'image'
      if (this.isNew) return 'New Question'
      return this.statement
    },
    inputPlaceholder() { return INPUT_PLACEHOLDERS[this.type] },
    isValid() { return this.type && this.statement && this.answer }
  },
  methods: {
    isImageType() {
      return this.type === QUESTION_TYPES.IMAGE
    },
    reset() {
      const { type } = this
      this.statement = ''
      this.answer = ''
    },
    isAnswerRight (answer) {
      return this.answer === answer
    },
    save() {
      const {statement, type, answer} = this
      const question = {statement, type, answer}
      return console.log('question', question);
      // this.$store.commit(QUESTIONS_STORE.MUTATIONS.ADD, {statement, type, answer})
      // this.resetQuestion()
    }
  },
})