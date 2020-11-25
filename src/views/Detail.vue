<template>
  <v-container>
    <v-card>
    <v-img 
    :src="$route.query.movie.poster_path">
    </v-img>
    <v-card-title class="d-flex justify-center">
      {{ $route.query.movie.original_title }}
    </v-card-title>
    <v-card-text >
        <v-rating
          :value="($route.query.movie.vote_average)/2"
          background-color="amber lighten-3"
          color="amber"
          dense
          half-increments
          readonly
          size="30"
        ></v-rating>
        <div class="grey--text ml-4">
          {{ $route.query.movie.vote_average }}
        </div>
      <div class="grey--text ml-4" >
      {{ $route.query.movie.release_date }}
      </div>
      <div>
      {{ $route.query.movie.overview }}
      </div>
      <!-- 돌아갈떄 원래위치로 돌아가는 방법 -->
      <v-btn :to="{ name: 'MovieList' }">
        Back
      </v-btn>
    </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Detail',
  props: {
   movie: Object
 }
}
</script>

<style>

</style>