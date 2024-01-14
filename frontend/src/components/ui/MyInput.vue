<template>
  <input :value="modelValue" type="text" @change="handleChange">
</template>
<script>
export default {
  name: 'my-input',
  props: {
    modelValue: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
<style scoped>
  input {
    width: 100%;
    padding: 0px 16px;
    height: 40px;
    border: none;
    background-color: rgb(228, 234, 247);
    outline: none;
    color: rgb(61,61,61);
    margin: 8px 0;
  }
  
  input::placeholder {
    color: rgb(122, 122, 122);
  }
</style>