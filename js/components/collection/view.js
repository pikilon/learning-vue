export const template = /*html*/
`
 <div>collection: {{slug}} {{questions.length}}
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <vue-question :collectionSlug="slug" new />
      </v-col>
      <v-col
        v-for="questionSlug in questions"
        :key="questionSlug"
        cols="12"
        sm="6"
        >
        <vue-question
          :collectionSlug="slug"
          :statement-slug="questionSlug"

        />
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
