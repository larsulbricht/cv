<template>
  <div>
    <v-banner elevation="3" single-line id="skills_head"
      ><v-icon class="mr-4">mdi-head-cog</v-icon>Skills</v-banner
    >
    <v-container class="d-flex flex-wrap flex-column">
      <v-expansion-panels multiple v-model="panel">
        <v-expansion-panel expand>
          <v-expansion-panel-header>{{
            $vuetify.lang.locales[$vuetify.lang.current].skills.frontend.name
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container class="d-flex flex-wrap justify-center">
              <skill-box
                :img_src="require('./../assets/html5.svg')"
                :score="5"
                subtitle="HTML5"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/css3.svg')"
                :score="5"
                subtitle="CSS3"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/js.svg')"
                :score="5"
                subtitle="JavaScript"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/vue.svg')"
                :score="5"
                subtitle="Vue.js"
              ></skill-box>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand>
          <v-expansion-panel-header>
            {{
              $vuetify.lang.locales[$vuetify.lang.current].skills.backend.name
            }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-container class="d-flex flex-wrap justify-center">
              <skill-box
                :img_src="require('./../assets/nodejs.svg')"
                :score="4"
                subtitle="Node.js"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/mongodb.svg')"
                :score="3"
                subtitle="MongoDB"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/mysql.png')"
                :score="5"
                subtitle="MySQL"
              ></skill-box>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand>
          <v-expansion-panel-header>
            {{
              $vuetify.lang.locales[$vuetify.lang.current].skills.blockchain
                .name
            }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-container class="d-flex flex-wrap justify-center">
              <skill-box
                :img_src="require('./../assets/solidity.png')"
                :score="3"
                subtitle="Solidity"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/truffle.svg')"
                :score="2"
                subtitle="Truffle Suite"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/hyperledger-fabric.png')"
                :score="3"
                subtitle="Hyperledger Fabric"
              ></skill-box>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand>
          <v-expansion-panel-header>{{
            $vuetify.lang.locales[$vuetify.lang.current].skills.data_science
              .name
          }}</v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-container class="d-flex flex-wrap justify-center">
              <skill-box
                :img_src="require('./../assets/python.svg')"
                :score="4"
                subtitle="Python"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/R.svg')"
                :score="3"
                subtitle="R"
              ></skill-box>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand>
          <v-expansion-panel-header>{{
            $vuetify.lang.locales[$vuetify.lang.current].skills.data_science
              .name
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container class="d-flex flex-wrap justify-center">
              <skill-box
                :img_src="
                  require('./../assets/ui_path_Logo_default_orange.png')
                "
                :score="3.5"
                subtitle="UiPath"
              ></skill-box>
              <skill-box
                :img_src="require('./../assets/aws.png')"
                :score="5"
                subtitle="AWS"
              ></skill-box>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import SkillBox from "./SkillBox.vue";

export default {
  name: "Skills",
  components: {
    SkillBox,
  },
  panel: [],
  computed: { 
    panel() {
        switch (this.$vuetify.breakpoint.name) {
        case 'xs': return [];
        default: return [0,1,2,3,4];
      }
    }
  }
};
</script>
