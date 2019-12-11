
import { TAG as tagQuestion } from './components/questions/index.js'
import { TAG as newQuestion } from './components/new-question/index.js'
import { QUESTION_TYPES } from './constants.js'


var app = new Vue({
  el: '#app',
  template: //html
  `<div>
    <${tagQuestion} v-bind:questions="questions"/>
    <${newQuestion} @newQuestion="addQuestion($event)"/>
  </div>`,
  data: {
    message: 'Hola Vue!',
    questions: [
      { type: QUESTION_TYPES.COLOR, question: 'green', right: 'verde'},
      { type: QUESTION_TYPES.COLOR, question: 'blue', right: 'azul'},
      { type: QUESTION_TYPES.COLOR, question: 'yellow', right: 'amarillo'},
      { type: QUESTION_TYPES.COLOR, question: 'purple', right: 'Púrpura'},
    ],

  },
  methods: {
    addQuestion(question) {
      this.questions.push(question)
    },
    isAnswerRight (index) {
      return this.answers[index] === answer
    }
  },
  computed: {
    randomAnswer: function(rightAnswer) { return this.questions.map(({answer}) => ({ answer, isRightAnswer: answer === rightAnswer })) }
  }
})