const app = Vue.createApp({
    data() {
        return {
            taskValue: '',
            tasks: []
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskValue);
        }
    }
});

app.mount('#assignment')