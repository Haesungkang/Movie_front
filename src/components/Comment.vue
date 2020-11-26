<template>
  <li>
    {{ comment.content }}
  </li>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: Object,
  }
}
</script>
<style>

</style>