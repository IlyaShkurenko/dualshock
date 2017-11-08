
<template>
<div>
   <!--<div class="image-uploader__input-wrapper">
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
        <input id="myName" name="name" value="John">
        <input type="file" class="image-uploader__input" @change="sync" accept="image/*">
    </div>

    <div class="image-uploader__image-wrapper">
        <i v-show="isEmpty && !isLoading" class="fa fa-picture-o fa-3x"></i>
        <i v-show="isLoading" class="fa fa-refresh fa-spin fa-3x"></i>
        <img
                v-show="!isEmpty && !isLoading"
                class="image-uploader__image"
                ref="img"
                src="https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/vip2.png?alt=media&token=8a686319-504e-407e-8222-bddc8f78013f"
        >
    </div>-->
    <loginandreg></loginandreg>
    <heder-component></heder-component>
    <div id="bootstrap-touch-slider" class="carousel bs-slider fade  control-round indicators-line" data-ride="carousel" data-pause="hover" data-interval="5000" >

        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#bootstrap-touch-slider" data-slide-to="0" class="active"></li>
            <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
            <li data-target="#bootstrap-touch-slider" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper For Slides -->
        <div class="carousel-inner" role="listbox">

            <!-- Third Slide -->
            <div class="item active">

                <!-- Slide Background -->
                <img src="https://lh3.googleusercontent.com/-2ln-a_uJZaA/WgMzlOkrjkI/AAAAAAAAAP4/ba5ZW1HYMdkp2_yT-5Sury_qDwcnnta-wCJoC/w1060-h454-n/room.jpg" alt="Bootstrap Touch Slider"  class="slide-image"/>
                <div class="bs-slider-overlay"></div>

                <div class="container">
                    <div class="row">
                        <!-- Slide Text Layer -->
                        <div class="slide-text slide_style_left" style="font-family: 'Helvetica Narrow', sans-serif; font-size: 24px; font-family: bold;">
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
                <img src="https://images.pexels.com/photos/207990/pexels-photo-207990.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Bootstrap Touch Slider"  class="slide-image"/>
                <div class="bs-slider-overlay"></div>
                <!-- Slide Text Layer -->
                <div class="slide-text slide_style_center">
                    <h1 data-animation="animated flipInX">Bootstrap touch slider</h1>
                    <p data-animation="animated lightSpeedIn">Make Bootstrap Better together.</p>
                    <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-default" data-animation="animated fadeInUp">select one</a>
                    <a href="http://bootstrapthemes.co/" target="_blank"  class="btn btn-primary" data-animation="animated fadeInDown">select two</a>
                </div>
            </div>
            <!-- End of Slide -->

            <!-- Third Slide -->
            <div class="item">

                <!-- Slide Background -->
                <img src="https://images.pexels.com/photos/144345/pexels-photo-144345.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Bootstrap Touch Slider"  class="slide-image"/>
                <div class="bs-slider-overlay"></div>
                <!-- Slide Text Layer -->
                <div class="slide-text slide_style_right">
                    <h1 data-animation="animated zoomInLeft">Beautiful Animations</h1>
                    <p data-animation="animated fadeInRight">Lots of css3 Animations to make slide beautiful .</p>
                    <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-default" data-animation="animated fadeInLeft">select one</a>
                    <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-primary" data-animation="animated fadeInRight">select two</a>
                </div>
            </div>
            <!-- End of Slide -->


        </div><!-- End of Wrapper For Slides -->

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

    <section id="home-news">

        <div class="wrapper">

            <ul>
                <li class="bloc-news">
                    <article>
                        <h1>
                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-storm-trilogy-now-available-4/" title="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
                                Турнир FIFA 17                                                            </a>
                        </h1>

                        <figure>
                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-storm-trilogy-now-available-4/" title="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
                                <img src="../images/fifa17.png" alt="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
                            </a>
                        </figure>
                        <div class="content">
                            <p>BANDAI NAMCO Entertainment Europe is pleased to confirm today that NARUTO SHIPPUDEN: Ultimate Ninja STORM LEGACY and NARUTO SHIPPUDEN: Ultimate Ninja STORM TRILOGY are now available for all the fans of t...</p>
                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-storm-trilogy-now-available-4/" class="more" title="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">читать еще</a>
                        </div>
                    </article>
                </li>
                <li class="bloc-news">
                    <article>
                        <h1>
                            <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/" title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                                Турнир MORTAL KOMBAT XL                                                           </a>
                        </h1>

                        <figure>
                            <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/" title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                                <img src="../images/mortal.jpeg" alt="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                            </a>
                        </figure>
                        <div class="content">
                            <p>NARUTO TO BORUTO: SHINOBI STRIKER is ready to be showcased at gamescom 2017! BANDAI NAMCO Entertainment Europe is excited to reveal the amazing new content about the acrobatic ninja battle action game developed by Soleil Ltd.
                                &nbsp;
                                For the first time in ...</p>
                            <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/" class="more" title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">читать еще</a>
                        </div>
                    </article>
                </li>
                <li class="bloc-news">
                    <article>
                        <h1>
                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/" title="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                Кальянный вечер                                                           </a>
                        </h1>

                        <figure>
                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/" title="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                <img src="../images/hookah2.png" alt="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                            </a>
                        </figure>
                        <div class="content">
                            <p>BANDAI NAMCO Entertainment Inc.&rsquo;s NARUTO SHIPPUDEN: Ultimate Ninja Blazing, the Ultimate Ninja series game for mobile platforms, is celebrating its first anniversary since launching on the Apple </p>
                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/" class="more" title="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">читать еще</a>
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
    <section id="home-community">


        <div class="wrapper">

            <ul class="social-wall">

                <li class="manual">
                    <article>
                        <h2><a href="https://www.bandainamcoent.eu/community" target="_blank">Сообщество Bandai Namco</a></h2>
                        <p>Это место для тех, кто хочет следить за новостями о своих любимых играх и получить подарок за вступление в сообщество<br />
                            ...</p>
                        <a href="https://www.bandainamcoent.eu/community"  class="logo">
                            <img src="http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/VIPCorner_logo_2.png" alt="" >
                        </a>


                        <div class="img" style="background-image: url('http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/Home_Socialpush_VIPCorner_2.jpg'); ">
                            <a href="https://www.bandainamcoent.eu/community" target="_blank" data-id="manual_0"></a>
                        </div>
                    </article>

                    <a href="https://www.bandainamcoent.eu/community" target="_blank" data-id="manual_0" class="view-more">
                        ПРИСОЕДИНИТЬСЯ                        </a>
                </li>


                <li class="manual">
                    <article>
                        <h2><a href="http://www.storm-league.com/" target="_blank">Storm league</a></h2>
                        <p>Присоединяйтесь к Ураганной Лиге &#8211; единственной спортивной платформе для игр во вселенной Наруто, в которой лучшие в мире игроки сражаются друг с другом, выигрывают призы и становятся чемпионами!<br />
                            ...</p>
                        <a href="http://www.storm-league.com/"  class="logo">
                            <img src="http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/Storm-League-logo_DIPLO.png" alt="" >
                        </a>


                        <div class="img" style="background-image: url('http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/storm-league-bg.png'); ">
                            <a href="http://www.storm-league.com/" target="_blank" data-id="manual_1"></a>
                        </div>
                    </article>

                    <a href="http://www.storm-league.com/" target="_blank" data-id="manual_1" class="view-more">
                        Узнать больше                        </a>
                </li>

            </ul>

            <div class="community-page bottom-section black" >
                <p >Читайте нас в</p>
                <a href="https://twitter.com/Narutovideogame" class="twitter-link" target="_blank">Twitter</a> &amp; <a href="https://www.facebook.com/Narutogames" class="facebook-link" target="_blank">Facebook</a>
            </div>

        </div>

    </section>
    <section id="home-videos">

        <div class="wrapper">
            <div class="ratio-iframe">
                <iframe src="https://www.youtube.com/embed/dfgI5hDbwPY" frameborder="0"></iframe>
            </div>

            <div class="video-page bottom-section black"  >
                <p  >Посмотреть больше на</p>
                <a href="https://www.youtube.com/playlist?list=PL193BAFEF6BE62E9D" class="youtube-link" target="_blank">youtube</a>
            </div>

        </div>

    </section>
    <section id="section-preorder" style="background-image: url('../images/preorder-background.jpg')">
        <div class="wrapper">
            <figure>
                <img src="../images/coins.png" alt="Get it now! NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO - Standard Edition">
            </figure><!--

        --><div class="content">
            <div class="text">
                <span class="big">Поставить</span><span class="small">сейчас!</span>                <p>Ставки на любой турнир</p>
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
    import Vue from 'vue'
    export default {
      data(){
          return {
              event:{
                  images: ['fifa17.png', 'fifa17.png', 'hookah2.png'],
                  names:['FIFA 17', 'MORTAL XL', 'HOOKAH'],
                  description:['Надоело смотреть футбол по телевизору? тогда тебе к нам.',
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
            sync (e) {
                e.preventDefault();
                this.selectImage(e.target.files[0]);
            },
            selectImage (file) {
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
            onImageLoad (e) {
                this.content = e.target.result;
                let filename = this.file instanceof File ? this.file.name : '';
                // Dispatch new input event with filename
                this.$emit('input', filename);
                // Dispatch new event with image content
                this.$emit('image-changed', this.content);
            },
            logout(){
                auth.logout();
                this.$router.go(this.$router.currentRoute);
            },
            login(){
                this.$router.push('login');
            },
            home(){
                this.$router.push(localStorage.getItem('role'));
            },
            signup(){
                this.$router.push('signup')
            }
        },
        created(){
        },
        beforeCreate(){
            auth.checkAuth();
        },
        computed: {
            src () {
                if (this.content) {
                    return this.content;
                }
                return this.isEmpty ? '' : this.srcPrefix + this.value;
            },
            logined(){
               return auth.user.authenticated;
            }
        },
      components: {
          'event-component': Event,
          'heder-component': Header,
          'footer-compomemt': Footer,
          'loginandreg': LoginAndReg,
          'sharing-component': Sharing
      }
    }
</script>
<style>
    span.big
    {
        display:block;
        margin-left:-55px;
        color:#FF4E00;
        font-family:"SmudgerLET";
        font-size:120px;
        line-height:100px;
        -ms-transform:rotate(-7deg);
        -webkit-transform:rotate(-7deg);
        transform:rotate(-7deg)}
    #home-community{
        min-height: 650px;
    }
    #home-news{
    }
    /* Sweep To Bottom */
    .hvr-sweep-to-bottoms {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px transparent;
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }
    .info-block{
        width: 400px;
        height: 400px;
        background-color: black;
        margin-top: -1000px;
        float: left;
    }

    .hvr-sweep-to-bottoms:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -8ch;
        left: 0;
        right: 0;
        bottom: 0;
        background: #1e5736;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    .hvr-sweep-to-bottoms:hover, .hvr-sweep-to-bottoms:focus, .hvr-sweep-to-bottoms:active {
        color: white;
        text-shadow: 1px 1px black;
    }
    .hvr-sweep-to-bottoms:hover:before, .hvr-sweep-to-bottoms:focus:before, .hvr-sweep-to-bottoms:active:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
    .navs{
        padding-left: 2.5vw;
        padding-right: 2.5vw;
        font-family: 'Helvetica Narrow', sans-serif;
        font-size: 1.2vw;
        color: white;
        font-weight: bold;
        text-align: center;
    }
    .register,
    .login{
        float: right;
        margin-top: -35px;
        font-size: 1vw;
    }

    .register{
        font-size: 1vw;
        margin-right: 8vw;
    }

    .button{
        font-size: 1.8vw;
    }

    .rectangle {
        width: 9.5vw;
        height: 2.5vw;
        background-color: #124025;
        margin-right: 130px;
        border-radius: 5px;
    }

    .rectangle-small{
        width: 7.5vw;
        background-color: #30764e;
        height: 2.5vw;
        border-radius: 5px;
    }

    .triangle_right {
        margin-top: 1.2vw;
        float: right;
        width: 0;
        height: 0;
        border-top: 0.5vw solid transparent;
        border-right: 0.5vw solid #124025;
        border-bottom: 0.5vw solid transparent;
    }

    .rectangle-big{
        float: right;
        margin-top: -50px;
    }

    .hvr-icon-up,
    .hvr-icon-pulse{
        color: white;
        font-weight: bold;
    }
    .glyphicon-home{
        color: white;
        font-weight: bold;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px transparent;
        position: relative;
        padding-right: 2.2em;
    }
    .hero h1 {
        font-size: 6em;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }
    .bs-slider{
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
    .control-round:hover .carousel-control{
        opacity: 1;
    }
    .control-round .carousel-control.left {
        left: 1%;
    }
    .control-round .carousel-control.right {
        right: 1%;
    }
    .control-round .carousel-control.left:hover,
    .control-round .carousel-control.right:hover{
        color: #fdfdfd;
        background: rgba(0, 0, 0, 0.5);
        border: 0px transparent;
    }
    .control-round .carousel-control.left>span:nth-child(1){
        left: 45%;
    }
    .control-round .carousel-control.right>span:nth-child(1){
        right: 45%;
    }





    /*---------- INDICATORS CONTROL ----------*/
    .indicators-line > .carousel-indicators{
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
    .indicators-line > .carousel-indicators li{
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
        -webkit-transition: all 0.5s cubic-bezier(0.22,0.81,0.01,0.99);
        transition: all 0.5s cubic-bezier(0.22,0.81,0.01,0.99);
        z-index: 10;
        cursor:pointer;
    }
    .indicators-line > .carousel-indicators li:last-child{
        margin-right: 0;
    }
    .indicators-line > .carousel-indicators .active{
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
    .indicators-line > .carousel-indicators .active:before{
        transform: scale(0.5);
        background-color: #fff;
        content:"";
        position: absolute;
        left:-1px;
        top:-1px;
        width:15px;
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
    .slide-text > a.btn-default{
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
    .slide-text > a.btn-primary{
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
    @media  (max-width: 768px) {
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
        .control-round .carousel-control{
            display: none;
        }

    }
    @media  (max-width: 480px) {
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
        .indicators-line > .carousel-indicators{
            display: none;
        }

    }

</style>