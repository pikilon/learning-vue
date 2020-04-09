export const template = /*html*/
`
<v-row align="center" justify="center">
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="title" :rules="titleRules" label="Collection title" required/>
    <v-text-field v-model="slug"  label="Collection slug" disabled/>

    <v-btn :disabled="!valid || !title" color="success" class="mr-4" @click="validate">
      Create
    </v-btn>

  </v-form>
</v-row>
`