<template>
  <textarea :value="modelValue" @change="handleChange">
  </textarea>
</template>
<script>
export default {
  name:'my-textarea',
  props: {
    modelValue: {
      type: String,
      required: false,
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
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