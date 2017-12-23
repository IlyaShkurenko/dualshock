<template>
    <div class="tools current" id="#table">
        <table class="toolsTable">
            <tr>
                <th>Статус</th>
                <td>{{getStatus()}}</td>
            </tr>
            <tr>
                <th>Игра</th>
                <td><img :src="tournament.img" alt="Counter-Strike: Global Offensive"  style="width: 30px; height: 30px"/><a href="/game/load/CSGO">{{tournament.game}}</a></td>
            </tr>
            <tr>
                <th>Максимум игроков</th>
                <td>{{tournament.max}}</td>
            </tr>
            <tr>
                <th>Зарегистрировано</th>
                <td>0</td>
            </tr>
            <tr>
                <th>Принято</th>
                <td>0</td>
            </tr>
            <tr>
                <th>Мод</th>
                <td>{{tournament.mod}}</td>
            </tr>
            <tr>
                <th>Правила</th>
                <td>{{tournament.rules}}</td>
            </tr>
            <tr>
                <th>Дата начала</th>
                <td>{{tournament.date}}</td>
            </tr>
            <tr>
                <th>Просмотры турнира</th>
                <td>0</td>
            </tr>
            <tr>
                <th>Денежный сбор</th>
                <td>{{tournament.picking}}</td>
            </tr>
            <tr>
                <th>Призовой фонд</th>
                <td>{{tournament.prize}}</td>
            </tr>
            <tr>
                <th>Дополнительный приз</th>
                <td>{{tournament.additional}}</td>
            </tr>
        </table>
        <div id="details">
            <h2>Описание</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </div>
</template>
<style scoped>
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        margin: 0;
        padding: 0
    }
    #tourneyBanner{
        background-image: url("http://static.mvideo.ru/media/Promotions/Promo_Page/2017/June/fifa-18/fifa-18-top1-d.png");
        background-size: 100%  100%;

    }
    #tourneyBanner img{
        height: 10px;
    }
    body {
        line-height: 1.5;
        position: relative;
        z-index: 1;
        background-image: url("../../images/look.com.ua-110011.jpg");
        border: 0;
        color: #FFF;
        font-family: 'Helvetica Narrow', sans-serif; font-weight: bold;
        font-size: 12px;
        text-align: left
    }

    ol, ul {
        list-style: none
    }

    blockquote, q {
        quotes: none
    }

    blockquote:before, blockquote:after, q:before, q:after {
        content: none
    }

    :focus {
        outline: 0
    }

    ins {
        text-decoration: none
    }

    del {
        text-decoration: line-through
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }


    #toolsNav a {
        display: block;
        float: left;
        height: 34px;
        background: rgba(0, 0, 0, 0.50);
        text-shadow: 1px 1px 0 #000;
        margin-right: 1px;
        color: #888;
        padding: 0 10px
    }

    #toolsNav a.current {
        color: #0AF;
        background: rgba(0, 0, 0, 0.25);
        height: 35px
    }

    .tools {
        display: none;
        background: rgba(0, 0, 0, 0.25);
        overflow: hidden;
        padding: 20px
    }

    .tools .toolsTable {
        width: 450px;
        float: left;
        border-collapse: separate;
        border-spacing: 1px;
        margin-top: -1px
    }

    .tools .toolsTable tr {
        line-height: 25px;
        height: 35px
    }

    .tools .toolsTable tr th {
        background: rgba(0, 0, 0, 0.25);
        text-align: right;
        font-weight: 400;
        font-style: italic;
        font-size: 12px;
        color: #888;
        padding: 5px 10px
    }

    .tools .toolsTable tr td {
        background: rgba(0, 0, 0, 0.1);
        padding: 5px 10px
    }

    .tools .toolsTable tr td img {
        display: block;
        float: left;
        margin: 3px 10px 0 0
    }

    .tools #details {
        width: 450px;
        float: right
    }

    .tools #details h2 {
        display: block;
        height: 35px;
        line-height: 25px;
        background: rgba(0, 0, 0, 0.25);
        font-family: 'Helvetica Narrow', sans-serif; font-weight: bold;
        font-size: 12pt;
        color: #0AF;
        margin-bottom: 1px;
        padding: 5px 20px
    }

    .tools #details p {
        background: rgba(0, 0, 0, 0.1);
        line-height: 20px;
        padding: 10px 20px
    }

    .tools a.reference span {
        width: 100px;
        float: left;
        color: #FFF
    }

    .tools.maps .round {
        display: block;
        width: 920px;
        margin-bottom: 20px
    }

    .tools.maps .round h3 {
        display: block;
        height: 30px;
        line-height: 30px;
        color: #FFF;
        background: rgba(0, 0, 0, 0.50);
        padding: 0 10px
    }

    .tools.maps .round .roundInfo {
        display: block;
        height: 30px;
        line-height: 30px;
        margin-top: 1px
    }

    .tools.maps .round .roundInfo p {
        display: block;
        float: left;
        margin-right: 1px;
        background: rgba(0, 0, 0, 0.25);
        color: #888;
        padding: 0 10px
    }

    .tools.maps .round .roundInfo p.bestOf {
        width: 200px
    }

    .tools.maps .round .roundInfo p.otherMaps {
        width: 418px;
        margin-right: 0
    }

    .tools#mapPool .map p {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        color: #888;
        background: rgba(0, 0, 0, 0.35);
        text-shadow: 1px 1px 0 #000;
        padding: 0 10px
    }


</style>
<script>
    export default {
        data(){
          return{
              status: this.tournament.status
        }
        },
        props:{
            tournament: Object
        },
        methods:{
            getStatus(){
                if(this.status){
                    return 'Начался'
                }
                else return 'Набор участников'
            }
        }
    }
</script>