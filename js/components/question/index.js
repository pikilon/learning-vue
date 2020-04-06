import { QUESTION_TYPES } from '../../constants.js'
import { template, style as css } from './view.js'
import cssMixin from '../../mixins/css.js'
import { COLLECTIONS_STORE } from '../../store/collections.js'

const { mapActions, mapState, mapGetters } = Vuex

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
    this.answer = this.question.answer
    this.type = this.question.type
    this.imageReady = true
  },
  computed: {
    ...mapGetters([COLLECTIONS_STORE.GETTERS.RANDOM_QUESTIONS]),
    ...mapState({ collections: state => state.collections }),
    statementFontSize() {
      const dontAlterText = this.isEditing || !this.isText || !this.statement
      if (dontAlterText) return undefined
      const BIGGEST_EM = 12;
      const BASE_EM = 1.25;
      const proportinalEm = _.round(BIGGEST_EM / this.statement.length, 2)

      if (proportinalEm > BASE_EM) return `font-size: ${proportinalEm}em`

    },
    collection() { return this.collections[this.collectionSlug]},
    question() { return this.collection.questions[this.questionIndex]},
    answers() { return this[COLLECTIONS_STORE.GETTERS.RANDOM_QUESTIONS][this.collectionSlug].questions.map(question => question.answer) },
    isImage() { return this.type === QUESTION_TYPES.IMAGE},
    isColor() { return this.type === QUESTION_TYPES.COLOR},
    isText() { return this.type === QUESTION_TYPES.TEXT},
    styleColor() { return this.isColor && this.statement && `background-color: ${this.statement}` },
    title() {
      if (this.type === QUESTION_TYPES.COLOR) return 'color'
      if (this.type === QUESTION_TYPES.IMAGE) return 'image'
      if (this.new) return 'New Question'
      return this.statement
    },
    imageStatement: {
      get: function() {
       return this.isImage && this.statement
      },
      set: function(newValue) {
        checkImageUrl(
          newValue,
          () => {
            this.statement = newValue
            this.imageError = ''
          },
          () => {this.imageError = 'This Url is not valid'},
        )
      },
    },

    isValid() { return this.type && this.statement && this.answer }
  },
  methods: {
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
      this.$store.commit(COLLECTIONS_STORE.MUTATIONS.REMOVE_QUESTION_INDEX, payload)
    },
    toggleEdition() { this.isEditing = !this.isEditing },
    save() {
      if (!this.isValid) return
      const {statement, type, answer, collectionSlug, questionIndex} = this
      const question = {statement, type, answer}
      const payload = {question, collectionSlug, questionIndex}
      if (this.new) {
        this.$store.commit(COLLECTIONS_STORE.MUTATIONS.ADD_QUESTION, payload)
        this.reset()
      } else {
        this.$store.commit(COLLECTIONS_STORE.MUTATIONS.UPDATE_QUESTION, payload)
        this.toggleEdition()
      }

    }
  },
})