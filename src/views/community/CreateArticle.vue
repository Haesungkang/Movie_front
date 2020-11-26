<template>
  <div>
    <!-- <h3>CreateArticle</h3>
    <input type="text" v-model.trim="title" @keypress.enter="createArticle">
    <input type="text" v-model.trim="content">
    <button @click="createArticle">+</button> -->
  
  <template id="add-article">
  <v-containter class="addarticlestyle">
  <section>
    <h2>Create Article</h2>
    <form v-on:submit.prevent="createArticle" id="form">
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
  </v-containter>
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


<style lang="scss">
.addarticlestyle {
 width: 500px;
 height: 800px;
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

  #add-article {
  width: 70rem;
  margin: 4rem auto;
  padding: 4rem;
  border-radius: 0.3rem;
  background: #fff;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.10),
              0 0 3rem rgba(0, 0, 0, 0.03);
              
  section { width: 100%; }
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
    border: 0.1rem solid rgb(145, 99, 65);
    color:rgb(145, 99, 65); 
  }
  
  &.btn-main {
    border: 0;
    color: #fff;
    background: rgb( 206, 173, 155, 1);
    &:visited { color: #fff; }
    &:hover, &:focus { background:rgb(145, 99, 65); }
  }
}

</style>