import { template, style as css } from './view.js';
import { arrayShuffle } from '../../utilities/arrayShuffle.js';
import cssMixin from '../../mixins/css.js'
import { QUESTIONS_STORE } from '../../store/questions.js';

const { mapState, mapGetters, mapMutations } = Vuex;

const name = 'questions'
export default Vue.extend({
  name,
  css,
  mixins: [cssMixin],
  template,
  data: () => ({ answers: [] }),
  methods: {
    ...mapMutations([QUESTIONS_STORE.MUTATIONS.REMOVE]),
    isRightAnswered(index){
      return this.answers[index] === this.questions[index].right
    }
  },
  computed: {
    ...mapState(['questions']),
    ...mapGetters([QUESTIONS_STORE.GETTERS.ANSWERS]),
  }
})