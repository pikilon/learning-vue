import { template } from './visual.js';

Vue.component('questions', {
  template,
  props: ['questions'],
  methods: {
    isAnswerRight (index) {
      return this.answers[index] === answer
    }
  },
})