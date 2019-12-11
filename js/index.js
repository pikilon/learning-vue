
import { TAG as tagQuestion } from './components/questions/index.js'
import { TAG as newQuestion } from './components/new-question/index.js'
import { QUESTION_TYPES, LOCAL_STORAGE_KEYS } from './constants.js'
import { localStorageSet, localStorageGetInitialize } from './utilities/localStorage.js'

var app = new Vue({
  el: '#app',
  template: //html
  `<div>
    <${tagQuestion} v-bind:questions="questions"/>
    <${newQuestion} @newQuestion="addQuestion($event)"/>
  </div>`,
  data: {
    message: 'Hola Vue!',
    questions: localStorageGetInitialize(LOCAL_STORAGE_KEYS.QUESTIONS, [])
    ,
  },
  mounted() {
    console.log('JSON.parse(JSON.stringify(this.questions)', JSON.parse(JSON.stringify(this.questions)));
  },
  methods: {
    addQuestion(question) {
      this.questions.push(question)
      localStorageSet(LOCAL_STORAGE_KEYS.QUESTIONS, this.questions)
    },
    isAnswerRight (index) {
      return this.answers[index] === answer
    }
  },
  computed: {
    randomAnswer: function(rightAnswer) { return this.questions.map(({answer}) => ({ answer, isRightAnswer: answer === rightAnswer })) }
  }
})