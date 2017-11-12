<template>
    <div>
        <!--<div class="image-uploader__input-wrapperstart">
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
        <input id="myName" name="name" value="John">
        <input type="file" class="image-uploader__input" @change="sync" accept="image/*">
    </div>

    <div class="image-uploader__image-wrapperstart">
        <i v-show="isEmpty && !isLoading" class="fa fa-picture-o fa-3x"></i>
        <i v-show="isLoading" class="fa fa-refresh fa-spin fa-3x"></i>
        <img
                v-show="!isEmpty && !isLoading"
                class="image-uploader__image"
                ref="img"
                src="https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/vip2.png?alt=media&token=8a686319-504e-407e-8222-bddc8f78013f"
        >
    </div>-->
        <div class="body-main">
            <heder-component></heder-component>
            <loginandreg></loginandreg>
        </div>
        <div id="bootstrap-touch-slider"  style="margin-top: -25px" class="carousel bs-slider fade  control-round indicators-line"
             data-ride="carousel" data-pause="hover" data-interval="5000">

            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#bootstrap-touch-slider" data-slide-to="0" class="active"></li>
                <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
                <li data-target="#bootstrap-touch-slider" data-slide-to="2"></li>
            </ol>

            <!-- wrapperstart For Slides -->
            <div class="carousel-inner" role="listbox">

                <!-- Third Slide -->
                <div class="item active">

                    <!-- Slide Background -->
                    <img src="https://lh3.googleusercontent.com/-2ln-a_uJZaA/WgMzlOkrjkI/AAAAAAAAAP4/ba5ZW1HYMdkp2_yT-5Sury_qDwcnnta-wCJoC/w1060-h454-n/room.jpg"
                         alt="Bootstrap Touch Slider" class="slide-image"/>
                    <div class="bs-slider-overlay"></div>

                    <div class="container">
                        <div class="row">
                            <!-- Slide Text Layer -->
                            <div class="slide-text slide_style_left"
                                 style="font-family: 'Helvetica Narrow', sans-serif; font-size: 24px; font-family: bold;">
                                <h1 data-animation="animated zoomInRight"><span class="big">Турниры</span></h1>
                                <ul>
                                    <li class="platform">
                                        <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=ps4">fifa</a>
                                    </li>
                                    <li class="platform">
                                        <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=pcdigital">mortal kombat</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of Slide -->

                <!-- Second Slide -->
                <div class="item">

                    <!-- Slide Background -->
                    <div class="bs-slider-overlay"></div>
                    <!-- Slide Text Layer -->
                    <div class="slide-text slide_style_center">
                        <h1 data-animation="animated flipInX">Bootstrap touch slider</h1>
                        <p data-animation="animated lightSpeedIn">Make Bootstrap Better together.</p>
                        <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-default"
                           data-animation="animated fadeInUp">select one</a>
                        <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-primary"
                           data-animation="animated fadeInDown">select two</a>
                    </div>
                </div>
                <!-- End of Slide -->

                <!-- Third Slide -->
                <div class="item">

                    <!-- Slide Background -->
                    <div class="bs-slider-overlay"></div>
                    <!-- Slide Text Layer -->
                    <div class="slide-text slide_style_right">
                        <h1 data-animation="animated zoomInLeft">Beautiful Animations</h1>
                        <p data-animation="animated fadeInRight">Lots of css3 Animations to make slide beautiful .</p>
                        <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-default"
                           data-animation="animated fadeInLeft">select one</a>
                        <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-primary"
                           data-animation="animated fadeInRight">select two</a>
                    </div>
                </div>
                <!-- End of Slide -->


            </div><!-- End of wrapperstart For Slides -->
            <!-- Left Control -->
            <a class="left carousel-control" href="#bootstrap-touch-slider" role="button" data-slide="prev">
                <span class="fa fa-angle-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <!-- Right Control -->
            <a class="right carousel-control" href="#bootstrap-touch-slider" role="button" data-slide="next">
                <span class="fa fa-angle-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div> <!-- End  bootstrap-touch-slider Slider -->
        <logo-component></logo-component>
        <section id="home-news" style="z-index: 2">

            <div class="wrapperstart">

                <ul>
                    <li class="bloc-news">
                        <article>
                            <h1>
                                <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-storm-trilogy-now-available-4/"
                                   title="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
                                    Турнир FIFA 17                                                            </a>
                            </h1>

                            <figure>
                                <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-storm-trilogy-now-available-4/"
                                   title="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
                                    <img src="../images/fifa17.png"
                                         alt="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
                                </a>
                            </figure>
                            <div class="content">
                                <p>
                                    BANDAI NAMCO Entertainment Europe is pleased to confirm today that NARUTO SHIPPUDEN: Ultimate Ninja STORM LEGACY and NARUTO SHIPPUDEN: Ultimate Ninja STORM TRILOGY are now available for all the fans of t...</p>
                                <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-storm-trilogy-now-available-4/"
                                   class="more"
                                   title="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">читать еще</a>
                            </div>
                        </article>
                    </li>
                    <li class="bloc-news">
                        <article>
                            <h1>
                                <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/"
                                   title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                                    Турнир MORTAL KOMBAT XL                                                           </a>
                            </h1>

                            <figure>
                                <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/"
                                   title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                                    <img src="../images/mortal.jpeg"
                                         alt="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                                </a>
                            </figure>
                            <div class="content">
                                <p>
                                    NARUTO TO BORUTO: SHINOBI STRIKER is ready to be showcased at gamescom 2017! BANDAI NAMCO Entertainment Europe is excited to reveal the amazing new content about the acrobatic ninja battle action game developed by Soleil Ltd.
                                    &nbsp;
                                    For the first time in ...</p>
                                <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/"
                                   class="more" title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">читать еще</a>
                            </div>
                        </article>
                    </li>
                    <li class="bloc-news">
                        <article>
                            <h1>
                                <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/"
                                   title="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                    Кальянный вечер                                                           </a>
                            </h1>

                            <figure>
                                <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/"
                                   title="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                    <img src="../images/hookah2.png"
                                         alt="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                </a>
                            </figure>
                            <div class="content">
                                <p>
                                    BANDAI NAMCO Entertainment Inc.&rsquo;s NARUTO SHIPPUDEN: Ultimate Ninja Blazing, the Ultimate Ninja series game for mobile platforms, is celebrating its first anniversary since launching on the Apple </p>
                                <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/"
                                   class="more"
                                   title="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">читать еще</a>
                            </div>
                        </article>
                    </li>
                </ul>


                <div class="news-page bottom-section">
                    <a href="http://www.naruto-videogames.com/ru/news/">
                        <p>ЩЕЛКНИТЕ ЗДЕСЬ, ЧТОБЫ</p>
                        ПРОСМОТРЕТЬ ВСЕ НОВОСТИ            </a>
                </div>

            </div>

        </section>
        <section id="home-community" style="z-index: 2">


            <div class="wrapperstart">

                <ul class="social-wall">

                    <li class="manual">
                        <article>
                            <h2><a href="https://www.bandainamcoent.eu/community" target="_blank">Сообщество Bandai Namco</a>
                            </h2>
                            <p>
                                Это место для тех, кто хочет следить за новостями о своих любимых играх и получить подарок за вступление в сообщество<br/>
                                ...</p>
                            <a href="https://www.bandainamcoent.eu/community" class="logo">
                                <img src="http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/VIPCorner_logo_2.png"
                                     alt="">
                            </a>


                            <div class="img"
                                 style="background-image: url('http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/Home_Socialpush_VIPCorner_2.jpg'); ">
                                <a href="https://www.bandainamcoent.eu/community" target="_blank"
                                   data-id="manual_0"></a>
                            </div>
                        </article>

                        <a href="https://www.bandainamcoent.eu/community" target="_blank" data-id="manual_0"
                           class="view-more">
                            ПРИСОЕДИНИТЬСЯ                        </a>
                    </li>


                    <li class="manual">
                        <article>
                            <h2><a href="http://www.storm-league.com/" target="_blank">Storm league</a></h2>
                            <p>
                                Присоединяйтесь к Ураганной Лиге &#8211; единственной спортивной платформе для игр во вселенной Наруто, в которой лучшие в мире игроки сражаются друг с другом, выигрывают призы и становятся чемпионами!<br/>
                                ...</p>
                            <a href="http://www.storm-league.com/" class="logo">
                                <img src="http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/Storm-League-logo_DIPLO.png"
                                     alt="">
                            </a>


                            <div class="img"
                                 style="background-image: url('http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/storm-league-bg.png'); ">
                                <a href="http://www.storm-league.com/" target="_blank" data-id="manual_1"></a>
                            </div>
                        </article>

                        <a href="http://www.storm-league.com/" target="_blank" data-id="manual_1" class="view-more">
                            Узнать больше                        </a>
                    </li>

                </ul>

                <div class="community-page bottom-section black">
                    <p>Читайте нас в</p>
                    <a href="https://twitter.com/Narutovideogame" class="twitter-link" target="_blank">Twitter</a> &amp;
                    <a href="https://www.facebook.com/Narutogames" class="facebook-link" target="_blank">Facebook</a>
                </div>

            </div>

        </section>
        <section id="home-videos" style="z-index: 2">

            <div class="wrapperstart">
                <div class="ratio-iframe">
                    <iframe src="https://www.youtube.com/embed/dfgI5hDbwPY" frameborder="0"></iframe>
                </div>

                <div class="video-page bottom-section black">
                    <p>Посмотреть больше на</p>
                    <a href="https://www.youtube.com/playlist?list=PL193BAFEF6BE62E9D" class="youtube-link"
                       target="_blank">youtube</a>
                </div>

            </div>

        </section>
        <section id="section-preorder" style="z-index: 0">
            <div class="wrapperstart">
                <figure>
                    <img src="../images/coins.png"
                         alt="Get it now! NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO - Standard Edition">
                </figure><!--

        -->
                <div class="content">
                    <div class="text">
                        <span class="big">Поставить</span><span class="small">сейчас!</span>
                        <p>Ставки на любой турнир</p>
                    </div>
                    <div class="platforms">
                        <p>Выберите турнир</p>
                        <ul>
                            <li class="platform">
                                <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=ps4">fifa</a>
                            </li>
                            <li class="platform">
                                <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=pcdigital">mortal kombat</a>
                            </li>
                            <li class="platform">
                                <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=xboxone">xboxone</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>
        <sharing-component></sharing-component>
        <footer-compomemt></footer-compomemt>
    </div>
</template>
<script>
    //import 'hover.css/css/hover.css'
    import Sharing from './HomeSharing.vue';
    import Event from './Event.vue';
    import LoginAndReg from './LoginAndReg.vue'
    import Footer from './Footer.vue';
    import axios from 'axios'
    import auth from '../auth'
    import dataURLtoBlob from 'blueimp-canvas-to-blob';
    import Header from './Header.vue'
    import Logo from './Items/Logo.vue'
    import Vue from 'vue'

    export default {
        data() {
            return {
                event: {
                    images: ['fifa17.png', 'fifa17.png', 'hookah2.png'],
                    names: ['FIFA 17', 'MORTAL XL', 'HOOKAH'],
                    description: ['Надоело смотреть футбол по телевизору? тогда тебе к нам.',
                        'Любите файтинги? тогда этот турнир специально для вас',
                        ' Устали от трудного дня? Тогда вам к нам']
                },
                imageSrc: 'http://nahmdong.com/vitalhill/img/default.png',
                success: null,
                message: '',
                image: {},
                srcPrefix: '/vue/image-uploader/assets/img/',
                content: null,
                // New image's File object
                file: null,
                isLoading: false,
                isDragging: false,
            }
        },
        methods: {
            sync(e) {
                e.preventDefault();
                this.selectImage(e.target.files[0]);
            },
            selectImage(file) {
                let data = new FormData();
                data.append('image', file);
                data.append("username", "Groucho");
                this.$http.post('rooms', data).then(
                    response => {
                        console.log('Success! Response: ', response.body);
                    },
                    response => {
                        // error callback
                    }
                );
                this.file = file;
                let reader = new FileReader();
                reader.onload = this.onImageLoad;
                reader.readAsDataURL(file);
            },
            onImageLoad(e) {
                this.content = e.target.result;
                let filename = this.file instanceof File ? this.file.name : '';
                // Dispatch new input event with filename
                this.$emit('input', filename);
                // Dispatch new event with image content
                this.$emit('image-changed', this.content);
            },
            logout() {
                auth.logout();
                this.$router.go(this.$router.currentRoute);
            },
            login() {
                this.$router.push('login');
            },
            home() {
                this.$router.push(localStorage.getItem('role'));
            },
            signup() {
                this.$router.push('signup')
            }
        },
        created() {
           // this.getRooms()
        },
        beforeCreate() {
            auth.checkAuth();
        },
        computed: {
            src() {
                if (this.content) {
                    return this.content;
                }
                return this.isEmpty ? '' : this.srcPrefix + this.value;
            },
            logined() {
                return auth.user.authenticated;
            }
        },
        components: {
            'event-component': Event,
            'heder-component': Header,
            'footer-compomemt': Footer,
            'loginandreg': LoginAndReg,
            'sharing-component': Sharing,
            'logo-component': Logo
        }
    }
</script>
<style scoped>
    .body-main{
        height: 80px;
        background-color: #3caa36;
    }

    span.big {
        display: block;
        margin-left: -30px;
        margin-top: -60px;
        color: #FF4E00;
        font-family: "SmudgerLET";
        font-size: 100px;
        line-height: 100px;
        -ms-transform: rotate(-7deg);
        -webkit-transform: rotate(-7deg);
        transform: rotate(-7deg)
    }

    #home-community {
        min-height: 850px;
    }

    #home-news {
    }

    .hero h1 {
        font-size: 6em;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }

    .bs-slider {
        overflow: hidden;
        max-height: 700px;
        position: relative;
        background: #000000;
    }

    .bs-slider:hover {
        cursor: -moz-grab;
        cursor: -webkit-grab;
    }

    .bs-slider:active {
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }

    .bs-slider .bs-slider-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.40);
    }

    .bs-slider > .carousel-inner > .item > img,
    .bs-slider > .carousel-inner > .item > a > img {
        margin: auto;
        width: 100% !important;
    }

    /********************
    *****Slide effect
    **********************/

    .fade {
        opacity: 1;
    }

    .fade .item {
        top: 0;
        z-index: 1;
        opacity: 0;
        width: 100%;
        position: absolute;
        left: 0 !important;
        display: block !important;
        -webkit-transition: opacity ease-in-out 1s;
        -moz-transition: opacity ease-in-out 1s;
        -ms-transition: opacity ease-in-out 1s;
        -o-transition: opacity ease-in-out 1s;
        transition: opacity ease-in-out 1s;
    }

    .fade .item:first-child {
        top: auto;
        position: relative;
    }

    .fade .item.active {
        opacity: 1;
        z-index: 2;
        -webkit-transition: opacity ease-in-out 1s;
        -moz-transition: opacity ease-in-out 1s;
        -ms-transition: opacity ease-in-out 1s;
        -o-transition: opacity ease-in-out 1s;
        transition: opacity ease-in-out 1s;
    }

    /*---------- LEFT/RIGHT ROUND CONTROL ----------*/
    .control-round .carousel-control {
        top: 47%;
        opacity: 0;
        width: 45px;
        height: 45px;
        z-index: 100;
        color: #ffffff;
        display: block;
        font-size: 24px;
        cursor: pointer;
        overflow: hidden;
        line-height: 43px;
        text-shadow: none;
        position: absolute;
        font-weight: normal;
        background: transparent;
        -webkit-border-radius: 100px;
        border-radius: 100px;
    }

    .control-round:hover .carousel-control {
        opacity: 1;
    }

    .control-round .carousel-control.left {
        left: 1%;
    }

    .control-round .carousel-control.right {
        right: 1%;
    }

    .control-round .carousel-control.left:hover,
    .control-round .carousel-control.right:hover {
        color: #fdfdfd;
        background: rgba(0, 0, 0, 0.5);
        border: 0px transparent;
    }

    .control-round .carousel-control.left > span:nth-child(1) {
        left: 45%;
    }

    .control-round .carousel-control.right > span:nth-child(1) {
        right: 45%;
    }

    /*---------- INDICATORS CONTROL ----------*/
    .indicators-line > .carousel-indicators {
        right: 45%;
        bottom: 3%;
        left: auto;
        width: 90%;
        height: 20px;
        font-size: 0;
        overflow-x: auto;
        text-align: right;
        overflow-y: hidden;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 1px;
        white-space: nowrap;
    }

    .indicators-line > .carousel-indicators li {
        padding: 0;
        width: 15px;
        height: 15px;
        border: 1px solid rgb(158, 158, 158);
        text-indent: 0;
        overflow: hidden;
        text-align: left;
        position: relative;
        letter-spacing: 1px;
        background: rgb(158, 158, 158);
        -webkit-font-smoothing: antialiased;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        margin-right: 5px;
        -webkit-transition: all 0.5s cubic-bezier(0.22, 0.81, 0.01, 0.99);
        transition: all 0.5s cubic-bezier(0.22, 0.81, 0.01, 0.99);
        z-index: 10;
        cursor: pointer;
    }

    .indicators-line > .carousel-indicators li:last-child {
        margin-right: 0;
    }

    .indicators-line > .carousel-indicators .active {
        margin: 1px 5px 1px 1px;
        box-shadow: 0 0 0 2px #fff;
        background-color: transparent;
        position: relative;
        -webkit-transition: box-shadow 0.3s ease;
        -moz-transition: box-shadow 0.3s ease;
        -o-transition: box-shadow 0.3s ease;
        transition: box-shadow 0.3s ease;
        -webkit-transition: background-color 0.3s ease;
        -moz-transition: background-color 0.3s ease;
        -o-transition: background-color 0.3s ease;
        transition: background-color 0.3s ease;

    }

    .indicators-line > .carousel-indicators .active:before {
        transform: scale(0.5);
        background-color: #fff;
        content: "";
        position: absolute;
        left: -1px;
        top: -1px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        -webkit-transition: background-color 0.3s ease;
        -moz-transition: background-color 0.3s ease;
        -o-transition: background-color 0.3s ease;
        transition: background-color 0.3s ease;
    }

    /*---------- SLIDE CAPTION ----------*/
    .slide_style_left {
        text-align: left !important;
    }

    .slide_style_right {
        text-align: right !important;
    }

    .slide_style_center {
        text-align: center !important;
    }

    .slide-text {
        left: 0;
        top: 25%;
        right: 0;
        margin: auto;
        padding: 10px;
        position: absolute;
        text-align: left;
        padding: 10px 85px;

    }

    .slide-text > h1 {

        padding: 0;
        color: #ffffff;
        font-size: 70px;
        font-style: normal;
        line-height: 84px;
        margin-bottom: 30px;
        letter-spacing: 1px;
        display: inline-block;
        -webkit-animation-delay: 0.7s;
        animation-delay: 0.7s;
    }

    .slide-text > p {
        padding: 0;
        color: #ffffff;
        font-size: 20px;
        line-height: 24px;
        font-weight: 300;
        margin-bottom: 40px;
        letter-spacing: 1px;
        -webkit-animation-delay: 1.1s;
        animation-delay: 1.1s;
    }

    .slide-text > a.btn-default {
        color: #000;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        margin-right: 10px;
        text-align: center;
        padding: 17px 30px;
        white-space: nowrap;
        letter-spacing: 1px;
        display: inline-block;
        border: none;
        text-transform: uppercase;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

    }

    .slide-text > a.btn-primary {
        color: #ffffff;
        cursor: pointer;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        margin-left: 10px;
        text-align: center;
        padding: 17px 30px;
        white-space: nowrap;
        letter-spacing: 1px;
        background: #00bfff;
        display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        border: none;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .slide-text > a:hover,
    .slide-text > a:active {
        color: #ffffff;
        background: #222222;
        -webkit-transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
        transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
    }

    /*------------------------------------------------------*/
    /* RESPONSIVE
    /*------------------------------------------------------*/

    @media (max-width: 991px) {
        .slide-text h1 {
            font-size: 40px;
            line-height: 50px;
            margin-bottom: 20px;
        }

        .slide-text > p {

            font-size: 18px;
        }
    }

    /*---------- MEDIA 480px ----------*/
    @media (max-width: 768px) {
        .slide-text {
            padding: 10px 50px;
        }

        .slide-text h1 {
            font-size: 30px;
            line-height: 40px;
            margin-bottom: 10px;
        }

        .slide-text > p {
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 20px;
        }

        .control-round .carousel-control {
            display: none;
        }

    }

    @media (max-width: 480px) {
        .slide-text {
            padding: 10px 30px;
        }

        .slide-text h1 {
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 5px;
        }

        .slide-text > p {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 10px;
        }

        .slide-text > a.btn-default,
        .slide-text > a.btn-primary {
            font-size: 10px;
            line-height: 10px;
            margin-right: 10px;
            text-align: center;
            padding: 10px 15px;
        }

        .indicators-line > .carousel-indicators {
            display: none;
        }

    }
    
    html {
        line-height: 1
    }

    ol, ul {
        list-style: none
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    caption, th, td {
        text-align: left;
        font-weight: normal;
        vertical-align: middle
    }

    q, blockquote {
        quotes: none
    }

    q:before, q:after, blockquote:before, blockquote:after {
        content: "";
        content: none
    }

    a img {
        border: none
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
        display: block
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline
    }

    html {
        line-height: 1
    }

    ol, ul {
        list-style: none
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    caption, th, td {
        text-align: left;
        font-weight: normal;
        vertical-align: middle
    }

    q, blockquote {
        quotes: none
    }

    q:before, q:after, blockquote:before, blockquote:after {
        content: "";
        content: none
    }

    a img {
        border: none
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
        display: block
    }

    @font-face {
        font-family: 'BebasNeue';
        src: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/BebasNeue.eot");
        src: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/BebasNeue.eot?#iefix") format("embedded-opentype"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/BebasNeue.woff") format("woff"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/BebasNeue.ttf") format("truetype"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/BebasNeue.svg#BebasNeue") format("svg");
        font-style: normal;
        font-weight: normal;
        text-rendering: optimizeLegibility
    }

    @font-face {
        font-family: 'Lovelo';
        src: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/Lovelo-Black.eot");
        src: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/Lovelo-Black.eot?#iefix") format("embedded-opentype"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/Lovelo-Black.woff") format("woff"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/Lovelo-Black.ttf") format("truetype"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/Lovelo-Black.svg#Lovelo-Black") format("svg");
        font-style: normal;
        font-weight: normal;
        text-rendering: optimizeLegibility
    }

    @font-face {
        font-family: 'SmudgerLET';
        src: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/SmudgerLetPlain.eot");
        src: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/SmudgerLetPlain.eot?#iefix") format("embedded-opentype"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/SmudgerLetPlain.woff") format("woff"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/SmudgerLetPlain.ttf") format("truetype"), url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/fonts/SmudgerLetPlain.svg#SmudgerLetPlain") format("svg");
        font-style: normal;
        font-weight: normal;
        text-rendering: optimizeLegibility
    }

    html, body {
        height: 100%;
        width: 100%;
        min-height: 100%
    }

    body {
        font-size: 14px;
        line-height: 21px;
        font-family: "Georgia";
        color: black
    }

    body * {
        -webkit-font-smoothing: antialiased
    }

    input {
        font-family: inherit;
        padding: 5px 10px
    }

    section {
        position: relative;
        margin-top: -1px;
        padding-top: 1px
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
        display: block
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: normal
    }

    li {
        list-style-type: none
    }

    a, a:hover, a:active {
        outline: none;
        text-decoration: none;
        color: #000
    }

    a img {
        border: none
    }

    #main img, #header img {
        vertical-align: middle;
        width: 100%
    }

    fieldset {
        border: 0;
        margin: 0;
        padding: 0
    }

    textarea {
        resize: vertical
    }

    body {
        min-width: 1024px;
        margin-top: -1px;
        padding-top: 1px
    }

    #main {
        width: 100%;
        overflow: hidden
    }

    #brandbar {
        z-index: 20;
        position: relative
    }

    .wrapperstart {
        width: 100%;
        height: 100%;
        max-width: 1366px;
        margin: auto
    }

    .small-wrapperstart {
        width: 832px;
        margin: auto
    }

    h1 {
        font-family: "Lovelo";
        font-size: 22px
    }

    .bottom-section {
        text-transform: uppercase;
        text-align: center;
        margin-top: 40px;
        font-family: "BebasNeue";
        font-size: 37px;
        position: relative
    }

    .bottom-section p {
        font-family: "Lovelo";
        font-size: 12px;
        margin-bottom: 10px;
        color: white
    }

    .bottom-section a {
        font-family: "BebasNeue";
        font-size: 37px;
        color: white;
        position: relative
    }

    .bottom-section.black p {
        color: black;
        font-size: 22px
    }

    .bottom-section.black a {
        color: black;
        font-size: 60px;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        vertical-align: middle
    }

    #header {
        width: 100%;
        height: 55px;
        position: relative;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-header.png") left top repeat-x;
        z-index: 10
    }

    #header .wrapperstart {
        position: relative
    }

    #header img {
        width: 165px;
        height: auto
    }

    #header nav {
        display: inline-block;
        width: auto;
        vertical-align: top;
        margin-left: 30px
    }

    #header nav > ul > li {
        display: inline-block;
        line-height: 55px;
        vertical-align: middle;
        padding: 0 15px;
        position: relative;
        text-align: center
    }

    #header nav > ul > li a {
        font-family: "Lovelo";
        font-size: 14px;
        color: white;
        text-transform: uppercase;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%
    }

    #header nav > ul > li:not(.store)::before {
        content: "";
        display: block;
        width: 100%;
        height: 104%;
        position: absolute;
        top: 0;
        left: 0;
        background: white;
        -ms-transform: translateY(-100%) translateZ(0);
        -webkit-transform: translateY(-100%) translateZ(0);
        transform: translateY(-100%) translateZ(0);
        z-index: 0
    }

    #header nav > ul > li:hover a, #header nav > ul > li.current a {
        color: black
    }

    #header nav > ul > li:hover::before, #header nav > ul > li.current::before {
        -ms-transform: translateY(0%) translateZ(0);
        -webkit-transform: translateY(0%) translateZ(0);
        transform: translateY(0%) translateZ(0)
    }

    #header .store {
        min-width: 145px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-store.png") center top no-repeat;
        padding: 0
    }

    #header .store:hover, #header .store.current {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-store-white.png") center top no-repeat
    }

    #header .shop {
        height: 45px;
        padding-bottom: 5px;
        padding-right: 7px;
        position: absolute;
        top: 0;
        right: 140px;
        text-transform: uppercase;
        text-align: center;
        line-height: 51px;
        font-family: "Lovelo";
        font-size: 13px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-shop.png") center center no-repeat;
        background-size: 100% 37px
    }

    #header .shop a {
        padding: 0 21px 0 13px;
        color: white
    }

    #header .shop::after {
        content: "";
        display: block;
        width: 11px;
        height: 14px;
        position: absolute;
        right: 10px;
        top: 18px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/tag.svg") center center no-repeat;
        background-size: 100% 100%
    }

    @media screen and (max-width: 1280px) {
        #header nav {
            margin-left: 0px
        }

        #header nav > ul > li {
            padding: 0 8px
        }

        #header nav > ul > li a {
            font-size: 13px
        }
    }

    #home-banner {
        background: black;
        height: auto;
        margin-top: -10px
    }

    #home-banner .wrapperstart {
        max-width: 1366px
    }

    #home-banner .slider {
        display: inline-block;
        overflow: hidden;
        width: 100%;
        position: relative;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1 0 0px;
        -ms-flex: 1 0 0px;
        flex: 1 0 0px
    }

    #home-banner .slider.small {
        width: 65%
    }

    #home-banner .slider.small .videos-only .slide {
        min-height: 500px
    }

    #home-banner .slider.small video {
        height: 100%
    }

    #home-banner .slider.full .videos-only .slide {
        min-height: 540px
    }

    #home-banner .slider.full video {
        width: 100%
    }

    #home-banner .wrapperstart {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1
    }

    #home-banner .slides {
        display: inline-block;
        white-space: nowrap;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex: 2;
        -ms-flex: 2;
        flex: 2
    }

    #home-banner .slide {
        display: inline-block;
        height: auto;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
        position: relative;
        width: 100%
    }

    #home-banner video {
        display: block;
        top: 50%;
        left: 50%;
        position: absolute;
        -ms-transform: translate3d(-50%, -51%, 0);
        -webkit-transform: translate3d(-50%, -51%, 0);
        transform: translate3d(-50%, -51%, 0)
    }

    #home-banner .slide a {
        display: block;
        width: 100%
    }

    #home-banner .slide .content {
        position: absolute;
        bottom: 10%;
        right: 6.5%;
        text-align: center
    }

    #home-banner .slide .content span {
        display: block;
        text-transform: uppercase;
        vertical-align: middle
    }

    #home-banner .line1 {
        color: #FF4E00;
        font-family: "SmudgerLET";
        font-size: 150px;
        line-height: 100px;
        -ms-transform: rotate(-7deg);
        -webkit-transform: rotate(-7deg);
        transform: rotate(-7deg)
    }

    #home-banner .line2 {
        color: white;
        font-family: "Lovelo";
        font-size: 20px;
        line-height: 30px;
        margin-top: -5px
    }

    #home-banner .line3 {
        color: white;
        font-family: "BebasNeue";
        font-size: 67px;
        line-height: 75px
    }

    #home-banner .line4 {
        color: white;
        font-family: "Lovelo";
        font-size: 13px;
        margin-top: -5px
    }

    #home-banner .see {
        display: inline-block;
        width: 12px;
        height: 10px;
        margin: 10px auto;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/arrow.svg") center center no-repeat;
        background-size: 12px auto;
        position: relative
    }

    #home-banner .see::before {
        content: "";
        display: block;
        width: 45px;
        height: 40px;
        position: absolute;
        top: -13px;
        left: -20px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn1_left.png") center center no-repeat;
        background-size: 100% auto;
        transition: background 0.3s
    }

    #home-banner .see::after {
        content: "";
        display: block;
        width: 45px;
        height: 40px;
        position: absolute;
        top: -13px;
        left: -10px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn1_right.png") center center no-repeat;
        background-size: 100% auto;
        transition: background 0.3s
    }

    #home-banner .see:hover::before {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn1_left_over.png") center center no-repeat;
        background-size: 100% auto
    }

    #home-banner .see:hover::after {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn1_right_over.png") center center no-repeat;
        background-size: 100% auto
    }

    #home-banner .background {
        width: 100%
    }

    #home-banner .background img {
        width: 100%;
        height: auto
    }

    #home-banner .bullets {
        position: absolute;
        bottom: 20px;
        right: 20px
    }

    #home-banner .bullets li {
        display: inline-block;
        width: 18px;
        height: 18px;
        cursor: pointer;
        position: relative
    }

    #home-banner .bullets li a {
        top: 3px;
        left: 3px;
        width: 12px;
        height: 12px;
        text-indent: -999em;
        cursor: pointer;
        position: absolute;
        outline: none;
        background: white;
        transition: background-color 0.3s ease;
        border-radius: 50%
    }

    #home-banner .bullets li:hover a, #home-banner .bullets li.current a {
        background: #FF4E00
    }

    #home-banner .bullets li svg {
        z-index: 10
    }

    #home-banner .bullets li svg circle {
        opacity: 0;
        fill: none;
        stroke: #fff;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 39 39;
        stroke-dashoffset: 39;
        transition: stroke-dashoffset 0.3s, opacity 0.3s
    }

    #home-banner .bullets li.current svg circle {
        opacity: 1;
        stroke-dashoffset: 0
    }

    #home-banner .pushs {
        display: inline-block;
        width: 35%;
        height: auto;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
        vertical-align: top
    }

    #home-banner .push {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        position: relative;
        padding: 20px 0;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-push-1.jpg") center center no-repeat;
        background-size: cover;
        text-align: center;
        position: relative
    }

    #home-banner .push2 {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-push-2.jpg") center center no-repeat;
        background-size: cover
    }

    #home-banner .push .content {
        display: inline-block;
        width: 45%;
        margin-right: 3%;
        margin-left: 3%;
        vertical-align: middle
    }

    #home-banner .push a {
        display: block;
        width: 100%;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%)
    }

    #home-banner .push span, #home-banner .push p {
        display: block;
        color: white;
        font-family: "Lovelo";
        text-transform: uppercase;
        font-size: 13px
    }

    #home-banner .push .title {
        font-size: 30px;
        line-height: 30px;
        word-wrap: break-word
    }

    @media screen and (max-width: 1320px) {
        #home-banner .push .title {
            font-size: 22px;
            line-height: 22px
        }
    }

    #home-banner .push .subtitle {
        color: black
    }

    #home-banner .push img {
        vertical-align: middle;
        display: inline-block;
        width: 40%;
        max-width: 190px;
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    #home-news {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: auto;
        min-height: 610px;
        width: 100%;
        padding-bottom: 40px;
        margin-top: -10px
    }

    #home-news ul {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
        margin: 70px auto 0;
        width: 95%
    }

    #home-news h1 {
        text-align: center
    }

    #home-news .bloc-news {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1 0 0px;
        -ms-flex: 1 0 0px;
        flex: 1 0 0px;
        min-height: 290px;
        width: 23%;
        position: relative;
        padding: 45px 20px;
        text-align: left;
        vertical-align: top;
        margin-right: 3%;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-news.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover
    }

    #home-news figure {
        display: inline-block;
        width: 130px;
        height: 130px;
        position: absolute;
        top: 40%;
        left: -15px;
        overflow: hidden;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.7)
    }

    @media screen and (max-width: 1150px) {
        #home-news figure {
            top: 31%;
            width: 100px;
            height: 100px
        }
    }

    #home-news figure img {
        display: block;
        height: 100%;
        width: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%)
    }

    #home-news .content {
        display: inline-block;
        width: 60%;
        margin: 20px 0 0 120px;
        text-align: justify
    }

    #home-news .content p {
        margin-bottom: 10px
    }

    @media screen and (max-width: 1150px) {
        #home-news .content {
            margin: 20px 0 0 90px
        }
    }

    #home-news ul li:first-child {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-news2.jpg")
    }

    #home-news ul li:last-child {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-news3.jpg");
        margin-right: 0
    }

    #home-news .bottom-section {
        color: white;
        display: inline-block;
        width: auto;
        position: absolute;
        left: 50%;
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    #home-news .bottom-section a {
        display: inline-block;
        text-align: center;
        color: white;
        position: relative;
        z-index: 1;
        font-size: 37px;
        padding-left: 50px;
        padding-right: 60px;
        white-space: nowrap
    }

    #home-news .bottom-section p {
        font-size: 12px;
        margin-bottom: 10px
    }

    #home-news .bottom-section::after {
        content: "";
        display: block;
        width: 79px;
        height: 115px;
        position: absolute;
        right: 0;
        top: -20px;
        z-index: 0;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_right.png") center center no-repeat;
        transition: background 0.3s
    }

    #home-news .bottom-section::before {
        content: "";
        display: block;
        width: 59px;
        height: 66px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_left.png") center center no-repeat;
        transition: background 0.3s
    }

    #home-news .bottom-section:hover::after {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_right_over.png") center center no-repeat
    }

    #home-news .bottom-section:hover::before {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_left_over.png") center center no-repeat
    }

    #home-community {
        position: relative;
        width: 100%;
        height: auto;
        min-height: 640px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-social.jpg") center center no-repeat;
        background-size: cover;
        padding-bottom: 40px
    }

    #home-community ul {
        display: block;
        vertical-align: top;
        text-align: center;
        margin-top: 35px
    }

    #home-community li {
        display: inline-block;
        height: 360px;
        width: 22%;
        position: relative;
        vertical-align: top;
        padding: 40px;
        margin: 20px 10px;
        text-align: left;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U2ZTZlNiIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');
        background-size: 100%;
        background-image: linear-gradient(#e6e6e6, #ffffff 50%);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3)
    }

    @media screen and (max-width: 1150px) {
        #home-community li {
            height: 380px
        }
    }

    #home-community li p {
        padding-left: 15px
    }

    #home-community li h2 {
        font-family: "Lovelo";
        font-size: 16px;
        text-transform: uppercase;
        margin-bottom: 10px
    }

    #home-community .logo {
        display: block;
        position: absolute;
        left: 50%;
        bottom: 220px;
        z-index: 1;
        -ms-transform: translateX(-50%) translateY(80%) translateZ(0);
        -webkit-transform: translateX(-50%) translateY(80%) translateZ(0);
        transform: translateX(-50%) translateY(80%) translateZ(0)
    }

    #home-community li.fb h2 a, #home-community li.fb p a {
        color: #3B5999
    }

    #home-community li.fb .view-more {
        background-color: #3B5999
    }

    #home-community li.tw h2 a, #home-community li.tw p a {
        color: #2AA9E0
    }

    #home-community li.tw .view-more {
        background-color: #2AA9E0
    }

    #home-community li.manual h2 a, #home-community li.manual p a {
        color: #FF4E00
    }

    #home-community div.img {
        display: block;
        width: 100%;
        height: 220px;
        position: absolute;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background-position: center top;
        background-size: cover
    }

    #home-community div.img a {
        display: block;
        width: 100%;
        height: 100%
    }

    #home-community li.fb::before, #home-community li.tw::before {
        content: "";
        display: block;
        height: 40px;
        width: 40px;
        position: absolute;
        bottom: 220px;
        left: 50%;
        background: #fff;
        border-radius: 50%;
        -ms-transform: translateX(-50%) translateY(50%);
        -webkit-transform: translateX(-50%) translateY(50%);
        transform: translateX(-50%) translateY(50%);
        z-index: 2
    }

    #home-community li.tw::before {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/twitter.svg") center center no-repeat #fff;
        background-size: 23px 18px
    }

    #home-community li.fb::before {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/facebook.svg") center center no-repeat #fff;
        background-size: 12px 22px
    }

    #home-community a.twitter-link {
        margin: 0 10px;
        color: #2AA9E0;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        vertical-align: middle
    }

    #home-community a.twitter-link::after, #home-community a.twitter-link::before {
        background-color: #2AA9E0
    }

    #home-community a.facebook-link {
        margin: 0 10px;
        color: #3B5999;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        vertical-align: middle
    }

    #home-community a.facebook-link::after, #home-community a.facebook-link::before {
        background-color: #3B5999
    }

    #home-videos {
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-videos.jpg") center center no-repeat;
        background-size: cover;
        padding: 40px 0 40px
    }

    #home-videos .ratio-iframe {
        width: 90%;
        height: 0;
        padding-bottom: 51%;
        margin: auto;
        position: relative
    }

    #home-videos iframe {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        margin: auto
    }

    #home-videos a.youtube-link {
        margin: 0 10px;
        color: #D52423
    }

    #home-videos a.youtube-link::after, #home-videos a.youtube-link::before {
        background-color: #D52423
    }

    #section-preorder {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 505px;
        width: 100%;
        text-align: center
    }

    #section-preorder.all-games {
        padding-bottom: 50px
    }

    #section-preorder .wrapperstart {
        line-height: 505px
    }

    #section-preorder figure {
        display: inline-block;
        max-width: 35%;
        max-height: 490px;
        line-height: 16px;
        vertical-align: middle
    }

    #section-preorder figure img {
        width: 100%
    }

    #section-preorder .content {
        display: inline-block;
        color: white;
        margin-left: 40px;
        max-width: 50%;
        line-height: 16px;
        vertical-align: middle
    }

    #section-preorder .content .text {
        font-size: 64px;
        line-height: 64px;
        font-family: "BebasNeue";
        text-align: left;
        padding-left: 50px
    }

    #section-preorder .content .text span.big {
        display: block;
        margin-left: -55px;
        color: #FF4E00;
        font-family: "SmudgerLET";
        font-size: 150px;
        line-height: 100px;
        -ms-transform: rotate(-7deg);
        -webkit-transform: rotate(-7deg);
        transform: rotate(-7deg)
    }

    #section-preorder .content .text span.small {
        position: relative;
        z-index: 1;
        display: block;
        margin-top: 10px
    }

    #section-preorder .content p {
        font-family: "Lovelo";
        font-size: 12px;
        line-height: 12px
    }

    #section-preorder .content .platforms {
        padding-left: 50px;
        margin-top: 30px;
        text-align: left
    }

    #section-preorder .content .platforms p {
        font-size: 15px;
        line-height: 15px;
        margin-bottom: 10px
    }

    #section-preorder li.platform::after {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
        opacity: 0.5
    }

    li.platform {
        display: inline-block;
        width: 150px;
        height: 50px;
        text-indent: -9999px;
        margin: 0 10px 10px 0;
        position: relative
    }

    li.platform::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-button-preorder.png") center center no-repeat;
        background-size: cover
    }

    li.platform a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1
    }

    .ps4 a {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/ps4.svg") center center no-repeat;
        background-size: auto 25px
    }

    .ps3 a {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/ps3.svg") center 12px no-repeat;
        background-size: auto 30px
    }

    .psvita a {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/psvita.svg") center center no-repeat;
        background-size: auto 25px
    }

    .pcdigital a {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/pc.svg") center center no-repeat;
        background-size: auto 17px
    }

    .xboxone a {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/xboxone.svg") center center no-repeat;
        background-size: auto 25px
    }

    .xbox360 a {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/xbox360.svg") center center no-repeat;
        background-size: auto 25px
    }

    #join-us {
        height: auto;
        min-height: 420px;
        padding-top: 80px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-crm.jpg") center bottom no-repeat;
        background-size: cover;
        text-align: center;
        position: relative
    }

    #join-us .form {
        display: inline-block;
        width: 420px;
        margin-top: 60px;
        vertical-align: top;
        text-align: left
    }

    #join-us .content {
        display: inline-block;
        width: 420px;
        vertical-align: top;
        text-align: left
    }

    #join-us h2 {
        display: inline-block;
        width: auto;
        margin-bottom: 10px;
        font-family: "Lovelo";
        font-size: 19px;
        color: black;
        text-transform: uppercase;
        text-align: center
    }

    #join-us h2 .normal {
        position: relative;
        z-index: 2
    }

    #join-us h2 .orange {
        display: block;
        font-family: "SmudgerLET";
        font-weight: bold;
        font-size: 95px;
        line-height: 60px;
        color: #FF4E00;
        -ms-transform: rotate(-7deg);
        -webkit-transform: rotate(-7deg);
        transform: rotate(-7deg);
        position: relative;
        z-index: 1
    }

    #join-us h2 .big {
        display: block;
        font-family: "BebasNeue";
        font-size: 60px;
        line-height: 60px
    }

    #join-us p {
        margin-bottom: 10px;
        padding-left: 20px
    }
    #news {
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -10px;
        padding-top: 80px;
        padding-bottom: 80px
    }

    #news .wrapperstart {
        width: 860px
    }

    #news .filters {
        display: inline-block;
        width: 40%;
        text-align: left;
        vertical-align: bottom
    }

    #news .filters::after {
        right: 45px
    }

    #news .list {
        margin: 20px 0;
        text-align: center
    }

    #news ul {
        text-align: left
    }

    #news ul li {
        width: 830px;
        height: 160px;
        margin: 10px auto;
        position: relative;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-news-h.jpg") center center no-repeat;
        background-size: cover
    }

    #news ul li.last-news {
        text-align: center;
        height: 60px
    }

    #news ul li.last-news .content {
        margin-left: 0
    }

    #news figure {
        display: inline-block;
        width: 130px;
        height: 130px;
        position: absolute;
        top: 53%;
        left: -20px;
        overflow: hidden;
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.7)
    }

    #news figure img {
        display: block;
        height: 100%;
        width: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%)
    }

    #news .content {
        display: inline-block;
        width: 80%;
        margin: 20px 0 0 165px
    }

    #news h3 {
        font-size: 22px;
        font-family: "Lovelo";
        margin-bottom: 5px
    }

    #news a.more {
        margin-top: 25px
    }

    #news a.more-news {
        display: inline-block;
        width: auto;
        margin: 20px auto;
        font-family: "BebasNeue";
        font-size: 37px;
        text-transform: uppercase;
        text-align: center;
        color: white;
        position: relative;
        transition: opacity 0.3s;
        padding-left: 41px;
        padding-right: 50px
    }

    #news a.more-news span {
        display: block;
        font-family: "Lovelo";
        font-size: 12px
    }

    #news a.more-news::after {
        content: "";
        display: block;
        width: 79px;
        height: 115px;
        position: absolute;
        right: 0;
        top: -27px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_right.png") center center no-repeat;
        transition: background 0.3s
    }

    #news a.more-news::before {
        content: "";
        display: block;
        width: 59px;
        height: 66px;
        position: absolute;
        left: 0;
        top: -6px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_left.png") center center no-repeat;
        transition: background 0.3s
    }

    #news a.more-news:hover::after {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_right_over.png") center center no-repeat
    }

    #news a.more-news:hover::before {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_left_over.png") center center no-repeat
    }

    #news a.more-news.hide {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        cursor: default
    }

    #news .no-more-news {
        display: none
    }

    .news-title .main-title {
        font-family: "SmudgerLET";
        color: #FF4E00;
        font-size: 120px;
        line-height: 80px;
        width: auto;
        display: inline-block;
        text-transform: uppercase;
        -ms-transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg)
    }

    .news-title .sub-title {
        position: relative;
        z-index: 2;
        font-size: 44px;
        font-family: "BebasNeue";
        width: auto;
        color: white;
        text-shadow: 2px 2px 0px #000;
        padding-left: 75px
    }

    .news-title .sub-title span {
        display: block;
        margin-bottom: 10px;
        line-height: 20px;
        font-size: 14px;
        font-family: "Lovelo"
    }

    .news-title .title {
        display: inline-block;
        width: 20%;
        min-width: 270px;
        margin-right: 30px;
        white-space: nowrap;
        vertical-align: bottom
    }

    #single-news {
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: -10px;
        padding-top: 80px;
        padding-bottom: 230px
    }

    #single-news .wrapperstart {
        width: 860px;
        position: relative
    }

    #single-news .article-container {
        position: relative
    }

    #single-news .article-container::before, #single-news .article-container::after {
        content: "";
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 270px;
        background-color: #D4D4D4;
        border-radius: 50%;
        z-index: 0
    }

    #single-news .article-container::before {
        left: -25px
    }

    #single-news .article-container::after {
        right: -30px;
        background-color: #CACACA
    }

    #single-news .article-container.no-next::after {
        display: none
    }

    #single-news .article-container.no-prev::before {
        display: none
    }

    #single-news article {
        width: 90%;
        min-height: 300px;
        margin: 20px auto;
        padding: 45px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-news-single.jpg") center top repeat-y;
        position: relative;
        z-index: 1
    }

    #single-news h1, #single-news .content {
        margin-left: 165px
    }

    #single-news h1 {
        margin-bottom: 20px
    }

    #single-news .content {
        min-height: 100px
    }

    #single-news .content a {
        text-decoration: underline
    }

    #single-news .content a:hover {
        color: #FF4E00
    }

    #single-news figure {
        display: inline-block;
        width: 200px;
        height: 200px;
        position: absolute;
        top: 45px;
        left: -20px;
        overflow: hidden;
        box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.7)
    }

    #single-news figure img {
        display: block;
        height: 100%;
        width: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%)
    }

    #single-news iframe {
        display: block;
        max-width: 100%;
        position: relative;
        margin: 20px auto
    }

    #single-news ul {
        margin: 10px 0
    }

    #single-news li {
        list-style-type: disc
    }

    #single-news .slideshow {
        width: 690px;
        margin: 40px auto;
        position: relative
    }

    #single-news .slideshow .slideshow-container {
        overflow: hidden;
        width: 630px;
        margin: auto
    }

    #single-news .slideshow ul {
        white-space: nowrap;
        text-align: center
    }

    #single-news .slideshow li {
        display: inline-block;
        width: 200px;
        height: 110px;
        position: relative;
        overflow: hidden;
        margin: 0 5px;
        list-style-type: none;
        cursor: pointer
    }

    #single-news .slideshow li img {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%) translateZ(0);
        -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0);
        transform: translateX(-50%) translateY(-50%) translateZ(0)
    }

    #single-news .slideshow li:hover img {
        width: 120%;
        height: 120%
    }

    #single-news .slideshow .arrow {
        top: 45px
    }

    #single-news .slideshow .next {
        right: -15px
    }

    #single-news .slideshow .prev {
        left: -15px
    }

    #single-news .slideshow.small {
        width: 630px;
        margin: 40px auto 40px 150px
    }

    #single-news .slideshow.small .arrow {
        display: none
    }

    #single-news article > .arrow {
        top: 280px;
        z-index: 2
    }

    #single-news article > .arrow.prev {
        left: -15px
    }

    #single-news article > .arrow.next {
        right: -15px
    }

    #single-news .link {
        margin: 20px auto 0
    }

    .all-news.bottom-section {
        color: white;
        display: inline-block;
        width: auto;
        position: absolute;
        left: 50%;
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    .all-news.bottom-section a {
        position: relative;
        z-index: 1;
        padding-left: 50px;
        padding-right: 60px;
        text-align: center;
        display: inline-block;
        white-space: nowrap
    }

    .all-news.bottom-section::after {
        content: "";
        display: block;
        width: 79px;
        height: 115px;
        position: absolute;
        right: 0;
        top: -20px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_right.png") center center no-repeat;
        transition: background 0.3s;
        z-index: 0
    }

    .all-news.bottom-section::before {
        content: "";
        display: block;
        width: 59px;
        height: 66px;
        position: absolute;
        left: 0;
        top: 0;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_left.png") center center no-repeat;
        transition: background 0.3s;
        z-index: 0
    }

    .all-news.bottom-section:hover::after {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_right_over.png") center center no-repeat
    }

    .all-news.bottom-section:hover::before {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/fx/btn2_left_over.png") center center no-repeat
    }

    #store {
        margin-top: -10px
    }

    #games-list {
        height: 140px;
        width: 100%;
        padding-top: 40px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-preorder-games.png") center bottom no-repeat;
        background-size: 100% 100%;
        position: relative;
        z-index: 1
    }

    #games-list .wrapperstart {
        width: 960px;
        position: relative
    }

    #games-list .new, #games-list .soon {
        display: inline-block;
        width: auto;
        color: white;
        font-family: "BebasNeue";
        font-size: 15px;
        line-height: 15px;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        padding: 10px 10px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-editions1.png") center -3px;
        background-size: 100% 100%
    }

    #games-list .games-container {
        width: 100%;
        max-width: 870px;
        margin: -10px auto;
        overflow: hidden;
        text-align: center
    }

    #games-list ul {
        display: inline-block;
        white-space: nowrap;
        text-align: center
    }

    #games-list ul li {
        display: inline-block;
        width: 150px;
        margin: 10px;
        vertical-align: top
    }

    #games-list ul li a, #games-list ul li span {
        display: block;
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray;
        -webkit-filter: grayscale(100%);
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=60);
        opacity: 0.6;
        text-align: center
    }

    #games-list ul li.current a, #games-list ul li.current span, #games-list ul li:hover span, #games-list ul li:hover a {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1;
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0'/></filter></svg>#grayscale");
        -webkit-filter: grayscale(0%);
        filter: grayscale(0)
    }

    #games-list ul li img {
        max-width: 150px
    }

    #game-editions {
        height: 100%;
        min-height: 430px;
        width: 100%;
        margin-top: -60px;
        padding-top: 60px;
        padding-bottom: 50px;
        position: relative;
        z-index: 0;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-preorder.jpg") center top no-repeat;
        background-attachment: fixed;
        background-size: cover
    }

    #game-editions .wrapperstart {
        width: 900px;
        margin: auto
    }

    #game-editions h2 {
        font-family: "Lovelo";
        font-size: 16px;
        color: black;
        text-transform: uppercase;
        margin: 20px 0px 10px 0
    }

    #game-editions .retailer-wrapperstart {
        display: inline-block;
        width: 175px;
        margin: 5px 5px 0 0;
        text-align: center;
        height: 45px;
        line-height: 40px;
        vertical-align: middle;
        background: white
    }

    #game-editions .retailer-wrapperstart a {
        display: block;
        width: 100%;
        height: 100%
    }

    #game-editions .retailer-wrapperstart img {
        display: inline-block;
        max-height: 40px;
        vertical-align: middle
    }

    li.edition {
        display: inline-block;
        width: 240px;
        height: 60px;
        margin: 0 10px 10px 0;
        text-transform: uppercase;
        position: relative;
        font-family: "BebasNeue";
        font-size: 18px;
        text-align: center
    }

    li.edition::after, li.edition::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat
    }

    li.edition::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-editions1.png");
        -ms-transform: translateY(-5px);
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px)
    }

    li.edition::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-editions1-over.png");
        -ms-transform: translateY(-5px);
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        z-index: 1
    }

    li.edition.bg2::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-editions2.png");
        -ms-transform: translateY(0px);
        -webkit-transform: translateY(0px);
        transform: translateY(0px)
    }

    li.edition.bg2::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-editions2-over.png");
        -ms-transform: translateY(0px);
        -webkit-transform: translateY(0px);
        transform: translateY(0px)
    }

    li.edition.bg3 {
        width: 200px
    }

    li.edition.bg3 a {
        color: #000;
        transition: color 0.3s
    }

    li.edition.bg3::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-plateform-digital.png");
        -ms-transform: translateY(0px);
        -webkit-transform: translateY(0px);
        transform: translateY(0px)
    }

    li.edition.bg3::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-plateform-digital-hover.png");
        -ms-transform: translateY(0px);
        -webkit-transform: translateY(0px);
        transform: translateY(0px)
    }

    li.edition:hover.bg3 a, li.edition.current.bg3 a {
        color: white
    }

    li.edition:hover::before, li.edition.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    li.edition:hover::after, li.edition.current::after {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0
    }

    li.edition a {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        display: inline-block;
        width: 80%;
        height: auto;
        color: white;
        letter-spacing: 2px;
        z-index: 2;
        vertical-align: middle
    }

    li.platform {
        width: 190px;
        height: 50px;
        margin: 0px 0
    }

    li.platform::after, li.platform::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat
    }

    li.platform::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform1.png");
        z-index: 0
    }

    li.platform.bg2::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform2.png")
    }

    li.platform::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform1-over.png");
        z-index: 1
    }

    li.platform.bg2::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform2-over.png")
    }

    li.platform a {
        z-index: 2
    }

    li.platform:hover::before, li.platform.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    li.platform:hover::after, li.platform.current::after {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0
    }

    .edition-container {
        display: inline-block;
        width: 400px;
        vertical-align: top
    }

    .edition-description {
        display: inline-block;
        width: 460px;
        margin: 22px 0 0 40px;
        vertical-align: top
    }

    .edition-description figure {
        width: 100%;
        cursor: pointer;
        text-align: center
    }

    .edition-description img {
        max-width: 100%;
        max-height: 300px
    }

    .edition-description .edition-text {
        height: 100px;
        padding-right: 10px;
        overflow: hidden;
        position: relative
    }

    .no-offer .edition-description {
        margin: 22px auto 40px;
        display: block
    }

    .digital-content {
        margin: 0 auto 45px;
        width: 890px
    }

    .digital-content:nth-child(2) {
        margin: 20px auto 45px
    }

    .digital-content h3 {
        display: block;
        font-family: "Lovelo";
        font-size: 32px;
        line-height: normal;
        margin-bottom: 10px
    }

    .digital-content figure {
        background-color: white;
        width: 100%;
        box-sizing: border-box;
        padding: 0px
    }

    .digital-content figure img {
        display: block;
        max-width: 100%
    }

    .digital-content .plateforms-wrapperstart {
        display: block;
        background-color: white;
        width: 100%;
        text-align: center
    }

    .digital-content .plateforms {
        padding: 10px 0 0;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap
    }

    .digital-content .plateforms li {
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 190px;
        height: 50px;
        line-height: 50px;
        margin: 0px 10px 10px 0
    }

    .digital-content .plateforms li::after, .digital-content .plateforms li::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat
    }

    .digital-content .plateforms li::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform1.png");
        z-index: 0
    }

    .digital-content .plateforms li.bg2::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform2.png")
    }

    .digital-content .plateforms li::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform1-over.png");
        z-index: 1
    }

    .digital-content .plateforms li.bg2::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-platform2-over.png")
    }

    .digital-content .plateforms li a {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2
    }

    .digital-content .plateforms li img {
        max-width: 100%;
        height: 19px;
        display: inline-block;
        vertical-align: middle
    }

    .digital-content .plateforms li:hover::before, .digital-content .plateforms li.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    .digital-content .plateforms li:hover::after, .digital-content .plateforms li.current::after {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0
    }

    #all-games {
        margin-top: -10px
    }

    #game h1, #game h2, #game h3 {
        font-family: Lovelo;
        text-transform: uppercase
    }

    #game .keyart {
        position: relative;
        margin-top: -50px;
        width: 100%;
        overflow: hidden
    }

    #game .keyart img {
        display: block;
        width: 100%
    }

    #game span.getit {
        position: absolute;
        bottom: -20px;
        right: -53px;
        display: inline-block;
        width: auto;
        height: 90px;
        margin: 0 10px 10px 0;
        padding-left: 45px;
        padding-right: 45px;
        text-transform: uppercase;
        font-family: "BebasNeue";
        font-size: 18px;
        text-align: center;
        z-index: 3
    }
    
    #game span.getit::after, #game span.getit::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: 100% 100%;
        background-repeat: no-repeat
    }

    #game span.getit:hover::before, #game span.getit.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    #game span.getit a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: white;
        line-height: 90px;
        font-size: 40px;
        letter-spacing: 2px;
        position: relative;
        z-index: 2;
        vertical-align: middle
    }
    

    #game h1 {
        padding-left: 300px;
        color: white;
        font-size: 44px;
        font-family: BebasNeue;
        line-height: 64px
    }

    #game h1 span {
        display: block;
        font-family: Lovelo;
        font-size: 13px;
        line-height: 13px
    }

    #game .infos a {
        text-decoration: underline;
        transition: color 0.3s
    }

    #game .infos a:hover {
        color: #FF4E00
    }

    #game .infos img {
        display: inline-block;
        width: 300px;
        position: absolute;
        top: -40%;
        left: -35px;
        vertical-align: top
    }

    #game .infos ul {
        display: inline-block;
        vertical-align: top;
        padding: 35px 0px 35px 300px
    }

    #game .infos li {
        width: 530px;
        overflow: hidden
    }

    #game .infos li span.label {
        font-family: Lovelo;
        text-transform: uppercase;
        float: left;
        min-width: 120px
    }

    #game .infos li span.value {
        float: left;
        max-width: 400px
    }

    #game .story {
        width: 70%;
        padding: 60px 0;
        margin: auto;
        text-align: center;
        color: white
    }

    #game .story h1, #game .story h2, #game .story h3 {
        margin: 20px auto
    }


    #game .features h3 {
        padding: 50px 50px 0;
        font-size: 16px
    }

    #game .features h4 {
        font-weight: bold;
        font-size: 14px
    }

    #game .features ul {
        padding: 20px 50px 50px;
        overflow: hidden
    }

    #game .features li {
        display: block;
        width: 310px;
        margin: 0 0 25px
    }

    #game .features li:nth-child(odd) {
        float: left;
        margin-right: 70px
    }

    #game .features li:nth-child(even) {
        float: right
    }

    #popin-slide.all-games {
        margin: 90px 0 0;
        overflow: hidden
    }

    #popin-slide.all-games::before, #popin-slide.all-games::after {
        display: none
    }

    #popin-slide.all-games figure {
        position: relative;
        display: block;
        width: 90%;
        margin: 20px auto;
        height: 0px;
        padding-bottom: 56.25%;
        overflow: hidden
    }

    #popin-slide.all-games figure.transition-on {
        position: absolute;
        top: 0;
        left: 50%;
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    #popin-slide.all-games figure iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        width: 100%;
        height: 90%
    }

    #popin-slide.all-games figure img {
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%)
    }

    #popin-slide.all-games .legend {
        text-align: center;
        color: white;
        width: 50%;
        margin: auto;
        min-height: 42px
    }

    #popin-slide.all-games > .arrow {
        top: 40%
    }

    #popin-slide.all-games > .arrow.next {
        right: 10px
    }

    #popin-slide.all-games > .arrow.prev {
        left: 10px
    }

    #popin-slide.all-games .slideshow {
        display: inline-block;
        width: auto;
        max-width: 77%;
        background: none;
        margin: auto 50%;
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    #popin-slide.all-games .slideshow .slideshow-container {
        width: 100%
    }

    #popin-slide.all-games .slideshow .arrow {
        background-color: #FF4E00;
        z-index: 2
    }

    #popin-slide.all-games .slideshow .next {
        right: -35px
    }

    #popin-slide.all-games .slideshow .prev {
        left: -35px
    }

    #popin-slide.all-games .slide.youtube::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/play.svg") center center no-repeat;
        background-size: 40px 40px;
        width: 40px;
        height: 40px;
        z-index: 2;
        -ms-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%)
    }


    .page-template-page-stormleague section .wrapperstart {
        max-width: 980px
    }

    .page-template-page-stormleague section.header {
        margin-top: -10px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 495px;
        width: 100%
    }

    .page-template-page-stormleague section.header .wrapperstart {
        line-height: 495px
    }

    .page-template-page-stormleague section.header .wrapperstart .title {
        display: inline-block;
        vertical-align: middle;
        line-height: normal
    }

    .page-template-page-stormleague section.header .wrapperstart .title .main-title {
        display: block;
        font-family: "SmudgerLET";
        color: #FF4E00;
        font-size: 120px;
        line-height: 92px;
        text-shadow: 2px 2px 0px #000;
        -ms-transform: rotate(-5deg);
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg)
    }

    .page-template-page-stormleague section.header .wrapperstart .title .sub-title, .page-template-page-stormleague section.header .wrapperstart .title .sup-title {
        position: relative;
        display: block;
        color: white;
        text-shadow: 2px 2px 0px #000
    }

    .page-template-page-stormleague section.header .wrapperstart .title .sup-title {
        margin-bottom: -5px;
        margin-left: 15px;
        font-size: 44px;
        font-family: "BebasNeue"
    }

    .page-template-page-stormleague section.header .wrapperstart .title .sub-title {
        margin-left: 5px;
        font-size: 16px;
        line-height: 40px;
        font-family: "Lovelo";
        letter-spacing: 2px;
        text-transform: uppercase
    }

    .page-template-page-stormleague section.what-is {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-whatis.jpg");
        width: 100%
    }

    .page-template-page-stormleague section.what-is .wrapperstart {
        padding: 80px 0;
        color: white
    }

    .page-template-page-stormleague section.what-is .wrapperstart h2 {
        font-size: 70px;
        font-family: "BebasNeue";
        margin-bottom: 30px
    }

    .page-template-page-stormleague section.what-is .wrapperstart p {
        font-size: 16px
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas {
        display: block;
        width: auto;
        margin: 25px auto 0;
        text-align: center
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas li {
        position: relative;
        display: inline-block;
        vertical-align: top;
        height: 63px;
        line-height: 63px;
        padding: 0 50px;
        margin-right: 15px;
        text-align: center
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas li.last-child {
        margin-right: 0px
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas li::after, .page-template-page-stormleague section.what-is .wrapperstart .ctas li::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: 100% 100%;
        background-repeat: no-repeat
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas li::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-cta.png")
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas li::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-cta-hover.png");
        z-index: 1;
        transition: opacity 0.3s
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas li:hover::before, .page-template-page-stormleague section.what-is .wrapperstart .ctas li.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    .page-template-page-stormleague section.what-is .wrapperstart .ctas li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        margin-top: 4px;
        color: white;
        font-size: 24px;
        font-family: "BebasNeue";
        position: relative;
        z-index: 2;
        vertical-align: middle
    }

    .page-template-page-stormleague section.how-to {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-how.jpg") center top no-repeat;
        background-attachment: fixed;
        background-size: cover
    }

    .page-template-page-stormleague section.how-to .wrapperstart {
        padding-top: 90px
    }

    .page-template-page-stormleague section.how-to .title {
        text-align: center
    }

    .page-template-page-stormleague section.how-to .main-title {
        display: block;
        font-family: "SmudgerLET";
        color: #FF4E00;
        font-size: 141px;
        line-height: 96px;
        text-transform: uppercase;
        -ms-transform: rotate(-8deg);
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg)
    }

    .page-template-page-stormleague section.how-to .sub-title {
        position: relative;
        display: block;
        margin-top: 15px;
        color: black;
        font-size: 80px;
        line-height: 50px;
        font-family: "BebasNeue";
        text-transform: uppercase
    }

    .page-template-page-stormleague section.how-to .step {
        display: inline-block;
        font-size: 36px;
        line-height: normal;
        font-family: "BebasNeue";
        color: white;
        padding: 17px 24px 5px;
        margin-bottom: 16px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-step.png") center top no-repeat;
        background-size: 100% 100%
    }

    .page-template-page-stormleague section.how-to .line {
        height: 167px;
        background-color: white;
        margin-bottom: 50px;
        display: inline-block
    }

    .page-template-page-stormleague section.how-to .line figure {
        display: inline-block;
        vertical-align: middle;
        height: 100%
    }

    .page-template-page-stormleague section.how-to .line figure img {
        max-width: 100%
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: middle;
        width: 620px;
        height: 100%;
        padding: 0px 40px;
        line-height: 167px
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        max-width: 335px
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info h3 {
        font-family: "Lovelo";
        font-size: 21px;
        margin-bottom: 20px
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info a {
        text-decoration: underline
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info strong {
        font-weight: bold
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info em {
        font-style: italic
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info ul {
        margin: 10px 0;
        padding-left: 15px
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info ul li {
        list-style-type: circle
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart .info ul:last-child {
        margin-bottom: 0
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart figure.secondary {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        height: auto;
        width: 200px
    }

    .page-template-page-stormleague section.how-to .line .content_wrapperstart figure.secondary a, .page-template-page-stormleague section.how-to .line .content_wrapperstart figure.secondary img {
        float: right
    }

    .page-template-page-stormleague section.tournament {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-tournament.jpg") center top no-repeat;
        background-size: cover;
        padding-bottom: 100px
    }

    .page-template-page-stormleague section.tournament .wrapperstart {
        padding-top: 50px;
        text-align: center
    }

    .page-template-page-stormleague section.tournament .main-title {
        display: block;
        font-family: "SmudgerLET";
        color: #FF4E00;
        font-size: 80px;
        line-height: 75px;
        text-transform: uppercase;
        -ms-transform: rotate(-6deg);
        -webkit-transform: rotate(-6deg);
        transform: rotate(-6deg)
    }

    .page-template-page-stormleague section.tournament .sub-title {
        position: relative;
        display: block;
        margin-top: 15px;
        color: black;
        font-size: 80px;
        line-height: 50px;
        font-family: "BebasNeue";
        text-transform: uppercase
    }

    .page-template-page-stormleague section.tournament .iframe_wrapperstart {
        display: block;
        width: 518px;
        height: 568px;
        margin: 0 auto 20px
    }

    .page-template-page-stormleague section.tournament .btn {
        position: relative;
        display: inline-block;
        height: 63px;
        line-height: 63px;
        padding: 0 50px
    }

    .page-template-page-stormleague section.tournament .btn::after, .page-template-page-stormleague section.tournament .btn::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: 100% 100%;
        background-repeat: no-repeat
    }

    .page-template-page-stormleague section.tournament .btn::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-cta.png")
    }

    .page-template-page-stormleague section.tournament .btn::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/stormleague/bg-cta-hover.png");
        z-index: 1;
        transition: opacity 0.3s
    }

    .page-template-page-stormleague section.tournament .btn:hover::before, .page-template-page-stormleague section.tournament .btn.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    .page-template-page-stormleague section.tournament .btn span {
        display: inline-block;
        width: 100%;
        height: 100%;
        margin-top: 4px;
        color: white;
        font-size: 24px;
        font-family: "BebasNeue";
        position: relative;
        z-index: 2;
        vertical-align: middle
    }

    .page-template-page-community section.header {
        margin-top: -10px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 495px;
        width: 100%
    }

    .page-template-page-community section.header .wrapperstart {
        line-height: 495px
    }

    .page-template-page-community section.header .wrapperstart .title {
        display: inline-block;
        vertical-align: middle;
        line-height: normal
    }

    .page-template-page-community section.header .wrapperstart .title .main-title {
        display: block;
        font-family: "SmudgerLET";
        color: #FF4E00;
        font-size: 120px;
        line-height: 92px;
        text-transform: uppercase;
        text-shadow: 2px 2px 0px #000;
        -ms-transform: rotate(-5deg);
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg)
    }

    .page-template-page-community section.header .wrapperstart .title .sub-title, .page-template-page-community section.header .wrapperstart .title .sup-title {
        position: relative;
        display: block;
        color: white;
        text-shadow: 2px 2px 0px #000
    }

    .page-template-page-community section.header .wrapperstart .title .sup-title {
        margin-bottom: -5px;
        margin-left: 15px;
        font-size: 44px;
        font-family: "BebasNeue"
    }

    .page-template-page-community section.header .wrapperstart .title .sub-title {
        margin-left: 5px;
        font-size: 16px;
        line-height: 40px;
        font-family: "Lovelo";
        letter-spacing: 2px;
        text-transform: uppercase
    }

    .page-template-page-community section.header span.getit {
        position: absolute;
        bottom: -58px;
        right: -0px;
        display: inline-block;
        width: auto;
        min-width: 400px;
        height: 128px;
        line-height: 98px;
        padding-left: 60px;
        padding-right: 10px;
        text-align: center;
        z-index: 3
    }

    .page-template-page-community section.header span.getit::after, .page-template-page-community section.header span.getit::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: 100% 100%;
        background-repeat: no-repeat
    }

    .page-template-page-community section.header span.getit::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/community/getit.png");
        -ms-transform: translateY(-10px);
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px)
    }

    .page-template-page-community section.header span.getit::before {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/community/getit-hover.png");
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        -ms-transform: translateY(-10px);
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
        z-index: 1;
        transition: opacity 0.3s
    }

    .page-template-page-community section.header span.getit:hover::before, .page-template-page-community section.header span.getit.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    .page-template-page-community section.header span.getit a {
        display: inline-block;
        width: 100%;
        position: relative;
        z-index: 2;
        vertical-align: middle;
        color: white;
        font-family: "BebasNeue";
        font-size: 53px;
        line-height: 40px;
        text-transform: uppercase;
        letter-spacing: 1px
    }

    .page-template-page-community section.header span.getit a span {
        display: block;
        font-family: "Lovelo";
        font-size: 19px;
        letter-spacing: 5px
    }

    .page-template-page-community section.community {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/community/bg-community-main.jpg")
    }

    .page-template-page-community section.community .wrapperstart {
        padding: 70px 0 130px;
        text-align: center
    }

    .page-template-page-community section.community .wrapperstart .social-count span {
        font-family: "SmudgerLET";
        color: #FF4E00;
        font-size: 180px;
        line-height: 120px;
        text-shadow: 2px 2px 0px #000;
        -ms-transform: rotate(-5deg);
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg)
    }

    .page-template-page-community section.community .wrapperstart .social-count p {
        font-size: 44px;
        font-family: "BebasNeue";
        text-transform: uppercase
    }

    .page-template-page-community section.community .wrapperstart .embed {
        width: auto;
        margin: 35px auto 30px
    }

    .page-template-page-community section.community .wrapperstart .embed .embed-wrapperstart, .page-template-page-community section.community .wrapperstart .embed .bottom-section {
        margin-left: 66px
    }

    .page-template-page-community section.community .wrapperstart .embed .embed-wrapperstart:first-child, .page-template-page-community section.community .wrapperstart .embed .bottom-section:first-child {
        margin-left: 0
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed .embed-wrapperstart {
        background-color: white;
        padding: 30px;
        width: 322px;
        vertical-align: top
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom .bottom-section {
        width: 382px;
        margin-top: 12px
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom a.twitter-link {
        margin: 0 10px;
        color: #2AA9E0;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        vertical-align: middle
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom a.twitter-link::after, .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom a.twitter-link::before {
        background-color: #2AA9E0
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom a.facebook-link {
        margin: 0 10px;
        color: #3B5999;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        vertical-align: middle
    }

    .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom a.facebook-link::after, .page-template-page-community section.community .wrapperstart .embed .social-embed-bottom a.facebook-link::before {
        background-color: #3B5999
    }

    .page-template-page-community section.community .wrapperstart .content {
        display: block;
        margin: 100px auto 0;
        padding-top: 50px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        width: 100%;
        max-width: 960px
    }

    .page-template-page-community section.community .wrapperstart .content .video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px;
        height: 0;
        overflow: hidden;
        margin-top: 20px
    }

    .page-template-page-community section.community .wrapperstart .content .video-container iframe, .page-template-page-community section.community .wrapperstart .content .video-container object, .page-template-page-community section.community .wrapperstart .content .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%
    }

    .page-template-page-community section.community .wrapperstart .content a {
        text-decoration: underline
    }

    .page-template-page-community section.community .wrapperstart .content a:hover {
        color: #FF4E00
    }

    .page-template-page-community section.community .wrapperstart .content ul, .page-template-page-community section.community .wrapperstart .content ol {
        margin: 10px 0
    }

    .page-template-page-community section.community .wrapperstart .content li {
        list-style-type: disc
    }

    .page-template-page-community section.community .wrapperstart .content h1, .page-template-page-community section.community .wrapperstart .content h2, .page-template-page-community section.community .wrapperstart .content h3, .page-template-page-community section.community .wrapperstart .content h4, .page-template-page-community section.community .wrapperstart .content h5, .page-template-page-community section.community .wrapperstart .content h6 {
        margin-top: 20px;
        margin-bottom: 10px
    }

    .page-template-page-community section.community .wrapperstart .content h1:first-child, .page-template-page-community section.community .wrapperstart .content h2:first-child, .page-template-page-community section.community .wrapperstart .content h3:first-child, .page-template-page-community section.community .wrapperstart .content h4:first-child, .page-template-page-community section.community .wrapperstart .content h5:first-child, .page-template-page-community section.community .wrapperstart .content h6:first-child {
        margin-top: 0
    }

    .page-template-page-community section.community .wrapperstart .content h1:last-child, .page-template-page-community section.community .wrapperstart .content h2:last-child, .page-template-page-community section.community .wrapperstart .content h3:last-child, .page-template-page-community section.community .wrapperstart .content h4:last-child, .page-template-page-community section.community .wrapperstart .content h5:last-child, .page-template-page-community section.community .wrapperstart .content h6:last-child {
        margin-bottom: 0
    }

    .more {
        display: inline-block;
        text-transform: uppercase;
        width: auto;
        color: #FF4E00;
        border-bottom: 2px solid #FF4E00;
        font-family: "Lovelo";
        font-size: 11px;
        line-height: 14px
    }

    .plus {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(50%) translateZ(0);
        -webkit-transform: translateX(-50%) translateY(50%) translateZ(0);
        transform: translateX(-50%) translateY(50%) translateZ(0);
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/plus.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-color: #FF4E00;
        background-size: 8px 8px
    }

    .view-more {
        display: block;
        width: auto;
        height: 30px;
        padding: 0 10px;
        text-align: center;
        border-radius: 30px;
        position: absolute;
        bottom: 0;
        left: 50%;
        color: white;
        text-transform: uppercase;
        font-family: "BebasNeue";
        letter-spacing: 2px;
        font-size: 14px;
        line-height: 31px;
        vertical-align: middle;
        white-space: nowrap;
        -ms-transform: translateX(-50%) translateY(50%) translateZ(0);
        -webkit-transform: translateX(-50%) translateY(50%) translateZ(0);
        transform: translateX(-50%) translateY(50%) translateZ(0);
        background-color: #FF4E00;
        background-size: 8px 8px
    }

    .close {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(50%) translateZ(0) rotate(45deg);
        -webkit-transform: translateX(-50%) translateY(50%) translateZ(0) rotate(45deg);
        transform: translateX(-50%) translateY(50%) translateZ(0) rotate(45deg);
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/plus.svg");
        background-repeat: no-repeat;
        background-position: center center;
        background-color: #FF4E00;
        background-size: 8px 8px;
        z-index: 1
    }

    a.link {
        display: block;
        width: 240px;
        height: 60px;
        margin: 10px auto;
        text-transform: uppercase;
        position: relative;
        font-family: "BebasNeue";
        font-size: 18px;
        text-align: center
    }

    a.link span {
        color: white;
        line-height: 70px;
        letter-spacing: 2px;
        position: relative;
        z-index: 1
    }

    a.link::after, a.link::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: cover;
        background-position: left center;
        background-repeat: no-repeat
    }
    

    a.link:hover::before, a.link.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    a.link:hover::after, a.link.current::after {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0
    }

    form {
        position: relative;
        overflow: hidden
    }

    input:not([type=submit]), select {
        display: block;
        width: 90%;
        border-radius: 0;
        padding: 15px;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        font-family: "Lovelo";
        font-size: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        z-index: 1;
        outline: none
    }

    input:not([type=submit]).error, select.error {
        border: 1px solid #D52423
    }

    span.input {
        width: 340px;
        height: 44px;
        display: block;
        float: right;
        margin: 5px 0;
        position: relative;
        z-index: 2
    }

    span.input select {
        width: 100%;
        background: rgba(255, 255, 255, 0.5)
    }

    html[data-useragent*="Android"] input:not([type=submit]), html[data-useragent*="Android"] select, html[data-useragent*="Mobile"] input:not([type=submit]), html[data-useragent*="Mobile"] select, html[data-useragent*="Mac OS"] input:not([type=submit]), html[data-useragent*="Mac OS"] select {
        -webkit-appearance: none
    }

    html[data-useragent*="Android"] .filters, html[data-useragent*="Mobile"] .filters, html[data-useragent*="Mac OS"] .filters {
        position: relative
    }

    html[data-useragent*="Android"] .filters::after, html[data-useragent*="Mobile"] .filters::after, html[data-useragent*="Mac OS"] .filters::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 5px 0 5px;
        border-color: #000000 transparent transparent transparent;
        position: absolute;
        right: 8px;
        top: 18px;
        z-index: 2
    }

    html[data-useragent*="Firefox"] .filters {
        position: relative
    }

    html[data-useragent*="Firefox"] .filters::after {
        display: none
    }

    form .msg {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        position: absolute;
        bottom: 20px;
        left: 60px
    }

    form .msg.show {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    form .msg.error {
        color: #D52423
    }

    select {
        background: white;
        float: none;
        margin: 0
    }

    .submit {
        display: block;
        height: 50px;
        padding-right: 25px;
        margin-top: 10px;
        clear: right;
        float: right;
        position: relative
    }

    .submit input {
        -webkit-appearance: none;
        border-radius: 0;
        background: none;
        border: none;
        font-family: "Lovelo";
        font-size: 12px;
        text-transform: uppercase;
        position: relative;
        z-index: 1;
        cursor: pointer
    }
    

    #header .lang {
        line-height: 45px;
        padding-right: 40px;
        position: relative;
        min-width: 83px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        text-transform: uppercase;
        font-family: "Lovelo";
        font-size: 13px;
        cursor: pointer
    }

    #header .lang span {
        display: block;
        width: 59px;
        height: 38px;
        margin: auto;
        padding-bottom: 5px;
        padding-right: 7px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        position: relative;
        color: #fff;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-langs.png") center center no-repeat
    }

    #header .lang span::after {
        position: absolute;
        right: 13px;
        top: 18px;
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 7px 5px 0 5px;
        border-color: #ffffff transparent transparent transparent
    }

    #header .lang ul {
        position: absolute;
        width: 100%;
        top: 0px;
        left: -15px;
        background: #000;
        margin-top: -30px;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        -ms-transform: translateY(-1000px) translateZ(0);
        -webkit-transform: translateY(-1000px) translateZ(0);
        transform: translateY(-1000px) translateZ(0);
        transition: margin 0.5s, opacity 0.5s, -webkit-transform 0s;
        transition: margin 0.5s, opacity 0.5s, transform 0s
    }

    #header .lang:hover ul {
        margin-top: 0px;
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1;
        -ms-transform: translateY(40px) translateZ(0);
        -webkit-transform: translateY(40px) translateZ(0);
        transform: translateY(40px) translateZ(0)
    }

    #header .lang ul::after {
        content: "";
        position: absolute;
        top: -20px;
        height: 20px;
        width: 100%;
        display: block
    }

    #header .lang ul::before {
        content: "";
        position: absolute;
        left: 50%;
        margin-left: -5px;
        top: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 7.5px 10px 7.5px;
        border-color: transparent transparent #000000 transparent
    }

    #header .lang ul li {
        padding: 0px 10px
    }

    #header .lang ul a {
        color: #fff;
        transition: color 0.3s
    }

    #header .lang ul a:hover {
        color: #FF4E00
    }

    @media screen and (max-width: 1280px) {
        #header .lang {
            display: none
        }

        #header .shop {
            right: 0;
            margin-right: 15px
        }
    }

    .arrow {
        display: inline-block;
        width: 30px;
        height: 30px;
        text-indent: -9999px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/arrow.svg") center center no-repeat #000;
        background-size: 12px auto;
        border-radius: 50%;
        position: absolute;
        top: 35px;
        cursor: pointer;
        transition: all 0.3s
    }

    .arrow.orange {
        background-color: #FF4E00;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35)
    }

    .arrow.grey {
        background-color: #D4D4D4 !important;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
        cursor: default
    }

    .arrow.hide {
        display: none
    }

    .next {
        right: 0
    }

    .prev {
        left: 0;
        -ms-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .prev.orange {
        box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.35)
    }

    .prev.grey {
        box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.35)
    }

    #popin-overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 21;
        background: rgba(0, 0, 0, 0.7)
    }

    #popin-container {
        width: 760px;
        height: auto;
        max-height: 70%;
        min-height: 300px;
        padding-bottom: 40px;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 22;
        -ms-transform: translateX(-50%) translateY(-300%) translateZ(0);
        -webkit-transform: translateX(-50%) translateY(-300%) translateZ(0);
        transform: translateX(-50%) translateY(-300%) translateZ(0);
        background: white
    }

    #popin-container article {
        padding-top: 20px;
        position: relative;
        z-index: 1
    }

    #popin-container.open {
        -ms-transform: translateX(-50%) translateY(-50%) translateZ(0);
        -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0);
        transform: translateX(-50%) translateY(-50%) translateZ(0)
    }

    #popin-container.slideshow {
        width: 90%;
        max-width: 800px;
        max-height: none;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-slideshow.jpg") center center no-repeat;
        background-size: cover;
        padding-bottom: 0
    }

    #popin-slide {
        width: 100%;
        position: relative
    }

    #popin-slide > .arrow {
        top: 30%;
        z-index: 1
    }

    #popin-slide > .arrow.next {
        right: -20px
    }

    #popin-slide > .arrow.prev {
        left: -20px
    }

    #popin-slide::before, #popin-slide::after {
        content: "";
        display: block;
        width: 30px;
        height: 50px;
        position: absolute;
        top: 30%;
        background-color: #111111;
        z-index: 0;
        -ms-transform: translateY(-20%);
        -webkit-transform: translateY(-20%);
        transform: translateY(-20%)
    }

    #popin-slide::before {
        left: -30px;
        border-radius: 50px 0% 0% 50px
    }

    #popin-slide::after {
        right: -30px;
        border-radius: 0% 50px 50px 0%
    }

    #popin-slide figure {
        display: inline-block;
        width: 95%;
        height: auto;
        margin: 20px 20px;
        position: relative;
        z-index: 1;
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    #popin-slide figure img {
        width: 100%
    }

    #popin-slide figure figcaption {
        display: block;
        width: 90%;
        min-height: 50px;
        margin: auto;
        color: white;
        text-align: center
    }

    #popin-slide figure.transition-on {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 0
    }

    #popin-slide figure.transition-off {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0
    }

    #popin-slide .slideshow {
        width: 100%;
        margin: auto;
        margin-top: 10px;
        position: relative;
        padding: 20px 0
    }

    @media screen and (max-height: 780px) {
        #popin-slide .slideshow {
            display: none
        }
    }

    #popin-slide .slideshow .slideshow-container {
        overflow: hidden;
        width: 630px;
        margin: auto
    }

    #popin-slide .slideshow ul {
        white-space: nowrap
    }

    #popin-slide .slideshow li {
        display: inline-block;
        width: 200px;
        height: 110px;
        overflow: hidden;
        position: relative;
        margin: 0 5px;
        list-style-type: none;
        cursor: pointer
    }

    #popin-slide .slideshow li::after {
        content: "";
        display: block;
        width: 97%;
        height: 95%;
        position: absolute;
        top: 0;
        left: 0;
        border: 3px solid transparent
    }

    #popin-slide .slideshow li.current::after {
        border: 3px solid #FF4E00
    }

    #popin-slide .slideshow li img {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%) translateZ(0);
        -webkit-transform: translateX(-50%) translateY(-50%) translateZ(0);
        transform: translateX(-50%) translateY(-50%) translateZ(0)
    }

    #popin-slide .slideshow li:hover img {
        width: 120%;
        height: 120%
    }

    #popin-slide .slideshow .arrow {
        top: 55px
    }

    #popin-slide .slideshow .next {
        right: 35px
    }

    #popin-slide .slideshow .prev {
        left: 35px
    }

    #popin-slide .slideshow-bg {
        width: 100%;
        margin: auto;
        margin-top: 10px;
        position: relative;
        padding: 20px 0;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-slideshow-bottom.jpg") center center no-repeat;
        background-size: cover
    }

    #popin-slide .slideshow {
        display: inline-block;
        width: auto;
        max-width: 78%;
        margin: auto 50%;
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }

    #popin-slide .slideshow .slideshow-container {
        width: 100%
    }

    #popin-slide .slideshow .arrow {
        background-color: #FF4E00;
        z-index: 2
    }

    #popin-slide .slideshow .next {
        right: -35px
    }

    #popin-slide .slideshow .prev {
        left: -35px
    }

    #popin-container.retailer {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-news-single.jpg") center center no-repeat;
        background-size: cover;
        width: auto;
        padding: 20px
    }

    #popin-container.retailer img {
        width: auto;
        height: auto;
        max-width: 800px;
        max-height: 68vh
    }

    #popin-container.retailer a.link {
        display: block;
        width: 240px;
        height: 60px;
        margin: 10px auto;
        text-transform: uppercase;
        position: relative;
        font-family: "BebasNeue";
        font-size: 18px;
        text-align: center
    }

    #popin-container.retailer a.link span {
        color: white;
        line-height: 70px;
        letter-spacing: 2px;
        position: relative;
        z-index: 1
    }

    #popin-container.retailer a.link::after, #popin-container.retailer a.link::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat
    }

    #popin-container.retailer a.link::after {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-editions1.png")
    }

    #popin-container.retailer a.link::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0;
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-editions1-over.png");
        z-index: 1
    }

    #popin-container.retailer a.link:hover::before, #popin-container.retailer a.link.current::before {
        filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1
    }

    #popin-container.retailer a.link:hover::after, #popin-container.retailer a.link.current::after {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        opacity: 0
    }

    .ps-scrollbar-y-rail {
        display: block;
        width: 5px;
        position: absolute;
        right: 3px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 30px
    }

    .ps-scrollbar-y-rail .ps-scrollbar-y {
        width: 5px;
        background-color: #000;
        position: absolute;
        right: 0;
        border-radius: 30px
    }

    nav > ul > li a {
        transition: color 0.3s
    }

    nav > ul > li::before {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s
    }

    .store {
        transition: background 0.3s
    }

    #popin-container {
        transition: -webkit-transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    }

    #home-banner .slides {
        transition: -webkit-transform 0.7s;
        transition: transform 0.7s
    }

    #home-banner .bullets li {
        transition: background 0.3s
    }

    #single-news .slideshow-container ul {
        transition: -webkit-transform 0.4s;
        transition: transform 0.4s
    }

    #single-news .slideshow-container ul li img {
        transition: all 0.3s
    }

    #popin-slide figure {
        -ms-transform: translateZ(0);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: opacity 0.3s
    }

    #popin-slide .slideshow-container ul {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s
    }

    #popin-slide .slideshow-container li::after {
        transition: border 0.3s
    }

    #popin-slide .slideshow-container li img {
        transition: all 0.3s
    }

    .more {
        transition: color 0.3s, border-color 0.3s
    }

    .more:hover {
        color: black;
        border-color: black
    }

    .view-more {
        -ms-transform-origin: 0 50%;
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%
    }

    .view-more:hover {
        color: white;
        -webkit-animation: bounce-btn 0.4s;
        animation: bounce-btn 0.4s
    }

    @-webkit-keyframes bounce-btn {
        0% {
            -webkit-transform: scale(1) translateX(-50%) translateY(50%) translateZ(0);
            transform: scale(1) translateX(-50%) translateY(50%) translateZ(0)
        }
        50% {
            -webkit-transform: scale(1.1) translateX(-50%) translateY(50%) translateZ(0);
            transform: scale(1.1) translateX(-50%) translateY(50%) translateZ(0)
        }
        100% {
            -webkit-transform: scale(1) translateX(-50%) translateY(50%) translateZ(0);
            transform: scale(1) translateX(-50%) translateY(50%) translateZ(0)
        }
    }

    @keyframes bounce-btn {
        0% {
            -ms-transform: scale(1) translateX(-50%) translateY(50%) translateZ(0);
            -webkit-transform: scale(1) translateX(-50%) translateY(50%) translateZ(0);
            transform: scale(1) translateX(-50%) translateY(50%) translateZ(0)
        }
        50% {
            -ms-transform: scale(1.1) translateX(-50%) translateY(50%) translateZ(0);
            -webkit-transform: scale(1.1) translateX(-50%) translateY(50%) translateZ(0);
            transform: scale(1.1) translateX(-50%) translateY(50%) translateZ(0)
        }
        100% {
            -ms-transform: scale(1) translateX(-50%) translateY(50%) translateZ(0);
            -webkit-transform: scale(1) translateX(-50%) translateY(50%) translateZ(0);
            transform: scale(1) translateX(-50%) translateY(50%) translateZ(0)
        }
    }

    span.input span {
        position: absolute;
        top: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        color: #FF4E00;
        box-shadow: 0px 0px 0px 0px rgba(255, 78, 0, 0.5)
    }

    input:not([type=submit]):focus {
        box-shadow: 0px 0px 0px 1px rgba(255, 78, 0, 0.5)
    }

    input:not([type=submit]):focus + span {
        -webkit-animation: anim-shadow 0.3s forwards;
        animation: anim-shadow 0.3s forwards
    }

    @-webkit-keyframes anim-shadow {
        to {
            box-shadow: 0px 0px 50px 25px rgba(255, 78, 0, 0.5);
            opacity: 0
        }
    }

    @keyframes anim-shadow {
        to {
            box-shadow: 0px 0px 50px 25px rgba(255, 78, 0, 0.5);
            opacity: 0
        }
    }

    a.link::before, li.edition::before, li.platform::before {
        transition: opacity 0.3s
    }

    a.link::after, li.edition::after, li.platform::after {
        transition: opacity 0.3s
    }

    #games-list ul {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s
    }

    #games-list ul li a {
        transition: opacity 0.5s
    }

    .bottom-section.black a::before, .bottom-section.black a::after {
        position: absolute;
        top: 95%;
        left: 0;
        width: 100%;
        height: 3px;
        content: '';
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -ms-transform: scale(0.9) translateZ(0);
        -webkit-transform: scale(0.9) translateZ(0);
        transform: scale(0.9) translateZ(0)
    }

    .bottom-section.black a::after {
        opacity: 0;
        transition: -webkit-transform 0.3s, opacity 0.3s, top 0.3s;
        transition: transform 0.3s, opacity 0.3s, top 0.3s
    }

    .bottom-section.black a:hover::before, .bottom-section.black a:hover::after, .bottom-section.black a:focus::before, .bottom-section.black a:focus::after {
        -ms-transform: scale(1) translateZ(0);
        -webkit-transform: scale(1) translateZ(0);
        transform: scale(1) translateZ(0)
    }

    .bottom-section.black a:hover::after, .bottom-section.black a:focus::after {
        top: -15%;
        opacity: 1
    }

    :lang(ru) #home-banner .line1 {
        font-size: 80px;
        line-height: 80px
    }

    :lang(ru) #home-banner .line3 {
        font-size: 55px
    }

    :lang(ru) #header .store {
        min-width: 176px;
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-store-ru.png") center top no-repeat;
        padding: 0
    }

    :lang(ru) #header .store:hover, :lang(ru) #header .store.current {
        background: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/layouts/bg-store-white-ru.png") center top no-repeat
    }

    :lang(ru) .main-title, :lang(ru) .big {
        font-size: 90px !important;
        line-height: 95px !important
    }

    :lang(ru) #games-list .soon, :lang(ru) #games-list .new {
        padding: 15px 20px;
        margin: -5px -10px
    }

    :lang(ru) li.edition a {
        letter-spacing: 0;
        font-size: 14px
    }

</style>