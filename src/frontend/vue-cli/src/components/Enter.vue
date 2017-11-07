
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
                <img src="https://images.pexels.com/photos/48726/pexels-photo-48726.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Bootstrap Touch Slider"  class="slide-image"/>
                <div class="bs-slider-overlay"></div>

                <div class="container">
                    <div class="row">
                        <!-- Slide Text Layer -->
                        <div class="slide-text slide_style_left">
                            <h1 data-animation="animated zoomInRight">Bootstrap Carousel</h1>
                            <p data-animation="animated fadeInLeft">Bootstrap carousel now touch enable slide.</p>
                            <a href="http://bootstrapthemes.co/" target="_blank" class="btn btn-default" data-animation="animated fadeInLeft">select one</a>
                            <a href="http://bootstrapthemes.co/" target="_blank"  class="btn btn-primary" data-animation="animated fadeInRight">select two</a>
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
                                NARUTO SHIPPUDEN: ...                                                            </a>
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
                                Create your own ni...                                                            </a>
                        </h1>

                        <figure>
                            <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/" title="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                                <img src="https://www.bandainamcoent.eu/static/2017/08/22/nst-200x200-gamescom-jpg?8805152e213815b849c3c9a08f8f527be495d50515033899291480adbf740a92f9ed0b00a60e1f370f&4beded212f7e30870685332f28c20e2a" alt="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
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
                                NARUTO SHIPPUDEN: ...                                                            </a>
                        </h1>

                        <figure>
                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/" title="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                <img src="https://www.bandainamcoent.eu/static/2017/08/04/nunb-200x200-update-jpg?58e9b2cd94e0897cf8230fa73b2a7df432b596a21501835136ace2f6023e8a815cfbdd59813b82951d&36b62b3a1039dcc24947c834e35338bd" alt="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
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
                <iframe src="https://www.youtube.com/embed/a4qaBeR8-d0?html5=1&amp;autohide=1&amp;rel=0&amp;showinfo=0" frameborder="0"></iframe>
            </div>

            <div class="video-page bottom-section black"  >
                <p  >Посмотреть больше на</p>
                <a href="https://www.youtube.com/playlist?list=PL193BAFEF6BE62E9D" class="youtube-link" target="_blank">youtube</a>
            </div>

        </div>

    </section>
    <section id="section-preorder" style="background-image: url('http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/preorder-background.jpg')">

        <div class="wrapper">
            <figure>
                <img src="http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2016/12/rtb_pack_pegi.png" alt="Get it now! NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO - Standard Edition">
            </figure><!--

        --><div class="content">
            <div class="text">
                <span class="big">ПОЛУЧИТЬ</span><span class="small">сейчас!</span>                <p>NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO - Standard Edition</p>
            </div>
            <div class="platforms">
                <p>Выберите платформу</p>
                <ul>
                    <li class="platform ps4">
                        <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=ps4">ps4</a>
                    </li>
                    <li class="platform pcdigital">
                        <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=pcdigital">pcdigital</a>
                    </li>
                    <li class="platform xboxone">
                        <a href="http://www.naruto-videogames.com/ru/store/?game=8291&amp;edition=8380&amp;platform=xboxone">xboxone</a>
                    </li>
                </ul>
            </div>

        </div>
        </div>

    </section>
    <section id="home-sharing" style="background-image: url('http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/BG_Share_5.png')">

    <div class="wrapper">
        <h2>Поделиться в</h2>

        <div class="links" dir='ltr'>

            <a href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.naruto-videogames.com%2Fru%2F" class="fb">Facebook</a>
            <a href="http://twitter.com/share?text=&amp;url=http%3A%2F%2Fwww.naruto-videogames.com%2Fru%2F" class="tw">Twitter</a>
        </div>

    </div>

</section>
    <footer-compomemt></footer-compomemt>
</div>
</template>
<script>
    //import 'hover.css/css/hover.css'
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
      }
    }
</script>
<style>

    .container-header{
        height: 50px;
        margin-top: 40px;

    }

    .nav-header{
        width: 65%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0;
    }
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
    .main-container .background{
        height: 590px;
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
    }
    .main-container{
        text-align: center;
        width: 100%;
    }

    .room-img{
        margin-top: -600px;
        position: relative;
        opacity: 0.8;
        border-radius: 5px;
    }

    .main-img{
        text-align: center;
    }

    .image-opacity{
        opacity: 0.25;
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
    }
    .hero h1 {
        font-size: 6em;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }


    .container-header{
        height: auto;
        width: 100%;
    }
    /* Icon Up */
    .hvr-icon-up {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px transparent;
        position: relative;
        padding-right: 2.2em;
    }
    .hvr-icon-up:before {
        content: "\f01b";
        position: absolute;
        right: 1em;
        padding: 0 1px;
        font-family: FontAwesome;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    .hvr-icon-up:hover:before, .hvr-icon-up:focus:before, .hvr-icon-up:active:before {
        -webkit-animation-name: hvr-icon-up;
        animation-name: hvr-icon-up;
        -webkit-animation-duration: 0.75s;
        animation-duration: 0.75s;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px transparent;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    }
    .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .image-uploader {
        position: relative;
        display: flex;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    }
    /* Wrapper for file input */
    .image-uploader__input-wrapper {
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.2);
        transition: 0.4s background;
        width: 40px;
    }
    .image-uploader__input-wrapper:hover {
        background: #e0e0e0;
    }
    /* Hidden file input */
    .image-uploader__input {
        position: absolute;
        display: block;
        min-height: 100%;
        opacity: 0;
        right: 0;
        top: 0;
        text-align: right;
        cursor: pointer;
    }
    /* Wrapper for image */
    .image-uploader__image-wrapper {
        height: 120px;
        border-radius: 1px;
        overflow-y: hidden;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        display: flex;
        padding: 2px;
        width: 100%;
    }
    /* Target image */
    img.image-uploader__image {
        max-height: 100%;
        height: auto;
        border: none;
        margin: auto;
        display: block;
    }
    /* Two settings for image width */
    img.image-uploader__image.with-info {
        max-width: 60%;
    }
    img.image-uploader__image.without-info {
        max-width: 100%;
    }
    /* Wrapper for image info text */
    .image-uploader__image-info {
        height: 100%;
        width: 40%;
        text-align: left;
        vertical-align: top;
        font-family: monospace, Courier, Monospaced;
        background-color: inherit;
        border: none;
        margin: 0;
        padding: 0 0 0 10px;
    }
    /* Wrapper for screen background until drag-n-drop is active */
    .image-loader__drag-n-drop-screen-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background-color: #808080;
        opacity: 0.2;
    }
    /* Wrapper for component until drag-n-drop is active */
    .image-loader__drag-n-drop-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #808080;
        opacity: 0.9;
        border: none;
        border-radius: 4px;
    }
    /* Drag-n-drop wrapper icon */
    .image-loader__drag-n-drop-text {
        position: relative;
        top: 50%;
        left: 50%;
        margin-left: -60px;
        margin-top: -56px;
        font-size: 8em;
    }
    /* Clear image icon */
    .image-loader__clear-icon {
        float: right;
        margin: 4px 4px 0 0;
        cursor: pointer;
        color: #555;
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