

import app from './components/app/index.js'
import questions from './components/questions/index.js'
import newQuestion from './components/question/index.js'
import styles from './components/all-styles.js'
import { store } from './store/index.js'
import { QUESTIONS_STORE } from './store/questions.js'
import router from './routes/index.js'

const { mapGetters } = Vuex;

new Vue({
  components: { app, styles },
  el: '#app',
  vuetify: new Vuetify(),
  store,
  router,
  template: /*html*/
  `<div>
    <styles />
    <template>
      <app />
    </template>
  </div>
  `,
  computed: {
    ...mapGetters([QUESTIONS_STORE.GETTERS.AMOUNT])
  }
})

/*
components: { questions, newQuestion, styles },
el: '#app',
vuetify: new Vuetify(),
store,
template: //html
`<div class="container">
  <styles />
  <questions v-if="${QUESTIONS_STORE.GETTERS.AMOUNT}" />
  <newQuestion />
*/