function getRandValue(min, max) {
    //To get a random number between min and max
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            currentRound: 0,
            playerHealth: 100,
            monsterHealth: 100,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterHealthStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerHealthStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return {width: this.playerHealth + '%'};
        },
        specialAttackPermitted() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // Monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            
            const attackValue = getRandValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', attackValue);
            this.attackPlayer();  
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'Sp-attack', attackValue);
            this.attackPlayer();
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            //unshift adds at beginning of the array.
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});

app.mount('#game');