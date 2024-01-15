<template>
  <nav-bar></nav-bar>
  <main>
    <router-view></router-view>
    <resume-form @resume="setResume"></resume-form>
    <resume :resume="resume" v-if="Object.keys(resume).length > 0"></resume>
  </main>
</template>
<script>
import ResumeForm from './components/ResumeForm.vue';
import Resume from './components/Resume.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    ResumeForm, Resume, NavBar
  },
  data() {
    return {
      resume: {}
    }
  },
  methods: {
    setResume(resume) {
      this.resume = resume;
    }
  },
}
</script>
<style scoped>
  main {
    padding: 100px 20px;
  }
</style>