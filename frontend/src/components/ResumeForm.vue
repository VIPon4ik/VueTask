<template>
  <form @submit.prevent="handleSubmit">
    <h1>Create your Resume</h1>

    <label for="name">*Name:</label>
    <my-input v-model="name" placeholder="Jonh" id="name" required minlength="2"/>

    <label for="surname">*Surname:</label>
    <my-input v-model="surname" placeholder="Smith" id="surname" required minlength="2"/>

    <label for="email">*Email:</label>
    <my-input v-model="email" placeholder="youremail@gmail.com" id="email" type="email" required minlength="10" />

    <label for="phone">Phone:</label>
    <my-input v-model="phone" placeholder="+(380) 95 154 0139" id="phone" />

    <label for="summury">*Summury: </label>
    <my-textarea v-model="summury" placeholder="Describe yourself" id="summury" required minlength="2"></my-textarea>

    <label for="education">Education: </label>
    <my-textarea v-model="education" placeholder="GoIT" id="education"></my-textarea>

    <label for="experience">Work experience:</label>
    <my-textarea v-model="experience" placeholder="Project on GitHub" id="experience"></my-textarea>

    <label for="skills">Skills:</label>
    <my-multiselect ref="multiselect" v-model:selectedOptions="skills" placeholder="Write your skills"
      id="skills"></my-multiselect>

    <my-button class="button">Create</my-button>
  </form>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
      summury: '',
      education: '',
      experience: '',
      skills: [],
      resume: {}
    }
  },
  methods: {
    async handleSubmit(e) {
      const multiselectHasFocus = this.$refs.multiselect && this.$refs.multiselect.$el.contains(document.activeElement);

      if (multiselectHasFocus) {
        return;
      }

      this.resume = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        summury: this.summury,
        education: this.education,
        experience: this.experience,
        skills: this.skills
      }
      try {
        await axios.post('http://localhost:3200/api/resumes/', {
          resume: this.resume,
        })
      } catch(e) {
        console.log(e);
      }

      this.$emit('resume', this.resume)
      this.skills = []
      e.target.reset()
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}

form {
  margin: 0 auto;
  min-width: 280px;
  max-width: 500px;
  border-radius: 4px;
  background-color: white;
  padding: 20px;
}

.button {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>