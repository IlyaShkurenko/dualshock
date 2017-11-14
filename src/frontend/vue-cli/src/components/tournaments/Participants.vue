<template>
    <div class="tools current" id="#table">
    <table id="participantsTable">
        <tr>
            <th></th>
            <th>Участник</th>
            <th class="status">Статус</th>
            <th>Страна</th>
            <th>Побед</th>
            <th>Поражений</th>
        </tr>
        <tr v-for="(item,index) in statusArray">
            <td><img src="https://binarybeast.com/img/avatar/200.png" style="width: 25px; height: 25px"></td>
            <td>User {{index + 1}}</td>
            <td class="status">{{item}}</td>
            <td><img src="//binarybeast.com/img/Icons/flagicons/ua.png" alt="Russian Federation" title="Russian Federation"/></td>
            <td>0</td>
            <td>0</td>
            <input
                    :id="'checkbox' + index + 1"
                    v-model="active[index]"
                    class="checkbox"
                    :value="true"
                    type="checkbox"
                    :checked="active[index]"
            />
            <label :for="'checkbox' + index + 1" @click="changeStatus(index)"></label>
        </tr>
    </table>
    </div>
</template>
<style scoped>
    table {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 10px;
        text-align: center;
        border-collapse: separate;
        border-spacing: 1px;
        font-weight: bold;
        color: #696969;

    }
    th, td:first-child {
        color: #0AF;
        padding: 10px 20px;
    }
    td:nth-child(2){
        color: #0AF;
    }
    tr:nth-child(1){
        font-size: 14px;
        font-weight: bold;
    }
    th, td {
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: #444;
    }
    th:first-child, td:first-child {
        text-align: left;
    }
    tr:nth-child(odd) {
        background: rgba(0, 0, 0, 0.4);
    }
    tr:first-child {
    background-color: rgba(0, 0, 0, 0.5);
    }
    #participantsTable .status {
        width: 100px
    }
    td:nth-child(2):hover{
        color: #F70;
        background-color: rgba(0, 0, 0, 0.8);
    }

    tr:hover{
        background-color: rgba(0, 0, 0, 0.8);
    }
    .versus {
        display: block;
        width: 202px;
        height: 19px;
        line-height: 19px;
        vertical-align: middle;
        margin: -9px 0
    }

    .versus span {
        display: none;
        color: #888
    }

    .versus a.view {
        float: left;
        margin-left: 10px
    }

    .versus span.report {
        float: right;
        margin-right: 10px;
        font-family: 'Helvetica Narrow', sans-serif; font-weight: bold
    }
    #changeSettings h2 span, #managePermissions h2 span, #changeBanner h2 span, .tools.maps .round .roundInfo p span, .group h2 span, .match p a, .match p.winner, .match p.viewer, .versus a:hover, .match p.loser, .match p.unplayed, .match p.blank, .match p.draw {
        color: #FFF
    }
    #bracketContainer ul li, .RoundFormat .BestOf, .match .versus a.view {
        float: left
    }
    .bracket div.Bracket div.BracketColumn div.BracketWinner, div.BracketLineTop.Compact, div.BracketLineBottom.Compact, div.BracketLineConnectorTop.Compact, div.BracketLineConnectorBottom.Compact, div.BracketLineStraight.Compact, #CompactViewButton span.CompactMode, #CompactViewButton span.ExpandedMode, .leaderboard table tr td.TourneyTeamID, .leaderboard table tr td.NetworkDisplayName, .match:hover .versus .MatchNumber, .match p span.spoiler, .match p span.SpoilerScoreTemp, #compactViewButton .compact, #compactViewButton .expand {
        display: none
    }
    .match:hover .versus span {
        position: relative;
        z-index: 2;
        float: right;
        display: block
    }

    /* Cначала обозначаем стили для IE8 и более старых версий
т.е. здесь мы немного облагораживаем стандартный чекбокс. */
    .checkbox {
        vertical-align: top;
        margin: 0 3px 0 0;
        width: 17px;
        height: 17px;
    }
    /* Это для всех браузеров, кроме совсем старых, которые не поддерживают
    селекторы с плюсом. Показываем, что label кликабелен. */
    .checkbox + label {
        cursor: pointer;
    }

    /* Далее идет оформление чекбокса в современных браузерах, а также IE9 и выше.
    Благодаря тому, что старые браузеры не поддерживают селекторы :not и :checked,
    в них все нижеследующие стили не сработают. */

    /* Прячем оригинальный чекбокс. */
    .checkbox:not(checked) {
        position: absolute;
        opacity: 0;
    }
    .checkbox:not(checked) + label {
        position: relative; /* будем позиционировать псевдочекбокс относительно label */
        padding: 0 0 0 60px; /* оставляем слева от label место под псевдочекбокс */
    }
    /* Оформление первой части чекбокса в выключенном состоянии (фон). */
    .checkbox:not(checked) + label:before {
        content: '';
        position: absolute;
        top: -4px;
        left: 0;
        width: 50px;
        height: 26px;
        border-radius: 13px;
        background: #CDD1DA;
        box-shadow: inset 0 2px 3px rgba(0,0,0,.2);
    }
    /* Оформление второй части чекбокса в выключенном состоянии (переключатель). */
    .checkbox:not(checked) + label:after {
        content: '';
        position: absolute;
        top: -2px;
        left: 2px;
        width: 22px;
        height: 22px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0 2px 5px rgba(0,0,0,.3);
        transition: all .2s; /* анимация, чтобы чекбокс переключался плавно */
    }
    /* Меняем фон чекбокса, когда он включен. */
    .checkbox:checked + label:before {
        background: #9FD468;
    }
    /* Сдвигаем переключатель чекбокса, когда он включен. */
    .checkbox:checked + label:after {
        left: 26px;
    }
    /* Показываем получение фокуса. */
    .checkbox:focus + label:before {
        box-shadow: 0 0 0 3px rgba(255,255,0,.5);
    }




</style>
<script>
    export default {
        data(){
            return{
                status: [],
                send:[],
                length: 10,
                active: []
            }
        },
        created(){
           for(let i = 0; i < this.length; i++){
               this.status[i] = 'Не подтвержден';
               this.active[i] = false
           }
           this.status[2] = 'Принят';
           this.active[2] = true;

        },
        methods:{
            changeStatus(index){
                console.log(index);
                if(this.active[index] === true){
                    this.status[index] = 'Не подтвержден';
                    this.active[index] = false
                }
                else {
                    this.status[index] = 'Принят';
                    this.active[index] = true
                }
            }
        },
        computed: {
            statusArray(){
                return this.status;
            },
        }
    }
</script>