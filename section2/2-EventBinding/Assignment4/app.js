const app = Vue.createApp({
    data() {
        return {
            //First Style me
            firstString: '',
            togglePWhenTrue: true,
            inputBackgroundColor: ''
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.firstString === 'user1',
                user2: this.firstString === 'user2',
                visible: this.togglePVisible,
                hidden: !this.togglePVisible
            };
        },
    },
    methods: {
        togglePVisible() {
            this.togglePVisible = !this.togglePVisible;
        }
    }
});

app.mount('#assignment');