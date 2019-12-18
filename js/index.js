
import questions from './components/questions/index.js'
import newQuestion from './components/new-question/index.js'
import { QUESTION_TYPES, LOCAL_STORAGE_KEYS } from './constants.js'
import { localStorageSet, localStorageGetInitialize } from './utilities/localStorage.js'
import vstyle from './components/v-style.js'
import { cloneToObject } from './utils/cloneToObject.js'

var app = new Vue({
  components: { questions, newQuestion, vstyle },
  el: '#app',
  template: //html
  `<div class="container">
    <vstyle>{{allStyles}}</vstyle>
    <questions v-if="questions.length && questionsComponents >= 1" v-bind:questions="questions" @removeQuestionIndex="removeQuestionIndex($event)" @addStyle="addStyle($event)"/>
    <newQuestion @newQuestion="addQuestion"/>
    <questions v-if="questions.length && questionsComponents >= 2" v-bind:questions="questions" @removeQuestionIndex="removeQuestionIndex($event)" @addStyle="addStyle($event)"/>
    <button @click="questionsComponents--">remove one question</button>
  </div>`,
  data(){ return {
    stylesDictionary: {},
    questionsComponents: 2,
    message: 'Hola Vue!',
    questions: localStorageGetInitialize(LOCAL_STORAGE_KEYS.QUESTIONS, [])
    ,
  }},
  methods: {
    store() {
      localStorageSet(LOCAL_STORAGE_KEYS.QUESTIONS, this.questions.map(({answer, ...rest}) => rest))
    },
    addQuestion(question) {
      this.questions.push(question)
      this.store()
    },
    removeQuestions(indexesArray) {
        const newQuestions = this.questions.reduce(
          (result, question, index) => {
            if (!indexesArray.includes(index)) result.push(question)
            return result
          },
          []
        )
        this.questions = newQuestions
        this.store()

    },
    removeQuestionIndex(questionIndex) {
      this.removeQuestions([questionIndex])
    },
    isAnswerRight (index) {
      return this.answers[index] === answer
    },
    addStyle(event) {
      const {key, styleString} = event
      const newStyles = cloneToObject(this.stylesDictionary)
      if (newStyles[key]) {
        newStyles[key].counter++
      } else {
        newStyles[key] = { counter: 1, styleString }
      }
      this.stylesDictionary = newStyles
    },
    deleteStyle(key) {
      if (!this.stylesDictionary[key]) return
      if (this.stylesDictionary[key].counter <= 1) {
        delete this.stylesDictionary[key]
      } else {
        this.stylesDictionary[key].counter = this.stylesDictionary[key].counter - 1
      }

     },
  },
  computed: {
    randomAnswer(rightAnswer) { return this.questions.map(({answer}) => ({ answer, isRightAnswer: answer === rightAnswer })) },
    allStyles() {
      const result = Object.values(this.stylesDictionary).map(({styleString}) => styleString).join('\n\n')
      return result
    },
  }
})