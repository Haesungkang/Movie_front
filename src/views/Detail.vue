<template>
  <div>
    <MovieCard v-for="(movie, idx) in movies" :key="idx" :movie="movie" :movies="movies"
    />
  </div>
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