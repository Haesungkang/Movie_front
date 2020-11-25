<template>
  <div>
  <main id="app" class="grid">
    <h1><b>Article</b> list</h1>
    <hr>
    <section>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Title</th>
            <th>Date</th>
            <!-- <th>Actions</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, idx) in articles"
          :key="idx">
            <td>{{ article.user }}</td>
            <td>
              <div @click="toDetail(article)">{{ article.title }}</div>
              <!-- <router-link v-bind:to="{name: 'ArticleDetail', params: {article_id: article.id}}">{{ article.title }}</router-link> -->
            </td>
            <td>{{ article.created_at }}</td>
            <!-- <td>
              <router-link v-bind:to="{name: 'hero-edit', params: {hero_id: hero.id}}">
                Edit
              </router-link>
              <span> / </span>
              <router-link v-bind:to="{name: 'hero-delete', params: {hero_id: hero.id}}">
                Delete
              </router-link>
            </td> -->
          </tr>
        </tbody>
      </table>
      <router-link class="btn btn-main" v-bind:to="{path: '/community/createarticle'}">
        Add Article
      </router-link>
    </section>
    <router-view></router-view>
  </main>

  <!-- <ul>
  <li v-for="(article) in articles"
    :key="article.id"
    >
    <span>{{ article.title }}</span>
    <button @click="deleteArticle(article)" class="article-btn">X</button>
  </li>
  </ul>
  <button @click="getTodos">Get Todos</button> -->
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
    toDetail: function (article) {
      this.$router.push({name:'ArticleDetail', query : {article: article}} )
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

  *, *:after, *:before { box-sizing: inherit; }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: 1.8rem;
    color: #111;  
    background: #f4f4f4;
  }

  h1, h2 {
    margin: 0 0 1rem 0;
    font-weight: normal;
    text-align: center;
  }
  b { font-weight: bold; }
  p { 
    margin: 0;
    line-height: 2.0;
  }

  a {
    color: #111;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.10); 
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: #f04;
      border-bottom: 0.1rem solid #f04; 
    }
  }

  hr {
    width: 70%;
    margin: 0 auto 2rem;
    border: 0;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  }

  form {
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    input, textarea {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      min-height: 2rem;
      margin: 0 0 1rem 0;
      padding: 0.5rem;
      font: inherit;
      font-size: 1.6rem;
      border: 0.1rem solid rgba(0, 0, 0, 0.1);
    }
  }

  table {
    width: 100%;
    margin: 2rem 0 4rem 0;
    border-spacing: 0;
    td, th {
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
    }
    th {
      padding: 2.0rem 1.0rem;
      text-align: left;
    }
    td {
      padding: 1.8rem 1.0rem;
      transition: all 0.3s ease;
      .btn { display: inline; }
    }
    tr:hover td { background: rgba(0, 0, 0, 0.03); }
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
      border: 0.1rem solid #f04;
      color: #f04; 
    }
    
    &.btn-main {
      border: 0;
      color: #fff;
      background: #44a;
      &:visited { color: #fff; }
      &:hover, &:focus { background: #f04; }
    }
  }

  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #app {
    width: 70rem;
    margin: 4rem auto;
    padding: 4rem;
    border-radius: 0.3rem;
    background: #fff;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.10),
                0 0 3rem rgba(0, 0, 0, 0.03);
                
    section { width: 100%; }
  }

  @media only screen and (max-width: 48.0rem) {
    #app { width: 90%; }
  }
</style>
