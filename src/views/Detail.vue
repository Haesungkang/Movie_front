<template>
  <v-container align-center class="mx-auto" justify-center id="cardstyle">
    <v-card align-content-center justify-center class="text-center cardcolor ml-10" max-height="1900" max-width="500">
    <v-img
    :src="$route.query.movie.poster_path">
    </v-img>
    <v-card-title class="d-flex justify-center">
      {{ $route.query.movie.title }}
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
      <router-link class="btn btn-main" v-bind:to="{ name: 'MovieList' }">
        Home
      </router-link>
    </v-card-text>
    </v-card>
    <!-- <div v-for="comment in hiComments" :key="comment.id">
      {{ comment.content }}
    </div> -->
    <table>
      <thead>
        <th>Username</th>
        <th>Comment</th>
      </thead>
      <tbody>
        <tr v-for="comment in hiComments" :key="comment.id" :comment="comment">
          <td>{{ comment.user_name }}</td>
          <td>{{ comment.content }}</td>
        </tr>
      </tbody>
    </table>
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

<style lang="scss">
table {
  width: 100%;
  margin: 2rem 0 4rem 0;
  border-spacing: 0;
  td, th {
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
  }
  th {
    padding: 2.0rem 1.0rem;
    text-align: center;
    font-size: 15px;
  }
  td {
    padding: 1.8rem 1.0rem;
    transition: all 0.3s ease;
    .btn { display: inline; }
  }
  tr:hover td { background: rgba(0, 0, 0, 0.03); }
}


#cardstyle {
  .cardcolor {
    background-color:rgba(255, 245, 224, 0.918);
  }
  .btn {
  display: block;
  width: 100%;
  margin: 2rem 0 2rem 0;
  padding: 1rem 2rem;  
  color: #111;
  background: transparent;
  border: 0.1rem solid #111;
  outline: 0;
  border-radius: 0.3rem;
  
  font: inherit;
  font-weight: bold;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  user-select: none;
  
  transition: all 0.25s ease;
  
  &:visited { color: #111; }
  &:hover, &:focus {
    border: 0.1rem solid rgb(145, 99, 65);
    color:rgb(145, 99, 65); 
  }
  
  &.btn-main {
    border: 0;
    color: #fff;
    background: rgb( 206, 173, 155, 1);
    &:visited { color: #fff; }
    &:hover, &:focus { background:rgb(145, 99, 65); }
  }
}
}
</style>