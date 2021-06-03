<template>
  <button class="button" type="button" @click="handleClick">{{ count }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  model: {
    prop: 'count',
    event: 'increment'
  },

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  methods: {
    handleClick() {
      this.$emit('increment', this.count + 1)
    },
  },
};
</script>

<style scoped>
.button {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}

.button:hover {
  background-color: #f44336;
  color: white;
}
</style>
