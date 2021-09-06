 <template>
 <div>
 <v-banner class="mt-4" elevation="3" single-line
          id='education_head' ><v-icon class="mr-4">mdi-school </v-icon> {{$vuetify.lang.locales[$vuetify.lang.current].education.title}}</v-banner
        >
        <v-timeline :dense="$vuetify.breakpoint.mobile">
          <v-timeline-item  color="#f7650a">
            <span slot="opposite">
              04/2019 – 03/2021 
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
                {{$vuetify.lang.locales[$vuetify.lang.current].education.education_master.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">04/2019 – 03/2021</v-subheader>
              </v-card-title>
              <v-card-text>
                 {{$vuetify.lang.locales[$vuetify.lang.current].education.education_master.description}}
              </v-card-text>
                             <v-chip
              class="white--text mb-4 ml-4"
              color="#f7650a"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_master.grade}}
            </v-chip>
            <v-chip
              class="white--text mb-4 ml-4"
              color="#13300f"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_master.degree}}
            </v-chip>
            </v-card></v-timeline-item
          >
           <v-timeline-item  color="#13300f">
            <span slot="opposite">
              09/2019 – 03/2020 
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
                {{$vuetify.lang.locales[$vuetify.lang.current].education.education_kyoto.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">04/2019 – 03/2020</v-subheader>
              </v-card-title>
              <v-card-text>
                 {{$vuetify.lang.locales[$vuetify.lang.current].education.education_kyoto.description}}
              </v-card-text>
                             <v-chip
              class="white--text mb-4 ml-4"
              color="#f7650a"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_kyoto.class}}
            </v-chip>
            <v-chip
              class="white--text mb-4 ml-4"
              color="#13300f"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_kyoto.degree}}
            </v-chip>
            </v-card></v-timeline-item
          >
           <v-timeline-item color="#f7650a">
            <span slot="opposite">
              10/2015 – 03/2019 
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_bachelor.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">10/2015 – 03/2019 </v-subheader>
              </v-card-title>
              <v-card-text>
                {{$vuetify.lang.locales[$vuetify.lang.current].education.education_bachelor.description}}
              </v-card-text>
                 <v-chip
              class="white--text mb-4 ml-4"
              color="#f7650a"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_bachelor.grade}}
            </v-chip>
<v-chip
              class="white--text mb-4 ml-4"
              color="#13300f"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_bachelor.degree}}
            </v-chip>
            </v-card></v-timeline-item
          >
           <v-timeline-item  color="#13300f">
            <span slot="opposite">
              09/2017 – 03/2018 
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
                {{$vuetify.lang.locales[$vuetify.lang.current].education.education_osaka.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">04/2019 – 03/2020</v-subheader>
              </v-card-title>
              <v-card-text>
                 {{$vuetify.lang.locales[$vuetify.lang.current].education.education_osaka.description}}
              </v-card-text>
                              <v-chip
              class="white--text mb-4 ml-4"
              color="#f7650a"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_osaka.class}}
            </v-chip>
                             <v-chip
              class="white--text mb-4 ml-4"
              color="#f7650a"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_osaka.circle}}
            </v-chip>
            <v-chip
              class="white--text mb-4 ml-4"
              color="#13300f"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_osaka.degree}}
            </v-chip>
            </v-card></v-timeline-item
          >
            <v-timeline-item color="#f7650a">
            <span slot="opposite">
              bis 07/2014
            </span>
            <v-card class="elevation-2">
              <v-card-title class="text-h7">
                 {{$vuetify.lang.locales[$vuetify.lang.current].education.education_school.name}} <v-subheader v-if="$vuetify.breakpoint.mobile">bis 07/2014</v-subheader>
              </v-card-title>
              <v-card-text>
                 {{$vuetify.lang.locales[$vuetify.lang.current].education.education_school.description}}	
              </v-card-text>
                           <v-chip
              class="white--text mb-4 ml-4"
              color="#f7650a"
              label
            >
               {{$vuetify.lang.locales[$vuetify.lang.current].education.education_school.grade}}
            </v-chip>
               <v-chip
              class="white--text mb-4 ml-4"
              color="#13300f"
              label
            >
                {{$vuetify.lang.locales[$vuetify.lang.current].education.education_school.degree}}
            </v-chip>
    
            </v-card></v-timeline-item
          >
        </v-timeline>
 </div>
</template>


        <script>
  export default {
    name: 'Education'
  }
</script>
