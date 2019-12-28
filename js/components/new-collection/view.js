import { QUESTION_TYPES } from "../../constants.js"

const selectors = {
  preview: 'newQuestion__preview'
}
const s = selectors

export const template = // html
`
<div className="container">
  <div className="box ${s.preview}" v-if="isImageQuestionReady()">
    <img :src="question.question" alt="preview" @error="resetQuestion"/>
  </div>

  <div class="field is-grouped">
    <div className="control">
      <div class="select">
        <select v-model="question.type" v-on:change="resetQuestion">
          <option value="">Question Type</option>
          <option v-for="type in types">{{type}}</option>
        </select>
      </div>
    </div>
    <div className="control" v-if="question.type">
      <input v-if="question.type === '${QUESTION_TYPES.COLOR}'" type="color" v-model="question.question"/>
      <input v-if="question.type === '${QUESTION_TYPES.IMAGE}'" type="text" v-model="question.question" placeholder="paste image URL"/>
      <input v-if="question.type === '${QUESTION_TYPES.TEXT}'" type="text" v-model="question.question" />
    </div>
    <div className="control" v-if="showRight()">
    <input type="text" v-model="question.right"/>
  </div>
    <div class="control" v-if="question.type && question.question && question.right">
      <button class="button is-link" @click="submitQuestion">Add it</button>
    </div>
  </div>
</div>
`