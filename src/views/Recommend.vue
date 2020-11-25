<template>
  <v-container>
        <v-container>
       <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              color="green"
              class="criteriaSelector mx-3 mt-3"
              @click="sortBy('popularity')"
            >
              <v-icon left>mdi-account-heart</v-icon>
              <span class="caption text-lowercase">By popularity</span>
            </v-btn>
          </template>
          <span>Random Sort movies by popularity</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              color="green"
              class="criteriaSelector mx-3 mt-3"
              @click="sortBy('vote_average')"
            >
              <v-icon left>mdi-star</v-icon>
              <span class="caption text-lowercase">By rating</span>
            </v-btn>
          </template>
          <span>Random Sort movies by rating</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              color="green"
              class="criteriaSelector mx-3 mt-3"
              @click="sortBy('release_date')"
            >
              <v-icon left>mdi-calendar</v-icon>
              <span class="caption text-lowercase">By release date</span>
            </v-btn>
          </template>
          <span>Random Sort movies by release date</span>
        </v-tooltip>
    </v-container>
  <div class='home row' v-if="movies.length">
    <MovieCard v-for="(num, idx) in RandomMovieNums" :key="idx" :movie="movies[num]" 
    />
  </div> 
  </v-container>
</template>

<script>
import axios from "axios";
import _ from 'lodash'
import MovieCard from "@/components/MovieCard.vue";

export default {
    components: {
      MovieCard,
   },
    data() {
      return {
        movies: [],
        RandomMovieNums: [],
        sortCriteria: "Highest Rated",
        pageTitle: "Top Vote Average Movies",
        sortedBy: "vote_average",
        page: 1,
        showPagination: false
      }
    },
    methods: {
      
      sortBy(prop) {
      if (prop === "popularity") {
        this.sortCriteria = "Most Popular";
      } else if (prop === "vote_average") {
        this.sortCriteria = "Highest Rated";
      } else if (prop === "release_date") {
        this.sortCriteria = "Release Date";
      }
      this.sortedBy = prop;
      this.movies.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      },

      getMovie: function () {
        axios
          .get( 'http://127.0.0.1:8000/movie_info/')
          .then(response => {
            // handle success
            //console.log(response);
            this.movies = response.data;
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .finally(() => {
            // always executed
            this.sortBy("vote_average");
            this.showPagination = true;
          });
      },

      PickMovies: function () {
        const MovieIndex = _.range(1, 50)
        console.log(MovieIndex)
        this.RandomNums = _.sampleSize(MovieIndex, 10)
        this.RandomMovieNums = _.sortBy(this.RandomNums)
        console.log(this.RandomMovieNums)

      },

    },

    mounted() {
      this.init();
    },
    created: function () {
      this.getMovie();
      this.PickMovies();
      // console.log(this.movies)
    },
};
</script>

<style>

</style>
