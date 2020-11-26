<template>
  <div>
    <template id="article-content">
    <section class="grid">
      <h2>{{ $route.query.article.title }}</h2>
      <p>
        <br>
        <b>Username:</b> {{ $route.query.article.user_name }}
        <br>
        <b>Date:</b> {{ $route.query.article.created_at | moment("YYYY-MM-DD") }}
        <br>
        <b>Content:</b> {{ $route.query.article.content }}
        <br>
      </p>

      <br>
      <router-link v-bind:to="'/community'">Back</router-link>
    </section>

  </template>

    <div v-for="comment in hiComments" :key="comment.id">
      {{ comment.content }}
    </div>
      <CommentForm @write-comment="writeComment"/>
  </div>
</template>

<script>
import axios from 'axios'
import CommentForm from '@/components/CommentForm.vue'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ArticleDetail',
  components: {
    CommentForm
  },

  props: {
    article: Object
  },

  data: function () {
    return {
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
      const article = this.$route.query.article
      axios.get(`${SERVER_URL}/community/${article.id}/comment_list/`, config)
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

<style>

</style>