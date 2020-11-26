<template>
  <div class="d-flex">
    <input class="form-control" placeholder="댓글 쓰기" v-model.trim="content" type="text" @keypress.enter="writeComment">
  </div>
</template>
<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CommentForm',
  data: function () {
    return {
      content: '',
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
    writeComment: function () {
      if (this.content) {
        
        const article = this.$route.query.article
        const commentItem = {
          content: this.content,
        }
        axios.post(`${SERVER_URL}/community/${article.id}/comments/`, commentItem, this.setToken())
          .then(() => this.$emit('write-comment', article.id))
          .catch(error => console.log(error.response))
        this.content = ''
      }
    },
  }
}
</script>

<style>

</style>