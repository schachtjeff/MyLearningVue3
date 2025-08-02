function getRandValue(min, max) {
    //To get a random number between min and max
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    computed: {
        monsterHealthStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerHealthStyles() {
            return {width: this.playerHealth + '%'};
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            
            const attackValue = getRandValue(8, 15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');