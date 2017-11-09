<template>
    <div>
    <div class="container-header" style="">
        <div class="nav-header">
            <router-link to="/reservation"><div class="navs hvr-sweep-to-bottoms hvr-grow">Бронирование</div></router-link>
            <a href="pages/menu.html"><div class="navs hvr-sweep-to-bottoms hvr-grow">Игротека</div></a>
            <router-link to="/news"><div class="navs hvr-sweep-to-bottoms hvr-grow">События</div></router-link>
            <a href="pages/menu.html"><div class="navs hvr-sweep-to-bottoms hvr-grow">Акции и скидки</div></a>
            <router-link to="/prices"><div class="navs hvr-sweep-to-bottoms hvr-grow">Меню и цены</div></router-link>
        </div>
    </div>
    </div>
</template>
<script>
   export default {
   }
</script>
<style>

    .container-header{
        height: 50px;
        padding-top: 30px;
        z-index: 2;
    }

    .nav-header{
        width: 65%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0;
    }
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

    .hvr-sweep-to-bottoms:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -8ch;
        left: 0;
        right: 0;
        bottom: 0;
        background: #368356;
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
        transform: scaleY(1.2);
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
    .main-container .background{
        height: 590px;
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


</style>