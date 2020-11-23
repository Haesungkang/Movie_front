<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'MovieList'}">Movie List</router-link> |
      <router-link :to="{ name: 'Recommend' }">Recommend</router-link> |
      <router-link :to="{ name: 'Community' }">Community</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import VueGlide from '@/components/Glide'
import VueGlideSlide from '@/components/GlideSlide'

export default {
  components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
