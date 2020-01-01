import { COLLECTIONS_STORE } from "../../store/collections.js";

export const template = /*html*/
`
<v-list>
  <v-list-item tag="router-link" to="/">
    <v-list-item-icon>
      <v-icon>mdi-pen</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>New</v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <v-list-item v-for="link in ${COLLECTIONS_STORE.GETTERS.LINKS}" tag="router-link" :to="link.slug" :key="link.slug">
    <v-list-item-icon>
      <v-icon>mdi-checkbox-multiple-marked</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{link.title}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>

</v-list>
`