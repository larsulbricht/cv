<template>
  <div>
    <v-banner elevation="3" single-line id="certificate_head"
      ><v-icon class="mr-4">mdi-chevron-triple-up</v-icon> {{$vuetify.lang.locales[$vuetify.lang.current].certifications.title}}</v-banner
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
            dialog1 = true;
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
            dialog2 = true;
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

            <v-card class="mt-4 ml-md-4 hobby-box" min-width="250px">
        <v-card-title primary-title>
          {{$vuetify.lang.locales[$vuetify.lang.current].certifications.psm.name}}
        </v-card-title>

        <a
          target="_blank"
          href="https://www.credly.com/badges/8a3337c1-0d0d-4f58-956e-4ad152542f4b/public_url"
        >
          <v-img
            class="mb-4"
            contain
            max-height="200px"
            src="./../assets/BADGES_FINAL_PSM-I_600.png"
          >
          </v-img>
        </a>
      </v-card>

      <v-row justify="center">
        <v-dialog v-model="dialog1" width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">JLPT N1</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog1 = false">
                 {{$vuetify.lang.locales[$vuetify.lang.current].controls.close}}
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-carousel :show-arrows="false">
                <v-carousel-item
                  ><v-img
                    src="./../assets/jlpt_certificate_copy.png"
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

<v-row justify="center">
        <v-dialog v-model="dialog2" width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">CEFR C2</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog2 = false">
                 {{$vuetify.lang.locales[$vuetify.lang.current].controls.close}}
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <v-carousel :show-arrows="false">
                <v-carousel-item
                  ><v-img
                    src="./../assets/daad_C2_1_2.jpg"
                    height="100%"
                    backgroundsize="cover"
                    contain
                  ></v-img
                ></v-carousel-item>
                  <v-carousel-item
                  ><v-img
                    src="./../assets/daad_C2_2_2.jpg"
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
      
      dialog1: false,
      dialog2: false
    };
  },
};
</script>
