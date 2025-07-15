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
    setName(event, lastName) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
