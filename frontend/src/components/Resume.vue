<template>
  <div class="container">
    <section class="hero-section">
      <h1>Dmytro Perep</h1>
      <h2>Summury: </h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus pariatur eius cupiditate laborum dolores
        porro quaerat recusandae, consectetur ex sapiente fugiat libero dignissimos laboriosam accusantium tempora natus
        eligendi incidunt numquam.</p>
    </section>
    <section class="personal-section">
      <h2>Contacts: </h2>
      <p>Email: </p>
      <p>Phone: </p>
    </section>
    <section class="education-section">
      <h2>Education: </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi rerum pariatur voluptatem quos fuga, illum
        neque perspiciatis incidunt explicabo enim praesentium asperiores earum accusamus laborum expedita sapiente sint
        labore.</p>
    </section>
    <section class="experience-section">
      <h2>Work Experience: </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem, fuga quas consequuntur dignissimos harum
        accusantium provident, aperiam mollitia repudiandae laboriosam aspernatur quae ipsam? Voluptatum error quo tenetur
        vero odit.</p>
    </section>
    <section class="skills-section">
      <h2>Skills: </h2>
      <ul>
        <li><h3>Skill3</h3></li>
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
  margin-top: 40px;
  padding: 40px 120px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
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