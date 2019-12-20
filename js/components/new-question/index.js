import { QUESTION_TYPES } from '../../constants.js'
import { template } from './view.js'
import { QUESTIONS_STORE } from '../../store/questions.js'

const defaultQuestion = () => ({ type: '', question: '', right: ''})

export default Vue.extend({
  template,
  data() {
    return {
      types: Object.values(QUESTION_TYPES),
      question: defaultQuestion()
    }
  },
  methods: {
    isImageType() {
      return this.question.type === QUESTION_TYPES.IMAGE
    },
    isImageQuestionReady() {

      return this.isImageType()
          && (  this.question.question.includes('.png')
                || this.question.question.includes('.jpg')
                || this.question.question.includes('.svg')
             )
    },
    showRight() {
      if (!this.isImageType()) return this.question.type && this.question.question
      return this.isImageQuestionReady()
    },
    resetQuestion() {
      const { type } = this.question
      this.question = defaultQuestion()
      this.question.type = type
    },
    isAnswerRight (index) {
      return this.answers[index] === answer
    },
    submitQuestion() {
      this.$store.commit(QUESTIONS_STORE.MUTATIONS.ADD, {...this.question })
      this.resetQuestion()
    }
  },
})