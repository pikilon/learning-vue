
import { TAG as tagQuestion } from './components/questions/index.js';
import { QUESTION_TYPES } from './constants.js';


var app = new Vue({
  el: '#app',
  template: //html
  `<div>
    <${tagQuestion} v-bind:questions="questions"/>
  </div>`,
  data: {
    message: 'Hola Vue!',
    questions: [
      { type: QUESTION_TYPES.COLOR, color: 'green', right: 'verde'},
      { type: QUESTION_TYPES.COLOR, color: 'blue', right: 'azul'},
      { type: QUESTION_TYPES.COLOR, color: 'yellow', right: 'amarillo'},
      { type: QUESTION_TYPES.COLOR, color: 'purple', right: 'Púrpura'},
    ],

  },
  methods: {
    isAnswerRight (index) {
      return this.answers[index] === answer
    }
  },
  computed: {
    randomAnswer: function(rightAnswer) { return this.questions.map(({answer}) => ({ answer, isRightAnswer: answer === rightAnswer })) }
  }
})