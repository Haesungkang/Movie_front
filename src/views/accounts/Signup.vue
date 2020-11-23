<template>
<v-container>
  <div>
    <h2>SignUp</h2>
    <div>
      <v-text-field
      label="Username"
      hide-details="auto"
      type="text" v-model="credentials.username"
      >
    </v-text-field>
    </div>
    <div>
      <v-text-field
      label="Password"
      hide-details="auto"
      type="password"
      v-model="credentials.password"
      >
      </v-text-field>
    </div>
    <div>
      <v-text-field
      label="passwordConfirmation"
      hide-details="auto"
      type="password" 
      v-model="credentials.passwordConfirmation"
      @keypress.enter="signup">
      </v-text-field>
    </div>
  </div>
</v-container>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Singup',
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
