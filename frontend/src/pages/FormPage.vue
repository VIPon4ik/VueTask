<template>
  <resume-form @resume="setResume"></resume-form>
  <resume :resume="resume" v-if="Object.keys(resume).length > 0"></resume>
</template>
<script>
import ResumeForm from '../views/ResumeForm.vue';
import Resume from '@/components/Resume.vue';
export default {
  components: {
    ResumeForm, Resume
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
<style></style>