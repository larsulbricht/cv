<template>
  <div>
    <v-card-text>
      <v-img contain max-width="200px" height="100px" :src="img_src"></v-img>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
      <v-rating
        color="#fffff"
        background-color="grey"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        half-icon="mdi-star-half-full"
        half-increments
        length="5"
        readonly
        size="20"
        :value="score"
      ></v-rating>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ["img_src", "score", "subtitle"],
  name: "SkillBox",
};
</script>
