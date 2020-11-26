<template>
<div>
<v-form>
<v-container class="signupstyle">
    <h2>SignUp</h2>

      <v-text-field max-width="500"
      label="Username"
      hide-details="auto"
      type="text"
      id="username"
      v-model="credentials.username"
      >
    </v-text-field>


      <v-text-field max-width="500"
      label="Password"
      hide-details="auto"
      type="password"
      id="password"
      v-model="credentials.password"
      >
      </v-text-field>

      <v-text-field max-width="500"
      label="passwordConfirmation"
      hide-details="auto"
      type="password"
      id="passwordConfirmation"
      v-model="credentials.passwordConfirmation"
      @keypress.enter="signup">
      </v-text-field>
</v-container>
</v-form>
</div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    signup: function () {
      axios.post(`${SERVER_URL}/accounts/signup/`, this.credentials)
        .then((res) => {
          console.log(res)
          this.$router.push({ name: 'Login' })
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