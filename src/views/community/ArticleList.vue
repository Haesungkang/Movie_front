<template>
  <div>
    <h3>ArticleList</h3>
    <ul>
      <li v-for="(article) in articles"
        :key="article.id"
      >
        <span>{{ article.title }}</span>
        <button @click="deleteArticle(article)" class="article-btn">X</button>
      </li>
    </ul>
    <!-- <button @click="getTodos">Get Todos</button> -->
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ArticleList',
  data: function () {
    return {
      articles: [],
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
    getArticles: function () {
      const config = this.setToken()

      axios.get(`${SERVER_URL}/community/`, config)
        .then((res) => {
          // console.log(res)
          this.articles = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteArticle: function (article) {
      const config = this.setToken()

      axios.delete(`${SERVER_URL}/community/${article.id}/`, config)
        .then((res) => {
          // console.log(res)
          const targetArticleIdx = this.articles.findIndex((article) => {
            return article.id === res.data.id
          })
          this.articles.splice(targetArticleIdx, 1)
        })
        .catch((err) => {
          console.log(err)
        })
      },
    },
  created: function () {
    if (localStorage.getItem('jwt')) {
      this.getArticles()
    } else {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
  .article-btn {
    margin-left: 10px;
  }

  .completed {
    text-decoration: line-through;
    color: rgb(112, 112, 112);
  }
</style>
