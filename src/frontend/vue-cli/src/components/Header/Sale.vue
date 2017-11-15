<template>
    <div class="sale">
        <div class="body-sale">
            <header-component></header-component>

            <loginandreg></loginandreg>
        </div>
        <div class="news-comp">
            <section id="news">

                <div class="wrapper">
                    <div class="top sale-title">
                        <div class="title">
                            <h1 class="main-title">Скидки</h1>
                            <h2 class="sub-title"><span>все, что вы должны</span> знать о</h2>
                        </div>
                    </div>

                    <div class="list">
                        <ul>
                            <li class="news" v-for="index in sale.img.length">
                                <article>
                                    <figure>
                                        <a href="">
                                            <img :src="getImgUrl(sale.img[index-1])" style="width: 100%"
                                                 alt="FIFA 18 турнир открытие">
                                            <img src="" alt="">
                                        </a>
                                    </figure>
                                    <div class="content">
                                        <h3  style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">
                                           {{sale.title[index-1]}}
                                        </h3>
                                        <p>
                                            Cамые разные предложения каждую неделю</p>
                                        <router-link :to="'/sale/' + index"><a class="more">читать еще</a></router-link>
                                    </div>
                                </article>
                            </li>
                        </ul>


                        <a href="" class="more-news "><span>Другие</span>ПРЕДЛОЖЕНИЯ</a>

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
    import Header from '../Header.vue';
    import Footer from '../Footer.vue';
    import Sharing from '../HomeSharing.vue'
    import LoginAndReg from '../LoginAndReg.vue';
    import Logo from '../Items/Logo.vue'

    export default {
        data(){
            return{
                sale:[]
            }
        },
        methods: {
            getImgUrl(img) {
                var images = require.context('../../images/', false, /\.jpg$/);
                return images('./' + img)
            }
        },
        components: {
            'header-component': Header,
            'footer-component': Footer,
            'sharing': Sharing,
            'loginandreg': LoginAndReg,
            'logo-component': Logo
        },
        created(){
            this.sale = this.$store.state.sale
        }
    }
</script>
<style src="../../../styles/news.css" scoped>
    h3{
        font-size: 20px;
    }
    .news-comp{
        background-color: black;
    }
    </style>