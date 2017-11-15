<template>
    <body class="single single-post postid-8948 single-format-standard" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/look.com.ua-110011.jpg?alt=media&token=1594d1a2-b6c4-4fd2-83cc-9cb81c0f12d6') ">
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

                <div class="article-container">
                    <article>

                        <a  v-if="id > 1" :class="{ arrow: true, orange: hasPrev, grey: !hasPrev, prev: true }" :href="'/sale/' + (parseInt(id)-1)"></a>
                        <a  :class="{ arrow: true, orange: hasPrev, grey: !hasPrev, prev: true }" v-else></a>

                        <h1 style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">{{sale.title[id - 1]}}</h1>

                        <figure>
                            <img :src=" getImgUrl(sale.img[id - 1])" style="width: 100%"
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
                            <p><span style="text-decoration: underline">Join the full NARUTO STORM experience on</span>:
                            </p>
                        </div>


                       <a v-if="id < sale.title.length" :class="{ arrow: true, orange: hasNext, grey: !hasNext, next: true }" :href="'/sale/' + (parseInt(id)+1)"> </a>
                        <a :class="{ arrow: true, orange: hasNext, grey: !hasNext, next: true }" v-else> </a>


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

    </div>
    </body>
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
                var images = require.context('../../images/', false, /\.jpg$/);
                return images('./' + img)
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