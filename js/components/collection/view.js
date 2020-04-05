export const template = /*html*/
`
 <div>collection: {{slug}} {{questions.length}}
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(questionSlug, index) in questions"
        :key="questionSlug + index"
        cols="12"
        sm="6"
        >
        <vue-question
          :collectionSlug="slug"
          :statement-slug="questionSlug"
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
