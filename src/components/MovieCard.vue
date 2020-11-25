<template>
    <!-- // xs12 sm6 md4 lg3 -->
    <v-flex xs12 sm6 md4 lg3>
      <v-card hover class="ma-3" min-height="500" elevation="9">
        <v-layout column align-center fill-width class="text-center d-flex justify-center">
          <!-- height="700" aspect-ratio="9/16" -->
          <v-img max-height="380" @click="toDetail(movie)"
          :src="movie.poster_path"></v-img>
          <v-card-title class="font-weight-light">{{movie.title}}</v-card-title>
          <v-spacer></v-spacer>

          <v-card-text>
            <v-expansion-panels v-if="movie.overview" focusable>
              <v-expansion-panel id="synopsis">
                <v-expansion-panel-header>
                  <span class="text-center">줄거리</span>
                </v-expansion-panel-header >
                <v-expansion-panel-content >{{movie.overview}}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels disabled="disabled" v-else focusable>
              <v-expansion-panel id="synopsis">
                <v-expansion-panel-header>
                  <span class="text-center">줄거리가 없습니다</span>
                </v-expansion-panel-header >
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>

          <!-- v-model="movie.vote_average" -->
          <v-progress-linear
            buffer-value="100"
            background-color="green lighten-3"
            color="green"
            height="25"
            :value="movie.vote_average*10"
            class="font-weight-heavy my-5"
          >
          {{movie.vote_average}}
          </v-progress-linear>
        </v-layout>
      </v-card>
    </v-flex>
</template>


<!--<template>
  <div>
    <div class="card" style="width: 18rem;">
  <img :src="movie.poster_path" class="card-img-top">
  <div class="card-body">
    <p class="card-text">{{movie.overview}}</p>
  </div>
</div>
  </div>
</template>
-->

<script>
export default {
 name: "MovieCard",
 props: {
   movie: Object
 },
  // props: ["movies", "imageURL"],
  //   data() {
  //     return {};
  // }
  methods: {

    toDetail: function(movie) {
      this.$router.push({ name: "Detail", query : { movie : movie }})
    }
  }
}


</script>


<style  scoped>
  .v-card:hover {
    background: #bff0bb;
  }
  .v-card:hover #synopsis {
    /* background: #303030; */
    background: #ddf1d1;
  }
  #synopsis {
    background: #e3f1e6;
  }
</style>