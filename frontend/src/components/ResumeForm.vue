<template>
  <form @submit.prevent="handleSubmit">
    <h1>Create your Resume</h1>

    <label for="name">*Name:</label>
    <my-input v-model="name" placeholder="Jonh" id="name" />

    <label for="surname">*Surname:</label>
    <my-input placeholder="Smith" id="surname" />

    <label for="email">*Email:</label>
    <my-input placeholder="youremail@gmail.com" id="email" type="email"/>

    <label for="email">Phone:</label>
    <my-input placeholder="+(380) 95 154 0139" id="phone" />
    
    <label for="summury">Summury: </label>
    <my-textarea placeholder="Describe yourself" id="summury"></my-textarea>

    <label for="education">Education: </label>
    <my-textarea placeholder="GoIT" id="education"></my-textarea>
    
    <label for="experience">Work experience:</label>
    <my-textarea placeholder="Project on GitHub" id="experience"></my-textarea>

    <label for="skills">Skills:</label>
    <my-multiselect placeholder="Write your skills" id="skills"></my-multiselect>

    <my-button class="button">Create</my-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name:'',
      surname:'',
      email:'',
      phone:'',
      summury:'',
      education:'',
      experience: '',
      selectedSkills: [],
      resume: {}
    }
  },
  methods: {
    handleSubmit() {
      console.log(`Name: ${this.name}`)
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