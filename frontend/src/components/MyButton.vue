<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name:'my-button',
}
</script>
<style>
  button {
    color: white;
    border-radius: 4px;
    height: 40px;
    border: none;
    background-color: rgb(68, 180, 255);
    padding: 0 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(48, 172, 255);
  }
</style>