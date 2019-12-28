export const template = /*html*/
`
<v-app id="inspire">
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-pen</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>New</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>Simple Questions</v-toolbar-title>
  </v-app-bar>

  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
       <newCollection />
      </v-row>
    </v-container>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2019</span>
  </v-footer>
</v-app>
`
