<template>
    <div class="single">
    <header-component></header-component>
    <loginandreg></loginandreg>
    <logo-component></logo-component>
    <div class="wrapper-dir">

        <section id="single-news">
            <div class="wrapper">
                <div class="top sale-title">
                    <div class="title">
                        <h2 class="main-title">НОВОСТИ</h2>
                        <h3 class="sub-title"><span>все, что вы должны</span> знать о</h3>
                    </div>
                </div>

               <!-- <div class="article-container"> -->
                <div>
                    <article>

                       <!-- <a  v-if="id > 1" :class="{ arrow: true, orange: hasPrev, grey: !hasPrev, prev: true }" @click="$router.go('/')"></a>
                        <a  :class="{ arrow: true, orange: hasPrev, grey: !hasPrev, prev: true }" v-else></a>-->

                        <h1 style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">{{sale.title[id - 1]}}</h1>

                        <figure>
                            <img :src="sale.img[id - 1]" style="width: 100%"
                                 alt="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
                        </figure>

                        <div class="content" style="font-size: 1vw">
                            <p class="Normal1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p class="Normal1">&nbsp;</p>
                            <p class="Normal1"><strong><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em></strong>
                               </p>
                            <p>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                            </p>
                        </div>


                      <!-- <a v-if="id < sale.title.length" :class="{ arrow: true, orange: hasNext, grey: !hasNext, next: true }" :href="'/single/' + (parseInt(id)+1)"> </a>
                        <a :class="{ arrow: true, orange: hasNext, grey: !hasNext, next: true }" v-else> </a>-->


                    </article>

                </div>


                <router-link to="/sale"><div class="news-page bottom-section all-news">

                    <a>
                        <p>ЩЕЛКНИТЕ ЗДЕСЬ, ЧТОБЫ</p>
                        ПРОСМОТРЕТЬ ВСЕ ПРЕДЛОЖЕНИЯ                </a>

                </div>
                </router-link>
            </div>
        </section>
        <sharing></sharing>
    </div>
    <footer-component></footer-component>
    </div>
</template>
<style src="../../../styles/news.css" scoped>
</style>
<script>
    import Header from '../Header.vue';
    import Footer from '../Footer.vue';
    import Sharing from '../HomeSharing.vue'
    import LoginAndReg from '../LoginAndReg.vue';
    import Logo from '../Items/Logo.vue'

    export default {
        data(){
            return{
                sale:[],
                id: -1,
                hasNext: true,
                hasPrev: true,
            }
        },
        methods: {
            getImgUrl(img) {
                var images = require.context('', false, /\.jpg$/);
                return images('' + img)
            },
            next(id){
                id++;
                this.$router.push('/sale/3')
            },
            prev(){
                if(this.id == 1){
                    return '/sale/1'
                }
                else{
                    return '/sale/' + (parseInt(id)-1)
                }
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
            this.sale = this.$store.state.sale;
            this.id = this.$route.params.id;
            if(this.id == this.sale.title.length ){
                this.hasNext = false
            }
            if(this.id == 1 ){
                this.hasPrev = false
            }
        }
    }
</script>