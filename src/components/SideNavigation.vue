<template>
  <div>
    <v-system-bar
  height="55"
  class="pl-0"
  v-if="this.$vuetify.breakpoint.xs" fixed app
><v-app-bar-nav-icon class="pl-5 system-icon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> <v-card-text class="text-center text--white title-name">
  Lars Ulbricht
</v-card-text>  </v-system-bar>
    <v-navigation-drawer
    v-model="drawer"
      app
      class="pt-4 drawer-index"
      :mini-variant="!this.$vuetify.breakpoint.xs"
      :permanent="!this.$vuetify.breakpoint.xs"
      :expand-on-hover="!this.$vuetify.breakpoint.xs"
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="../assets/profilfoto_small.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title
              class="text-h6"
              v-if="$vuetify.lang.current === 'ja'"
            >
              <ruby>
                {{ $vuetify.lang.locales[$vuetify.lang.current].name }}
                <rp>(</rp><rt>ラース ウルブリッヒト</rt><rp>)</rp>
              </ruby>
            </v-list-item-title>
            <v-list-item-title class="text-h6" v-else>
              {{ $vuetify.lang.locales[$vuetify.lang.current].name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              $vuetify.lang.locales[$vuetify.lang.current].profession
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="$vuetify.goTo('#about_head')">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-text-search</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].aboutme.title
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#education_head')">
          <v-list-item-icon>
            <v-icon>mdi-school</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].education.title
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#professional_head')">
          <v-list-item-icon>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].professional.title
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#hobby_head')">
          <v-list-item-icon>
            <v-icon>mdi-coffee</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].hobbys.title
          }}</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="$vuetify.goTo('#skills_head')">
          <v-list-item-icon>
            <v-icon>mdi-head-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].skills.title
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#certificate_head')">
          <v-list-item-icon>
            <v-icon>mdi-chevron-triple-up</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].certifications.title
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#links_head')">
          <v-list-item-icon>
            <v-icon>mdi-link</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].links.title
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#contact_head')">
          <v-list-item-icon>
            <v-icon>mdi-card-account-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            $vuetify.lang.locales[$vuetify.lang.current].contact.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "SideNavigation",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>
