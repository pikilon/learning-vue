import { QUESTION_TYPES } from '../../constants.js'
import { template, style as css } from './view.js'
import { QUESTIONS_STORE } from '../../store/questions.js'
import cssMixin from '../../mixins/css.js'
import { COLLECTIONS_STORE } from '../../store/collections.js'

const { mapActions, mapState, mapGetters } = Vuex

const INPUT_PLACEHOLDERS = {
  [QUESTION_TYPES.TEXT]: 'EG: How Many days has September',
  [QUESTION_TYPES.COLOR]: 'Color code: #ff0000',
  [QUESTION_TYPES.IMAGE]: 'Image Url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg',
}
function checkImageUrl (url, goodCallback, badCallback) {
  const img = new Image();
  img.onload = goodCallback;
  img.onerror = badCallback;
  img.src = url;
}

export default Vue.extend({
  name: 'question',
  template,
  css,
  mixins: [cssMixin],
  props: {
    new: Boolean,
    collectionSlug: String,
    statementSlug: String,
    questionIndex: Number,
  },
  data() {
    return {
      type: QUESTION_TYPES.TEXT,
      statement: this.statementSlug || '',
      answer: '',

      suggestedAnswer: undefined,
      evaluation: undefined,
      imageReady: false,
      imageError: '',
      isEditing: this.new || false,
      types: Object.values(QUESTION_TYPES),
    }
  },
  created() {
    if (this.new) return
    const question = this.allQuestions[this.statementSlug]
    this.answer = question.answer
    this.type = question.type

  },
  computed: {
    ...mapGetters([COLLECTIONS_STORE.GETTERS.RANDOM_QUESTIONS]),
    ...mapState({
      allQuestions: state => state.questions,
    }),


    answers() {
      const { questions } = this[COLLECTIONS_STORE.GETTERS.RANDOM_QUESTIONS][this.collectionSlug]
      const randomAnswers = questions.map(questionKey => this.allQuestions[questionKey].answer)
      return randomAnswers
    },

    isNew() { return !this.statement },
    isImage() { return this.type === QUESTION_TYPES.IMAGE},
    isColor() { return this.type === QUESTION_TYPES.COLOR},
    styleColor() { return this.isColor && this.statement && `background-color: ${this.statement}` },
    title() {
      if (this.type === QUESTION_TYPES.COLOR) return 'color'
      if (this.type === QUESTION_TYPES.IMAGE) return 'image'
      if (this.isNew) return 'New Question'
      return this.statement
    },
    inputPlaceholder() { return INPUT_PLACEHOLDERS[this.type] },
    isValid() { return this.type && this.statement && this.answer }
  },
  methods: {
    ...mapActions([QUESTIONS_STORE.ACTIONS.ADD_TO_COLLECTION]),
    reset() {
      const { type } = this
      this.statement = ''
      this.answer = ''
      this.imageError = ''
      this.imageReady = false
    },
    isAnswerRight (answer) {
      return this.answer === answer
    },
    statementChange() {
      console.log('this.statement', this.statement);
      if (!this.isImage) return
      if (!this.statement) {
        this.imageError = ''
        return
      }
      checkImageUrl(
        this.statement,
        () => {
          this.imageReady = true
          this.imageError = ''
        },
        () => {this.imageError = 'This Url is not valid'},
      )
    },
    checkImage(url) {
      var img = new Image();
      img.onload = () => this.imageError = ''
      img.onerror = bad;
    },
    checkAnswer() {
      const answerIsRight = this.answer === this.suggestedAnswer
      this.evaluation = {
        icon: answerIsRight ? 'mdi-check' : 'mdi-close',
        color: answerIsRight ? 'green' : 'red',
      }
    },
    deleteQuestion() {
      const payload ={ collectionSlug: this.collectionSlug, questionIndex: this.questionIndex }
      console.log('payload', payload);
      this.$store.commit(COLLECTIONS_STORE.MUTATIONS.REMOVE_QUESTION_INDEX, payload)
    },
    toggleEdition() { this.isEditing = !this.isEditing },
    save() {
      if (!this.isValid) return
      const {statement, type, answer, collectionSlug} = this
      const question = {statement, type, answer}
      this[QUESTIONS_STORE.ACTIONS.ADD_TO_COLLECTION]({question, collectionSlug})
      if (this.new) {
        this.reset()
      } else {
        this.toggleEdition()
      }
    }
  },
})