<template>
  <v-container>
  <div class='home row'>
    <MovieCard v-for="(movie, idx) in movies" :key="idx" :movie="movie" :movies="movies"
    />
  </div> 
  </v-container>
</template>

<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";

export default {
    components: {
      // mediaGrid: MovieCard,
      // mediaNav: Navbar,
      MovieCard,
   },
    data() {
      return {
        movies: [],
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
      }
    },

    mounted() {
      this.init();
    },
    created: function () {
      this.getMovie();
      this.sortBy('vote_average');

    },
};
</script>

<style>

</style>