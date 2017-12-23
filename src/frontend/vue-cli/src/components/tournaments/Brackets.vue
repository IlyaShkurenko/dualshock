<template>
    <div class="bracketPane current">
        <edit-cmp v-if="edit"  @close = "edit = !edit" :players="players" :tournament="tournament" :index="game"></edit-cmp>
        <view-cmp v-if="view" @close = "view = !view" :players="players" :tournament="tournament" :index="game" :scores="scores"></view-cmp>
        <div v-if="!edit && !view" class="bracket" id="bracket0">
            <div class="Bracket BBDCSS0" id='winners'>
                <div class="BracketColumn  ">
                    <div class="RoundFormat  BBDCSS1">
                        <div class="Map">RO16</div>
                        <div class="BestOf">Best of <b>1</b></div>
                        <div class="Date"></div>
                    </div>
                    <div v-for="i in 8" class="match  BBDCSS2 first "><p class=" loser">
<span class="team team2281712">
<span class="TourneyTeamID">2281712</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/>
<span class="label"><a href="/player/191042" target="_blank">{{tournament.participants[tournament.brackets[getFirst(i)]].part}}</a></span><span
        class='NetworkDisplayName'></span><span class='DisplayName'>Ekstral</span>
</span>
                        <span class="score ">{{getFirstScoreQuarter(i)}}</span>
                    </p>
                        <div class="versus ">
                            <div class="MatchNumber">Match {{i}}</div>
                            <a v-if="admin()" class='report' @click="editMethod(i,1)">Редактировать</a><a
                                class='view' @click="viewMethod(i,1)">View Details</a></div>
                        <p class=" unplayed temp-winner">
<span class="team team2281984">
<span class="TourneyTeamID">2281984</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/>
<span class="label"><a href="/player/190998" target="_blank">{{tournament.participants[tournament.brackets[getSecond(i)]].part}}</a></span><span class='NetworkDisplayName'></span><span
        class='DisplayName'>The Star</span>
</span>
                            <span class="score ">{{getSecondScoreQuarter(i)}}</span>
                        </p></div>
                </div>
                <div class="LineColumn">
                    <div class='BracketLineTop BracketLineTopBlue BBDCSS3'></div>
                    <div class='BracketLineConnectorTop BracketLineConnectorTopBlue'></div>
                    <div class='BracketLineConnectorBottom BracketLineConnectorBottomBlue'></div>
                    <div class='BracketLineBottom BracketLineBottomBlue BBDCSS4'></div>
                    <div class='BracketLineTop BracketLineTopBlue BBDCSS5'></div>
                    <div class='BracketLineConnectorTop BracketLineConnectorTopBlue'></div>
                    <div class='BracketLineConnectorBottom BracketLineConnectorBottomBlue'></div>
                    <div class='BracketLineBottom BracketLineBottomBlue BBDCSS4'></div>
                    <div class='BracketLineTop BracketLineTopBlue BBDCSS5'></div>
                    <div class='BracketLineConnectorTop BracketLineConnectorTopBlue'></div>
                    <div class='BracketLineConnectorBottom BracketLineConnectorBottomBlue'></div>
                    <div class='BracketLineBottom BracketLineBottomBlue BBDCSS4'></div>
                    <div class='BracketLineTop BracketLineTopBlue BBDCSS5'></div>
                    <div class='BracketLineConnectorTop BracketLineConnectorTopBlue'></div>
                    <div class='BracketLineConnectorBottom BracketLineConnectorBottomBlue'></div>
                    <div class='BracketLineBottom BracketLineBottomBlue BBDCSS6'></div>
                </div>
                <div class="BracketColumn  ">
                    <div class="RoundFormat  BBDCSS7">
                        <div class="Map">Quarter-finals</div>
                        <div class="BestOf">Best of <b>1</b></div>
                        <div class="Date"></div>
                    </div>
                    <div v-for="i in 4" class="match  BBDCSS8  "><p class=" loser">
<span class="team team2281984">
<span class="TourneyTeamID">2281984</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/>
<span class="label"><a href="/player/190998" target="_blank">{{getFirstWinnerQuarter(i).player}}</a></span><span class='NetworkDisplayName'></span><span
        class='DisplayName'>{{getFirstWinnerQuarter(i).player}}</span>
</span>
                        <span class="score ">{{getFirstScoreQuarter(i+8)}}</span>
                    </p>
                        <div class="versus ">
                            <div class="MatchNumber">Match {{i+8}}</div>
                            <a v-if="admin()" class='report' @click="editMethod(i,2)" >Редактировать</a><a
                                class='view' @click="viewMethod(i,2)">View Details</a></div>
                        <p class=" unplayed temp-winner">
<span class="team team2281938">
<span class="TourneyTeamID">2281938</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Ukraine" title="Ukraine"/>
<span class="label"><a href="/player/188268" target="_blank">{{getSecondWinnerQuarter(i).player}}</a></span><span
        class='NetworkDisplayName'></span><span class='DisplayName'>{{getSecondWinnerQuarter(i).player}}</span>
</span>
                            <span class="score ">{{getSecondScoreQuarter(i+8)}}</span>
                        </p></div>
                </div>
                <div class="LineColumn">
                    <div class='BracketLineTop BracketLineTopBlue BBDCSS9'></div>
                    <div class='BracketLineConnectorTop BracketLineConnectorTopBlue'></div>
                    <div class='BracketLineConnectorBottom BracketLineConnectorBottomBlue'></div>
                    <div class='BracketLineBottom BracketLineBottomBlue BBDCSS10'></div>
                    <div class='BracketLineTop BracketLineTopBlue BBDCSS11'></div>
                    <div class='BracketLineConnectorTop BracketLineConnectorTopBlue'></div>
                    <div class='BracketLineConnectorBottom BracketLineConnectorBottomBlue'></div>
                    <div class='BracketLineBottom BracketLineBottomBlue BBDCSS12'></div>
                </div>
                <div class="BracketColumn  ">
                    <div class="RoundFormat  BBDCSS13">
                        <div class="Map">Semi-finals</div>
                        <div class="BestOf">Best of <b>1</b></div>
                        <div class="Date"></div>
                    </div>
                    <div v-for="i in 2" class="match  BBDCSS14  "><p class=" loser">
<span class="team team2281938">
<span class="TourneyTeamID">2281938</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Ukraine" title="Ukraine"/>
<span class="label"><a href="/player/188268" target="_blank">{{getWinnerSemi((i+8),0).player}}</a></span><span
        class='NetworkDisplayName'></span><span class='DisplayName'>{{getWinnerSemi((i+8),0).player}}</span>
</span>
                        <span class="score ">{{getFirstScoreQuarter(i+12)}}</span>
                    </p>
                        <div class="versus ">
                            <div class="MatchNumber">Match {{i+12}}</div>
                            <a v-if="admin()" class='report' @click="editMethod(i,3)">Редактировать</a><a
                                class='view' @click="viewMethod(i,3)">View Details</a></div>
                        <p class=" unplayed temp-winner">
<span class="team team2283259">
<span class="TourneyTeamID">2283259</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/>
<span class="label"><a href="/player/175689" target="_blank">{{getWinnerSemi((i+8),1).player}}</a></span><span
        class='NetworkDisplayName'></span><span class='DisplayName'>{{getWinnerSemi((i+8),0).player}}</span>
</span>
                            <span class="score ">{{getSecondScoreQuarter(i+12)}}</span>
                        </p></div>
                </div>
                <div class="LineColumn">
                    <div class='BracketLineTop BracketLineTopBlue BBDCSS15'></div>
                    <div class='BracketLineConnectorTop BracketLineConnectorTopBlue'></div>
                    <div class='BracketLineConnectorBottom BracketLineConnectorBottomBlue'></div>
                    <div class='BracketLineBottom BracketLineBottomBlue BBDCSS16'></div>
                </div>
                <div class="BracketColumn  ">
                    <div class="RoundFormat  BBDCSS17">
                        <div class="Map">Final</div>
                        <div class="BestOf">Best of <b>1</b></div>
                        <div class="Date"></div>
                    </div>
                    <div class="match    "><p class=" unplayed temp-winner">
<span class="team team2283259">
<span class="TourneyTeamID">2283259</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/>
<span class="label"><a href="/player/175689" target="_blank">{{getWinnerSemi((13),0).player}}</a></span><span
        class='NetworkDisplayName'></span><span class='DisplayName'>{{getWinnerSemi((13),0).player}}</span>
</span>
                        <span class="score ">{{getFirstScoreQuarter(15)}}</span>
                    </p>
                        <div class="versus ">
                            <div class="MatchNumber">Match 15</div>
                            <a v-if="admin()" class='report' @click="editMethod(i,4)">Редактировать</a><a class='view'
                                                                                           @click="viewMethod(i,4)">View Details</a>
                        </div>
                        <p class=" loser">
<span class="team team2281958">
<span class="TourneyTeamID">2281958</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/>
<span class="label"><a href="/player/187019" target="_blank">{{getWinnerSemi((13),1).player}}</a></span><span
        class='NetworkDisplayName'></span><span class='DisplayName'>{{getWinnerSemi((13),1).player}}</span>
</span>
                            <span class="score ">{{getSecondScoreQuarter(15)}}</span>
                        </p></div>
                </div>
                <div class="LineColumn">
                    <div class='BracketLineStraight BracketLineStraightBlue BBDCSS18'></div>
                </div>
                <div class="BracketColumn BracketWinner BBDCSS19">
                    <div class="RoundFormat BracketWinner BBDCSS17">
                        <div class="Map">RO1</div>
                        <div class="BestOf">Best of <b>1</b></div>
                        <div class="Date"></div>
                    </div>
                    <div class="match winner BBDCSS20  "><p class=" unplayed">
<span class="team team2283259">
<span class="TourneyTeamID">2283259</span>
<img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/>
<span class="label"><a href="/player/175689" target="_blank">{{getWinnerSemi((14),1).player}}</a></span><span
        class='NetworkDisplayName'></span><span class='DisplayName'>Avanger</span>
</span>
                        <span class="score">-</span>
                    </p></div>
                </div>
                <div class="LineColumn"></div>
            </div>
        </div>
    </div>
</template>
<style src='../../../styles/brackets.css' scoped>
</style>
<style src='../../../styles/index.css' scoped>
</style>
<script>
    import Edit from './Edit.vue'
    import View from  './View.vue';
    export default {
        data(){
            return{
                edit: false,
                view: false,
                pairedArray: [0,2,4,6,8,10,12,14],
                notPairedArray: [1,3,5,7,9,11,13,15],
                players: [],
                game: -1,
                scores: []
            }
        },
        components: {
            editCmp: Edit,
            viewCmp: View
        },
        methods:{
           getFirst(i){
               return this.pairedArray[i-1];
           },
            admin(){
               return localStorage.getItem('role') === 'admin'
            },
            getSecond(i){
               return this.notPairedArray[i-1];
           },
           getPlayer(criteria,value){
                let count = -1;
                let bestPlayer = {
                    player: Object,
                    index: Number
                };
                for (let i = 0; i < this.$store.state.tournaments.length; i++){
                    if(this.$store.state.tournaments[i].id === this.tournament.id){
                        this.$store.state.tournaments[i].players.forEach(function (item,k) {
                            count++;
                            for(let prop in item){
                                if(prop == value){
                                    item[prop].players.forEach(function (player, j) {
                                        if(player[criteria]){
                                            bestPlayer.player = player
                                            bestPlayer.index = i
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
               return bestPlayer
            },
           getFirstWinnerQuarter(i){
                let player = ''
                let secondMatch = i * 2;
                let firstMatch = secondMatch - 1;
                player = this.getPlayer('win',firstMatch).player
                return player
            },
            getWinnerSemi(i, semi){
                let game = -1;
                if(i === 10){
                    if(semi === 0){
                        game = 11
                    }
                    else if(semi === 1){
                        game = 12
                    }
                }
                else {
                    game = i+semi;
                }
                let player = ''
                let secondMatch = i * 2;
                let firstMatch = secondMatch - 1;
                player = this.getPlayer('win',game).player
                return player
            },
            getSecondWinnerSemi(i){
                let player = ''
                let secondMatch = i * 2;
                console.log(i)
                player = this.getPlayer('win',secondMatch).player
                return player
            },
            getSecondWinnerQuarter(i){
                let player = ''
                let secondMatch = i * 2;
                player = this.getPlayer('win',secondMatch).player
                return player
            },
      async getIndexByName(player){
            let index = -1;
            await this.tournament.participants.forEach(function (item,i) {
                if(item.part === player){
                    index = i
                }
            })
            return index;
        },
            viewMethod(i,stage){
                this.editMethod(i,stage)
                this.view = !this.view
                this.edit = !this.edit;
                this.game = this.getMatch(i,stage)
            },
            getMatch(i, stage){
                let index = -1
               if(stage === 1){
                   index = i
               }
               else if(stage === 2){
                   index = i+8
               }
               else if(stage === 3){
                   index = i+12
               }
               else if(stage === 4){
                   index = 15
               }
               return index
            },
           async editMethod(i,stage) {
               this.players = [];
               let firstPlayer = '';
               let secondPlayer = '';
               let firstIndex = -1;
               let secondIndex = -1;
               let secondMatch = i * 2;
               let firstMatch = secondMatch - 1;
               this.edit = !this.edit;
               this.game = this.getMatch(i,stage)
               if (stage === 1) {
                   this.players.push(this.tournament.brackets[this.getFirst(i)])
                   this.players.push(this.tournament.brackets[this.getSecond(i)])
               }
               else if (stage === 2) {
                   firstPlayer = this.getPlayer('win', firstMatch).player;
                   secondPlayer = this.getPlayer('win', secondMatch).player;
                   firstIndex = await this.getIndexByName(firstPlayer.player);
                   secondIndex = await this.getIndexByName(secondPlayer.player);
                   console.log(this.game)
                   this.players.push(firstIndex)
                   this.players.push(secondIndex)
               }
               else if(stage === 3){
                   if(i === 1){
                       firstMatch = 9;
                       secondMatch = 10;
                   }
                   else if(i === 2){
                       firstMatch = 11;
                       secondMatch = 12;
                   }
                   firstPlayer = this.getPlayer('win', firstMatch).player;
                   secondPlayer = this.getPlayer('win', secondMatch).player;
                   firstIndex = await this.getIndexByName(firstPlayer.player);
                   secondIndex = await this.getIndexByName(secondPlayer.player);
                   this.players.push(firstIndex)
                   this.players.push(secondIndex)
               }
               else if(stage === 4){
                   firstMatch = 13;
                   secondMatch = 14
                   firstPlayer = this.getPlayer('win', firstMatch).player;
                   secondPlayer = this.getPlayer('win', secondMatch).player;
                   firstIndex = await this.getIndexByName(firstPlayer.player);
                   secondIndex = await this.getIndexByName(secondPlayer.player);
                   this.players.push(firstIndex)
                   this.players.push(secondIndex)
               }
           },
            getScore(match){
                let bestPlayer = [];
                for (let i = 0; i < this.$store.state.tournaments.length; i++){
                    if(this.$store.state.tournaments[i].id === this.tournament.id){
                        this.$store.state.tournaments[i].players.forEach(function (item,i) {
                            for(let prop in item){
                                if(prop == match){
                                    bestPlayer = item[prop].players
                                }
                            }
                        })
                    }
                }
                return bestPlayer
            },
            getFirstScoreQuarter(i){
               let player = {}
               let score = ''
                //$store.state.tournaments[0].players[2]['8'].players[0].score
                player = this.getScore(i)[0];
                for (let prop in player){
                    if(prop === 'score'){
                        score = player[prop]
                    }
                }
                return score
            },
            getSecondScoreQuarter(i){
                let player = {}
                let score = ''
                //$store.state.tournaments[0].players[2]['8'].players[0].score
                player = this.getScore(i)[1];
                for (let prop in player){
                    if(prop === 'score'){
                        score = player[prop]
                    }
                }
                return score
            },
        },
        props:{
            tournament: Object
        }
    }
</script>