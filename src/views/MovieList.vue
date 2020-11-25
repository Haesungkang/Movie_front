<template>
  <div id="app">
    <v-content>
    <vue-glide class="demo" :bullet="true" v-if="movies.length">
      <vue-glide-slide v-for="(movie, idx) in movies" :key="idx" :movie="movie"
      >

        <v-layout column align-center fill-height class="text-center">
        <v-img 
        max-height="500" max-width="300" 
        :src="movie.poster_path"
        @click="toDetail(movie)"
        ></v-img>
        <!-- {{ movie.title }} -->

        <!-- <v-img :src="movie.poster_path"></v-img> -->
        <v-card-title >{{movie.title}}</v-card-title>
        </v-layout>
      </vue-glide-slide>
      <template slot="control">
        <button class="btn" data-glide-dir="<">PREVIOUS</button>
        <button class="btn" data-glide-dir=">">NEXT</button>
      </template>
    </vue-glide>
    </v-content>
  </div>

  <!-- <div>
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
  </div> -->
</template>

<script>
import axios from 'axios'
import VueGlide from '@/components/Glide'
import VueGlideSlide from '@/components/GlideSlide'
// import { Glide, GlideSlide } from 'vue-glide-js'

export default {
    name: 'MovieList',
    components: {
      [VueGlide.name]: VueGlide,
      [VueGlideSlide.name]: VueGlideSlide,

    },
    // props: {
    //   movies: Object
    // },

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
      },
      toDetail: function (movie) {
        this.$router.push({ name: "Detail", query : { movie : movie }})
      },

    },


    created: function () {
      this.getMovie()
    },

    
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .btn {
    border: #2c3e50;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    
  }
  .demo {
    .glide {
      &__slide {
        display: flex;
        border: 2px solid #ccc;

        height: 600px;
        align-items: center;
        justify-content: center;
        color: #aaa;
        font-size: 25px;
        font-weight: 600;
        border-radius: 5px;
        transition: all .3s;
        opacity: .3;
        &--active {
          border: none;
          color: #fff;
           opacity: 1;
          // background: linear-gradient(-45deg,#ed145b,#7b31f4);
          background-color: lightblue;
        }
      }
    }
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>