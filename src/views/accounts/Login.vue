<template>
<div>
  <v-form>
    <v-container class="loginstyle">
  
    <h2>Login</h2>
    

      <v-text-field max-width="500"
        label="User Name"
        hide-details="auto"
        type="text"
        id="username"
        v-model="credentials.username">
      </v-text-field>    

      <v-text-field max-width="500"
        label="Password"
        hide-details="auto"
        type="password"
        id="password" 
        v-model="credentials.password"
        @keypress.enter="login">
      </v-text-field>  

    </v-container>
  </v-form>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login: function () {
      axios.post(`${SERVER_URL}/accounts/api-token-auth/`, this.credentials)
        .then((res) => {
          // console.log(res)
          localStorage.setItem('jwt', res.data.token)
          // 20-11-25 12:43 현지의 발견: 아래 코드를 주석처리해야 로그인이 가능합니다..!
          // this.$emit('login')
          this.$store.state.isLogin = true
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.loginstyle{ 
  width: 500px;
  height: 800px;
}

</style>