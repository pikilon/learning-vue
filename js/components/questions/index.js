import { template } from './view.js';
import { arrayShuffle } from '../../utilities/arrayShuffle.js';
export const TAG = 'questions'


Vue.component(TAG, {
  template,
  props: ['questions'],
  data() {
    return {
      answers: arrayShuffle(this.questions.map(({right}) => right))
    }
  },
  methods: {
    isAnswerRight (index) {
      const question = this.questions[index]

      return question.answer === question.right
    }
  },
})