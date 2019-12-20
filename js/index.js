
import questions from './components/questions/index.js'
import newQuestion from './components/new-question/index.js'
import styles from './components/all-styles.js'
import { store } from './store/index.js'
import { QUESTIONS_STORE } from './store/questions.js'

const { mapGetters } = Vuex;

var app = new Vue({
  components: { questions, newQuestion, styles },
  el: '#app',
  store,
  template: //html
  `<div class="container">
    <styles />
    <questions v-if="${QUESTIONS_STORE.GETTERS.AMOUNT}" />
    <newQuestion />
    </div>`,
  methods: {
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
    ...mapGetters([QUESTIONS_STORE.GETTERS.AMOUNT])
  }
})