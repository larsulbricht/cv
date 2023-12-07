<template>
  <div>
    <v-banner elevation="3" single-line id="contact_head"
      ><v-icon class="mr-4">mdi-card-account-phone </v-icon> {{$vuetify.lang.locales[$vuetify.lang.current].contact.title}}</v-banner
    >

<div class="d-flex flex-wrap">
<v-card class="contact-card" elevation="7" outlined tile width="400px">
<div class="card back">
  <div class="personal-info">
    <p>Lars Ulbricht</p>
    <p>Consultant</p>
    <p><v-icon class="mr-2">mdi-map-marker</v-icon>Düsseldorf</p>
    <p><v-icon class="mr-2">mdi-account-box</v-icon><a>https://larsulbricht.github.io/cv/</a></p>
    <p><v-icon class="mr-2">mdi-linkedin</v-icon><a>https://www.linkedin.com/in/lars-ulbricht/</a></p>
    <p><v-icon class="mr-2">mdi-twitter</v-icon><a>@decentralars</a></p>
  </div>
    </div>
      </v-card>
</div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
