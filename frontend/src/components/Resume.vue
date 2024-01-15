<template>
  <div class="container">
    <section class="hero-section">
      <h1>{{ resume.name }} {{ resume.surname }}</h1>
      <h2>Summury: </h2>
      <p>{{ resume.summury }}</p>
    </section>
    <section class="personal-section">
      <h2>Contacts: </h2>
      <p>Email: {{ resume.email }} </p>
      <p v-if="resume.phone">Phone: {{ resume.phone }} </p>
    </section>
    <section class="education-section" v-if="resume.education">
      <h2>Education: </h2>
      <p>{{ resume.education }}</p>
    </section>
    <section class="experience-section" v-if="resume.experience">
      <h2>Work Experience: </h2>
      <p>{{ resume.experience }}</p>
    </section>
    <section class="skills-section" v-if="resume.skills.length > 0">
      <h2>Skills: </h2>
      <ul>
        <li v-for="skill in resume.skills">
          <h3>{{ skill.value }}</h3>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    resume: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
.container {
  margin: 0 auto;
  margin-top: 40px;
  padding: 40px 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  max-width: 900px;
}

@media screen and (min-width: 600px) {
  .container {
    padding: 40px 60px;
  }
}

section:not(:last-child) {
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 50px;
}

h2 {
  margin-bottom: 20px;
  color: rgb(240, 240, 240);
  background-color: rgb(131, 131, 131);
  padding: 10px;
}

ul {
  list-style: none;
}

li {
  display: flex;
  align-items: center;
}

ul li:before {
  content: "•";
  font-size: 30px;
  padding-right: 5px;
}
</style>