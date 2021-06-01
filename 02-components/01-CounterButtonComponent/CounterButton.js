const CounterButton = {
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

  template: `<button type="button" @click="handleClick">{{ count }}</button>`,
};

export default CounterButton;
