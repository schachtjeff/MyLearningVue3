const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

// JavaScript is not REactive
let message = 'Hello!';
let theMessage = message + ' World!';
console.log(theMessage);
//prints in console 'Hello World!'

message = 'Hello!!!!'
console.log(theMessage)
//prints in console 'Hello World!'
//not reactive, vue works different

// Handler concept

const data = {
  message: 'Hello!',
  newerMessage: 'Hello World!'
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if (key === 'message') {
      target.newerMessage = value + ' World!'
    }
    target.message = value;
  }
};

const proxy = new Proxy (data, handler);
proxy.message = 'Hello!!!';
console.log(proxy.newerMessage);
