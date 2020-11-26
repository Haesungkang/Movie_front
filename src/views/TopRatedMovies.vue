<template>
  <v-container>
    <!-- <media-nav
      :pageTitle="pageTitle"
      :sortCriteria="sortCriteria"
      @popularity="sortBy('popularity')"
      @vote_average="sortBy('vote_average')"
      @release_date="sortBy('release_date')"
    ></media-nav> -->
    <!-- <media-grid :movies="movies"></media-grid> -->
    <v-container>
       <v-tooltip top >
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              class="criteriaSelector mx-3 mt-3 camel-sand"
              @click="sortBy('popularity')"
            >
              <v-icon left>mdi-account-heart</v-icon>
              <span class="caption text-lowercase">By popularity</span>
            </v-btn>
          </template>
          <span>Sort movies by popularity</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              class="criteriaSelector mx-3 mt-3 yolk-yellow"
              @click="sortBy('vote_average')"
            >
              <v-icon left>mdi-star</v-icon>
              <span class="caption text-lowercase">By rating</span>
            </v-btn>
          </template>
          <span>Sort movies by rating</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              small
              class="criteriaSelector mx-3 mt-3 dawn-corall"
              @click="sortBy('release_date')"
            >
              <v-icon left>mdi-calendar</v-icon>
              <span class="caption text-lowercase">By release date</span>
            </v-btn>
          </template>
          <span>Sort movies by release date</span>
        </v-tooltip>
    </v-container>
      <div class='home row'>
        <MovieCard v-for="(movie, idx) in movies" :key="idx" :movie="movie" :movies="movies"
        />
      </div>  
    <div class="text-center" v-if="showPagination">
      <v-pagination color="primary" v-model="page" :length="3" :value="page"></v-pagination>
    </div>
  </v-container>
</template>

<script>
  import axios from "axios";
  import MovieCard from "@/components/MovieCard.vue";
  // import Navbar from "@/components/Navbar.vue";

  export default {
    components: {
      // mediaGrid: MovieCard,
      // mediaNav: Navbar,
      MovieCard,
    },
    data() {
      return {
        movies: [],
        sortCriteria: "Most Popular",
        pageTitle: "Top Rated Movies",
        sortedBy: "popularity",
        page: 1,
        showPagination: false
      }
    },
    methods: {
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
            this.sortBy(this.sortedBy);
            this.showPagination = true;
          });
      },
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
      }
    },
    mounted() {
      this.init();
    },
    created: function () {
      this.getMovie()
    },
  };
</script>

<style>
.camel-sand {
  background-color: rgb(227, 207, 176) !important;
}

.yolk-yellow {
  background-color: rgb(251, 201, 109) !important;
}

.dawn-corall {
  background-color: rgb(239, 157, 112) !important;  
}
</style>
