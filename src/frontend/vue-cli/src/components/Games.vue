<template>
    <div>
    <div class="games" style="z-index: 0">
        <header-cmp></header-cmp>
        <loginandreg-cmp></loginandreg-cmp>
        <logo-cmp></logo-cmp>
    </div>
        <div class="main_games" style="background-color: #96a0ad; font-size: 25px">
    <button id="upsite"><a class="scrollto" href="#" title="Up"><span class="icon-arrow-up2"></span></a></button>
    <div id="yarlik"><router-link to="/reservation">Забронировать</router-link></div>
    <div id="wrapper" class="page-content">
        <section class="container wow fadeInUp" data-wow-delay="0.5s">
            <div class="row padding">
                <div class="col-xs-12 centertext">
                    <h1>Игротека</h1>
                    <hr class="title">
                    <h1><a href="#">Цены на игру и аренду комнат в Game Inn</a></h1>
                    <p>Наша коллекция игр постоянно растет, но даже мы не всегда можем удовлетворить вкусы всех геймеров. Если вы не нашли желанную игру в списке &#8212; напишите нам письмо в этой <a href="#" target="_blank">форме</a> и если пожелания определенной игры будет не единичным, мы приложим максимальные усилия для реализации этого пожелания в кратчайшие сроки!</p>
                </div>
            </div>
        </section>
        <section id="projects" class="container-fluid ">

            <div class="row">
                <div class="col-xs-12">						<div class="container-fluid sortlinks">
                    <ul class="filters">
                        <li><p class="active">Все</p></li>
                        <li><a href="#"><p>Action</p></a></li>
                        <li><a href="#"><p>Adventures</p></a></li>
                        <li><a href="#"><p>Arcade</p></a></li>
                        <li><a href="#"><p>Fighting</p></a></li>
                        <li><a href="#"><p>Horror</p></a></li>
                        <li><a href="#"><p>Racing</p></a></li>
                        <li><a href="#"><p>RPG</p></a></li>
                        <li><a href="#"><p>Shooter</p></a></li>
                        <li><a href="#"><p>Simulator</p></a></li>
                        <li><a href="#"><p>Sport</p></a></li>
                        <li><a href="#"><p>Игры для компании</p></a></li>
                        <li><a href="#"><p>Поддержка Kinect</p></a></li>
                        <li><a href="#"><p>Только для Play Station</p></a></li>
                        <li><a href="#"><p>Только для Xbox</p></a></li>
                    </ul>
                    <span class="icon-flickr"></span>
                </div>
                </div>
            </div>
            <div class="row" style="margin-bottom: 100px;">
                <div class="col-md-3"><div class="projects-wrapper ">
                    <img src="http://gameinn.com.ua/wp-content/uploads/2016/10/nba-2k17-ps4-kobe-gold-271x340.jpg" alt="NBA2K17" style="width: 100%"/>

                </div></div>
                <div class="col-md-3"><div class="projects-wrapper ">
                    <img src="http://gameinn.com.ua/wp-content/uploads/2016/12/79ba8d2fddc5532eb91d9fe598696da7-268x340.jpg" alt="Here They Lie VR" style = "width: 100%" />

                </div></div>
                <div class="col-md-3"><div class="projects-wrapper ">
                    <img src="http://gameinn.com.ua/wp-content/uploads/2016/12/4766813-l-272x340.jpg" alt="WWE 2K17" style="width: 100%" />

                </div></div>
                <div class="col-md-3"><div class="projects-wrapper ">
                    <img src="http://gameinn.com.ua/wp-content/uploads/2016/12/p1_2188344_bf5305db-268x340.jpg" alt="Just Dance 2017" style = "width: 100%" />

                </div></div>
            </div>

            <section class="container padding" style="margin-top:100px;">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <ul class="pagination">
                            <li><span class="current">1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a class="next" href="#"> NEXT </a></li>						</ul>
                    </div>
                </div>
            </section>
        </section>
    </div>
</div>
    </div>
</template>
<style src='../../styles/gameinn.css' scoped>
</style>
<style>

    .games{
        height: 100%;
        background-color: #4e5860;
    }
    h1{
       color: #4e5860;
    }
</style>
<script>
    import Header from './Header.vue'
    import Logo from  './Items/Logo.vue'
    import LoginAndReg from './LoginAndReg.vue'
    export default {
        components:{
            headerCmp: Header,
            logoCmp: Logo,
            loginandregCmp:LoginAndReg
        }
    }
</script>