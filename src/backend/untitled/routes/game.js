
var url = "http://ip-api.com/json";
new Vue({
    el: "#wrapblock",
    data:{
        youwidth: 80,
        monsterwidth: 80,
        isRunning: false,
        log: [],
        locat: null,
        error: null
    },
    computed:{

    },
    methods:{
        startGame: function () {
            this.isRunning = true;
            this.youwidth = 100;
            this.monsterwidth = 100;
            this.log = [];
        },
        attack: function () {
            let damage = this.damage(3,12);
            this.monsterwidth -= damage;
            this.log.push({
                isPlayer: true,
                text: 'Player attacked monster for ' + damage
            });
            this.monsterAttack();
            if(this.isOver())
                return;


        },
        heal: function () {
            if(this.youwidth <= 90){
                this.youwidth += 10;
            }
            else {
                this.youwidth = 100;
            }
            let damage = this.damage(3,10);
            this.youwidth -= damage;
            let heal = 10 - damage;
            this.log.push({
                isPlayer: true,
                text: 'Player healed for ' + heal
            });
        },

        special: function () {
            let damage = this.damage(10, 20);
            this.log.push({
                isPlayer: true,
                text: 'Player special attacked monster for ' + damage
            });
            this.monsterwidth -= damage;
            this.monsterAttack();
            if(this.isOver())
                return;
        },

        isOver: function () {
            if(this.monsterwidth <= 0){
                alert("You win");
                this.monsterwidth = 0;
                this.isRunning = false;
                this.clearLog();
                return true;
            }
            if(this.youwidth <= 0){
                alert("You Lose");
                this.youwidth = 0;
                this.isRunning = false;
                this.clearLog();
                return true;
            }
            return false;
        },

        monsterAttack: function () {
            let damage = this.damage(5,10);
            this.youwidth -= damage;
            this.log.push({
                isPlayer: false,
                text: 'Monster attacked player for ' + damage
            });
        },
        damage: function (min, max) {
            return  Math.round(Math.random()* (max - min) + min);

        },
        giveUp: function () {
            if(confirm("You lose. Start new game?")){
                this.startGame();
            }
        },
        clearLog: function () {
            this.log = [];
        },
        init: function(){
            this.loadData();
        },
        loadData: function() {

            this.$http.get(url).then((response) => {
                if(!!response.body) {
                    this.locat = response.body;
                }
            }, (response) => {
                this.error = response;
            });


        }
    }

});