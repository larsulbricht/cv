<template>
  <v-app id="lars-homepage">
    <div id="control-height" ref="control_height"></div>
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
        <v-img class="parallax pt-5 ">
          <div class="name-title-box">
            <h1
              id="black-text"
              :class="{ 'text-center': this.$vuetify.breakpoint.smAndDown }"
              class="text-h1 mt-sm-10 ml-sm-10 name-title"
            >
              Lars <br v-if="!this.$vuetify.breakpoint.smAndDown" />
              Ulbricht
            </h1>
          </div>
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
        ><v-icon class="mr-4">mdi-message</v-icon>
        {{ $vuetify.lang.locales[$vuetify.lang.current].motto.title }}
      </v-banner>
      <v-card></v-card>
      <v-card-text
        :class="{
          'text-center': this.$vuetify.breakpoint.smAndDown,
          'pl-13': this.$vuetify.breakpoint.sm,
        }"
        class="mt-4 mb-4 ml-sm-10"
        id="about_me_text"
      >
        <v-icon
          :class="{
            'mr-2': this.$vuetify.breakpoint.sm,
          }"
          class="pb-8 quote-icon"
          >mdi-format-quote-open</v-icon
        >
        {{ $vuetify.lang.locales[$vuetify.lang.current].motto.content_1_2 }}
        <br v-if="!this.$vuetify.breakpoint.smAndDown" />
        <br v-if="!this.$vuetify.breakpoint.smAndDown" />
        <br v-if="!this.$vuetify.breakpoint.smAndDown" />
        {{ $vuetify.lang.locales[$vuetify.lang.current].motto.content_2_2 }}
        <v-icon
          :class="{
            'mr-2': this.$vuetify.breakpoint.sm,
          }"
          class="pb-8 quote-icon"
          >mdi-format-quote-close</v-icon
        >
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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.0095;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

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
    window.addEventListener("resize", this.resetHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resetHeight);
  },
  mounted() {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("de")) {
      this.$vuetify.lang.current = "de";
    } else if (userLang.includes("en")) {
      this.$vuetify.lang.current = "en";
    } else if (userLang.includes("ja")) {
      this.$vuetify.lang.current == "ja";
    } else {
      this.$vuetify.lang.current = "en";
    }
  },
  methods: {
    handleScroll(e) {
      this.scrolled = e.target.documentElement.scrollTop;
    },
    resetHeight() {
      // reset the body height to that of the inner browser
      document.body.style.height = window.innerHeight + "px";
    },
  },
};
</script>

<style>
@import "./assets/styles/style.css";
</style>
