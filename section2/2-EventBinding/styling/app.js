const app = Vue.createApp({
    data() {
         return {
            //Keep track of html div
            //boxASelected: false,
            //boxBSelected: false,
            //boxCSelected: false
        }; 
    }, 
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = true;
            } else if (box === 'B') {
                this.boxBSelected = true;
            } else if (box === 'C') {
                this.boxCSelected = true;
            } 
        }
    }
});

app.mount('#styling');