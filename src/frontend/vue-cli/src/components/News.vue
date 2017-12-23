<template>
    <div>
    <div class="body-news">
        <header-component></header-component>

        <loginandreg></loginandreg>
    </div>
    <div class="news-comp">
        <section id="news">

            <div class="wrapper">
                <div class="top news-title">
                    <div class="title">
                        <h1 class="main-title">НОВОСТИ</h1>
                        <h2 class="sub-title"><span>все, что вы должны</span> знать о</h2>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Выберите событие</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>

                <div class="list">
                    <ul>
                        <li v-for="(item,index) in $store.state.events" class="news">
                            <article>
                                <figure>
                                    <a href="">
                                        <img :src="item.img"
                                             alt="FIFA 18 турнир открытие">
                                        <img src="" alt="">
                                    </a>
                                </figure>
                                <div class="content">
                                    <h3>
                                        <router-link to="/tournament/1">{{item.title}}</router-link>
                                    </h3>
                                    <p>
                                        {{item.description}}</p>
                                    <a
                                       class="more" @click="toEvent(index)">читать еще</a>
                                </div>
                            </article>
                        </li>
                    </ul>


                    <a href="" class="more-news "><span>Другие</span>НОВОСТИ</a>

                </div>

            </div>

        </section>
        <logo-component></logo-component>
        <sharing></sharing>
        <footer-component></footer-component>
    </div>
    </div>
</template>
<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Sharing from './HomeSharing.vue'
    import LoginAndReg from './LoginAndReg.vue';
    import Logo from './Items/Logo.vue'

    export default {
        components: {
            'header-component': Header,
            'footer-component': Footer,
            'sharing': Sharing,
            'loginandreg': LoginAndReg,
            'logo-component': Logo
        },
        methods:{
            toEvent(index){
                if(this.$store.state.events[index].category === 'Турнир'){
                    this.$router.push('tournament/'+ (index + 1))
                }
            }
        }
    }
</script>
<style src="../../styles/news.css" scoped>

</style>