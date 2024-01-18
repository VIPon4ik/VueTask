<template>
  <div class="list">
    <resume v-for="resume in resumes" :resume="resume" />
  </div>
</template>
<script>
import axios from 'axios';
import Resume from '../components/Resume.vue';
export default {
  components: {
    Resume,
  },
  data() {
    return {
      resumes: [],
      isLoading: false,
    }
  },
  async mounted() {
    try {
      this.isLoading = true;
      const response = await axios.get('http://localhost:3200/api/resumes/');
      this.resumes = response.data.data.resumes;
    } catch(e) {
      console.log(e);
    }
  },
}
</script>
<style>
  
</style>