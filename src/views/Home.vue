<template>
  <v-container>
    <v-layout align-center justify-space-around column fill-height wrap class="my-5 text-center">
      <h1
        class="display-3 my-3 font-weight-thin black--text my-5"
      >Discover Movies With 
      HyunJi JaeYoung HaeSung</h1>

      <v-img contain width="50vw" height="50vh" src="../assets/undraw_horror_movie.svg"></v-img>
      <!-- <v-img contain width="50vw" height="50vh" src="../assets/homepage.jpg"></v-img> -->

      <v-btn min-width="200" class="my-5 alpaca-brown" router to="/movie_info">Explore</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    }
  };
</script>

<style>
.yolk-yellow {
  background-color: rgb(251, 201, 109) !important;
}

.dawn-corall {
  background-color: rgb(239, 157, 112) !important;  
}

.alpaca-brown {
  color: white !important;
  background-color: rgb(145, 99, 65) !important;  
}
</style>