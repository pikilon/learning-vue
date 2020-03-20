export const template = /*html*/
`
 <div>collection: {{slug}} {{collection.questions.length}}

    <new-question />
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
