
import { TAG as tagQuestion } from './components/questions/index.js';


var app = new Vue({
  el: '#app',
  template: //html
  `<div>
    <${tagQuestion} v-bind:questions="questions"/>
  </div>`,
  data: {
    message: 'Hola Vue!',
    questions: [
      { color: 'green', right: 'verde'},
      { color: 'blue', right: 'azul'},
      { color: 'yellow', right: 'amarillo'},
      { color: 'purple', right: 'Púrpura'},
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