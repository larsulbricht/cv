<template>
  <div>
    <v-banner elevation="3" single-line id="hobby_head"
      ><v-icon class="mr-4">mdi-coffee </v-icon>{{$vuetify.lang.locales[$vuetify.lang.current].hobbys.title}}</v-banner
    >
    <v-container class="d-flex flex-wrap justify-center justify-md-space-around">
      <v-card class="mb-4 mt-4 hobby-box" min-width="250px">
        <v-spacer></v-spacer>
        <v-banner two-line>
          <v-avatar slot="icon" color="#f7650a" size="40">
            <v-icon icon="mdi-earth" color="white">
              mdi-earth
            </v-icon>
          </v-avatar>
          <v-toolbar-title class="text-h6 white--text pl-0">
            {{$vuetify.lang.locales[$vuetify.lang.current].hobbys.japan.name}}
          </v-toolbar-title>
          {{$vuetify.lang.locales[$vuetify.lang.current].hobbys.japan.content}}
        </v-banner>
        <v-container class="ml-2 d-flex flex-wrap">
         <v-chip v-for="item in $vuetify.lang.locales[$vuetify.lang.current].hobbys.japan.tags" :key="item.message"  class="white--text ml-2 mt-2" color="#13300f" label>
            {{item}}
          </v-chip>
        </v-container>
      </v-card>

      <v-card class="mb-4 mt-4 hobby-box" min-width="250px">
        <v-spacer></v-spacer>
        <v-banner two-line>
          <v-avatar slot="icon" color="#f7650a" size="40">
            <v-icon icon="mdi-code-tags" color="white">
              mdi-code-tags
            </v-icon>
          </v-avatar>
          <v-toolbar-title class="text-h6 white--text pl-0">
            {{$vuetify.lang.locales[$vuetify.lang.current].hobbys.program.name}}
          </v-toolbar-title>
           {{$vuetify.lang.locales[$vuetify.lang.current].hobbys.program.content}}
        </v-banner>
        <v-container class="ml-2 d-flex flex-wrap">
       <v-chip v-for="item in $vuetify.lang.locales[$vuetify.lang.current].hobbys.program.tags" :key="item.message"  class="white--text ml-2 mt-2" color="#13300f" label>
            {{item}}
          </v-chip>
        </v-container>
      </v-card>

      <v-card class="mb-4 mt-4 hobby-box" min-width="250px">
        <v-spacer></v-spacer>
        <v-banner two-line>
          <v-avatar slot="icon" color="#f7650a" size="40">
            <v-icon icon="mdi-finance" color="white">
              mdi-finance
            </v-icon>
          </v-avatar>
          <v-toolbar-title class="text-h6 white--text pl-0">
           {{$vuetify.lang.locales[$vuetify.lang.current].hobbys.invest.name}}
          </v-toolbar-title>
          {{$vuetify.lang.locales[$vuetify.lang.current].hobbys.invest.content}}
        </v-banner>

        <v-container class="ml-2 d-flex flex-wrap">
          <v-chip v-for="item in $vuetify.lang.locales[$vuetify.lang.current].hobbys.invest.tags" :key="item.message"  class="white--text ml-2 mt-2" color="#13300f" label>
            {{item}}
          </v-chip>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Hobby",
};
</script>
