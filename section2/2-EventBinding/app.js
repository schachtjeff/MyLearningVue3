const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log('Running stuff again...');
      if (this.name === '') {
        return '';
      }
      return this. name + ' ' + 'Schwarzmuller';
    }
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this. name + ' ' + 'Schwarzmuller';
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
