<template>
  <div>
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from '@/views/community/ArticleList'
import axios from 'axios'
export default {
    name: 'Community',
    components: {
      ArticleList
    },
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
      getArticle: function () {
        const config = this.setToken()
        axios.get('http://127.0.0.1:8000/community/', config)
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