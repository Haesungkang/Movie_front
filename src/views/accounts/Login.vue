<template>
<v-card>
  <v-container>
  <div>
    <h2>Login</h2>
    
    <div>
      <v-text-field 
        label="User Name"
        hide-details="auto"
        type="text"
        id="username"
        v-model="credentials.username">
      </v-text-field>    
    </div>
    <div>
      <v-text-field
        label="Password"
        hide-details="auto"
        type="password"
        id="password" 
        v-model="credentials.password"
        @keypress.enter="login">
      </v-text-field>  
    </div>
  </div>
  </v-container>
</v-card>
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
          this.$emit('login')
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
