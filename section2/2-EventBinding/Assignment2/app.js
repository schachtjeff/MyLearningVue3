const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: ''
    };
  },
  methods: {
    confirmInput() {
        this.confirmedInput = this.userInput;
    },
    createAlert() {
      alert('Alert Created!');
    },
    savedInput(event) {
        this.userInput = event.target.value;
    }
  }
});
app.mount('#assignment')