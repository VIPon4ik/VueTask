<template>
  <nav-bar></nav-bar>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>
<style scoped>
  main {
    padding: 40px 20px;
  }
</style>