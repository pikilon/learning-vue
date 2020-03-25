import { QUESTION_TYPES } from '../../constants.js'
import { template, style as css } from './view.js'
import { QUESTIONS_STORE } from '../../store/questions.js'
import cssMixin from '../../mixins/css.js'

const { mapActions } = Vuex

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
  },
  data() {
    return {
      type: QUESTION_TYPES.TEXT,
      imageReady: false,
      imageError: '',
      statement: '',
      answer: '',
      isEditing: true,
      types: Object.values(QUESTION_TYPES),
    }
  },
  computed: {
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
    save() {
      if (!this.isValid) return
      const {statement, type, answer, collectionSlug} = this
      const question = {statement, type, answer}
      this[QUESTIONS_STORE.ACTIONS.ADD_TO_COLLECTION]({question, collectionSlug})
      this.reset()
    }
  },
})