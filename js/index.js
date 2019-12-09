// Vue.component('my-button',{
//   template: //html
//   `
//     <button>My button</button>
//   `
// })
import './components/my-button.js';


var app = new Vue({
  el: '#app',
  template: //html
  `<div>
  <link rel="stylesheet" href="questions.css" />
    <form action="#">
      <ul>
        <li class="question" v-for="(question, index) in questions">
          <span class="question__color" v-bind:style="{backgroundColor: question.color}"></span>
          <div class="question__answers">
            <label v-for="answer in questions">
              <input type="checkbox" v-model="questions[index].answer" :value="answer.right" v-bind:class="['question__checkbox', {isActive: question.right === answer.answer}]">
              {{answer.right}}

            </label>
            <span className="question__result"></span>
          </div>

        </li>
      </ul>
    </form>
    <my-button />
  </div>`,
  data: {
    message: 'Hola Vue!',
    questions: [
      { color: 'green', right: 'verde', answer: '' },
      { color: 'blue', right: 'azul', answer: '' },
      { color: 'yellow', right: 'amarillo', answer: '' },
      { color: 'purple', right: 'Púrpura', answer: '' },
    ],

  },
  methods: {
    selectAnswer (index, e) {
      console.log('e', e.target.checked);
      this.answers[index] = e.target.checked ? e.target.value : '';
      console.log('this.answers', this.answers);
    },
    isChecked (index, answer) {
      return this.answers[index] === answer
    }
  },
  computed: {
    randomAnswer: function(rightAnswer) { return this.questions.map(({answer}) => ({ answer, isRightAnswer: answer === rightAnswer })) }
  }
})


console.log('app', app);