<template>
    <body class="logged  xNSUNS3FB1508010">
    <div id="console">
        <div class="console"></div>
    </div>
    <div class="w960">
        <div id="matchReport">
            <h2 class="contentTitle">
                {{tournament.participants[players[0]].part}} <span>vs</span>
                {{tournament.participants[players[1]].part}} <span id="bestOf">
Best of 1 <span class="glyphicon glyphicon-remove" @click="close"></span></span>
            </h2>
            <div class="reportInfo">
                <p>Этот матч является лучшим из 1 серии, ввод результата матча не может быть проще. Просто введите оценку для любых игр, которые были сыграны, и нажмите «Отправить», BinaryBeast отобразит остальную часть.</p>

                <p>Если карта не имеет значения, просто выберите победителя, затем введите баллы и нажмите «Отправить». «Карта» и «Повторная загрузка» являются необязательными и, как таковые, не нужно заполнять.</p>

                <p>Если, например, турнир для игры RTS (Real-Time Strategy), просто введите 1 для победителя и 0 для проигравшего. Для любого другого жанра просто заполните счет для каждой игры.</p>
            </div>
            <form id="MainForm">
                <input type="hidden" name="TourneyMatchID" value="1439126" />
                <input type="hidden" name="Team" value="2283259" />
                <input type="hidden" name="Opponent" value="2281938" />
                <div class="scores">
                    <div class="row">
                        <div class="col-md-4">
                        <div class="game ">
                            <h3 class="contentTitle">Game <span>{{index}}</span></h3>
                            <div class="gameInfo">
                                <div class="gameDetail">
                                    <label>Зaпись:</label>
                                    <div class="PaddedInput">
                                        <input v-model="replay" type="text"  value="" />
                                    </div>
                                </div>
                                <div class="gameScore">
                                    <fieldset>
                                        <legend>Выберите побелителя</legend>
                                        <div class="gameDetail">
                                            <label for="Winner_0_2283259">{{tournament.participants[players[0]].part}}:</label>
                                            <div>
                                                <input v-model="winner" type="radio" class="winnerSelector" name="Winner[0]" id="Winner_0_2283259" :value="tournament.participants[players[0]].part" checked/>
                                            </div>
                                        </div>
                                        <div class="gameDetail">
                                            <label for="Winner_0_2281938">{{tournament.participants[players[1]].part}}:</label>
                                            <div>
                                                <input v-model="winner" type="radio" class="winnerSelector" name="Winner[0]" id="Winner_0_2281938" :value="tournament.participants[players[1]].part" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="gameScore">
                                    <fieldset>
                                        <legend>Счет</legend>
                                        <div class="gameDetail">
                                            <label>{{tournament.participants[players[0]].part}}:</label>
                                            <div class="PaddedInput">
                                                <input v-model="scoreFirst" type="text" class="score" name="Score[2283259][]" value="1" />
                                            </div>
                                        </div>
                                        <div class="gameDetail">
                                            <label>{{tournament.participants[players[1]].part}}:</label>
                                            <div class="PaddedInput">
                                                <input v-model="scoreSecond" type="text" class="oScore" name="Score[2281938][]" value="0" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="col-md-3">
                            <div class="replay">
                                <section id="home-videos" style="z-index: 2">

                                    <div class="wrapperstart" style="margin-top: -40px">
                                        <div class="ratio-iframe">
                                            <iframe :src="replay" frameborder="0" style="width: 33.7vw; height: 18vw"></iframe>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameSubmit">
                    <h2 class="contentTitle">Заметки матча и подтверждение счета</h2>
                    <div class="gameDescription">
                        <label>Введите соответствующие заметки о матче или описание матча здесь, эта информация будет отображаться на странице соответствия. Это необязательно.</label>
                        <div class="PaddedInput">
                            <textarea v-model="content" cols="100" rows="5" class="ValueFade" name="Notes">GG! ㅎㅎ! ㅈㅈ! ww!</textarea>
                        </div>
                    </div>
                    <div class="gameConfirmation">
                        <div class="gameRecap">
                            <p>Победитель матча:</p>
                            <p class="important" id="matchWinner">
                                <a href="/player/175689" target="_blank">{{winner}}</a>  </p>
                            <p>Финальный счет</p>
                            <p class="important">
                                <a href="/player/175689" target="_blank">{{tournament.participants[players[0]].part}}</a> <span class="winner" id="teamScore">{{scoreFirst}}</span>
                                -
                                <span class="loser" id="opponentScore">{{scoreSecond}}</span>
                                <a href="/player/188268" target="_blank">{{tournament.participants[players[1]].part}}</a> </p>
                        </div>
                        <button @click="submit" class="PaddedButton Green">Подтвердить</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </body>
</template>
<style src='../../../styles/index.css' scoped>
</style>
<script>
    export default {
        data(){
            return{
                winner: '',
                scoreFirst: '',
                scoreSecond: '',
                content: '',
                replay:'',
                data: {
                    match: -1,
                    id: -1,
                    players: '',
                    content: ''

                }
            }
        },
        props:{
            players: Array,
            tournament: Object,
            index: Number
        },
        methods:{
            close(){
                this.$emit('close')
            },
            submit(e){
                e.preventDefault();
                let players = [];
                let player_1 = {
                    score: this.scoreFirst,
                    player: this.tournament.participants[this.players[0]].part,
                    replay: this.replay,
                    match: this.index,
                    win: this.tournament.participants[this.players[0]].part === this.winner ? true : false
                }
                let player_2 = {
                    score: this.scoreSecond,
                    player: this.tournament.participants[this.players[1]].part,
                    replay:this.replay,
                    match: this.index,
                    win: this.tournament.participants[this.players[1]].part === this.winner ? true : false
                }
                players.push(player_1)
                players.push(player_2)
                console.log(players)
                let json_arr = JSON.stringify(players);
                console.log(this.content)
                this.data["match"] = this.index;
                this.data["id"] = this.tournament.id;
                this.data["players"] = json_arr;
                this.data["content"] = this.content;
                let data_json = JSON.stringify(this.data);
                console.log(data_json)
                let Vue = this.$http;
                if(this.index === 15){
                    players.forEach(function (player,i) {
                        if(player.win){
                            let rate = JSON.stringify(player);
                            Vue.post('rate/update', rate, {
                            }).then(
                                response => {
                                    console.log('Success! Response: ', response.body);
                                },
                                response => {
                                    // error callback
                                }
                            );
                        }
                    })
                }
               this.$http.post('tournament', data_json, {
                }).then(
                    response => {
                        console.log('Success! Response: ', response.body);
                        this.$router.go(this.$router.currentRoute);
                    },
                    response => {
                        // error callback
                    }
                );
              /*  this.$http.post('tournament', this.data, {
                    headers: {
                        'Content-Type': 'multipart/form-data; charset=UTF-8'
                    }
                    }).then(
                    response => {
                        this.$router.go('/tournament'+this.tournament.id);
                    }
                );*/
            }
        }
    }
</script>
<style>

    #home-videos {
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-videos.jpg") center center no-repeat;
        background-size: cover;
        padding: 40px 0 40px
    }

    #home-videos .ratio-iframe {
        width: 90%;
        height: 0;
        padding-bottom: 51%;
        margin: auto;
        position: relative
    }

    #home-videos iframe {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        margin: auto
    }
</style>