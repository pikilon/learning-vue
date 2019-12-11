import { QUESTION_TYPES } from '../../constants.js'
import {TAG as vStyle} from '../v-style.js'

export const selectors = {
  question: 'question',
  question__color: 'question__color',
  question__answer: 'question__answer',
  question__result: 'question__result',
  question__checkbox: 'question__checkbox',
}
const s = selectors;
const cssVars = {
  colorSize: '3rem',
}
export const style = //css
`
  .${s.question__result} {
    font-size: ${cssVars.colorSize};
  }
  .${s.question__color} {
    display: block;
    width: ${cssVars.colorSize};
    height: ${cssVars.colorSize};
  }
`

export const template = // html
`
<section class="container">
  <${vStyle}>${style}</${vStyle}>
  <article class="${s.question} box" v-for="(question, index) in questions">
    <div class="media">
      <div class="media-left">
        <span v-if="question.type === '${QUESTION_TYPES.COLOR}'" class="${s.question__color}" :style="{backgroundColor: question.question}"></span>
      </div>
      <div class="media-center">
        <label v-for="answer in answers" class="${s.question__answer} is-block">
          <input type="radio" v-model="questions[index].answer" :value="answer" class="${s.question__checkbox}">
          {{answer}}
        </label>
      </div>
      <div class="media-right ${s.question__result}" v-if="questions[index].answer">
        {{isAnswerRight(index) ? '✅' : '❌' }}
      </div>
  </div>

  </article>
</section>
`