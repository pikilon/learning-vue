
import questions from './components/questions/index.js'
import newQuestion from './components/new-question/index.js'
import { QUESTION_TYPES, LOCAL_STORAGE_KEYS } from './constants.js'
import { localStorageSet, localStorageGetInitialize } from './utilities/localStorage.js'
import styles from './components/all-styles.js'
import { cloneToObject } from './utils/cloneToObject.js'
import { store } from './store/index.js'

var app = new Vue({
  components: { questions, newQuestion, styles },
  el: '#app',
  store,
  template: //html
  `<div class="container">
    <styles />
    <questions v-if="questions.length" v-bind:questions="questions" />
    <newQuestion @newQuestion="addQuestion"/>
  </div>`,
  data(){ return {
    questions: localStorageGetInitialize(LOCAL_STORAGE_KEYS.QUESTIONS, []),
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
  },
  computed: {
    randomAnswer(rightAnswer) { return this.questions.map(({answer}) => ({ answer, isRightAnswer: answer === rightAnswer })) },
    allStyles() {
      const result = Object.values(this.stylesDictionary).map(({styleString}) => styleString).join('\n\n')
      return result
    },
  }
})