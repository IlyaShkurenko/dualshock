<template>
    <div>
    <div class="w960" style="overflow: hidden;">
        <div id="BreadcrumbsFiller">&nbsp;
            <span class="glyphicon glyphicon-remove" style="float: right" @click="close"></span></div>
        <div class="adWide top">
        </div>
        <div id="match">
            <div id="scoreboard">
                <div id="players">
                    <div id="portraits">
                        <img :src="getAvatar(0)" class="left" alt="#" />
                        <img :src="getAvatar(1)" class="right" alt="#" />
                    </div>
                    <div id="overallScore">
                        <p :class="{'left winner':scores[0] > scores[1], 'right loser': scores[0] < scores[1] }">
                            {{scores[0]}} </p>
                        <p :class="{'left winner':scores[1] > scores[0], 'right loser': scores[1] < scores[0] }">
                            {{scores[1]}} </p>
                    </div>
                    <div id="names">
                        <p class="left">

                            <img src="//binarybeast.com/img/Icons/flagicons/ru.png" alt="Russian Federation" />
                            <a href="/player/175689" target="_blank">{{tournament.participants[players[0]].part}}</a>
                        </p>
                        <p class="right">

                            <img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Ukraine" />
                            <a href="/player/188268" target="_blank">{{tournament.participants[players[1]].part}}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div id="matchInfo">
                <h3>Информация о матче</h3>
                <p>
                    <span class="left">Match ID</span>
                    <span class="right">1439126</span>
                </p>
                <p>
                    <span class="left">Дата</span>
                    <span class="right">{{tournament.date}}</span>
                </p>
                <p>
                    <span class="left">Турнир</span>
                    <span class="right"><a href="/xNSUNS3FB1508010">{{tournament.title}}</a></span>
                </p>
                <p>
                    <span class="left">Стадия</span>
                    <span class="right">{{getStage}}</span>
                </p>
                <p>
                    <span class="left">Формат боя</span>
                    <span class="right">{{tournament.mod}}</span>
                </p>
                <p>
                    <span class="left">Запись</span>
                    <span class="right">{{(replay) && 'Есть' || 'Отсутствует'}}</span>
                </p>
            </div>
            <div id="maps">
                <h3>Индивидуальные счеты</h3>
                <div class="map">
                    <div class="mapImage">
                        <div class="mapImageContainer">
                        </div>
                        <h4>-</h4>
                    </div>
                    <div class="mapScores">
                        <p class="left winner">
                            0 </p>
                        <p class="right loser">
                            0 </p>
                        <span class="left">

<img src="//binarybeast.com/img/Icons/flagicons/ru.png" alt="Russian Federation" />
{{tournament.participants[players[0]].part}}</span>
                        <span class="right">

<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Ukraine" />
{{tournament.participants[players[1]].part}} </span>
                    </div>
                </div>
            </div>
            <div id="description">
                <h3>Описание матча</h3>
                <div class="description">
                    {{content}} </div>
            </div>
        </div></div>
    <div class="adWide bottom"></div>
    <div id="sponsorLogos">
    </div>
        <div v-if="replay">
        <div id="replayDownload" style="margin-bottom: 40px">
            <h3>Запись матча:</h3>
        </div>
        <section id="home-videos" style="z-index: 1000">

            <div class="wrapperstart" style="margin-top: -40px">
                <div class="ratio-iframe">
                    <iframe :src="replay" frameborder="0" style="width: 33.7vw; height: 18vw"></iframe>
                </div>
            </div>

        </section>
    </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                scores:[],
                content: ''
            }
        },
        methods:{
            close(){
                this.$emit('close')
            },
            getContent(){

            },
            getAvatar(i){
                let img = '';
                let player = this.tournament.participants[this.players[i]].part;
                this.$store.state.users.forEach(function (user,i) {
                    if(user.username === player){
                        img = user.img
                    }
                })
                return img
            },
            getScore(playerIndex){
                let participant;
                let content = '';
                let replay = '';
                let index = this.index;
                for (let i = 0; i < this.$store.state.tournaments.length; i++){
                    if(this.$store.state.tournaments[i].id === this.tournament.id){
                        this.$store.state.tournaments[i].players.forEach(function (item,k) {
                            for(let prop in item){
                                if(prop == index){
                                    content = item[index].content
                                    participant = item[prop].players[playerIndex]
                                    replay = participant.replay
                                }
                            }
                        })
                    }
                }
                this.scores.push(participant.score);
                this.content = content;
                this.replay = replay
            },
        },
        created(){
           this.getScore(0)
           this.getScore(1)
        },
        props:{
            players: Array,
            tournament: Object,
            index: Number
        },
        computed:{
            getStage(){
                if (this.index <=8 && this.index >=1){
                    return '1/8'
                }
                else if(this.index >=9 && this.index <= 12){
                    return '1/4'
                }
                else if(this.index >= 13 && this.index <= 14){
                    return '1/2'
                }
                else return 'Финал'
            }
        }
    }
</script>