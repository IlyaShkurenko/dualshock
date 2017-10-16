<template>
    <div class="room-main">
        <router-link to="/prices">Back</router-link>
        <div class="room">
            <h1>{{ 'VIP ' + index }}</h1>
            <img :src="getImgUrl('vip' + index + '.png')"/>
        </div>
        <table class="table_dark">
            <tr>
                <th>Вместимость(чел)</th>
                <th>Цена за час(грн)</th>
                <th>Игры на приставке</th>
                <th>Тип</th>
                <th>Дата открытия</th>
            </tr>
            <tr>
                <td> <p>{{ room.capacity }}</p> </td>
                <td><p>{{ room.price }}</p></td>
                <td><p>{{ games }}</p></td>
                <td> <p>{{ room.type }}</p></td>
                <td><p>{{ room.date }}</p></td>
            </tr>

        </table>
    </div>
</template>

<style>
    .room-main{
        height: 60vw;
        background-image: url("../images/blue.jpg");
    }

    .room{
        padding-top: 5vw;
        text-align: center;
        font-family: 'Сomic Sans MS', sans-serif;
    }

    .room img{
        border: 2px solid white;
        width: 75%;
        height: 600px;
    }
    .table_dark {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        width: 60%;
        text-align: left;
        border-collapse: collapse;
        background: #252F48;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    .table_dark th {
        color: #EDB749;
        border-bottom: 1px solid #37B5A5;
        padding: 12px 17px;
    }
    .table_dark td {
        color: #CAD4D6;
        border-bottom: 1px solid #37B5A5;
        border-right:1px solid #37B5A5;
        padding: 7px 17px;
    }
    .table_dark tr:last-child td {
        border-bottom: none;
    }
    .table_dark td:last-child {
        border-right: none;
    }
    .table_dark tr:hover td {
        text-decoration: underline;
    }

    h1{
        color: white;
        font-size: 40px;
    }
</style>
<script>
    export default {
        data(){
            return {
                index: this.$route.params.id,
                room: this.$store.state.rooms[this.$route.params.id - 1],
                games: ''
            }
        },
        methods: {
            getImgUrl(img) {
                let images = require.context('../images/', false, /\.png$/);
                return images('./' + img);
            },
            getRoom(){
                return this.room
            },
            clearRoom(index){
                if(index > 0){
                    this.room.capacity = '';
                }
            },
            returnGames(){
                let games = '';
                for(let game in this.room.games){
                    this.games + this.room[game] + ' ';
                }
                return games;
            }
        },
        computed: {
        },
         created(){
            let count = this.room.games.length;
            this.games = this.room.games.join();
            /*for(let prop in this.room){
                for(let i in count){
                    if(i !== 0){
                        this.room[prop][i] = '';
                    }
                }
            }*/
         }
    }
</script>