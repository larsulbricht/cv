 <template>
 <div>
     <v-banner elevation="3" single-line
          id='links_head'><v-icon class="mr-4">mdi-link </v-icon> {{$vuetify.lang.locales[$vuetify.lang.current].links.title}}</v-banner
        >
 <v-list shaped class="mt-4 mb-4 ml-4 mr-4">
      <v-list-item-group>
        <v-list-item target="_blank" href="https://www.sueddeutsche.de/karriere/weiterbildung-pauken-und-plaudern-1.4005790">
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="'https://www.sueddeutsche.de/karriere/weiterbildung-pauken-und-plaudern-1.4005790'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item target="_blank" href="https://www.linkedin.com/in/lars-ulbricht/">
          <v-list-item-icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="'https://www.linkedin.com/in/lars-ulbricht/'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
 </div>
</template>


        <script>
  export default {
    name: 'AboutMe'
  }
</script>
