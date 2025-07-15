const app = Vue.createApp({
    data() {
        return {
            userName: 'Jeff',
            baseAge: 46,
            jamesWebbLink: 'https://media.npr.org/assets/img/2022/10/20/nasa-2022_custom-94fbe48451f2afb7db3122f5f06bbc3b2a19b288.png?s=1300&c=85&f=webp'
        };
    },
    methods: {
        outputAge() {
            return this.baseAge + 5;
        },
        randNumb() {
            const randomNumber = Math.random();
            return randomNumber;

        }
    }
});
app.mount('#assignment')