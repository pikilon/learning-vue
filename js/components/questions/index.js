import { template, style } from './view.js';
import { arrayShuffle } from '../../utilities/arrayShuffle.js';
import cssLifeCycle from '../../vue-decorators/cssLifeCycle.js';

const name = 'questions'
export default Vue.extend(cssLifeCycle(style, {
  name,
  template,
  props: ['questions'],
  data() {
    return {
      answers: arrayShuffle(this.questions.map(({right}) => right))
    }
  },
  watch: {
    questions() {
      if (this.answers.length === this.questions.length) return this.answers
      this.answers = arrayShuffle(this.questions.map(({right}) => right))
    }

  },
  methods: {
    isQuestionRight(question) { return question.answer === question.right },
    isAnswerRight (index) {
      const question = this.questions[index]

      return question.answer === question.right
    },
    removeQuestionIndex (index) {
      this.$emit('removeQuestionIndex', index)
    },
    getIconColor (question) {
      return ['icon', this.isQuestionRight(question) ? 'has-text-success' : 'has-text-danger']
    },
    getIconShape (question) {
      return ['fas', this.isQuestionRight(question) ? 'fa-check' : 'fa-times']
    }
  },
}))