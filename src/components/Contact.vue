<template>
  <div>
    <v-banner elevation="3" single-line id="contact_head"
      ><v-icon class="mr-4">mdi-card-account-phone </v-icon>Kontakt</v-banner
    >

    <v-responsive :aspect-ratio="1.545 / 1" class="mt-4"  max-width="800px">
      <v-card elevation="7" outlined tile min-width="100%" min-height="300px">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Consultant
            </div>
            <v-list-item-title class="text-h5 mb-1">
              Lars Ulbricht
            </v-list-item-title>
            <v-list-item-subtitle
              >Consultant / Digital, AI Controls und Algorithms / Risk
              Advisory</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="50%"
            ><v-img src="./../assets/deloitteWhite.webp"></v-img
          ></v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-list dense>
            <v-list-item-title>Kontakt</v-list-item-title>
            <v-list-item >
              <v-list-item-title class="mr-4">
                Email:
              </v-list-item-title>
              <a href="mailto:text@test.de">
                text@test.de
              </a>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="mr-4">
                Phone:
              </v-list-item-title>
              000/00000000
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="mr-4">
                Linkedin:
              </v-list-item-title>
              www.link.de
            </v-list-item>
          </v-list>
        </v-card-actions>
      </v-card>
    </v-responsive>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
