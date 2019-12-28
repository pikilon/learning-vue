import { QUESTION_TYPES } from '../../constants.js'
import { QUESTIONS_STORE } from '../../store/questions.js';
export const cssSelectors = {
  question: 'question',
  question__color: 'question__color',
  question__image: 'question__image',
  question__text: 'question__text',
  question__answer: 'question__answer',
  question__result: 'question__result',
  question__checkbox: 'question__checkbox',
}
const s = cssSelectors;
const cssVars = {
  colorSize: '3rem',
}
export const style = //css
`
  .${s.question__result} {
    font-size: 2rem;
  }
  .${s.question__color} {
    display: block;
    width: ${cssVars.colorSize};
    height: ${cssVars.colorSize};
  }
`

export const template = // html
`
  <section class="columns is-multiline">
    <article class="${s.question} column is-one-third" v-for="(question, index) in questions">
      <div class="box">
        <div class="columns is-vcentered">
        <div class="column is-one-fifth">
          <button class="button" @click="${QUESTIONS_STORE.MUTATIONS.REMOVE}(index)">
            <span class="icon">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </div>
          <div class="column is-one-third">
            <span v-if="question.type === '${QUESTION_TYPES.COLOR}'" class="${s.question__color}" :style="{backgroundColor: question.question}"></span>
            <img v-if="question.type === '${QUESTION_TYPES.IMAGE}'" class="${s.question__image}" :src="question.question"></img>
            <span v-if="question.type === '${QUESTION_TYPES.TEXT}'" class="${s.question__text}">{{question.question}}</span>
          </div>
          <div class="column">
            <label v-for="answer in ${QUESTIONS_STORE.GETTERS.ANSWERS}" class="${s.question__answer} is-block">
              <input type="radio" v-model="answers[index]" :value="answer" class="${s.question__checkbox}">
              {{answer}}
            </label>
          </div>
          <div class="column ${s.question__result}" v-if="answers[index]">
            <span v-if="isRightAnswered(index)" class="icon has-text-success">
              <i class="fas fa-check"></i>
            </span>
            <span v-else class="icon has-text-danger">
              <i class="fas fa-times"></i>
            </span>

          </div>
      </div>
      </div>

    </article>
  </section>
`

