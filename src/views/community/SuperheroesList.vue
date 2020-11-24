<template>
<div>
<main id="app" class="grid">
  <h1><b>Article</b> list</h1>
  <hr>
  <router-view></router-view>
</main>

<template id="articles-list">
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
            <!-- <div @click="toDetail(article)">{{ article.title }}</div> -->
            <router-link v-bind:to="{name: 'article-content', params: {article_id: article.id}}">{{ article.title }}</router-link>
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
    <router-link class="btn btn-main" v-bind:to="{path: '/add-article'}">
      Add Article
    </router-link>
  </section>
</template>

<!-- <template id="article-content">
  <section class="grid">
    <h2>{{ article.title }}</h2>
    <p>
      <b>User:</b> {{ article.user }}
      <br>
      <b>Date:</b> {{ article.created_at }}
      <br>
      <b>Content:</b> {{ article.content }}
    </p>
    <br>
    <router-link v-bind:to="'/superheroeslist'">Back</router-link>
  </section>
</template> -->

<template id="add-article">
  <section>
    <h2>Add Article</h2>
    <form v-on:submit.prevent="createArticle">
      <label>Title</label>
      <input id="add-title" v-model="article.title" required />
      <label>Content</label>
      <textarea id="add-content" rows="8" v-model="article.content" required></textarea>
      <!-- <label>Badass</label>
      <input type="number" min="0" max="10" v-model="hero.badass" required /> -->
      <button type="submit" class="btn btn-main">Create</button>
      <router-link class="btn" v-bind:to="'/'">Cancel</router-link>
    </form>
  </section>
</template>

<!-- <template id="hero-edit">
  <section>
    <h2>Edit Hero</h2>
    <form v-on:submit.prevent="updateHero">
      <label>Name</label>
      <input v-model="hero.name" required />
      <label>Superpower</label>
      <textarea rows="10" v-model="hero.power"></textarea>
      <label>Badass</label>
      <input type="number" v-model="hero.badass" />
      <button type="submit" class="btn btn-main">Update</button>
      <router-link class="btn" v-bind:to="'/'">Cancel</router-link>
    </form>
  </section>
</template>

<template id="hero-delete">
  <section>
    <h2>Delete <b>{{ hero.name }}</b>?</h2>
    <form v-on:submit.prevent="deleteHero">
      <p>Are You sure? You want to delete
        <b>{{ hero.name }}</b> from this Universe?
        He will be very upset...
      </p>
      <button type="submit" class="btn btn-main">Delete</button>
      <router-link class="btn" v-bind:to="'/'">Cancel</router-link>
    </form>
  </section>
</template> -->

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
      },
    //   toDetail: function (article) {
    //       this.$router.push({name:'ArticleDetail', params: {'article_pk': '${article.pk}'}})
    //   },
      getNextId: function() {
          return (this.articles[this.articles.length-1].id+1);
        },
      createArticle: function() {
      let article = this.article;
      this.articles.push({
        id:     this.getNextId(),
        name:   article.user,
        title:  article.title,
        content: article.content
      });
      this.$router.push('/');
      }
    },
    created: function () {
      this.getArticle()
    }
}
</script>


<style>

</style>