const app = Vue.createApp({
    data() {
         return {
            //Keep track of html div
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }; 
    }, 
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;;
            } 
        }
    }
});

app.mount('#styling');