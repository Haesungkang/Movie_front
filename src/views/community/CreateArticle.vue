<template>
  <div>
    <h3>CreateArticle</h3>
    <input type="text" v-model.trim="title" @keypress.enter="createArticle">
    <input type="text" v-model.trim="content">
    <button @click="createArticle">+</button>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CreateArticle',
  data: function () {
    return {
      title: '',
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
    createArticle: function () {
      const config = this.setToken()

      const articleItem = {
        title: this.title,
        content: 'test',
      }

      if (articleItem.title) {
        axios.post(`${SERVER_URL}/community/`, articleItem, config)
          .then(() => {
            // console.log(res)
            this.$router.push({ name: 'ArticleList' })
          })
          .catch((err) => {
            console.log(err)
          })
        }
    },
  }
}
</script>
