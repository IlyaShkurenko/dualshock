<template>
    <div :class="'info-block block' + (parseInt(index) + 1)" style="color: white">

            <img :src = "getImgUrl(rooms[index].img)" style="width: 330px; height: 225px;">
            <p>{{rooms[index].names}}</p>
            {{rooms[index].description}}
        </div>
</template>
<script>
    export default {
        props: {
            rooms: Array,
            index: Number
        },
        data(){
            return{
                classBlock: 'info-block block' + (parseInt(this.index) + 1)
            }
        },
        methods: {
            getImgUrl(img) {
                var images = require.context('../images/', false, /\.png$/);
                return images('./' + img)
            }
        }
    }
</script>
<style>
    .info-block{
        width: 400px;
        height: 400px;
        background-color: black;
        margin-top: -1000px;
        float: left;
    }
    .block1{
        float: left;
    }
    .block2{
        float: left;
        margin-left: 620px;

    }
    .block3{
        float: right;
    }
</style>
<!--<div class="info-block block2" style="color: white;">
    <img src="../images/mortal.jpeg" style="width: 280px; height: 225px;">
    <br>
    Mortal Combat XL
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    Любите файтинги? тогда этот турнир специально для вас, <br> приходиите и сразитесь с другими игроками на ближайшем турнире
    <br>
</div>
<div class="info-block block3" style="padding-bottom: 10px; color: white">
    <img src="../images/hookah2.png" style="width: 225px; color: white">
    <br>
    Устали от трудного дня? Тогда вам к нам
</div>-->