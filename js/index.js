
import questions from './components/questions/index.js'
import newQuestion from './components/new-question/index.js'
import { QUESTION_TYPES, LOCAL_STORAGE_KEYS } from './constants.js'
import { localStorageSet, localStorageGetInitialize } from './utilities/localStorage.js'

var app = new Vue({
  components: { questions, newQuestion },
  el: '#app',
  template: //html
  `<div>
    <questions v-bind:questions="questions" @removeQuestionIndex="removeQuestionIndex($event)" />
    <newQuestion @newQuestion="addQuestion($event)"/>
  </div>`,
  data: {
    message: 'Hola Vue!',
    questions: localStorageGetInitialize(LOCAL_STORAGE_KEYS.QUESTIONS, [])
    ,
  },
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
    }
  },
  computed: {
    randomAnswer: function(rightAnswer) { return this.questions.map(({answer}) => ({ answer, isRightAnswer: answer === rightAnswer })) }
  }
})