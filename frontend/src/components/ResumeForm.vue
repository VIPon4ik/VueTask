<template>
  <form>
    <h1>Create your Resume</h1>

    <label for="name">*Name:</label>
    <my-input placeholder="Jonh" id="name" />

    <label for="surname">*Surname:</label>
    <my-input placeholder="Smith" id="surname" />

    <label for="email">*Email:</label>
    <my-input placeholder="youremail@gmail.com" id="email" type="email"/>

    <label for="email">Phone:</label>
    <my-input placeholder="+(380) 95 154 0139" id="phone" />
    
    <label></label>
    <my-textarea></my-textarea>
  </form>
</template>
<script>
export default {
  
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

</style>