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
        
        const articleId = this.$route.params.article_id
        console.log(articleId)
        const commentItem = {
          content: this.content,
        }
        axios.post(`${SERVER_URL}/community/${articleId}/comments/`, commentItem, this.setToken())
          .then(() => this.$emit('write-comment', articleId))
          .catch(error => console.log(error.response))
        this.content = ''
      }
    },
  }
}
</script>

<style>

</style>