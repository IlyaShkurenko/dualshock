<template>
    <div>
    <article>
        <h1 style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">
            <a href=""
               title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                {{event.title}}</a>
        </h1>

        <figure>
            <a href=""
               title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                <img :src="event.img"
                     alt="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
            </a>
        </figure>
        <div class="content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                &nbsp;
                For the first time in ...</p>
            <a
               class="more" :title="event.title" @click="toEvent">читать еще</a>
        </div>
    </article>
    </div>
</template>
<script>
    export default {
        props: {
            event: Object,
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
            },
            toEvent(){
                if(this.event.category === 'Турнир'){
                    this.$router.push({ path: 'tournament', query: { id: this.event.id }})
                }
            }
        }
    }
</script>
<style src='../../styles/main.css' scoped>

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