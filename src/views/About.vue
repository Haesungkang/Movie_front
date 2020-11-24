<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/clapperboard.png" width="200">
    <HelloWorld msg="Welcome to LocalJay's website!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
