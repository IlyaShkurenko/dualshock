<template>
    <div class="prices">
        <router-link to="/">Back</router-link>
        <p>{{$store.state.slider[0]}}</p>
        <div class="textpad">
            <h2>Кухня</h2>
        </div>
        <div class="container">
            <div class="col-xs-12">
                <div class="carousel slide" id="myCarousel">
                    <div class="carousel-inner">
                        <div class="item active"><ul class="thumbnails">
                            <li v-for="item in 4" class="col-sm-3">
                                <div class="fff">
                                    <div class="thumbnail">
                                        <a href="buy.html"><img src="http://placehold.it/360x240" alt=""></a>
                                    </div>
                                    <div class="caption">
                                        <h4>Praesent commodo</h4>
                                        <p>Nullam Condimentum Nibh Etiam Sem</p>
                                        <a class="btn btn-mini" href="#">» Read More</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div><!-- /Slide1 -->
                        <div v-for="item in 3" class="item">
                            <ul class="thumbnails">
                                <li v-for="item in 4" class="col-sm-3">
                                    <div class="fff">
                                        <div class="thumbnail">
                                            <a href="buy.html"><img src="http://placehold.it/360x240" alt=""></a>
                                        </div>
                                        <div class="caption">
                                            <h4>Praesent commodo</h4>
                                            <p>Nullam Condimentum Nibh Etiam Sem</p>
                                            <a class="btn btn-mini" href="#">» Read More</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div><!-- /Slide3 -->
                    </div>


                    <nav>
                        <ul class="control-box pager">
                            <li><a data-slide="prev" href="#myCarousel" class=""><i class="glyphicon glyphicon-chevron-left"></i></a></li>
                            <li><a data-slide="next" href="#myCarousel" class=""><i class="glyphicon glyphicon-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                    <!-- /.control-box -->

                </div><!-- /#myCarousel -->

            </div><!-- /.col-xs-12 -->

        </div><!-- /.container -->
    <!-- /.navbar-collapse --
    <!-- /.container-fluid -->
    <div class="textpad">
        <h2>Бар</h2>
    </div>
    <div class="container">
        <div class="col-xs-12">
            <div class="carousel slide" id="myCarousel2">
                <div class="carousel-inner">
                    <div class="item active"><ul class="thumbnails">
                        <li v-for="item in 4" class="col-sm-3">
                            <div class="fff">
                                <div class="thumbnail">
                                    <a href="buy.html"><img src="http://placehold.it/360x240" alt=""></a>
                                </div>
                                <div class="caption">
                                    <h4>Praesent commodo</h4>
                                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                                    <a class="btn btn-mini" href="#">» Read More</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div><!-- /Slide1 -->
                    <div v-for="item in 3" class="item">
                        <ul class="thumbnails">
                            <li v-for="item in 4" class="col-sm-3">
                                <div class="fff">
                                    <div class="thumbnail">
                                        <a href="buy.html"><img src="http://placehold.it/360x240" alt=""></a>
                                    </div>
                                    <div class="caption">
                                        <h4>Praesent commodo</h4>
                                        <p>Nullam Condimentum Nibh Etiam Sem</p>
                                        <a class="btn btn-mini" href="#">» Read More</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div><!-- /Slide3 -->
                </div>


                <nav>
                    <ul class="control-box pager">
                        <li><a data-slide="prev" href="#myCarousel2" class=""><i class="glyphicon glyphicon-chevron-left"></i></a></li>
                        <li><a data-slide="next" href="#myCarousel2" class=""><i class="glyphicon glyphicon-chevron-right"></i></a></li>
                    </ul>
                </nav>
                <!-- /.control-box -->

            </div><!-- /#myCarousel -->

        </div><!-- /.col-xs-12 -->

    </div>
    <div class="textpad">
        <h2>Кальян</h2>
    </div>
    <div class="container">
        <div class="col-xs-12">
            <div class="carousel slide" id="myCarousel3">
                <div class="carousel-inner">
                    <div class="item active">
                        <ul class="thumbnails">
                        <li v-for="item in 4" class="col-sm-3">
                            <div class="fff">
                                <div class="thumbnail">
                                    <a href="buy.html"><img src="http://placehold.it/360x240" alt=""></a>
                                </div>
                                <div class="caption">
                                    <h4>Praesent commodo</h4>
                                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                                    <a class="btn btn-mini" href="#">» Read More</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div><!-- /Slide1 -->
                    <div v-for="item in 3" class="item">
                        <ul class="thumbnails">
                            <li v-for="item in 4" class="col-sm-3">
                                <div class="fff">
                                    <div class="thumbnail">
                                        <a href="buy.html"><img src="http://placehold.it/360x240" alt=""></a>
                                    </div>
                                    <div class="caption">
                                        <h4>Praesent commodo</h4>
                                        <p>Nullam Condimentum Nibh Etiam Sem</p>
                                        <a class="btn btn-mini" href="#">» Read More</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div><!-- /Slide3 -->
                </div>


                <nav>
                    <ul class="control-box pager">
                        <li><a data-slide="prev" href="#myCarousel3" class=""><i class="glyphicon glyphicon-chevron-left"></i></a></li>
                        <li><a data-slide="next" href="#myCarousel3" class=""><i class="glyphicon glyphicon-chevron-right"></i></a></li>
                    </ul>
                </nav>
                <!-- /.control-box -->

            </div><!-- /#myCarousel -->

        </div><!-- /.col-xs-12 -->

    </div>
    <div class="textpad">
        <h2>Приставки и комнаты</h2>
    </div>
    <div class="container">
        <div class="col-xs-12">
            <div class="carousel slide" id="myCarousel4">
                <div class="carousel-inner">
                    <div class="item active">
                        <ul class="thumbnails">
                            <li v-for="(item,index) in 4" class="col-sm-3">
                                <div class="fff">
                                    <div class="thumbnail">
                                        <router-link :to="'vip/' + (parseInt(index+1))"><img :src="getImgUrl('vip' + (parseInt(index+1)) + '.png')" alt="" style="height: 170px; width: 360px"></router-link>
                                    </div>
                                    <div class="caption">
                                        <h4>VIP {{index + 1}}</h4>
                                        <p>{{$store.state.rooms[index].description}}</p>
                                        <a class="btn btn-mini" :href="'vip/' + item">» Узнать больше</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-for="(item,index) in roomsLength" class="item">
                        <ul class="thumbnails">
                            <li v-for="item in $store.state.slider[index]" class="col-sm-3">
                                <div class="fff">
                                    <div class="thumbnail">
                                        <a href="buy.html"><img src="../images/vip1.png" alt=""></a>
                                    </div>
                                    <div class="caption">
                                        <h4>Praesent commodo</h4>
                                        <p>Nullam Condimentum Nibh Etiam Sem</p>
                                        <a class="btn btn-mini" href="#">» Read More</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div><!-- /Slide3 -->
                </div>


                <nav>
                    <ul class="control-box pager">
                        <li><a data-slide="prev" href="#myCarousel4" class=""><i class="glyphicon glyphicon-chevron-left"></i></a></li>
                        <li><a data-slide="next" href="#myCarousel4" class=""><i class="glyphicon glyphicon-chevron-right"></i></a></li>
                    </ul>
                </nav>
                <!-- /.control-box -->

            </div><!-- /#myCarousel -->

        </div><!-- /.col-xs-12 -->

    </div>
</template>
<style>
    H2 {
        text-shadow: 1px 1px 0 orange,
        1px -1px 0 orange,
        -1px 1px 0 orange,
        -1px -1px 0 orange;
        color: white;
        transition: all 1s;
    }
    H2:hover {
        text-shadow: 1px 1px 0 yellowgreen,
        1px -1px 0 yellowgreen,
        -1px 1px 0 yellowgreen,
        -1px -1px 0 yellowgreen;
        color: white;
    }
    .textpad{
        text-align: center;
    }
    .container{
        width: 90%;
        margin-left: auto;
        margin-right: 95px;
    }
    .prices{
        background-image: url("../images/zel.jpg");
    }

    /* Global */


    img { max-width:100%; }

    a {
        -webkit-transition: all 150ms ease;
        -moz-transition: all 150ms ease;
        -ms-transition: all 150ms ease;
        -o-transition: all 150ms ease;
        transition: all 150ms ease;
    }

    a:hover {
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; /* IE 8 */
        filter: alpha(opacity=50); /* IE7 */
        opacity: 0.6;
        text-decoration: none;
    }


    .thumbnails li> .fff .caption {
        background:#fff !important;
        padding:10px
    }

    /* Page Header */
    .page-header {
        background: #f9f9f9;
        margin: -30px -40px 40px;
        padding: 20px 40px;
        border-top: 4px solid #ccc;
        color: #999;
        text-transform: uppercase;
    }

    .page-header h3 {
        line-height: 0.88rem;
        color: #000;
    }

    ul.thumbnails {
        margin-bottom: 0px;
    }



    /* Thumbnail Box */
    .caption h4 {
        color: #444;
    }

    .caption p {
        color: #999;
    }



    /* Carousel Control */
    .control-box {
        text-align: right;
        width: 100%;
    }
    .carousel-control{
        background: #666;
        border: 0px;
        border-radius: 0px;
        display: inline-block;
        font-size: 34px;
        font-weight: 200;
        line-height: 18px;
        opacity: 0.5;
        padding: 4px 10px 0px;
        position: static;
        height: 30px;
        width: 15px;
    }



    /* Mobile Only */
    @media (max-width: 767px) {
        .page-header, .control-box {
            text-align: center;
        }
    }
    @media (max-width: 479px) {
        .caption {
            word-break: break-all;
        }
    }


    li { list-style-type:none;}

    ::selection { background: #ff5e99; color: #FFFFFF; text-shadow: 0; }
    ::-moz-selection { background: #ff5e99; color: #FFFFFF; }
    body{
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        color: #868585;
    }

    .catalog{
        padding-right: 600px;
        font-size: 20px;
        color: antiquewhite;
        text-decoration: none;

    }
    button[type=submit]{
        height: 30px;
        width: 80px;
        margin-top: -5px;

    }

    .owl-carousel{
        margin: -100px;
        padding-left: 300px;

    }
    .owl-carousel img{
        width: 200px;
        height: 250px;
    }
    img { max-width:100%; }

    a {
        -webkit-transition: all 150ms ease;
        -moz-transition: all 150ms ease;
        -ms-transition: all 150ms ease;
        -o-transition: all 150ms ease;
        transition: all 150ms ease;
    }

    a:hover {
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; /* IE 8 */
        filter: alpha(opacity=50); /* IE7 */
        opacity: 0.6;
        text-decoration: none;
    }

</style>
<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                url: 'vip/1/',
                rLength: 0,
                roomsInSlider: []
            }
        },
        computed: {
           roomsLength(){
               return this.rLength = Math.ceil((this.$store.state.rooms.length - 4)/4)
           },
            sliderLength(id){
               return {
                   index: this.roomsInSlider[id]
               }
            }
        },
        methods: {
            getImgUrl(img) {
                var images = require.context('../images/', false, /\.png$/);
                return images('./' + img)
            },
            ...mapActions([
                'getRooms',
                'getArray'
            ]),
            isMore(number){
                return number >= 4
            },
            updated(){
                console.log('updated');
                this.getRooms()
            }
        },
    }
</script>