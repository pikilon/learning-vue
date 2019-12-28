export const template = /*html*/
`
<v-form ref="form" v-model="valid" lazy-validation>
  <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required/>

  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required/>

  <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>

  <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required>
  </v-checkbox>

  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
    Validate
  </v-btn>

  <v-btn color="error" class="mr-4" @click="reset">
    Reset Form
  </v-btn>

  <v-btn color="warning" @click="resetValidation">
    Reset Validation
  </v-btn>
</v-form>
`