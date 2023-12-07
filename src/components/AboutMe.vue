 <template >
 <div>
    <v-banner class="mt-4" elevation="3" single-line
          id='about_head'><v-icon class="mr-4">mdi-clipboard-text-search</v-icon>     {{$vuetify.lang.locales[$vuetify.lang.current].aboutme.title}}</v-banner
        >
       
        <v-card-text class="mt-4">
           {{$vuetify.lang.locales[$vuetify.lang.current].aboutme.content}}
        </v-card-text>
      
 </div>
</template>


        <script>
  export default {
    name: 'AboutMe'
  }
</script>
