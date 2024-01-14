<template>
  <div class="input-container">
    <div class="selected-options" v-if="selectedOptions.length !== 0">
      <div class="selected-option" v-for="option in selectedOptions" :key="option.id">{{ option.value }}<span @click="removeOption(option.id)">X</span></div>
    </div>
    <input type="text" :placeholder="placeholder" @keypress="selectOption" :id="id">
  </div>
</template>
<script>
export default {
  name: 'my-multiselect',
  props: {
    id: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    selectedOptions: {
      type:Array,
      required: true,
    }
  },
  methods: {
    selectOption(e) {
      if (e.key === 'Enter' && e.target.value.trim() !== '') {
        const value = e.target.value;
        const option = {id: Date.now(), value };
        this.$emit('update:selectedOptions', [...this.selectedOptions, option])
        e.target.value = ''
        console.log(this.selectedOptions)
      }
    },
    removeOption(id) {
      this.$emit('update:selectedOptions', [...this.selectedOptions.filter(option => option.id !== id)]);
    }
  }
}
</script>
<style>
  .input-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 8px 16px;
    min-height: 40px;
    background-color: rgb(228, 234, 247);
    color: rgb(61,61,61);
    margin: 8px 0;
  }

  .selected-options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 8px;
  }

  .selected-option {
    padding: 4px;
    background-color:rgb(186, 207, 254);
    border-radius: 4px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  span {
    font-size: 12px;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }

  span:hover {
    background-color:rgb(170, 195, 251);
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
  input::placeholder {
    color: rgb(122, 122, 122);
  }
</style>