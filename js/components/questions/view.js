import { QUESTION_TYPES } from '../../constants.js'

export const cssSelectors = {
  question: 'question',
  question__color: 'question__color',
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
<section class="container">
  <div class="columns is-multiline">

    <article class="${s.question} column is-one-third" v-for="(question, index) in questions">
      <div class="box">
        <div class="columns is-vcentered">
        <div class="column">
          <button class="button" @click="removeQuestionIndex(index)">
            <span class="icon">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </div>
          <div class="column">
            <span v-if="question.type === '${QUESTION_TYPES.COLOR}'" class="${s.question__color}" :style="{backgroundColor: question.question}"></span>
          </div>
          <div class="column">
            <label v-for="answer in answers" class="${s.question__answer} is-block">
              <input type="radio" v-model="questions[index].answer" :value="answer" class="${s.question__checkbox}">
              {{answer}}
            </label>
          </div>
          <div class="column ${s.question__result}" v-if="questions[index].answer">
            <span :class="getIconColor(questions[index])">
              <i :class="getIconShape(questions[index])"></i>
            </span>
          </div>
      </div>
      </div>

    </article>
  </div>
</section>
`
