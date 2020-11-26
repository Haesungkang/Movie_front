<template>
  <div>
    <h2>{{ $route.query.article.title }}</h2>
    <br>
    <br>
    <div>
      {{ hiComments }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ArticleDetail',
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
    }
  },
  created: function () {
    this.getComments()
  }
}
</script>

<style>

</style>