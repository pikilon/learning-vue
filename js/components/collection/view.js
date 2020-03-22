export const template = /*html*/
`
 <div>collection: {{slug}} {{collection.questions.length}}
  <v-container fluid>
    <v-row>
      <v-col>
        <new-question />
      </v-col>
    </v-row>
  </v-container>

    <v-btn
      absolute
      dark
      fab
      bottom
      right
      color="indigo"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
 </div>
`
