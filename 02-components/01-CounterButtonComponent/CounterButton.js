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
    handleClick(count) {
      this.$emit('increment', count += 1)
    },
  },

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="handleClick(count)">{{ this.count }}</button>`,
};

export default CounterButton;
