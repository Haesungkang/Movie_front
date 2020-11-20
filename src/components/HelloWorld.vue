<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      If you have interest in this project,<br>
      check out the
      <a href="https://www.ssafy.com/" target="_blank" rel="noopener">SSAFY official website</a>.
    </p>
    <h3>Github Links</h3>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">Hyunji Kim</a></li>
      <li><a href="#" target="_blank" rel="noopener">Jaeyoung Choi</a></li>
    </ul>
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
