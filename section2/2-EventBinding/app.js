const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + 'Schwarzmuller';
      }
    },
  },
  computed: {
    /* fullname() {
      console.log('Running stuff again...');
      if (this.name === '') {
        return '';
      }
      return this. name + ' ' + 'Schwarzmuller';
    } */
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
