<template>
  <div id="app">
    <div id="nav">
      <span v-if="login">
        <router-link :to="{ name: 'Home' }">Home</router-link> |
        <router-link :to="{ name: 'MovieList'}">Movie List</router-link> |
        <router-link :to="{ name: 'Recommend' }">Recommend</router-link> |
        <router-link :to="{ name: 'Community' }">Community</router-link> |
        <router-link @click.native="logout" to="#">Logout</router-link> 
      </span>
      <span v-else>
        <router-link :to="{ name: 'Signup' }">Signup</router-link> |
        <router-link :to="{ name: 'Login' }">Login</router-link> 
      </span>
    </div>
    <router-view @login="login = true"/>
  </div>
</template>

<script>
import VueGlide from '@/components/Glide'
import VueGlideSlide from '@/components/GlideSlide'

export default {
  name: 'App',
  data: function () {
    return {
      login: false,
    }
  },
  components: {
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  },
  methods: {
    logout: function () {
      localStorage.removeItem('jwt')
      this.login = false
      this.$router.push({ name: 'Login' })
    }
  },
  created: function () {
    const token = localStorage.getItem('jwt')

    if (token) {
      this.login = true
    }
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
