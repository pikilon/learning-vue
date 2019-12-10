import { template } from './visual.js';
export const TAG = 'questions'

Vue.component(TAG, {
  template,
  props: ['questions'],
  methods: {
    isAnswerRight (index) {
      return this.answers[index] === answer
    }
  },
})