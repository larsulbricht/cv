 <template>
 <div>
 <v-banner elevation="3" single-line
          id='professional_head'><v-icon class="mr-4">mdi-briefcase </v-icon>{{$vuetify.lang.locales[$vuetify.lang.current].professional.title}}</v-banner
        >
                <v-timeline :dense="$vuetify.breakpoint.mobile">
          <v-timeline-item :color="config.color.main">
            <span slot="opposite">
              04/2021 – Jetzt 
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
                {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_deloitte.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">04/2021 – Jetzt</v-subheader>
              </v-card-title>
              <v-card-text>
                {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_deloitte.description}}
              </v-card-text>
                 <v-chip
              class="white--text mb-4 ml-4"
              :color="config.color.secondary"
              label
            >
              {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_deloitte.title}}
            </v-chip>             
            <v-chip
              class="white--text mb-4 ml-4"
              :color="config.color.secondary"
              label
            >
               Consultant
            </v-chip>
            </v-card></v-timeline-item
          >
           <v-timeline-item :color="config.color.main">
            <span slot="opposite">
              01/2019 – 06/2019 
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
               {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_fujitsu.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">01/2019 – 06/2019</v-subheader>
              </v-card-title>
              <v-card-text>
                {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_fujitsu.description}}
              </v-card-text>
                
<v-chip
              class="white--text mb-4 ml-4"
              :color="config.color.secondary"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_fujitsu.title}}
            </v-chip>
            </v-card></v-timeline-item
          >
            <v-timeline-item :color="config.color.main">
            <span slot="opposite">
              03/2017 - 04/2017
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
                {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_pwc.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">03/2017 - 04/2017</v-subheader>
              </v-card-title>
              <v-card-text>
                 {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_pwc.description}}
              </v-card-text>
               <v-chip
              class="white--text mb-4 ml-4"
              :color="config.color.secondary"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].professional.professional_pwc.title}}
            </v-chip>
    
            </v-card></v-timeline-item
          >
        </v-timeline>
 </div>
</template>


        <script>
import config from './../assets/config.json';
  export default {
    name: 'Work',
        data() {
        return {
            config
        };
    }
  }
</script>
