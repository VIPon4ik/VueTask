<template>
  <textarea>
  </textarea>
</template>
<script>
export default {
  name:'my-textarea',
}
</script>
<style>
textarea {
  width: 100%;
  padding: 16px 16px;
  height: 100px;
  border: none;
  background-color: rgb(228, 234, 247);
  outline: none;
  color: rgb(61, 61, 61);
  margin: 8px 0;
  resize: none;
  font-family: Arial, Helvetica, sans-serif;
}

textarea::placeholder {
  color: rgb(122, 122, 122);
}
</style>