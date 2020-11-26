<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-containter>
    <h2>Github Link</h2>
    <v-layout align-center justify-center row fill-height>
      <v-tooltip bottom>
      <template v-slot:activator="{on}">
      <v-btn v-on="on" class="mx-5" fab text href="" target="_blank">
        <v-icon large>mdi-github</v-icon>
      </v-btn>
      </template>
      <span>Hyunji</span>
      </v-tooltip>

      <v-tooltip bottom>
      <template v-slot:activator="{on}">
      <v-btn v-on="on" class="mx-5" fab text href="" target="_blank">
        <v-icon large>mdi-github</v-icon>
      </v-btn>
      </template>
      <span>HaeSung</span>
      </v-tooltip>

      <v-tooltip bottom>
      <template v-slot:activator="{on}">
      <v-btn v-on="on" class="mx-5" fab text href="" target="_blank">
        <v-icon large>mdi-github</v-icon>
      </v-btn>
      </template>
      <span>JaeYoung</span>
      </v-tooltip>

    </v-layout>
    <br>
    <br>
    </v-containter>
      If you have interest in this project,<br>
      check out the
      <a href="https://www.ssafy.com/" target="_blank" rel="noopener">SSAFY official website</a>.

    <!-- <ul>
      <li><a href="#" target="_blank" rel="noopener">Hyunji Kim</a></li>
      <li><a href="#" target="_blank" rel="noopener">Jaeyoung Choi</a></li>
      <li><a href="#" target="_blank" rel="noopener">HaeSung Kang</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
