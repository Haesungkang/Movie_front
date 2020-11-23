<template>
  <nav>
    <v-app-bar dark app flat>
      <v-app-bar-nav-icon id="drawerIcon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">SSA</span>
        <span>GV</span>
      </v-toolbar-title>
        <v-spacer></v-spacer>
          <v-btn :to="{ name: 'Login' }">Login</v-btn>
          <v-btn @click.native="logout" to="#">Logout</v-btn>
          <v-btn :to="{ name: 'SignUp' }">SignUp</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="indigo accent-2">
      <v-layout column align-center>
        <v-flex class="my-5">
          <v-img max-width="100px" src=""></v-img>
        </v-flex>
      </v-layout>

      <v-list flat>
        <v-list-item v-for="link in links" :key="link.route" link :to="link.route" exact="true">
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
    data: function() {
      return {
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
            text: "Top Rated Movies",
            route: "/top-rated-movies"
          },
          {
            icon: "mdi-television-classic",
            text: "Popular Shows",
            route: "/popular-shows"
          },
          {
            icon: "mdi-medal",
            text: "Top Rated Shows",
            route: "/top-rated-shows"
          },
          {
            icon: "mdi-information",
            text: "About",
            route: "/about"
          }
        ]
      };
    }
  };
</script>

<style scoped>
</style>
