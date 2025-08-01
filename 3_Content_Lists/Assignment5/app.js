const app = Vue.createApp({
    data() {
        return {
            taskValue: '',
            tasks: [],
            taskListVisible: true
        };
    },
    computed: {
        hideShowMessage() {
            return this.taskListVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskValue);
        },
        toggleTaskVisibility() {
            this.taskListVisible = !this.taskListVisible;
        }
    }
});

app.mount('#assignment')