import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      default: 0
    }
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    updateCount(){
      this.$emit('update:count', this.$props.count + 1);
    }
  },

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click.prevent="updateCount">{{ count }}</button>`,
});
