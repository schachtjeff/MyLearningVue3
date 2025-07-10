const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    subtractCounter(num) {
      this.counter = this.counter - num;
    },
    setName(username) {
      this.name = username.target.value;
    }
  }
});

app.mount('#events');
