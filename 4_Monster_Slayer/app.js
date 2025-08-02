function getRandValue(min, max) {
    //To get a random number between min and max
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            currentRound: 0,
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
        },
        specialAttackPermitted() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            
            const attackValue = getRandValue(8, 15);
            this.playerHealth -= attackValue;
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {this.playerHealth += healValue;
            }
            this.attackPlayer();  
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    }
});

app.mount('#game');