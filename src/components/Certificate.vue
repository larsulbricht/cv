<template>
  <div>
    <v-banner elevation="3" single-line id="certificate_head"
      ><v-icon class="mr-4">mdi-chevron-triple-up</v-icon>Zertifikate</v-banner
    >
    <v-container class="d-flex flex-wrap justify-center justify-md-space-around">
      <v-card class="mt-4 ml-md-4 hobby-box" min-width="250px">
        <v-card-title primary-title>
           {{$vuetify.lang.locales[$vuetify.lang.current].certifications.aws1.name}}
        </v-card-title>
        <a
          target="_blank"
          href="https://www.credly.com/badges/e5e2fe04-3776-4ea8-a8c9-fb5df7d66b25/public_url"
        >
          <v-img
            class="mb-4"
            contain
            max-height="200px"
            src="./../assets/aws-certificate.png"
          >
          </v-img>
        </a>
      </v-card>

      <v-card class="mt-4 ml-md-4 hobby-box" min-width="250px">
        <v-card-title primary-title>
          {{$vuetify.lang.locales[$vuetify.lang.current].certifications.jlptn1.name}}
        </v-card-title>

        <a
          @click="
            dialog = true;
            (document_name = 'JLPT N1'),
              (links = ['jlpt_certificate_copy.png']);
          "
        >
          <v-img
            class="mb-4"
            contain
            max-height="200px"
            src="./../assets/jlpt_cert.png"
          >
          </v-img>
        </a>
      </v-card>

      <v-card class="mt-4 ml-md-4 hobby-box" min-width="250px">
        <v-card-title primary-title>
          {{$vuetify.lang.locales[$vuetify.lang.current].certifications.english_c2.name}}
        </v-card-title>

        <a
          @click="
            dialog = true;
            (document_name = 'CEFR C2'),
            (links = ['daad_C2_1_2.jpg', 'daad_C2_2_2.jpg']);
          "
        >
          <v-img
            class="mb-4"
            contain
            max-height="200px"
            src="./../assets/daad-cert.png"
          >
          </v-img>
        </a>
      </v-card>

      <v-row justify="center">
        <v-dialog v-model="dialog" width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ document_name }}</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                 {{$vuetify.lang.locales[$vuetify.lang.current].controls.close}}
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-carousel :show-arrows="false">
                <v-carousel-item v-for="link in links" :key="link"
                  ><v-img
                    :src="require(`@/assets/${link}`)"
                    height="100%"
                    backgroundsize="cover"
                    contain
                  ></v-img
                ></v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Certificate",
  data() {
    return {
      
      dialog: false,
      document_name: "",
      links: [],
    };
  },
};
</script>
