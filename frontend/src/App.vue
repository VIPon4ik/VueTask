<template>
  <main>
    <resume-form></resume-form>
  </main>
</template>
<script>
import ResumeForm from './components/ResumeForm.vue';
export default {
  components: {
    ResumeForm
  }
}
</script>
<style scoped>
  main {
    padding: 100px 20px;
  }
</style>