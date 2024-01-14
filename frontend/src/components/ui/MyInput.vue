<template>
  <input type="text" placeholder="some text">
</template>
<script>
export default {
  name: 'my-input'
}
</script>
<style>
  input {
    width: 100%;
    padding: 0px 16px;
    height: 40px;
    border: none;
    background-color: rgb(228, 234, 247);
    outline: none;
    color: rgb(61,61,61);
  }
  
  input::placeholder {
    color: rgb(122, 122, 122);
  }
</style>