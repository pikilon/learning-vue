import {TAG as vStyle} from '../v-style.js'
export const selectors = {
  question: 'question',
  question__color: 'question__color',
  question__answers: 'question__answers',
  question__result: 'question__result',
}
const s = selectors;
export const style = //css
`
  .${s.question} {
    display: flex;
    font-size: 1rem;
  }
  .${s.question} + .${s.question} {
    margin-top: 1em;
  }
  .${s.question__color} {
    width: 1em;
    height: 1em;
  }
  .${s.question__answers} {
    position: relative;
    padding-right: 2em;
  }
`

export const template = // html
`
<ul>
  <${vStyle}>${style}</${vStyle}>
  <li class="${s.question}" v-for="(question, index) in questions">
    <span class="${s.question__color}" v-bind:style="{backgroundColor: question.color}"></span>
    <div class="${s.question__answers}">
      <label v-for="answer in answers">
        <input type="radio" v-model="questions[index].answer" :value="answer" class="${s.question__checkbox}">
        {{answer}}
      </label>
      <span v-if="questions[index].answer" className="${s.question__result}">{{questions[index].answer === questions[index].right ? '✅' : '❌' }}</span>
    </div>
  </li>
</ul>
`
