<template>
  <nav>
    <v-app-bar class="soft-mocha" app flat>
      <v-app-bar-nav-icon id="drawerIcon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title :to="{ name: 'Home' }" class="text-uppercase white--text">
        <span
        class="font-weight-light">SSAMANCO :3</span>
      </v-toolbar-title>
        <v-spacer></v-spacer>
          <v-list class="soft-mocha" v-if="$store.state.isLogin">
            <v-btn elevation="0" class="soft-mocha" @click.native="logout" to="#">Logout</v-btn>
          </v-list>
          <v-list v-else class="soft-mocha">
            <v-btn elevation="0" class="soft-mocha" :to="{ name: 'Signup' }">SignUp</v-btn>
            <v-btn elevation="0" class="soft-mocha" :to="{ name: 'Login' }">Login</v-btn>
          </v-list>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="soft-mocha">
      <v-layout column align-center>
        <v-flex class="my-5">
          <!-- <v-img max-width="100px" src=""></v-img> -->
        </v-flex>
      </v-layout>

      <v-list flat>
        <v-list-item v-for="link in links" :key="link.route" link :to="link.route" :exact="true">
          <v-list-item-icon>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
  
</template>

<script>
  export default {
    props: ["pageTitle", "sortCriteria"],

    data: function() {
      return {
        login: false,
        drawer: false,
        links: [
          { icon: "mdi-home", text: "Home", route: "/" },
          {
            icon: "mdi-filmstrip",
            text: "Movies Playing Now",
            route: "/movie_info/"
          },
          {
            icon: "mdi-trophy",
            text: "All Movies",
            route: "/top-rated-movies"
          },
          {
            icon: "mdi-television-classic",
            text: "Top Vote Average Movies",
            route: "/top-vote-average-movies"
          },
          {
            icon: "mdi-medal",
            text: "Recommended Movies",
            route: "/recommend"
          },
          {
            icon: "mdi-nature-people",
            text: "Community",
            route: "/community"
          },
          {
            icon: "mdi-information",
            text: "About",
            route: "/about"
          }
        ]
      };
    },
    methods: {
      sortBy(prop) {
        this.$emit(prop);
      },
      logout: function () {
        localStorage.removeItem('jwt')
        this.$store.state.isLogin = false
        this.$router.push({ name: 'Home' })
      },
    },
    created: function () {
      const token = localStorage.getItem('jwt')

      if (token) {
        this.login = true
      }
    }
  };
</script>

<style>
/* .woolly-beige {
  background-color: rgb(247, 224, 193) !important;
} */
.soft-mocha {
  background-color: rgb(206, 173, 155) !important;
  
}

</style>