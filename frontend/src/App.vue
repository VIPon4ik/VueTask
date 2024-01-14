<template>
  <main>
    <resume-form></resume-form>
    <resume></resume>
  </main>
</template>
<script>
import ResumeForm from './components/ResumeForm.vue';
import Resume from './components/Resume.vue';
export default {
  components: {
    ResumeForm, Resume
  }
}
</script>
<style scoped>
  main {
    padding: 100px 20px;
  }
</style>