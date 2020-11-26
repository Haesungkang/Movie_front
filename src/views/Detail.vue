<template>
  <v-container>
    <v-card align-content-center justify-center class="text-center" max-height="1900" max-width="500">
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
    Comment Start
      <comments 
        :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
        :comments="comments"
        :current_user="current_user"
        @submit-comment="submitComment"
      ></comments>
  </v-container>
</template>
<script>
import Comments from '@/components/Comments.vue'

// import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    Comments
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
  methods: {
    submitComment: function(reply) {
      this.comments.push({
        id: this.comments.length + 1,
        user: this.current_user.user,
        avatar: this.current_user.avatar,
        text: reply
      });
    }
  }
}
</script>

<style>

</style>