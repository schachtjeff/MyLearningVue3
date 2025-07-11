const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    subtractCounter(num) {
      this.counter = this.counter - num;
    },
    setName(username) {
      this.name = username.target.value;
    },
    submitForm() {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
