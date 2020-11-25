<template>
  <div>
    <!-- <h3>CreateArticle</h3>
    <input type="text" v-model.trim="title" @keypress.enter="createArticle">
    <input type="text" v-model.trim="content">
    <button @click="createArticle">+</button> -->
  
  <template id="add-article">
  <section>
    <h2>Create Article</h2>
    <form v-on:submit.prevent="createArticle">
      <label>Title</label>
      <br>
      <input type="text" v-model.trim="title" required>
      <br>
      <label>Content</label>
      <br>
      <textarea rows="8" v-model.trim="content" required></textarea>
      <!-- <label>Badass</label>
      <input type="number" min="0" max="10" v-model="hero.badass" required /> -->
      <br>
      <button type="submit" class="btn btn-main">Create</button>
      <router-link class="btn" v-bind:to="'/community'">Cancel</router-link>
    </form>
  </section>
  </template>
  
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
    createArticle: function () {
      const config = this.setToken()

      const articleItem = {
        title: this.title,
        content: this.content,
      }

      if (articleItem) {
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


<style>
  form  > label {
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
</style>