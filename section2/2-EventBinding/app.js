const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      this.counter = this.counter + 1;
    },
    subtractCounter() {
      this.counter = this.counter - 1;
    }
  }
});

app.mount('#events');
