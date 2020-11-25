<template>
  <div>
      <h2>Let's talk about MOVIES!</h2>
      <ul>
        <router-link :to="{ name: 'ArticleList' }">Article List</router-link> | 
        <router-link :to="{ name: 'CreateArticle' }">Create Article</router-link> |
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Community',
    data: function () {
      return {
        articles: [],
      }
    },
    methods: {
      getArticle: function () {
        axios.get('http://127.0.0.1:8000/community/')
        .then(res => {
          this.articles = res.data
        })
        .catch(err => console.log(err))
      }
    },
    created: function () {
      this.getArticle()
    }
}
</script>

<style>

</style>
