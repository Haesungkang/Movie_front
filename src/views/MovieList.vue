<template>
  <div>
      <h2>Movie List</h2>
      <ul
        v-for="movie in movies"
          :key="movie.id">
          <div class="card col-sm-12 col-md-4">
            <img class="card-img-top" :src="movie.poster_path" alt="Card image cap">
              <div class="card-body">
                <h5>{{ movie.title }}</h5>
                <p class="card-text">{{ movie.overview }}</p>
              </div>
          </div>
      </ul>
  </div>

  
</template>

<script>
import axios from 'axios'

export default {
    name: 'MovieList',
    data: function () {
      return {
        movies: [],
      }
    },
    methods: {
      getMovie: function () {
        axios.get('http://127.0.0.1:8000/movie_info/')
        .then(res => {
          this.movies = res.data
        })
        .catch(err => console.log(err))
      }
    },
    created: function () {
      this.getMovie()
    }
}
</script>

<style>

</style>