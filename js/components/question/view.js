import { QUESTION_TYPES } from "../../constants.js"

const block = 'question'
const selectors = {
  block,
  preview: `${block}__preview`,
  innerTitle: `${block}__innerTitle`,
  evaluation: `${block}__evaluation`,
}
const s = selectors

export const template = /*html*/ `
<v-card :class="['mx-auto', '${s.block}', '${s.block}--' + type ]" max-width="400">
  <div class="${s.preview}" :style="styleColor">

    <v-card-text v-if="evaluation" class="${s.evaluation} text-right" >
        <v-btn class="mx-2" fab dark small :color="evaluation.color">
          <v-icon dark>{{evaluation.icon}}</v-icon>
        </v-btn>
    </v-card-text>

    <v-img v-if="imageReady" class="white--text align-end" height="200px" :src="statement">
      <v-card-title style="mix-blend-mode: difference;">{{title}}</v-card-title>
    </v-img>

    <v-card-title v-else class="${s.innerTitle}">
      {{title}}
    </v-card-title>
  </div>
  <v-card-text>
    <v-container v-if="isEditing">
      <v-row>
        <v-select v-model="type" :items="types" v-on:change="reset" label="Question Type" />

      </v-row>
      <v-row>
        <v-color-picker v-if="isColor" show-swatches hide-inputs v-model="statement" />
        <v-text-field v-else v-model="statement" type="text" label="Question Statement" v-on:change="statementChange"
          :placeholder="inputPlaceholder" />
      </v-row>
      <v-row>
        <v-text-field v-model="answer" label="Right answer" />
      </v-row>
      <v-row  justify="end">
        <v-btn :disabled="!isValid" color="success" @click="save">
          Save
        </v-btn>
      </v-row>

    </v-container>
    <v-container v-else>
      <v-row>
        <v-select v-model="suggestedAnswer" :items="answers" label="Choose answer" />
      </v-row>
      <v-row justify="end">
       <v-btn :disabled="!suggestedAnswer" color="success" @click="checkAnswer">
          Check
       </v-btn>
      </v-row>

    </v-container>
  </v-card-text>
</v-card>
`

export const style = /*css*/`
  .${s.preview} {
    min-height: 10em;
  }
  .${s.innerTitle} {
    color: white;
    mix-blend-mode: exclusion;
  }
  .${s.evaluation} {
    position: absolute;
  }
`