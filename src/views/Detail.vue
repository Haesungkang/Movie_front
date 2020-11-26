<template>
  <v-container class="mx-auto" justify-center id="cardstyle">
    <v-card align-content-center justify-center class="text-center cardcolor" max-height="1900" max-width="500">
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
    <div v-for="comment in hiComments" :key="comment.id">
      {{ comment.content }}
    </div>
      <MovieCommentForm @write-comment="writeComment"/>
  </v-container>
</template>
<script>
import axios from 'axios'
import MovieCommentForm from '@/components/MovieCommentForm.vue'

// import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Detail',
  components: {
    MovieCommentForm,
  },
  props: {
   movie: Object
 },
 data() {
    return {
      
      creator: {
        avatar: 'http://via.placeholder.com/100x100/a74848',
        user: 'exampleCreator'
      },
      // username으로 받을수있게 설정 및 delete 마무리
      // avatar는 랜덤으로 색깔 배정
      current_user: {
        avatar: 'http://via.placeholder.com/100x100/a74848',
        user: this.userName
      },
      comments: []
    }
  },
  computed: {
  hiComments: function () {
    return this.comments
  }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },
    getComments: function () {
      const config = this.setToken()
      const movie = this.$route.query.movie
      axios.get(`${SERVER_URL}/nowplaying/${movie.id}/comment_list/`, config)
        .then(response => {
          this.comments = response.data
        })
        .catch(error => console.log(error))
    },
    writeComment(){
      this.getComments()
    }
  },
  created: function () {
    this.getComments()
  }
}
</script>

<style scoped>
/* #cardstyle {
  .cardcolor {
    background-color: rgb(145, 99, 65);
  }
} */
</style>