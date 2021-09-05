<template>

  <v-app id="lars-homepage">
    <side-navigation></side-navigation>
     <div id="lang_control" class="d-flex justify-end">
        <v-btn
          :disabled="$vuetify.lang.current == 'ja'"
          elevation="2"
          @click="$vuetify.lang.current = 'ja'"
          >JP</v-btn
        >
        <v-btn
          :disabled="$vuetify.lang.current == 'de'"
          elevation="2"
          @click="$vuetify.lang.current = 'de'"
          >DE</v-btn
        >
        <v-btn
          :disabled="$vuetify.lang.current == 'en'"
          elevation="2"
          @click="$vuetify.lang.current = 'en'"
          >EN</v-btn
        >
      </div>
    <v-main>
      <!--           
      <v-img  class="parallax pt-5" height="50vh" contain  src="/profilfoto.jpg" >
        <h1 class="text-h1 ml-6 black-text">Lars <br> Ulbricht</h1>
      </v-img>-->
  
      <v-card class="ml-0 mt-0">
        <v-img class="parallax pt-5 " height="100vh" >
          <h1
            id="black-text"
            :class="{ 'text-center': this.$vuetify.breakpoint.xs }"
            class="text-h1 mt-sm-10 ml-sm-10 name-title"
          >
            Lars <br v-if="!this.$vuetify.breakpoint.xs" />
            Ulbricht
          </h1>
          <div v-if="this.scrolled == 0" id="down_arrow">
            <v-icon
              @click="$vuetify.goTo('#about_head')"
              class="chevron bottom"
              color="black"
              size="6rem"
              >mdi-chevron-down</v-icon
            >
          </div>
        </v-img>
      </v-card>
      <v-banner class="mt-4" elevation="3" single-line id="about_head"
        ><v-icon class="mr-4">mdi-message</v-icon> Motto
      </v-banner>
      <v-card></v-card>
      <v-card-text
        :class="{
          'text-center': this.$vuetify.breakpoint.xs,
          'pl-13': this.$vuetify.breakpoint.sm,
        }"
        class="mt-4 mb-4 ml-sm-10"
        id="about_me_text"
      >
        <v-icon  :class="{
          'mr-2': this.$vuetify.breakpoint.sm,
        }" class="pb-8 quote-icon">mdi-format-quote-open</v-icon>
        Automate <br v-if="!this.$vuetify.breakpoint.xs" />
        <br v-if="!this.$vuetify.breakpoint.xs" />
        <br  v-if="!this.$vuetify.breakpoint.xs" />
        the boring part.
        <v-icon :class="{
          'mr-2': this.$vuetify.breakpoint.sm,
        }" class="pb-8 quote-icon">mdi-format-quote-close</v-icon>
      </v-card-text>
  

      <about-me></about-me>

      <v-col>
        <education></education>
        <work></work>
        <hobby></hobby>
        <skills></skills>
        <certificate></certificate>
        <links></links>
        <contact></contact>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import Education from "./components/Education.vue";
import SideNavigation from "./components/SideNavigation.vue";
import AboutMe from "./components/AboutMe.vue";
import Work from "./components/Work.vue";
import Hobby from "./components/Hobby.vue";
import Skills from "./components/Skills.vue";
import Certificate from "./components/Certificate.vue";
import Links from "./components/Links.vue";
import Contact from "./components/Contact.vue";

export default {
  title: "Lars Ulbricht - Homepage",
  name: "Homepage",
  components: {
    Education,
    SideNavigation,
    AboutMe,
    Work,
    Hobby,
    Skills,
    Certificate,
    Contact,
    Links,
  },
  theme: { dark: true },
  data() {
    return {
      scrolled: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      this.scrolled = e.target.documentElement.scrollTop;
    },
  },
};
</script>

<style>
@import "./assets/styles/style.css";
</style>
