import { QUESTION_TYPES } from "../../constants.js"

const block = 'question'
const selectors = {
  block,
  preview: `${block}__preview`,
  innerTitle: `${block}__innerTitle`,
}
const s = selectors

export const template = /*html*/
  `<v-card
  :class="['mx-auto', '${s.block}', '${s.block}--' + type ]"
  max-width="400"
  >
    <div className="box ${s.preview}" :style="styleColor">
      <v-img
        v-if="imageReady"
        class="white--text align-end"
        height="200px"
        :src="statement"
      >
        <v-card-title style="mix-blend-mode: difference;">{{title}}</v-card-title>
      </v-img>

      <v-card-title v-else class="${s.innerTitle}">
        {{title}}
      </v-card-title>
    </div>
      <v-card-text>
        <v-container v-if="isEditing">


          <v-row>
            <v-select
              v-model="type"
              :items="types"
              v-on:change="reset"
              label="Question Type"
            />

          </v-row>
          <v-row>
            <v-color-picker v-if="isColor" v-model="statement" />
            <v-text-field v-else
              v-model="statement"
              type="text"
              label="Question Statement"
              v-on:change="statementChange"
              :placeholder="inputPlaceholder"
            />
          </v-row>
          <v-row>
            <v-text-field v-model="answer" label="Right answer" />
          </v-row>
          <v-row>
          <v-btn
            :disabled="!isValid"
            color="success"
            @click="save"
          >Save</v-btn>
          </v-row>


        </div>
      </v-container>
      </v-card-text>
  </v-card>
`

export const style =
/*css*/`
  .${s.preview} {
    min-height: 150px;
  }
  .${s.innerTitle} {
    color: white;
    mix-blend-mode: exclusion;
  }
`


/*

<div className="container">


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
*/