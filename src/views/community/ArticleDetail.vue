<template>
  <div>
    <template id="article-content">
    <section class="grid">
      <h2>{{ $route.query.article.title}}</h2>
      <p>
        <b>User:</b> {{ $route.query.article.user }}
        <br>
        <b>Date:</b> {{ $route.query.article.created_at }}
        <br>
        <b>Content:</b> {{ $route.query.article.content }}
      </p>
      <br>
      <router-link v-bind:to="'/community'">Back</router-link>
    </section>
  </template>
  </div>
</template>

<script>
export default {
    name: 'ArticleDetail',
    props: {
        article: Object
    }
}
</script>

<style>

</style>