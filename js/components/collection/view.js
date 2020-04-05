export const template = /*html*/
`
 <div>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(question, index) in questions"
        :key="question.statement + index"
        cols="12"
        sm="6"
        >
        <vue-question
          :collectionSlug="slug"
          :statement-slug="question.statement"
          :question-index="index"

        />
      </v-col>
      <v-col cols="12" sm="6">
        <vue-question :collectionSlug="slug" new />
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
