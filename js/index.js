
import questions from './components/questions/index.js'
import newQuestion from './components/new-question/index.js'
import styles from './components/all-styles.js'
import { store } from './store/index.js'
import { QUESTIONS_STORE } from './store/questions.js'

const { mapGetters } = Vuex;

var app = new Vue({
  components: { questions, newQuestion, styles },
  el: '#app',
  vuetify: new Vuetify(),
  store,
  template: //html
  `<div class="container">
    <styles />
    <questions v-if="${QUESTIONS_STORE.GETTERS.AMOUNT}" />
    <newQuestion />
    </div>`,
  computed: {
    ...mapGetters([QUESTIONS_STORE.GETTERS.AMOUNT])
  }
})