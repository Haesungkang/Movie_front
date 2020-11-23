<template>
  <div id="app">
    <vue-glide class="demo" :bullet="true">
      <vue-glide-slide
        v-for="movie in movies"
        :key="movie.id">
        <img class="card-img-top" :src="movie.poster_path" alt="Card image cap">
      </vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
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
import VueGlide from '@/components/Glide.js'
import VueGlideSlide from '@/components/GlideSlide.vue'

export default {
    name: 'MovieList',
    data: function () {
      return {
        movies: [],
      }
    },
    components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .demo {
    .glide {
      &__slide {
        display: flex;
        border: 2px solid #ccc;
        height: 500px;
        align-items: center;
        justify-content: center;
        color: #aaa;
        font-size: 36px;
        font-weight: 600;
        border-radius: 5px;
        transition: all .3s;
        opacity: .3;
        &--active {
          border: none;
          color: #fff;
           opacity: 1;
          // background: linear-gradient(-45deg,#ed145b,#7b31f4);
          background-color: limegreen;
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