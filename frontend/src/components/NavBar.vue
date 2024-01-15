<template>
  <header>
    <router-link to="/" class="link">VueTask</router-link>
    <nav>
      <router-link to="/" class="link">Form</router-link>
      <router-link to="/resumes" class="link">Resumes</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  
}
</script>
<style>
  header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: rgb(210, 210, 210);
  }

  nav {
    display: flex;
    gap: 40px;
  }

  .link {
    cursor: pointer;
  }

  .link:hover {
    color: rgb(0, 0, 0);
  }
</style>