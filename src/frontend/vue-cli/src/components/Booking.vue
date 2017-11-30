<template>
    <div class="booking" style="z-index: 3">
        <header-component></header-component>
        <loginandreg></loginandreg>
        <div id="wrapper" class="page-content">
            <section class="white" style="margin: 0">
                <div id="block-r" class="display">
                    <img alt="Driving hall" class="hall"
                         src="http://gameinn.com.ua/wp-content/themes/game/img/driving2.png"/>
                    <div v-for="i in 23" :id="'n' + i" class="icon" :data-for="'popap-' + i" @click="$store.state.booked = true; place.number = i">
                        <img :alt="i" class="hover"
                             src="http://gameinn.com.ua/wp-content/themes/game/img/n.bkg.hover.png"/>
                        <img :alt="i" class="h" src="http://gameinn.com.ua/wp-content/themes/game/img/n.bkg.png"/>
                        <span>{{i}}</span>
                    </div>
                </div>
                <section id="dicons">
                    <input class="on" type="button" value="Скрыть места"/>
                </section>
                <section id="dtext">
                    <p>
                        Пожалуйста, выберите себе уютное место на плане. Вы можете скрыть номера, чтобы рассмотреть места подробнее.</p>
                </section>

                <div id="mblock-r">
                    <div v-for="i in 23" :id="'mn2'" class="micon" :data-for="'popap-' + i" :data-title="'Стол' + i">
                        <img :alt="i" class="h" src="http://gameinn.com.ua/wp-content/themes/game/img/n.bkg.png"/>
                        <span>{{i}}</span>
                    </div>
                </div>
            </section>
            <form-component v-if="$store.state.booked" :placeNumber="place.number"></form-component>
        </div>
        <logo-component></logo-component>
    </div>
</template>
<style scoped>
    .booking {
        background-size: 100%;
        background-color: #3caa36;
    }

    @import "http://fonts.googleapis.com/css?family=Vollkorn:400,400italic,700italic";
    @import "http://fonts.googleapis.com/css?family=PT+Serif:700";
    @import "http://fonts.googleapis.com/css?family=Domine";
    @import "http://gameinn.com.ua/wp-content/themes/game/fonts/furore.css";
    @import "http://gameinn.com.ua/wp-content/themes/game/fonts/open.sans.css";
    @import "http://gameinn.com.ua/wp-content/themes/game/fonts/roboto.condensed.css";
    @font-face {
        font-family: 'PressStart2P';
        src: url(http://gameinn.com.ua/wp-content/themes/game/fonts/PressStart2P.eot);
        src: url(http://gameinn.com.ua/wp-content/themes/game/fonts/PressStart2P.eot?#iefix) format("embedded-opentype"), url(http://gameinn.com.ua/wp-content/themes/game/fonts/PressStart2P.woff2) format("woff2"), url(http://gameinn.com.ua/wp-content/themes/game/fonts/PressStart2P.woff) format("woff"), url(http://gameinn.com.ua/wp-content/themes/game/fonts/PressStart2P.ttf) format("truetype"), url(http://gameinn.com.ua/wp-content/themes/game/fonts/PressStart2P.svg#PressStart2P) format("svg");
        font-weight: 400;
        font-style: normal
    }

    html {
        width: auto;
        overflow-x: hidden;
        overflow-y: scroll
    }

    @media (max-width: 1024px) {
        html {
            overflow-x: hidden;
            overflow-y: scroll !important
        }
    }

    @media (min-width: 1025px) {
        html {
            overflow-x: hidden;
            overflow-y: hidden
        }
    }

    #ascrail2000 {
        display: none !important
    }

    @media (min-width: 1025px) {
        #ascrail2000 {
            display: block !important;
            z-index: 9995 !important
        }

        #ascrail2001 {
            z-index: 9995 !important
        }
    }

    @media (max-width: 1024px) {
        #ascrail2001 {
            display: none !important
        }
    }

    body {
        font-family: 'RobotoCondensed', 'Roboto', Arial, sans-serif;
        background-color: #F3F3F3;
        font-size: 24px;
        font-style: normal;
        line-height: 35px;
        font-weight: 400;
        color: #777;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale
    }
    .hblock + .bkg, .hblock + a .bkg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        opacity: .7;
        -webkit-transition: all .4s ease-out 0;
        -moz-transition: all .4s ease-out 0;
        -ms-transition: all .4s ease-out 0;
        -o-transition: all .4s ease-out 0;
        transition: all .4s ease-out 0
    }

    .black:hover .bkg {
        opacity: 1
    }

    .bkg + h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        font-size: 40px;
        line-height: 50px;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: all .4s ease-out 0;
        -moz-transition: all .4s ease-out 0;
        -ms-transition: all .4s ease-out 0;
        -o-transition: all .4s ease-out 0;
        transition: all .4s ease-out 0
    }

    .black:hover .bkg + h2 {
        top: 44%
    }

    .col-sm-6.fadeInLeft.animated {
        clear: both;
        float: left
    }

    @-webkit-keyframes scaleout {
        0% {
            -webkit-transform: scale(0.0)
        }
        100% {
            opacity: 0;
            -webkit-transform: scale(1.0)
        }
    }

    @-moz-keyframes scaleout {
        0% {
            -moz-transform: scale(0.0)
        }
        100% {
            opacity: 0;
            -moz-transform: scale(1.0)
        }
    }

    @-ms-keyframes scaleout {
        0% {
            -ms-transform: scale(0.0)
        }
        100% {
            opacity: 0;
            -ms-transform: scale(1.0)
        }
    }

    @-o-keyframes scaleout {
        0% {
            -o-transform: scale(0.0)
        }
        100% {
            opacity: 0;
            -o-transform: scale(1.0)
        }
    }

    @keyframes scaleout {
        0% {
            transform: scale(0.0)
        }
        100% {
            opacity: 0;
            transform: scale(1.0)
        }
    }

    section {
        overflow: hidden;
        position: relative
    }

    h1, h2, h3, h4, h5, h6, p, span, blockquote, hr {
        z-index: 3;
        position: relative
    }

    h1 {
        font-family: Furore, 'Roboto', Arial, sans-serif;
        letter-spacing: -1px;
        font-weight: 700;
        letter-spacing: 2px
    }

    h2 {
        font-family: Furore, 'Roboto', Arial, sans-serif;
        letter-spacing: -2px;
        font-weight: 700;
        letter-spacing: 2px
    }

    h3, h4 {
        margin-top: 0
    }

    h3 {
        font-size: 28px;
        font-family: Furore, 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color: #388ED2;
        letter-spacing: 2px;
        line-height: 36px
    }

    h3 a {
        font-family: Furore, 'Roboto', Arial, sans-serif;
        font-weight: 500 !important;
        letter-spacing: 1px;
        display: inline !important;
        background: none !important;
        letter-spacing: 2px
    }

    p, p a {
        font-family: 'RobotoCondensed', Arial, sans-serif;
        font-style: normal;
        font-weight: 300;
        margin: 0 0 10px;
        font-size: 23px;
        letter-spacing: -1px;
        line-height: 36px;
        color: #777
    }

    p a {
        font-style: italic;
        color: #388ED2;
        text-transform: none
    }

    a, .pagination li span {
        color: #388ED2;
        font-family: 'RobotoCondensed', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        -webkit-transition: all ease .3s;
        -moz-transition: all ease .3s;
        -o-transition: all ease .3s;
        transition: all ease .3s;
        letter-spacing: -1px
    }

    a.textlink {
        font-family: 'Roboto', Arial, sans-serif;
        font-style: italic;
        font-weight: 400;
        text-decoration: underline;
        color: #388ED2
    }

    a:hover, a:focus {
        color: #aaa
    }

    hr {
        margin-top: 80px;
        margin-bottom: 0;
        border: 0;
        border-top: 1px solid #777
    }

    hr.mini {
        border: 0;
        width: 20px;
        border-top: 3px solid #388ED2;
        margin: 25px auto 20px 0
    }

    hr.central {
        margin-left: auto;
        margin-right: auto
    }

    hr.title {
        width: 20%;
        margin-bottom: 80px;
        margin-top: 70px;
        border-top: 2px solid #777
    }

    hr.title:after, hr.title:before {
        top: -2px;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none
    }

    hr.title:after {
        border-color: rgba(136, 183, 213, 0);
        border-top-color: #F3F3F3;
        border-width: 12px;
        margin-left: -12px
    }

    hr.title:before {
        border-color: rgba(194, 225, 245, 0);
        border-top-color: #777;
        border-width: 15px;
        margin-left: -15px
    }

    hr.bq-top {
        width: 20%;
        margin-bottom: 70px;
        margin-top: 0
    }

    hr.bq-bottom {
        width: 20%;
        margin-top: 80px;
        margin-bottom: 0
    }

    .text-left hr {
        display: inline-block
    }

    ul.list {
        padding-left: 26px
    }

    ul.list li, ol li {
        margin-bottom: 30px;
        font-size: 21px;
        line-height: 30px
    }

    ul {
        list-style: none
    }

    ul li span.icon-radio-checked {
        font-size: 12px;
        display: inline-block;
        position: relative;
        color: inherit;
        margin-right: 9px;
        margin-left: -23px;
        color: #388ED2
    }

    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        border: 0;
        -ms-interpolation-mode: bicubic
    }

    #start img {
        max-width: 92%;
        max-width: calc(100% - 30px)
    }

    iframe {
        border: 0;
        border: none
    }

    #wrapper {
        width: 100% !important;
        -webkit-transition: all .4s ease;
        -moz-transition: all .4s ease;
        -o-transition: all .4s ease;
        transition: all .4s ease
    }

    @media (max-width: 768px) {
        #wrapper {
            padding-left: 0
        }
    }

    .page-content {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        -khtml-opacity: 1;
        -moz-opacity: 1;
        opacity: 1;
        width: 100%;
        background-color: transparent;
        -webkit-transition: opacity .15s ease-out;
        -moz-transition: opacity .15s ease-out;
        -o-transition: opacity .15s ease-out;
        transition: opacity .15s ease-out
    }

    .clear {
        clear: both
    }

    .nopadding {
        padding: 0 !important;
        margin: 0 !important
    }

    .noborder {
        border: none !important
    }

    .padding {
        padding: 60px 0
    }

    .centertext {
        text-align: center
    }

    .row {
        margin-right: 0;
        margin-left: 0
    }

    .container-fluid {
        padding-left: 0;
        padding-right: 0
    }

    .container {
        padding-left: 10px;
        padding-right: 10px
    }

    @media (min-width: 768px) {
        .container {
            width: 650px;
            padding-left: 0;
            padding-right: 0
        }
    }

    @media (min-width: 992px) {
        .container {
            width: 700px;
            padding-left: 0;
            padding-right: 0
        }
    }

    @media (min-width: 1200px) {
        .container {
            width: 800px;
            padding-left: 0;
            padding-right: 0
        }
    }

    .mobile_logo {
        display: block;
        left: 50%;
        position: absolute;
        top: 10px;
        max-width: 120px;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%)
    }

    .mobile_logo img {
        height: 45px;
        width: auto
    }

    @media (min-width: 769px) {
        .mobile_logo {
            display: none
        }
    }

    a.scrollto {
        position: absolute;
        bottom: 50px;
        left: 50%;
        font-size: 20px;
        color: #fff;
        margin-left: -30px;
        text-decoration: none;
        width: 0;
        height: 0;
        border: 30px solid transparent;
        border-bottom-color: rgba(0, 0, 0, .5)
    }

    a.scrollto:after {
        content: '';
        position: absolute;
        left: -30px;
        top: 30px;
        width: 0;
        height: 0;
        border: 30px solid transparent;
        border-top-color: rgba(0, 0, 0, .5)
    }

    a.scrollto .icon-arrow-down2 {
        margin-left: -10px;
        position: absolute;
        top: 20px
    }

    .overlay {
        width: 100%;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
        -khtml-opacity: .9;
        -moz-opacity: .9;
        opacity: .8;
        -webkit-transition: all ease .3s;
        -moz-transition: all ease .3s;
        -o-transition: all ease .3s;
        transition: all ease .3s;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 2;
        left: 0
    }

    .header {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 500px
    }

    .modal-content {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: none
    }

    #menumodal .modal-dialog .modal-content .modal-body .row {
        padding-left: 0;
        padding-right: 0
    }

    #menumodal.modal {
        z-index: 9996
    }

    #menumodal .modal-body {
        padding: 0;
        background-color: #494949
    }

    @media (min-width: 769px) {
        #menumodal.modal {
            padding-top: 0
        }
    }

    #menumodal .modal-header, #headc .modal-header {
        min-height: 88px;
        height: 88px;
        padding: 0
    }

    @media (max-width: 768px) {
        #menumodal .modal-header, #headc .modal-header {
            display: none
        }
    }

    #menumodal .modal-dialog, #headc .modal-dialog {
        width: 100%;
        margin: auto;
        padding-right: 0;
        padding-left: 0
    }

    @media (min-width: 769px) {
        #menumodal .modal-dialog {
            padding-left: 80px
        }
    }

    #menumodal .modal-content, #headc .modal-content {
        background-color: #00acdd
    }

    #menumodal h4.modal-title {
        display: inline-block;
        color: #a1a1a1
    }

    #menumodal .modal-header .close {
        float: right;
        font-size: 51px;
        font-weight: 400;
        font-family: 'Arial', sans-serif;
        color: #fff;
        text-shadow: none;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        -khtml-opacity: 1;
        -moz-opacity: 1;
        opacity: 1;
        opacity: 1;
        margin-top: -9px;
        position: relative;
        z-index: 4;
        outline: none
    }

    #menumodal .close:hover, #menumodal .close:focus {
        color: #388ED2
    }

    #menumodal.modal.fade .modal-dialog, #headc.modal.fade .modal-dialog {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    .menubg {
        width: 100%;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
        -khtml-opacity: .3;
        -moz-opacity: .3;
        opacity: .3;
        height: 300px;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat
    }

    .menubg.hoverimg {
        opacity: 1 !important;
        -webkit-background-size: 100% 100% !important;
        -moz-background-size: 100% 100% !important;
        -o-background-size: 100% 100% !important;
        background-size: 100% 100% !important;
        -webkit-transition: opacity .6s ease-in-out;
        -moz-transition: opacity .6s ease-in-out;
        -ms-transition: opacity .6s ease-in-out;
        -o-transition: opacity .6s ease-in-out;
        transition: opacity .6s ease-in-out
    }

    #menumodal ul li {
        padding-left: 0;
        padding-right: 0
    }

    #menumodal ul li:hover .menubg.hoverimg {
        opacity: .6 !important
    }

    #menumodal ul li a {
        font-size: 38px;
        font-family: Furore, 'Roboto', Arial, sans-serif;
        color: #fff;
        line-height: 48px;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: none;
        z-index: 9;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        padding: 50px 40px 0
    }

    #menumodal ul li a:hover {
        text-decoration: none
    }

    #menumodal ul li span {
        display: block;
        font-size: 13px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color: #eee;
        margin-top: 20px;
        line-height: 25px;
        letter-spacing: 1px
    }

    #menumodal .modal-footer {
        padding: 15px;
        text-align: left;
        margin-left: 40px;
        padding: 35px 0 30px
    }

    #menumodal .modal-footer h4 {
        color: #999
    }

    .modal-backdrop {
        display: none
    }

    #yarlik {
        position: fixed;
        right: -95px;
        z-index: 1050;
        padding: 0 10px;
        background: #FF0B1D;
        color: #fff;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        top: 183px;
        -webkit-transition: all .2s ease-out 0;
        -moz-transition: all .2s ease-out 0;
        -ms-transition: all .2s ease-out 0;
        -o-transition: all .2s ease-out 0;
        transition: all .2s ease-out 0
    }

    #yarlik:hover {
        background: rgba(0, 0, 0, .9)
    }

    #yarlik a, #yarlik a:hover {
        color: #fff;
        letter-spacing: 2px;
        display: block;
        line-height: 30px;
        text-decoration: none
    }

    #socialmodal.modal {
        padding-top: 65px;
        z-index: 9999
    }

    #socialmodal ul {
        padding-left: 0
    }

    @media (min-width: 769px) {
        #socialmodal.modal {
            padding-top: 0
        }
    }

    #socialmodal .modal-dialog {
        width: 100%;
        margin: auto;
        padding-right: 0;
        padding-left: 0;
        height: 100%
    }

    #socialmodal .modal-content {
        background-color: #343434;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        border: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        height: 100%;
        display: table;
        width: 100%
    }

    #socialmodal .modal-body {
        display: table-cell;
        vertical-align: middle;
        text-align: center
    }

    #socialmodal .modal-body h3 {
        margin-bottom: 20px
    }

    #socialmodal .modal-header .close {
        float: right;
        font-size: 51px;
        font-weight: 400;
        font-family: 'Arial', sans-serif;
        color: #fff;
        text-shadow: none;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        -khtml-opacity: 1;
        -moz-opacity: 1;
        opacity: 1;
        margin-top: -9px;
        position: relative;
        z-index: 4;
        outline: none
    }

    #socialmodal .close:hover, #socialmodal .close:focus {
        color: #388ED2
    }

    #socialmodal ul li {
        display: inline-block;
        margin: 30px 10px
    }

    #socialmodal ul li a {
        text-decoration: none;
        color: #eee;
        font-size: 46px
    }

    #socialmodal.modal.fade .modal-dialog {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    .twitter:hover {
        color: #55ACEE !important
    }

    .dribbble:hover {
        color: #EA4C89 !important
    }

    .instagram:hover {
        color: #A6775B !important
    }

    .soundcloud:hover {
        color: #F85508 !important
    }

    .facebook:hover {
        color: #46629E !important
    }

    .youtube:hover {
        color: #cc181e !important
    }

    .vimeo:hover {
        color: #D3EEFF !important
    }

    @media (max-width: 1024px) {
        .fadeInUp, .fadeInRight, .fadeInLeft, .fadeInLeftBig {
            visibility: visible !important;
            -webkit-animation: 0 !important;
            -moz-animation: 0 !important;
            -ms-animation: 0 !important;
            -o-animation: 0 !important;
            animation: 0 !important
        }
    }

    .two {
        -webkit-animation-duration: .2s;
        -moz-animation-duration: .2s;
        -ms-animation-duration: .2s;
        -o-animation-duration: .2s;
        animation-duration: .2s
    }

    .four {
        -webkit-animation-duration: .4s;
        -moz-animation-duration: .4s;
        -ms-animation-duration: .4s;
        -o-animation-duration: .4s;
        animation-duration: .4s
    }

    .six {
        -webkit-animation-duration: .6s;
        -moz-animation-duration: .6s;
        -ms-animation-duration: .6s;
        -o-animation-duration: .6s;
        animation-duration: .6s
    }

    .eight {
        -webkit-animation-duration: .8s;
        -moz-animation-duration: .8s;
        -ms-animation-duration: .8s;
        -o-animation-duration: .8s;
        animation-duration: .8s
    }

    .ten {
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
        -ms-animation-duration: 1s;
        -o-animation-duration: 1s;
        animation-duration: 1s
    }

    .twelve {
        -webkit-animation-duration: 1.2s;
        -moz-animation-duration: 1.2s;
        -ms-animation-duration: 1.2s;
        -o-animation-duration: 1.2s;
        animation-duration: 1.2s
    }

    .fourteen {
        -webkit-animation-duration: 1.4s;
        -moz-animation-duration: 1.4s;
        -ms-animation-duration: 1.4s;
        -o-animation-duration: 1.4s;
        animation-duration: 1.4s
    }

    .sixteen {
        -webkit-animation-duration: 1.6s;
        -moz-animation-duration: 1.6s;
        -ms-animation-duration: 1.6s;
        -o-animation-duration: 1.6s;
        animation-duration: 1.6s
    }

    .eighteen {
        -webkit-animation-duration: 1.8s;
        -moz-animation-duration: 1.8s;
        -ms-animation-duration: 1.8s;
        -o-animation-duration: 1.8s;
        animation-duration: 1.8s
    }

    .twenty {
        -webkit-animation-duration: 2s;
        -moz-animation-duration: 2s;
        -ms-animation-duration: 2s;
        -o-animation-duration: 2s;
        animation-duration: 2s
    }

    .twentytwo {
        -webkit-animation-duration: 2.2s;
        -moz-animation-duration: 2.2s;
        -ms-animation-duration: 2.2s;
        -o-animation-duration: 2.2s;
        animation-duration: 2.2s
    }

    .twentyfour {
        -webkit-animation-duration: 2.4s;
        -moz-animation-duration: 2.4s;
        -ms-animation-duration: 2.4s;
        -o-animation-duration: 2.4s;
        animation-duration: 2.4s
    }

    #header {
        left: 0;
        width: 80px;
        background: #652d91 url(http://gameinn.com.ua/wp-content/themes/game/img/fonmenu.png) no-repeat top center;
        position: fixed;
        height: 100%;
        max-height: 100%;
        bottom: 0;
        top: 0;
        z-index: 1040;
        -webkit-transition: all .4s ease 0;
        -moz-transition: all .4s ease 0;
        -o-transition: all .4s ease 0;
        transition: all .4s ease 0
    }

    @media (max-width: 768px) {
        #header {
            left: 0;
            top: 0;
            width: 100%;
            margin-left: 0;
            height: 65px;
            background: #007099
        }
    }

    .toggle {
        width: 80px;
        height: 80px;
        background: none;
        text-align: center;
        position: relative;
        z-index: 200;
        padding-top: 20px;
        cursor: pointer;
        border: none;
        outline: none;
        -webkit-transition: all .7s ease;
        -moz-transition: all .7s ease;
        -o-transition: all .7s ease;
        transition: all .7s ease
    }

    .toggle:hover, button.social:hover {
        background: none
    }

    .toggleclose, #close {
        width: 80px;
        height: 88px;
        background-color: #d20e8c;
        text-align: center;
        position: fixed;
        z-index: 300;
        top: 0;
        padding-top: 8px;
        cursor: pointer;
        border: none;
        outline: none;
        -webkit-transition: all .7s ease;
        -moz-transition: all .7s ease;
        -o-transition: all .7s ease;
        transition: all .7s ease
    }

    #close {
        line-height: 88px;
        padding-top: 0
    }

    #close.display {
        z-index: 1042
    }

    .toggleclose span.icon-close, #close span.icon-close {
        font-size: 20px;
        color: #f4c806
    }

    .explore {
        width: 50%;
        height: 65px;
        background-color: #292929;
        text-align: center;
        position: relative;
        z-index: 1060;
        top: 0;
        border: none;
        outline: none;
        -webkit-transition: all .7s ease;
        -moz-transition: all .7s ease;
        -o-transition: all .7s ease;
        transition: all .7s ease
    }

    .explore h3 {
        color: #eee;
        font-size: 16px;
        line-height: 62px;
        margin-bottom: 0
    }

    @media (min-width: 769px) {
        .explore {
            display: none
        }
    }

    .toggle span.menu-bar {
        position: absolute;
        left: 50%;
        width: 35px;
        height: 4px;
        margin-left: -17.5px;
        background-color: #f4c806;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .toggle .bar-1 {
        top: 28px
    }

    .toggle .bar-2 {
        top: 38px
    }

    .toggle .bar-3 {
        top: 48px
    }

    button.social {
        width: 80px;
        height: 80px;
        position: fixed;
        bottom: 0;
        z-index: 1040;
        text-align: center;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: #652d91;
        -webkit-transition: all .7s ease;
        -moz-transition: all .7s ease;
        -o-transition: all .7s ease;
        transition: all .7s ease
    }

    @media (min-width: 769px) {
        button.social {
            left: 0
        }
    }

    button.social span {
        font-size: 24px;
        color: #f4c806;
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -o-transition: all .2s ease;
        transition: all .2s ease;
        top: 4px
    }

    @media (max-width: 768px) {
        .toggle {
            height: 65px;
            width: 65px;
            padding-top: 0
        }

        .toggleclose {
            height: 65px;
            width: 50%;
            padding-top: 4px;
            float: right;
            position: relative;
            right: 0
        }

        .toggle span.menu-bar {
            width: 30px;
            margin-left: -14px
        }

        button.social {
            right: 0;
            top: 0;
            width: 65px;
            height: 65px;
            background-color: #2f2f2f;
            border-top: none;
            margin-left: 0
        }

        .toggle .bar-1 {
            top: 19px
        }

        .toggle .bar-2 {
            top: 28px
        }

        .toggle .bar-3 {
            top: 37px
        }
    }

    header#pagemeta h1 {
        text-align: center;
        font-size: 50px;
        line-height: 68px;
        border-left: none;
        padding: 0 50px
    }

    header#pagemeta h3, header#pagemeta p {
        text-align: center
    }

    header#pagemeta hr.mini {
        margin-top: 30px
    }

    @media (max-width: 768px) {
        .toggle, button.social {
            background-color: transparent
        }
    }

    #bullets {
        position: fixed;
        top: 0;
        left: 0;
        display: table;
        width: 80px;
        z-index: 0
    }

    #bullets ul {
        padding-left: 0;
        display: table-cell;
        vertical-align: middle
    }

    #bullets ul li {
        border-width: 2px;
        border-style: solid;
        border-color: transparent;
        width: 14px;
        height: 14px;
        margin: 14px auto;
        -webkit-transition: border-color .3s linear;
        -moz-transition: border-color .3s linear;
        -o-transition: border-color .3s linear;
        transition: border-color .3s linear
    }

    #bullets ul li a {
        display: block;
        position: relative;
        width: 10px;
        height: 10px;
        background-color: #8db230;
        text-indent: -9999px;
        -webkit-transition: border .3s linear;
        -moz-transition: border .3s linear;
        -o-transition: border .3s linear;
        transition: border .3s linear
    }

    #bullets ul li.current-page-item a {
        background-color: transparent
    }

    #bullets ul li.current-page-item {
        border-color: #8db230
    }

    #bullets ul li:hover {
        border-color: #8db230
    }

    #bullets ul li:hover a {
        background-color: transparent
    }

    @media (max-width: 768px) {
        #bullets {
            display: none
        }
    }

    #headc {
        opacity: 1;
        display: block;
        margin-left: 80px;
        height: 90px;
        position: absolute
    }

    .element-img {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 100%;
        position: relative
    }

    #start.element-img {
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -o-background-size: 100% 100%;
        background-size: 100% 100%
    }

    #start address, #start address a, #start address a:hover {
        color: #fff;
        width: 450px;
        margin: 40px;
        position: absolute;
        top: 0;
        right: 0;
        font-family: 'Furore';
        letter-spacing: 5px;
        font-size: 12px;
        z-index: 4;
        text-align: right;
        text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000;
        text-decoration: none
    }

    .col-xs-12.element-img {
        min-height: 400px
    }

    .textpadding {
        padding: 80px 25px
    }

    @media (min-width: 768px) {
        .textpadding {
            padding: 80px
        }
    }

    @media (max-width: 767px) {
        .textpadding {
            padding: 80px 30px
        }
    }

    h3 span.number {
        font-size: 60px;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 700;
        font-style: italic;
        top: 10px;
        line-height: 20px;
        color: rgba(242, 111, 112, 0.3)
    }

    @media (max-width: 767px) {
        h3 span.number {
            display: block;
            margin: 40px 0
        }
    }

    blockquote.bigtext {
        text-align: center;
        font-size: 50px;
        line-height: 68px;
        font-family: 'Roboto', Arial, sans-serif;
        letter-spacing: -3px;
        font-weight: 700;
        border-left: none;
        padding: 0 50px
    }

    @media (max-width: 767px) {
        blockquote.bigtext {
            font-size: 30px;
            line-height: 46px;
            padding: 0
        }
    }

    .tooltip.bottom {
        min-width: 80px
    }

    #stats {
        text-align: center
    }

    #stats span.counter {
        font-size: 80px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        line-height: 80px;
        color: #388ED2
    }

    #stats .col-xs-6 {
        margin: 30px 0
    }

    #icons {
        text-align: center
    }

    #icons span {
        font-size: 60px;
        margin-bottom: 20px;
        display: block
    }

    #icons .col-sm-6 span {
        color: #388ED2
    }

    #icons .col-sm-6, #icons .col-sm-6 p {
        color: #ee1c28
    }

    #icons .col-xs-6 {
        margin: 30px 0
    }

    #clients img {
        -webkit-transition: all .25s;
        -moz-transition: all .25s;
        -ms-transition: all .25s;
        -o-transition: all .25s;
        transition: all .25s;
        -webkit-transform: scale(1.0);
        -o-transform: scale(1.0);
        -ms-transform: scale(1.0);
        transform: scale(1.0);
        margin: 10px auto
    }

    #clients img:hover {
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2)
    }

    .services {
        display: block;
        position: relative
    }

    .servcontent {
        margin-bottom: 60px
    }

    .servcontent .ico {
        width: 55px;
        text-align: center;
        float: left;
        margin-top: 5px
    }

    .servcontent:hover {
        -webkit-transition: all .4s ease-in-out;
        -moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out
    }

    .servdetail {
        margin-left: 80px
    }

    @media (max-width: 768px) {
        .servdetail {
            margin-left: 0
        }

        .servcontent .ico {
            width: 55px;
            text-align: center;
            float: right;
            margin-top: 0;
            position: relative
        }
    }

    #blogfeed h3 {
        color: #388ED2;
        padding: 0;
        margin-bottom: 0;
        display: inline-block
    }

    #blogfeed hr {
        left: 30px;
        position: absolute;
        bottom: 0
    }

    #blogfeed .modtitle {
        padding: 60px 156px 40px 30px;
        position: relative;
        background-color: #fff;
        width: 100%
    }

    #blogfeed {
        background: #fff;
        padding: 0 50px 80px;
        position: relative
    }

    @media (max-width: 768px) {
        #blogfeed {
            padding: 100px 0
        }
    }

    #blogfeed .flat-box {
        background-color: #fff;
        -webkit-box-shadow: 0 3px 0 0 rgba(234, 234, 234, 1);
        -moz-box-shadow: 0 3px 0 0 rgba(234, 234, 234, 1);
        box-shadow: 0 3px 0 0 rgba(234, 234, 234, 1);
        transition: all .5s ease;
        -moz-transition: all .5s ease;
        -webkit-transition: all .5s ease;
        -o-transition: all .5s ease
    }

    #blogfeed .flat-box:hover {
        transform: translate(0, -15px);
        -webkit-transform: translate(0, -15px);
        -o-transform: translate(0, -15px);
        -moz-transform: translate(0, -15px)
    }

    @media (max-width: 767px) {
        #blogfeed .modtitle {
            padding: 60px 30px 0;
            margin-bottom: 128px
        }

        #blogfeed hr {
            bottom: -40px
        }

        #blogfeed .direction.controls {
            right: 30px
        }

        #blogfeed {
            padding: 0 0 80px
        }
    }

    #clients img {
        -webkit-transition: all .25s;
        -moz-transition: all .25s;
        -ms-transition: all .25s;
        -o-transition: all .25s;
        transition: all .25s;
        -webkit-transform: scale(1.0);
        -o-transform: scale(1.0);
        -ms-transform: scale(1.0);
        transform: scale(1.0);
        margin: 10px auto
    }

    #clients img:hover {
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2)
    }

    @media (max-width: 768px) {
        #blogfeed .flat-box:hover {
            transform: none;
            -webkit-transform: none;
            -o-transform: none;
            -moz-transform: none
        }
    }

    #blogfeed .slideimg img {
        height: 100%;
        width: 100%;
        display: block
    }

    #blogslider, #blogslider-two {
        max-width: 1172px;
        margin: 0 auto;
        overflow: hidden
    }

    #blogfeed .direction a {
        text-decoration: none;
        font-size: 30px
    }

    #blogfeed a.prev span, #blogfeed a.next span {
        padding: 12px;
        color: silver
    }

    #blogfeed a.prev {
        position: absolute;
        top: 0;
        right: 53px;
        background-color: #333
    }

    #blogfeed a.prev.not, #blogfeed a.next.not, #blogfeed-two a.prev.not, #blogfeed-two a.next.not {
        opacity: .7;
        cursor: default
    }

    #blogfeed a.next {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #222
    }

    #blogfeed .direction.controls {
        position: absolute;
        top: 60px;
        right: 80px
    }

    #blogfeed .slidetitle {
        line-height: 30px;
        letter-spacing: 1px;
        padding: 30px 30px 0
    }

    #blogfeed .slidetitle a {
        text-decoration: none;
        color: #388ED2
    }

    #blogfeed .blogroll-meta, .blogroll-meta {
        padding: 0 30px 30px;
        color: #41484C;
        font-size: 17px
    }

    #stats .blogroll-meta {
        padding: 2px 0;
        line-height: 20px
    }

    #blogfeed input[type="text"] {
        width: 100%
    }

    @media (max-width: 767px) {
        #blogfeed .direction.controls {
            right: 50%;
            margin-right: -52px;
            top: 136px
        }
    }

    #blogfeed-two h3 {
        color: #388ED2;
        display: inline-block;
        padding: 0;
        margin-bottom: 0;
        position: relative
    }

    #blogfeed-two hr {
        left: 80px;
        position: absolute;
        top: 102px
    }

    #blogfeed-two .modtitle {
        padding: 60px 80px 46px;
        margin-bottom: 130px;
        width: 100%
    }

    #blogfeed-two {
        padding: 167px 50px 80px;
        position: relative
    }

    @media (max-width: 768px) {
        #blogfeed-two {
            padding: 221px 0 80px
        }

        #blogfeed-two .modtitle {
            padding: 60px 30px 46px
        }

        #blogfeed-two hr {
            left: 30px
        }
    }

    #blogfeed-two .flat-box {
        background-color: #fff;
        -webkit-box-shadow: 0 3px 0 0 rgba(234, 234, 234, 1);
        -moz-box-shadow: 0 3px 0 0 rgba(234, 234, 234, 1);
        box-shadow: 0 3px 0 0 rgba(234, 234, 234, 1);
        transition: all .5s ease;
        -moz-transition: all .5s ease;
        -webkit-transition: all .5s ease;
        -o-transition: all .5s ease
    }

    #blogfeed-two .flat-box:hover {
        transform: translate(0, -15px);
        -webkit-transform: translate(0, -15px);
        -o-transform: translate(0, -15px);
        -moz-transform: translate(0, -15px)
    }

    @media (max-width: 768px) {
        #blogfeed-two .flat-box:hover {
            transform: none;
            -webkit-transform: none;
            -o-transform: none;
            -moz-transform: none
        }
    }

    #blogfeed-two .slideimg img {
        height: 100%;
        width: 100%;
        display: block
    }

    #blogfeed-two .direction a {
        text-decoration: none;
        font-size: 30px
    }

    #blogfeed-two a.prev span, #blogfeed-two a.next span {
        padding: 12px;
        color: silver
    }

    #blogfeed-two a.prev {
        position: absolute;
        top: 0;
        right: 53px;
        background-color: #333
    }

    #blogfeed-two a.next {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #222
    }

    #blogfeed-two .direction.controls {
        position: absolute;
        top: 60px;
        right: 80px
    }

    @media (max-width: 768px) {
        #blogfeed-two .direction.controls {
            right: 50%;
            margin-right: -52px;
            top: 146px
        }
    }

    #blogfeed-two .slidetitle {
        line-height: 30px;
        letter-spacing: 1px;
        padding: 30px 30px 0
    }

    #blogfeed-two .slidetitle a {
        text-decoration: none;
        color: #388ED2
    }

    #blogfeed-two .blogroll-meta, .blogroll-meta {
        padding: 0 30px 30px;
        color: #41484C;
        font-size: 17px
    }

    #blogfeed-two input[type="text"] {
        width: 100%
    }

    .hero {
        height: 100%;
        text-align: center;
        display: table;
        width: 100%
    }

    .herofade {
        position: relative
    }

    @media (max-width: 768px) {
        .hero {
            padding-top: 65px
        }
    }

    @media (max-width: 1024px) {
        .herofade {
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100) !important;
            -khtml-opacity: 1 !important;
            -moz-opacity: 1 !important;
            opacity: 1 !important
        }
    }

    .tagline {
        display: table-cell;
        vertical-align: middle;
        width: 100%
    }

    .hero img {
        cursor: pointer;
        margin: auto auto 10px;
        position: relative;
        z-index: 3
    }

    .hero h1 {
        font-size: 25px;
        width: 95%;
        color: #fff;
        margin: 0 auto 20px;
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 700
    }

    .hero p {
        width: 95%;
        color: #fff;
        margin: auto;
        text-shadow: 0 1px 1px rgba(12, 76, 128, 1)
    }

    @media (min-width: 768px) {
        .hero h1 {
            font-size: 40px;
            margin: 0 auto 40px;
            width: 60%;
            text-shadow: 0 4px 0 rgba(166, 168, 171, 1)
        }

        .hero p {
            width: 50%
        }
    }

    @media (max-width: 450px) {
        .hero h1 {
            margin: 0 auto
        }

        .hero p {
            display: none
        }
    }

    #hero-slider .logo {
        position: absolute;
        top: 10%;
        left: 10%;
        z-index: 9
    }

    @media (max-width: 768px) {
        #hero-slider .logo {
            display: none
        }
    }

    #hero-slider .overlay {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
        -khtml-opacity: .7;
        -moz-opacity: .7;
        opacity: .7
    }

    #hero-slider .carousel-caption {
        margin: 0;
        width: 50%;
        text-shadow: none;
        padding: 0;
        left: 0;
        padding-left: 10%;
        bottom: 10%;
        text-align: left
    }

    @media (max-width: 1024px) {
        #hero-slider .carousel-caption {
            width: 82%;
            padding-right: 10%
        }
    }

    @media (max-width: 768px) {
        #hero-slider .carousel-caption {
            width: 100%
        }
    }

    #hero-slider .carousel-caption h1 {
        margin-bottom: 30px
    }

    #hero-slider .carousel-caption p {
        color: #fff
    }

    @media (max-width: 767px) {
        #hero-slider .carousel-caption p {
            display: none
        }
    }

    #hero-slider .carousel-control .icon-next, #hero-slider .carousel-control .icon-prev {
        top: 0;
        margin-top: 0
    }

    #hero-slider a.right.carousel-control {
        width: 80px;
        top: 0;
        right: 10px;
        background-color: #252525;
        height: 80px;
        opacity: 1
    }

    #hero-slider a.left.carousel-control {
        width: 80px;
        top: 0;
        right: 90px;
        left: inherit;
        background-color: #191919;
        height: 80px;
        opacity: 1
    }

    @media (max-width: 768px) {
        #hero-slider a.right.carousel-control {
            top: 65px;
            right: 0;
            width: 50px;
            height: 50px
        }

        #hero-slider a.left.carousel-control {
            top: 65px;
            right: 50px;
            width: 50px;
            height: 50px
        }

        #hero-slider.carousel.c-fade .carousel-control {
            padding-top: 8px
        }
    }

    #hero-slider.carousel.c-fade .item {
        -webkit-transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -ms-transition: opacity 1s ease-in-out;
        -o-transition: opacity 1s ease-in-out;
        transition: opacity 1s ease-in-out
    }

    #hero-slider.carousel.c-fade .active.left, #hero-slider.carousel.c-fade .active.right {
        left: 0;
        z-index: 2;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        -khtml-opacity: 0;
        -moz-opacity: 0;
        opacity: 0
    }

    #hero-slider.carousel.c-fade .next, #hero-slider.carousel.c-fade .prev {
        left: 0;
        z-index: 1
    }

    #hero-slider.carousel.c-fade .carousel-control {
        z-index: 3;
        padding-top: 20px
    }

    @media (max-width: 768px) {
        #hero-slider.carousel.c-fade .carousel-control {
            padding-top: 8px
        }
    }

    #hero-slider.carousel.c-fade .carousel-control:hover {
        background-color: #111
    }

    #hero-slider .carousel-indicators {
        right: 10%;
        bottom: 10%;
        margin-left: 0;
        text-align: right;
        width: auto
    }

    @media (max-width: 768px) {
        #hero-slider .carousel-indicators {
            display: none
        }
    }

    #hero-slider .carousel-indicators .active {
        border: none;
        background-color: #AE895D;
        width: 22px;
        height: 13px
    }

    #hero-slider .carousel-indicators li {
        width: 20px;
        height: 5px;
        border: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        background-color: #fff
    }

    #videohero {
        display: none
    }

    @media (min-width: 1025px) {
        #videohero {
            display: block
        }
    }

    #fallback {
        display: none
    }

    @media (max-width: 1024px) {
        #fallback {
            display: block
        }
    }

    #videohero .logo {
        position: absolute;
        bottom: 25px;
        left: 40px;
        z-index: 9
    }

    @media (max-width: 768px) {
        #videohero .logo {
            display: none
        }
    }

    .wallpapered {
        background: #eee;
        margin: 0 0 20px;
        padding-top: 50%;
        width: 100%
    }

    .wallpapered.square {
        padding-top: 100%
    }

    .wallpapered.bar {
        margin: -25px 0
    }

    #elementvid {
        height: 500px
    }

    #portfolio-item .row .col-sm-6, #portfolio-item .row .col-sm-4 {
        background-color: #333
    }

    #portfolio-item .titlemeta hr.mini {
        margin-top: 0
    }

    #portfolio-item .titlemeta {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 60px 60px;
        color: #eee
    }

    #portfolio-item .img-responsive {
        display: inline;
        vertical-align: middle
    }

    #portfolio-item .titlemeta h3, #portfolio-item .titlemeta p, #portfolio-item .titlemeta a:hover {
        color: #fff;
        text-decoration: none
    }

    #portfolio-item .titlemeta h3 {
        font-size: 22px
    }

    #portfolio-item .titlemeta .price {
        font-size: 60px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        line-height: 60px;
        color: #fff
    }

    #portfolio-item .titlemeta .price span {
        font-size: 60px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        line-height: 60px;
        color: #ED6D58
    }

    #portfolio-item a {
        position: relative;
        display: block;
        background-color: #d51a2f;
        -webkit-transition: all .2s ease-in-out;
        -moz-transition: all .2s ease-in-out;
        -ms-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out
    }

    #portfolio-item .col-sm-3:hover a {
        background-color: #961a2f
    }

    #portfolio-item a img {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        -khtml-opacity: .3;
        -moz-opacity: .3;
        opacity: .3;
        -webkit-transition: opacity .2s ease-in-out;
        -moz-transition: opacity .2s ease-in-out;
        -ms-transition: opacity .2s ease-in-out;
        -o-transition: opacity .2s ease-in-out;
        transition: opacity .2s ease-in-out
    }

    #portfolio-item .col-sm-3:hover img {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=20);
        -khtml-opacity: .2;
        -moz-opacity: .2;
        opacity: .2
    }

    .titlebar {
        height: 50px;
        overflow: hidden;
        background-color: #393939
    }

    .titlebar h3 {
        margin-top: 0;
        line-height: 50px;
        margin-bottom: 0;
        color: #999;
        margin-right: 10px
    }

    .title h3 a {
        color: #999;
        text-decoration: none
    }

    .titlebar h3 a span.icon-undo2 {
        color: inherit !important;
        font-size: 20px;
        top: 3px;
        margin-right: 10px
    }

    .titlebar h3 a:hover, .titlebar h3 a span:hover {
        color: #388ED2;
        text-decoration: none
    }

    .titlebar h3 a.back {
        font-size: 16px;
        line-height: 40px;
        color: #999
    }

    .meta.col-md-4.textpadding {
        padding: 80px 50px 50px
    }

    .meta.col-md-4 h4 {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase
    }

    .meta.col-md-4 p {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: none;
        letter-spacing: 0
    }

    .carousel-control.left, .carousel-control.right {
        z-index: 15;
        background-color: transparent;
        background-image: none;
        text-shadow: none
    }

    #slider .item img {
        display: block;
        width: 100%;
        height: auto
    }

    .owl-theme .owl-controls {
        text-align: center;
        position: absolute;
        right: 10px;
        bottom: 0
    }

    @media (max-width: 768px) {
        .owl-theme .owl-controls {
            right: 0
        }
    }

    .owl-theme .owl-controls .owl-buttons div {
        color: #FFF;
        display: inline-block;
        zoom: 1;
        display: inline;
        margin: 0;
        padding: 3px 10px 0;
        font-size: 18px
    }

    @media (min-width: 768px) {
        .owl-theme .owl-controls .owl-buttons div {
            padding: 13px 20px 10px
        }
    }

    .owl-prev {
        background-color: #252525
    }

    .owl-next {
        background-color: #191919
    }

    .owl-theme .owl-controls.clickable .owl-buttons div:hover {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        -khtml-opacity: 1;
        -moz-opacity: 1;
        opacity: 1;
        text-decoration: none
    }

    .owl-theme .owl-controls .owl-page {
        display: inline-block;
        zoom: 1;
        display: inline
    }

    .owl-theme .owl-controls .owl-page span {
        display: block;
        width: 12px;
        height: 12px;
        margin: 5px 7px;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
        -khtml-opacity: .5;
        -moz-opacity: .5;
        opacity: .5;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        background: #869791
    }

    .owl-theme .owl-controls .owl-page.active span, .owl-theme .owl-controls.clickable .owl-page:hover span {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        -khtml-opacity: 1;
        -moz-opacity: 1;
        opacity: 1
    }

    .owl-theme .owl-controls .owl-page span.owl-numbers {
        height: auto;
        width: auto;
        color: #FFF;
        padding: 2px 10px;
        font-size: 12px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px
    }

    .owl-item.loading {
        min-height: 150px;
        background: url(http://gameinn.com.ua/wp-content/themes/game/img/AjaxLoader.gif) no-repeat center center
    }

    .sortlinks {
        display: table;
        margin: 0 auto;
        text-align: center
    }

    .row.margin {
        margin: 0 -15px
    }

    #projects span.icon-flickr {
        display: inline-block;
        text-align: center;
        margin: 0 auto 47px
    }

    #projects .projects {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -o-box-sizing: border-box;
        width: 25%;
        margin: 0;
        display: none;
        float: left;
        overflow: hidden;
        padding: 0
    }

    #projects .row.margin .projects {
        padding: 0 15px
    }

    #projects.menu .projects {
        width: 20%
    }

    #projects.menu .projects:nth-child(4n+1) {
        display: block;
        clear: both
    }

    #projects .projects-wrapper {
        cursor: pointer;
        overflow: hidden;
        position: relative !important;
        background: none;
        cursor: pointer
    }

    #projects .projects-wrapper span.price {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #FF0B1D;
        color: #fff;
        font-weight: 700;
        line-height: 20px;
        padding: 5px 10px
    }

    #projects .projects .label {
        position: absolute;
        width: 100.5%;
        height: 100%;
        top: 0;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        -khtml-opacity: 0;
        -moz-opacity: 0;
        opacity: 0;
        cursor: pointer
    }

    #projects.menu .projects .label {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=1.0) !important;
        -khtml-opacity: 1 !important;
        -moz-opacity: 1 !important;
        opacity: 1 !important;
        background: none
    }

    #projects .projects .label-text {
        color: #fff;
        position: relative;
        z-index: 500;
        height: 100%;
        padding: 0 30px;
        width: 100%;
        display: table;
        text-align: center
    }

    #projects .projects .label-text h3 {
        width: 100%;
        white-space: normal;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        top: 20px
    }

    #projects .projects a .label-text h3 {
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 500 !important;
        letter-spacing: 1px;
        font-size: 14px
    }

    #projects.menu .projects .label-text p {
        white-space: normal;
        font-size: 18px;
        line-height: 20px;
        padding: 20px 0;
        text-transform: initial;
        font-weight: 300;
        color: #aaa
    }

    #projects.menu .projects .label-text p.text-left {
        font-size: 40px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        line-height: 40px;
        color: #fff
    }

    #projects.menu .projects .label-text h3 span {
        font-size: 12px;
        position: relative;
        padding: 0 56px 0 0
    }

    #projects.menu .projects .label-text big {
        font-size: 28px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        line-height: 30px;
        padding-left: 10px;
        color: #ED6D58
    }

    #projects.menu .projects .label-text small {
        font-size: 150%;
        color: #fff;
        position: absolute;
        right: 0;
        bottom: 0
    }

    #projects.menu .projects .label-text h3 {
        display: block;
        line-height: 30px;
        color: #777;
        top: 20px !important
    }

    #projects .projects .label-text h3 a, #projects .projects .label-text h3 {
        color: #eee;
        text-decoration: none
    }

    #projects .projects .label-bg {
        background: #222;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0
    }

    #projects.menu .projects .label-bg {
        background: rgba(34, 34, 34, .6)
    }

    #projects .projects img {
        width: 100%;
        position: relative;
        display: block
    }

    #projects .projects .himg img {
        width: auto;
        height: 100%
    }

    #projects .projects img.hs {
        height: 100%;
        width: auto
    }

    #projects .projects img.icon {
        height: auto;
        position: absolute;
        top: 1%;
        left: 1%;
        width: 10%
    }

    #projects .projects img.icon ~ img.icon {
        left: 12%
    }

    @media only screen and (max-width: 767px) {
        #projects .projects {
            width: 50%
        }
    }

    ul.filters {
        margin: 0 auto 20px;
        padding: 0
    }

    ul.filters li:first-child {
        margin-left: 0
    }

    ul.filters li {
        display: inline-block;
        margin-left: -6px
    }

    ul.filters li p {
        display: block;
        padding: 0 10px 3px;
        margin-bottom: 0;
        border-bottom: 3px solid transparent;
        border-top: 3px solid transparent;
        font-size: 14px;
        font-family: 'RobotoCondensed', 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-transition: all ease .3s;
        -moz-transition: all ease .3s;
        -o-transition: all ease .3s;
        transition: all ease .3s;
        text-decoration: none
    }

    ul.filters.mini li p {
        font-size: 12px;
        padding: 0 10px
    }

    ul.filters li p.active, ul.filters li p:hover, ul.filters li a:hover {
        color: #388ED2;
        border-bottom: 3px solid #388ED2;
        border-top: 3px solid #388ED2;
        text-decoration: none
    }

    #team h1, #team p {
        text-align: center
    }

    #team .team-meta {
        width: 90%
    }

    @media (max-width: 767px) {
        #team .team-meta {
            float: none !important;
            margin: 0 auto;
            margin-bottom: 45px
        }
    }

    #team .team-meta .quote {
        padding: 12px 22px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        width: 90%;
        position: relative;
        font-weight: 800;
        font-family: 'Raleway', sans-serif
    }

    @media (max-width: 767px) {
        #team .team-meta .quote {
            margin: 0 auto
        }
    }

    #team .team-meta .quote .arrow-down {
        position: absolute;
        bottom: 3px;
        left: 30px
    }

    #team .team-meta .quote .arrow-down .arrow {
        border-color: #F9F9F9 transparent transparent;
        border-style: solid;
        border-width: 11px;
        cursor: pointer;
        position: absolute;
        top: 3px;
        z-index: 1002
    }

    #team .team-meta .author {
        margin-top: 40px;
        margin-left: 10px
    }

    @media (max-width: 767px) {
        #team .team-meta .author {
            margin-left: 6%
        }
    }

    #team .team-meta .author .pic {
        width: 71px;
        height: 71px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        float: left;
        position: relative;
        top: -12px;
        margin-right: 18px
    }

    #team .team-meta .author .name {
        color: #3FD8DF;
        font-family: 'Roboto', Arial, sans-serif;
        line-height: 23px;
        font-weight: 800
    }

    #team .team-meta .author .company {
        font-size: 14px;
        color: #909090;
        line-height: 23px;
        font-weight: 400
    }

    #team .team-content {
        position: absolute;
        padding: 0;
        right: 0;
        height: 100%
    }

    #team .team-content:before {
        bottom: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        border-color: rgba(136, 183, 213, 0);
        border-bottom-color: #333;
        border-width: 30px;
        margin-left: -30px
    }

    @media (max-width: 991px) {
        #team .team-content {
            position: relative;
            display: table;
            width: 100%;
            height: 400px
        }
    }

    #team .team-meta {
        text-align: center;
        -webkit-transition: opacity .5s ease;
        -moz-transition: opacity .5s ease;
        -o-transition: opacity .5s ease;
        transition: opacity .5s ease;
        display: none;
        margin: auto;
        top: 50%;
        margin-top: -70px;
        width: 100%;
        position: absolute;
        visibility: hidden !important
    }

    @media (max-width: 991px) {
        #team .team-meta {
            height: auto;
            padding: 0;
            top: 0;
            position: relative;
            vertical-align: middle
        }
    }

    #team .team-meta.active {
        visibility: visible !important;
        display: table-cell !important
    }

    #team .team-meta p {
        color: #939898;
        font-weight: 400;
        font-size: 24px;
        margin-bottom: 0
    }

    #team .team-meta a {
        color: #999;
        text-decoration: none
    }

    #team .team-meta a:hover, #team .team-meta a:active {
        color: #fff
    }

    #team .team-meta cite {
        font-size: 15px;
        color: #999
    }

    #team .team-meta cite a span {
        top: 3px
    }

    #team .team-avatars {
        list-style: none;
        padding: 0;
        font-size: 0;
        margin: 0
    }

    #team .team-avatars li {
        display: inline-block;
        visibility: hidden;
        margin: 0;
        position: relative;
        float: left;
        width: 20%
    }

    #team .team-avatars li a {
        cursor: default
    }

    #team .team-avatars a:before {
        content: "";
        background-color: #ED6D58;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px
    }

    #team .team-avatars a:before, #team .team-avatars a:after {
        opacity: 0;
        -webkit-transition: opacity .5s ease;
        -moz-transition: opacity .5s ease;
        -o-transition: opacity .5s ease;
        transition: opacity .5s ease
    }

    #team .team-avatars a:hover:before, #team .team-avatars a.active:before, #team .team-avatars a:hover:after, #team .team-avatars a.active:after {
        opacity: .8
    }

    @media (max-width: 1199px) {
        #team .team-avatars li {
            width: 20%
        }
    }

    @media (max-width: 768px) {
        #team .team-content:before {
            border-width: 15px;
            margin-left: -15px
        }

        #team .team-meta p {
            font-size: 16px
        }

        #team .team-meta cite {
            font-size: 13px
        }

        #team .team-avatars li {
            margin: 0;
            width: 20%
        }

        #team .team-avatars li img, #team .team-avatars li a:before {
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px
        }
    }

    #team .team-avatars li {
        width: 20%
    }

    #team img {
        width: 100%
    }

    #team hr.mini {
        margin-top: 15px;
        margin-bottom: 25px
    }

    #testimonials hr.mini {
        margin-top: 25px
    }

    #testo-slide {
        margin: 30px 0 0
    }

    #testo-slide .carousel-indicators {
        right: 50%;
        top: auto;
        bottom: 0;
        margin-right: -19px
    }

    #testo-slide .carousel-indicators li {
        background: silver
    }

    #testo-slide .carousel-indicators .active {
        background: #333
    }

    #testo-slide img {
        width: 100px;
        height: 100px
    }

    #testo-slide .col-sm-9 {
        padding-left: 0;
        padding-right: 0
    }

    .item blockquote {
        border-left: none;
        margin: 0;
        padding: 0
    }

    .item blockquote img {
        margin-bottom: 10px
    }

    .item blockquote p:before {
        content: "\e67e";
        font-family: 'icomoon';
        float: left;
        margin-right: 10px
    }

    @media (min-width: 768px) {
        #testo-slide {
            margin-top: 30px;
            min-height: 230px
        }
    }

    @media (max-width: 768px) {
        #testo-slide .carousel-indicators {
            bottom: -50px !important
        }

        #testo-slide .carousel-indicators li {
            display: inline-block;
            margin: 0 5px;
            width: 15px;
            height: 15px
        }

        #testo-slide .carousel-indicators li.active {
            margin: 0 5px;
            width: 20px;
            height: 20px
        }
    }

    .img-circle {
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        height: 100px;
        width: 100px
    }

    .timeline-centered {
        position: relative;
        margin-bottom: 30px
    }

    .timeline-centered:before, .timeline-centered:after {
        content: " ";
        display: table
    }

    .timeline-centered:after {
        clear: both
    }

    .timeline-centered:before, .timeline-centered:after {
        content: " ";
        display: table
    }

    .timeline-centered:after {
        clear: both
    }

    .timeline-centered:before {
        content: '';
        position: absolute;
        display: block;
        width: 3px;
        background: #6BB5C3;
        top: 15px;
        bottom: 20px;
        margin-left: 6px
    }

    .timeline-centered .timeline-entry {
        position: relative;
        margin: 10px 30px;
        clear: both
    }

    .timeline-centered .timeline-entry:before, .timeline-centered .timeline-entry:after {
        content: " ";
        display: table
    }

    .timeline-centered .timeline-entry:after {
        clear: both
    }

    .timeline-centered .timeline-entry:before, .timeline-centered .timeline-entry:after {
        content: " ";
        display: table
    }

    .timeline-centered .timeline-entry:after {
        clear: both
    }

    .timeline-centered .timeline-entry.begin {
        margin-bottom: 0
    }

    .timeline-centered .timeline-entry.left-aligned {
        float: left
    }

    .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {
        margin-left: 0;
        margin-right: -18px
    }

    .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-time {
        left: auto;
        right: -100px;
        text-align: left
    }

    .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {
        float: right
    }

    .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {
        margin-left: 0;
        margin-right: 70px
    }

    .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label:after {
        left: auto;
        right: 0;
        margin-left: 0;
        margin-right: -9px;
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .timeline-centered .timeline-entry .timeline-entry-inner {
        position: relative;
        margin-left: -20px
    }

    .timeline-centered .timeline-entry .timeline-entry-inner:before, .timeline-centered .timeline-entry .timeline-entry-inner:after {
        content: " ";
        display: table
    }

    .timeline-centered .timeline-entry .timeline-entry-inner:after {
        clear: both
    }

    .timeline-centered .timeline-entry .timeline-entry-inner:before, .timeline-centered .timeline-entry .timeline-entry-inner:after {
        content: " ";
        display: table
    }

    .timeline-centered .timeline-entry .timeline-entry-inner:after {
        clear: both
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {
        position: absolute;
        left: -100px;
        text-align: right;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {
        display: block
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:first-child {
        font-size: 15px;
        font-weight: 700
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:last-child {
        font-size: 12px
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {
        color: #737881;
        display: block;
        width: 15px;
        height: 15px;
        -webkit-background-clip: padding-box;
        -moz-background-clip: padding;
        background-clip: padding-box;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
        float: left;
        border: 3px solid #fff;
        top: 50%;
        position: absolute;
        margin-top: -7.5px;
        left: -10px
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-primary {
        background-color: #303641;
        color: #fff
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-secondary {
        background-color: #ee4749;
        color: #fff
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-success {
        background-color: #00a651;
        color: #fff
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-info {
        background-color: #21a9e1;
        color: #fff
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-warning {
        background-color: #fad839;
        color: #fff
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-danger {
        background-color: #cc2424;
        color: #fff
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {
        position: relative;
        background: #f5f5f6;
        padding: 1em;
        margin-left: 20px;
        -webkit-background-clip: padding-box;
        -moz-background-clip: padding;
        background-clip: padding-box;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 9px 9px 9px 0;
        border-color: transparent #f5f5f6 transparent transparent;
        left: 0;
        top: 50%;
        margin-left: -9px;
        margin-top: -10px
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {
        font-size: 18px;
        margin: 0
    }

    .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {
        margin-top: 15px
    }

    .line {
        position: absolute;
        display: block;
        width: 3px;
        background: #6BB5C3;
        top: -10%;
        right: 0;
        height: 120%;
        bottom: 20px
    }

    .present, .born {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color: #388ED2;
        padding: 10px;
        background-color: #F5F5F6;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px
    }

    .present:after, .born:after {
        left: 100%;
        top: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        border-color: rgba(136, 183, 213, 0);
        border-left-color: #F5F5F6;
        border-width: 10px;
        margin-top: -10px
    }

    .present {
        position: absolute;
        top: -10%;
        right: 30px;
        margin-top: -10px;
        line-height: 100%
    }

    .born {
        position: absolute;
        bottom: -10%;
        right: 30px;
        margin-bottom: -10px;
        line-height: 100%
    }

    .dot_tp {
        position: absolute;
        top: -10%;
        right: -6px;
        background-color: #EE4749;
        height: 15px;
        width: 15px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 3px solid #fff
    }

    .dot_bt {
        position: absolute;
        bottom: -10%;
        right: -6px;
        background-color: #EE4749;
        height: 15px;
        width: 15px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 3px solid #fff
    }

    #wrapper .articles {
        padding: 40px 0;
        border-bottom: 1px solid #ccc !important;
        border-color: #ccc !important
    }

    .articles .boxthumb {
        width: 33.33333333%;
        height: auto;
        background-size: cover;
        background-position: 50%;
        float: left;
        margin: 0 20px 20px 0
    }

    .articles .boxthumb > img {
        z-index: -1;
        opacity: 0;
        width: 100%;
        height: auto
    }

    .articles h1 {
        margin-bottom: 20px
    }

    .articles h1 a {
        font-size: 36px;
        font-family: 'Furore', 'Roboto', Arial, sans-serif;
        letter-spacing: 2px;
        font-weight: 700;
        text-decoration: none;
        color: #777;
        text-transform: none
    }

    .articles h1 a:hover {
        color: #aaa
    }

    a.readmore:hover {
        border: 3px solid #777;
        color: #777
    }

    a.readmore {
        padding: 10px;
        text-decoration: none;
        border: 3px solid #388ED2;
        margin-top: 15px;
        top: 20px;
        position: relative
    }

    .articles .blogroll-meta {
        padding: 0;
        font-size: 16px
    }

    .articles span.icon-clock {
        position: relative;
        top: 2px;
        margin-right: 6px
    }

    h3.date {
        margin-top: 60px
    }

    h4.tags {
        margin-bottom: 40px
    }

    .postfade {
        position: relative
    }

    body#contact form#contactForm.well {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    body#contact .form-control {
        padding: 36px 0 48px;
        border: none;
        font-family: 'RobotoCondensed', 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 13px;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        border-bottom: 2px solid #eee
    }

    body#contact textarea.form-control {
        border-bottom: none;
        resize: none
    }

    body#contact form#contactForm .btn-primary, body#contact form.wpcf7-form .btn-primary {
        font-family: 'RobotoCondensed', 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 13px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        padding: 16px 22px;
        background-color: #8db230;
        -webkit-transition: all ease .3s;
        -moz-transition: all ease .3s;
        -o-transition: all ease .3s;
        transition: all ease .3s;
        border: none
    }

    body#contact form#contactForm .btn-primary:hover, body#contact form.wpcf7-form .btn-primary:hover {
        background-color: #80b230;
        -webkit-transition: all ease .3s;
        -moz-transition: all ease .3s;
        -o-transition: all ease .3s;
        transition: all ease .3s
    }

    div.wpcf7 .screen-reader-response {
        display: none
    }

    form.wpcf7-form .wpcf7-form-control-wrap {
        position: relative
    }

    form.wpcf7-form span.wpcf7-not-valid-tip {
        color: red;
        text-transform: uppercase;
        font-size: 10px
    }

    #form-b form.wpcf7-form span.wpcf7-not-valid-tip {
        position: absolute;
        top: -10px;
        line-height: 16px
    }

    #form-b form.wpcf7-form textarea + span.wpcf7-not-valid-tip {
        top: -16px
    }

    form.wpcf7-form div.wpcf7-response-output {
        text-transform: uppercase;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 10px
    }

    #form-b form.wpcf7-form div.wpcf7-validation-errors {
        color: red
    }

    body#contact form#contactForm .alert-danger {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        border: none;
        font-size: 15px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        width: 80%;
        background-color: transparent;
        width: 80%;
        float: left;
        padding-top: 0
    }

    body#contact form#contactForm .alert-success {
        width: 80%;
        background-color: transparent;
        width: 80%;
        float: left;
        padding-top: 0
    }

    body#contact button.close {
        position: relative;
        top: -25px;
        right: 0
    }

    body#contact .help-block ul {
        padding-left: 0;
        margin-top: 30px
    }

    body#contact .help-block ul li {
        color: #388ED2
    }

    span.icon-at {
        font-family: 'Arial', serif;
        font-weight: 700;
        font-size: 16px
    }

    #map-canvas {
        height: 500px
    }

    .pricing-table .plan {
        margin-left: 0;
        text-align: center
    }

    .plan {
        padding: 10px;
        color: #777
    }

    .plan ul {
        background-color: #fff;
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 4px solid #777;
        border-right: 4px solid #777;
        border-left: 4px solid #777
    }

    .plan-name {
        padding: 40px 20px 20px;
        background-color: #fff;
        border-top: 4px solid #777;
        border-right: 4px solid #777;
        border-left: 4px solid #777
    }

    .pricing-table .plan .plan-name span {
        font-size: 14px
    }

    .pricing-table .plan ul {
        list-style: none;
        margin: 0;
        padding-left: 0
    }

    .pricing-table .plan-name h3 {
        font-size: 50px
    }

    .pricing-table .plan ul li.plan-feature {
        padding: 15px
    }

    .pricing-three-column {
        margin: 0 auto
    }

    .pricing-variable-height .plan {
        float: none;
        margin-left: 2%;
        vertical-align: bottom;
        display: inline-block;
        zoom: 1;
        display: inline
    }

    .plan-mouseover .plan-name {
        background-color: #4e9a06 !important
    }

    .pricing-table span {
        font-size: 24px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase
    }

    .pricing-table span.badge {
        position: absolute;
        top: 0;
        left: 50%;
        font-size: 14px !important;
        margin-left: -50px;
        padding: 5px 20px
    }

    .pricing-table hr.mini.central {
        margin: 20px auto 0
    }

    footer {
        text-align: center;
        background-color: #19191C
    }

    footer .padding {
        padding: 160px 0
    }

    footer p {
        color: silver;
        margin: 30px 0 0
    }

    footer small {
        font-size: 13px;
        font-family: 'RobotoCondensed', 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase
    }

    footer img {
        -webkit-transition: all .25s;
        -moz-transition: all .25s;
        -ms-transition: all .25s;
        -o-transition: all .25s;
        transition: all .25s;
        -webkit-transform: scale(1.0);
        -o-transform: scale(1.0);
        -ms-transform: scale(1.0);
        transform: scale(1.0)
    }

    footer img:hover {
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2)
    }

    .btn {
        color: #fff;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        border: none
    }

    .btn-lg {
        padding: 25px
    }

    .btn
    .btn, .btn.disabled, .btn[disabled] {
        background-color: #aab2bd;
        border-color: #aab2bd
    }

    .btn:hover, .btn:focus, .btn:active, .btn.active {
        color: #fff;
        background-color: #ccd1d9;
        border-color: #ccd1d9;
        outline: none !important
    }

    .btn:active, .btn.active {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .btn.disabled, .btn[disabled] {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=45);
        -khtml-opacity: .45;
        -moz-opacity: .45;
        opacity: .45
    }

    .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active, .btn-link.active, .btn-link.disabled, .btn-link[disabled] {
        color: #3bafda;
        background-color: transparent;
        border-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .btn-link:hover, .btn-link:focus {
        text-decoration: underline
    }

    .btn-default {
        color: #fff
    }

    .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active {
        background-color: #ccd1d9
    }

    .btn-default, .btn-default.disabled, .btn-default[disabled] {
        background-color: #3F3B55
    }

    .open .dropdown-toggle.btn-default {
        background-color: #ccd1d9
    }

    .btn-primary, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] {
        background-color: #3bafda;
        border-color: #3bafda
    }

    .btn-primary:hover, .btn-primary:focus {
        background-color: #4fc1e9;
        border-color: #4fc1e9
    }

    .open .dropdown-toggle.btn-primary {
        background-color: #4fc1e9;
        border-color: #4fc1e9
    }

    .btn-info, .btn-info:active, .btn-info.active, .btn-info.disabled, .btn-info[disabled] {
        background-color: #37bc9b;
        border-color: #37bc9b
    }

    .btn-info:hover, .btn-info:focus {
        background-color: #48cfad;
        border-color: #48cfad
    }

    .open .dropdown-toggle.btn-info {
        background-color: #48cfad;
        border-color: #48cfad
    }

    .btn-success, .btn-success:active, .btn-success.active, .btn-success.disabled, .btn-success[disabled] {
        background-color: #8cc152;
        border-color: #8cc152
    }

    .btn-success:hover, .btn-success:focus {
        background-color: #a0d468;
        border-color: #a0d468
    }

    .open .dropdown-toggle.btn-success {
        background-color: #a0d468;
        border-color: #a0d468
    }

    .btn-warning, .btn-warning:active, .btn-warning.active, .btn-warning.disabled, .btn-warning[disabled] {
        background-color: #f6bb42;
        border-color: #f6bb42
    }

    .btn-warning:hover, .btn-warning:focus {
        background-color: #ffce54;
        border-color: #ffce54
    }

    .open .dropdown-toggle.btn-warning {
        background-color: #ffce54;
        border-color: #ffce54
    }

    .btn-danger, .btn-danger:active, .btn-danger.active, .btn-danger.disabled, .btn-danger[disabled], .btn-danger .open .dropdown-toggle.btn {
        background-color: #da4453;
        border-color: #da4453
    }

    .btn-danger:hover, .btn-danger:focus {
        background-color: #ed5565;
        border-color: #ed5565
    }

    .open .dropdown-toggle.btn-danger {
        background-color: #ed5565;
        border-color: #ed5565
    }

    .btn-group.open .dropdown-toggle {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .btn-group .btn {
        border-left-color: #96a0ad
    }

    .btn-group.open .btn-default.dropdown-toggle, .btn-group .btn-default:focus, .btn-group .btn-default:active, .btn-group .btn-default.active {
        color: #fff
    }

    .btn-group .btn-primary, .btn-group .btn-primary:focus, .btn-group .btn-primary:active, .btn-group .btn-primary.active {
        border-left-color: #269ecb
    }

    .btn-group .btn-success, .btn-group .btn-success:focus, .btn-group .btn-success:active, .btn-group .btn-success.active {
        border-left-color: #7ab03f
    }

    .btn-group .btn-warning, .btn-group .btn-warning:focus, .btn-group .btn-warning:active, .btn-group .btn-warning.active {
        border-left-color: #efa50b
    }

    .btn-group .btn-danger, .btn-group .btn-danger:focus, .btn-group .btn-danger:active, .btn-group .btn-danger.active {
        border-left-color: #d1293a
    }

    .btn-group .btn-info, .btn-group .btn-info:focus, .btn-group .btn-info:active, .btn-group .btn-info.active {
        border-left-color: #2fa084
    }

    .btn-group .btn:first-child, .btn-group .btn-primary:first-child, .btn-group .btn-success:first-child, .btn-group .btn-warning:first-child, .btn-group .btn-danger:first-child, .btn-group .btn-info:first-child {
        border-left-color: transparent
    }

    .btn-group-vertical .btn, .btn-group-vertical .btn-group .btn-primary {
        border-top-color: #96a0ad !important
    }

    .btn-group-vertical .btn-primary, .btn-group-vertical .btn-primary:focus, .btn-group-vertical .btn-primary:active, .btn-group-vertical .btn-primary.active, .btn-group-vertical .btn-group .btn-primary {
        border-top-color: #269ecb !important
    }

    .btn-group-vertical .btn-success, .btn-group-vertical .btn-success:focus, .btn-group-vertical .btn-success:active, .btn-group-vertical .btn-success.active, .btn-group-vertical .btn-group .btn-success {
        border-top-color: #7ab03f !important
    }

    .btn-group-vertical .btn-warning, .btn-group-vertical .btn-warning:focus, .btn-group-vertical .btn-warning:active, .btn-group-vertical .btn-warning.active, .btn-group-vertical .btn-group .btn-warning {
        border-top-color: #efa50b !important
    }

    .btn-group-vertical .btn-danger, .btn-group-vertical .btn-danger:focus, .btn-group-vertical .btn-danger:active, .btn-group-vertical .btn-danger.active, .btn-group-vertical .btn-group .btn-danger {
        border-top-color: #d1293a !important
    }

    .btn-group-vertical .btn-info, .btn-group-vertical .btn-info:focus, .btn-group-vertical .btn-info:active, .btn-group-vertical .btn-info.active, .btn-group-vertical .btn-group .btn-info {
        border-top-color: #2fa084 !important
    }

    .btn-group-vertical .btn:not(.btn-default):first-child, .btn-group-vertical .btn-primary:first-child, .btn-group-vertical .btn-success:first-child, .btn-group-vertical .btn-warning:first-child, .btn-group-vertical .btn-danger:first-child, .btn-group-vertical .btn-info:first-child {
        border-top: none
    }

    .label, .badge {
        background-color: #aab2bd;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        font-size: 14px;
        font-family: 'RobotoCondensed', 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        padding: 10px
    }

    .label-default, .badge-default {
        color: #434a54;
        background-color: #fff;
        border: 1px solid #aab2bd
    }

    .label-primary, .badge-primary {
        background-color: #3bafda;
        border-color: #3bafda
    }

    .label-success, .badge-success {
        background-color: #8cc152;
        border-color: #8cc152
    }

    .label-danger, .badge-danger {
        background-color: #da4453;
        border-color: #da4453
    }

    .label-warning, .badge-warning {
        background-color: #f6bb42;
        border-color: #f6bb42
    }

    .label-info, .badge-info {
        background-color: #37bc9b;
        border-color: #37bc9b
    }

    .tooltip-inner {
        color: #fff;
        background-color: #434a54;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        padding: 20px;
        font-size: 24px
    }

    .tooltip.top .tooltip-arrow, .tooltip.top-left .tooltip-arrow, .tooltip.top-right .tooltip-arrow {
        border-top-color: #434a54
    }

    .tooltip.right .tooltip-arrow {
        border-right-color: #434a54
    }

    .tooltip.left .tooltip-arrow {
        border-left-color: #434a54
    }

    .tooltip.bottom .tooltip-arrow, .tooltip.bottom-left .tooltip-arrow, .tooltip.bottom-right .tooltip-arrow {
        border-bottom-color: #434a54
    }

    .popover {
        color: #fff;
        background-color: #434a54;
        border-color: #434a54;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .popover-title {
        padding-bottom: 0;
        font-weight: 700;
        color: #fff;
        background-color: transparent;
        border-bottom: none
    }

    .popover.top .arrow, .popover.top .arrow:after {
        border-top-color: #434a54
    }

    .popover.right .arrow, .popover.right .arrow:after {
        border-right-color: #434a54
    }

    .popover.bottom .arrow, .popover.bottom .arrow:after {
        border-bottom-color: #434a54
    }

    .popover.left .arrow, .popover.left .arrow:after {
        border-left-color: #434a54
    }

    .progress {
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        height: 40px;
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 30px;
        position: relative
    }

    .progress-bar {
        background-color: #008ed6;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .progress-bar-success {
        background-color: #8cc152
    }

    .progress-bar-info {
        background-color: #37bc9b
    }

    .progress-bar-warning {
        background-color: #f6bb42
    }

    .progress-bar-danger {
        background-color: #da4453
    }

    .progress > .progress-type {
        position: absolute;
        left: 0;
        font-weight: 800;
        padding: 3px 30px 2px 10px;
        color: #fff;
        background-color: rgba(25, 25, 25, 0.2)
    }

    .progress > .progress-completed {
        position: absolute;
        right: 0;
        color: #777;
        font-weight: 800;
        padding: 3px 10px 2px
    }

    .breadcrumb {
        color: #434a54;
        background-color: #e6e9ed;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .breadcrumb > .active {
        color: #434a54;
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase
    }

    .breadcrumb > li {
        margin-bottom: 0;
        color: #434a54;
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase
    }

    .breadcrumb > li + li:before {
        color: #434a54
    }

    .pagination {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .pagination > li > a, .pagination > li > span {
        color: #434a54;
        background-color: #fff;
        border: none
    }

    .pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus {
        color: #fff;
        background-color: #ccd1d9;
        border: none
    }

    .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus, .pagination li span, .pagination li span:hover {
        color: #fff;
        background-color: #3F3B55;
        border-color: #3F3B55
    }

    .pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {
        color: #e6e9ed;
        background-color: #fff;
        border-color: #ccd1d9
    }

    .pagination > li:first-child > a, .pagination > li:first-child > span {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0
    }

    .pagination > li:last-child > a, .pagination > li:last-child > span {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .pager li > a, .pager li > span {
        color: #fff;
        background-color: #3F3B55;
        border: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .pager li > a:hover, .pager li > a:focus {
        background-color: #a0d468;
        border-color: #a0d468
    }

    .pager .disabled > a, .pager .disabled > a:hover, .pager .disabled > a:focus, .pager .disabled > span {
        color: #e6e9ed;
        background-color: #fff;
        border-color: #e6e9ed
    }

    .input-group-btn .btn + .btn {
        border-color: #96a0ad;
        border-style: solid;
        border-width: 1px
    }

    .input-group-btn .btn + .btn.btn-default {
        border-color: #ededed
    }

    .input-group-btn .btn + .btn.btn-primary {
        border-color: #269ecb
    }

    .input-group-btn .btn + .btn.btn-info {
        border-color: #2fa084
    }

    .input-group-btn .btn + .btn.btn-success {
        border-color: #7ab03f
    }

    .input-group-btn .btn + .btn.btn-warning {
        border-color: #f4af20
    }

    .input-group-btn .btn + .btn.btn-danger {
        border-color: #d1293a
    }

    .input-group-addon {
        color: #fff;
        background-color: #aab2bd;
        border-color: #96a0ad
    }

    .input-group-addon .radio, .input-group-addon .checkbox {
        margin: -3px 0 -4px !important
    }

    .search-only {
        position: relative
    }

    .search-only .search-icon {
        position: absolute;
        top: 2px;
        left: 8.5px;
        z-index: 20;
        width: 30px;
        font-size: 17px;
        line-height: 30px;
        color: #e6e9ed;
        text-align: center
    }

    .search-only .form-control:last-child {
        padding-left: 40px
    }

    .has-success .help-block, .has-success .control-label, .has-success .radio, .has-success .checkbox, .has-success .radio-inline, .has-success .checkbox-inline {
        color: #8cc152
    }

    .has-success .form-control {
        border-color: #8cc152;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .has-success .form-control:focus {
        border-color: #8cc152;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .has-success .input-group-addon {
        background-color: #8cc152;
        border-color: #8cc152
    }

    .has-success .form-control-feedback {
        color: #8cc152
    }

    .has-warning .help-block, .has-warning .control-label, .has-warning .radio, .has-warning .checkbox, .has-warning .radio-inline, .has-warning .checkbox-inline {
        color: #f6bb42
    }

    .has-warning .form-control {
        border-color: #f6bb42;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .has-warning .form-control:focus {
        border-color: #f6bb42;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .has-warning .input-group-addon {
        background-color: #f6bb42;
        border-color: #f6bb42
    }

    .has-warning .form-control-feedback {
        color: #f6bb42
    }

    .has-error .help-block, .has-error .control-label, .has-error .radio, .has-error .checkbox, .has-error .radio-inline, .has-error .checkbox-inline {
        color: #da4453
    }

    .has-error .form-control {
        border-color: #da4453;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .has-error .form-control:focus {
        border-color: #da4453;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .has-error .input-group-addon {
        background-color: #da4453;
        border-color: #da4453
    }

    .has-error .form-control-feedback {
        color: #da4453
    }

    .alert {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .alert strong {
        margin-right: 10px
    }

    .alert-dismissable .close {
        color: #000;
        top: 7px;
        right: -10px
    }

    .alert-info {
        background-color: #7cd1ef;
        border: #4fc1e9
    }

    .alert-warning {
        background-color: #ffdd87;
        border: #ffce54
    }

    .alert-danger {
        background-color: #f2838f;
        border: #ed5565
    }

    .alert-success {
        background-color: #b9df90;
        border: #a0d468
    }

    .alert .alert-link {
        text-decoration: underline;
        cursor: pointer;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=65);
        -khtml-opacity: .65;
        -moz-opacity: .65;
        opacity: .65
    }

    .alert .alert-link:hover, .alert .alert-link:focus {
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=45);
        -khtml-opacity: .45;
        -moz-opacity: .5;
        opacity: .45
    }

    .alert .btn-link, .alert .btn-link:hover, .alert .btn-link:focus {
        color: #000;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=65);
        -khtml-opacity: .65;
        -moz-opacity: .65;
        opacity: .65
    }

    .alert .btn-link:focus, .alert .btn-link:hover {
        text-decoration: none;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
        -khtml-opacity: .4;
        -moz-opacity: .4;
        opacity: .4
    }

    .nav-tabs {
        border-bottom: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .nav-tabs > li {
        margin-bottom: 10px;
        background-color: #3F3B55;
        border: none
    }

    .nav-tabs > li:first-child {
        border-left: none
    }

    .nav-tabs > li > a {
        margin-right: 0;
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        border: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .nav-tabs > li:first-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .nav-tabs > li > a:focus, .nav-tabs > li > a:hover {
        background-color: #f5f7fa;
        border: none
    }

    .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
        background-color: #eee !important;
        border: none
    }

    .nav-tabs.nav-justified > li > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .nav-tabs.nav-justified > li:first-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .nav-tabs.nav-justified > li:last-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus {
        border: none
    }

    @media (min-width: 768px) {
        .nav-tabs.nav-justified > li > a {
            border-bottom: none;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            border-radius: 0
        }

        .nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus {
            border-bottom: none
        }
    }

    .tab-content {
        padding: 30px
    }

    .tabs-below .nav-tabs > li:first-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .tabs-below .nav-tabs.nav-justified > li:last-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .tabs-left .nav-tabs > li, .tabs-right .nav-tabs > li {
        float: none;
        border: none
    }

    .tabs-left .nav-tabs > li:first-child, .tabs-right .nav-tabs > li:first-child {
        border-top: none
    }

    .tabs-left .nav-tabs > li > a, .tabs-right .nav-tabs > li > a {
        min-width: 74px;
        margin-right: 0
    }

    .tabs-left .nav-tabs {
        float: left;
        margin-right: 19px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .tabs-left .nav-tabs > li:first-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .tabs-left .nav-tabs > li:last-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .tabs-right .nav-tabs {
        float: right;
        margin-left: 19px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .tabs-right .nav-tabs > li:first-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .tabs-right .nav-tabs > li:last-child > a {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .list-group-item {
        border-left: none;
        border-right: none;
        padding: 30px
    }

    .list-group-item:first-child, .list-group-item:last-child {
        border-top: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .list-group-item:last-child {
        border-bottom: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        margin: 1px 0
    }

    .list-group-item-heading {
        color: #434a54
    }

    a.list-group-item {
        color: #434a54
    }

    a.list-group-item .list-group-item-heading {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase
    }

    a.list-group-item:hover, a.list-group-item:focus {
        background-color: #e6e9ed
    }

    a.list-group-item.active, a.list-group-item.active:hover, a.list-group-item.active:focus {
        background-color: #4fc1e9;
        border-color: #4fc1e9
    }

    a.list-group-item.active .list-group-item-text, a.list-group-item.active:hover .list-group-item-text, a.list-group-item.active:focus .list-group-item-text {
        color: #fff
    }

    .list-group-item-primary {
        color: #22b1e3;
        background-color: #4fc1e9;
        border-color: #3bafda transparent transparent
    }

    .list-group-item-primary:first-child {
        border-color: transparent
    }

    a.list-group-item-primary {
        color: #126d8d
    }

    a.list-group-item-primary:hover, a.list-group-item-primary:focus {
        color: #fff;
        background-color: #3bafda
    }

    a.list-group-item-primary.active, a.list-group-item-primary:hover, a.list-group-item-primary:focus {
        background-color: #3bafda;
        border-color: #4fc1e9 transparent transparent
    }

    .list-group-item-success {
        color: #87c940;
        background-color: #a0d468;
        border-color: #8cc152 transparent transparent
    }

    .list-group-item-success:first-child {
        border-color: transparent
    }

    a.list-group-item-success {
        color: #537f24
    }

    a.list-group-item-success:hover, a.list-group-item-success:focus {
        color: #fff;
        background-color: #8cc152
    }

    a.list-group-item-success.active, a.list-group-item-success:hover, a.list-group-item-success:focus {
        background-color: #8cc152;
        border-color: #a0d468 transparent transparent
    }

    .list-group-item-warning {
        color: #ffbf21;
        background-color: #ffce54;
        border-color: #f6bb42 transparent transparent
    }

    .list-group-item-warning:first-child {
        border-color: transparent
    }

    a.list-group-item-warning {
        color: #876000
    }

    a.list-group-item-warning:hover, a.list-group-item-warning:focus {
        color: #fff;
        background-color: #f6bb42
    }

    a.list-group-item-warning.active, a.list-group-item-warning:hover, a.list-group-item-warning:focus {
        background-color: #f6bb42;
        border-color: #ffce54 transparent transparent
    }

    .list-group-item-info {
        color: #2fb593;
        background-color: #48cfad;
        border-color: #37bc9b transparent transparent
    }

    .list-group-item-info:first-child {
        border-color: transparent
    }

    a.list-group-item-info {
        color: #1a6451
    }

    a.list-group-item-info:hover, a.list-group-item-info:focus {
        color: #fff;
        background-color: #37bc9b
    }

    a.list-group-item-info.active, a.list-group-item-info:hover, a.list-group-item-info:focus {
        background-color: #37bc9b;
        border-color: #48cfad transparent transparent
    }

    .list-group-item-danger {
        color: #e8273b;
        background-color: #ed5565;
        border-color: #da4453 transparent transparent
    }

    .list-group-item-danger:first-child {
        border-color: transparent
    }

    a.list-group-item-danger {
        color: #99101f
    }

    a.list-group-item-danger:hover, a.list-group-item-danger:focus {
        color: #fff;
        background-color: #da4453
    }

    a.list-group-item-danger.active, a.list-group-item-danger:hover, a.list-group-item-danger:focus {
        background-color: #da4453;
        border-color: #ed5565 transparent transparent
    }

    .modal-content {
        color: #434a54;
        border: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .modallogo {
        height: 88px;
        background-color: #00acdd;
        float: left;
        text-align: center;
        line-height: 80px
    }

    .modallogo img {
        height: 78%;
        height: calc(100% - 20px);
        margin-left: 40px;
        vertical-align: middle
    }

    @media (max-width: 768px) {
        .modallogo {
            width: 50%;
            padding-left: 0
        }

        .modaltagline {
            display: none
        }
    }

    .modaltagline {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        float: left;
        height: 84px;
        padding-top: 28px;
        padding-left: 40px
    }

    .modaltagline h3, .modaltagline h3 a {
        color: #fff;
        font-family: 'PressStart2P';
        font-size: 12px;
        text-decoration: none
    }

    .modal-header {
        border-bottom: none;
        padding: 30px
    }

    .modal-body {
        padding: 0 30px;
        color: #777
    }

    .modal-footer {
        border-top: none;
        padding: 30px
    }

    .well {
        padding: 40px;
        color: #434a54;
        background-color: #fff;
        border: none;
        background-color: #f1f1f1;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .well blockquote {
        border-color: #ccd1d9
    }

    .well-lg {
        padding: 20px
    }

    .well-sm {
        padding: 5px
    }

    .panel {
        background-color: #fff;
        border: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .panel .list-group {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .panel .list-group-item:first-child {
        border-top: 1px solid #e6e9ed
    }

    .panel-heading {
        padding: 30px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        border: none
    }

    .panel-body {
        padding: 30px
    }

    .panel-title {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-weight: 700;
        text-transform: uppercase
    }

    .panel-default > .panel-heading {
        color: #fff;
        background-color: #3F3B55
    }

    .panel-primary > .panel-heading {
        color: #fff;
        background-color: #3bafda
    }

    .panel-success > .panel-heading {
        color: #fff;
        background-color: #8cc152
    }

    .panel-info > .panel-heading {
        color: #fff;
        background-color: #37bc9b
    }

    .panel-warning > .panel-heading {
        color: #fff;
        background-color: #f6bb42
    }

    .panel-danger > .panel-heading {
        color: #fff;
        background-color: #da4453
    }

    .panel-primary > .panel-heading > .panel-title, .panel-success > .panel-heading > .panel-title, .panel-info > .panel-heading > .panel-title, .panel-warning > .panel-heading > .panel-title, .panel-danger > .panel-heading > .panel-title {
        color: #fff
    }

    .panel > .list-group:first-child .list-group-item:first-child, .panel > .table:first-child, .panel > .table-responsive:first-child > .table:first-child {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel > .list-group:last-child .list-group-item:last-child {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel > .table:last-child, .panel > .table-responsive:last-child > .table:last-child {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel-group .panel {
        background-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .panel-group .panel-heading + .panel-collapse .panel-body {
        padding: 30px;
        border-top: none
    }

    .panel-group .panel-title a {
        display: block;
        padding: 10px 0;
        text-decoration: none
    }

    .panel-group-lists .panel {
        background-color: #fff;
        border-bottom: 1px solid #e6e9ed;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .panel-group-lists .panel-heading + .panel-collapse .panel-body {
        padding: 15px;
        border-top-color: #e6e9ed
    }

    .panel-group-lists .panel-title a {
        padding: 10px 15px;
        color: #434a54
    }

    .panel-group-lists .panel-title a:hover, .panel-group-lists .panel-title a:focus, .panel-group-lists .panel-title a:active {
        color: #aab2bd
    }

    .dropdown-menu {
        background-color: #434a54;
        border: none;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none
    }

    .dropdown-menu .dropdown-header {
        padding: 5px 20px;
        font-size: 14px;
        font-weight: 700;
        color: #aab2bd
    }

    .dropdown-menu li a {
        padding: 5px 20px;
        color: #fff
    }

    .dropdown-menu li a:hover, .dropdown-menu li a:focus, .dropdown-menu .active a, .dropdown-menu .active a:hover, .dropdown-menu .active a:focus {
        color: #fff;
        background-color: #656d78;
        outline: none
    }

    .dropdown-menu .disabled a, .dropdown-menu .disabled a:hover, .dropdown-menu .disabled a:focus {
        color: #656d78;
        cursor: default
    }

    .dropdown-menu .divider {
        background-color: #656d78;
        border-bottom: none
    }

    .dropup .dropdown-menu {
        margin-bottom: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .dropdown-submenu {
        position: relative
    }

    .dropdown-submenu .dropdown-menu {
        top: 0;
        left: 100%;
        margin-top: -6px;
        margin-left: -1px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .dropdown-submenu:hover .dropdown-menu {
        display: block
    }

    .dropup .dropdown-submenu .dropdown-menu {
        top: auto;
        bottom: 0;
        margin-top: 0;
        margin-bottom: -2px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .dropdown-submenu > a:after {
        display: block;
        float: right;
        width: 0;
        height: 0;
        margin-top: 5px;
        margin-right: -10px;
        content: " ";
        border-color: transparent;
        border-style: solid;
        border-width: 5px 0 5px 5px;
        border-left-color: #fff
    }

    .dropdown-default .dropdown-submenu > a:after {
        border-left-color: #434a54
    }

    .dropdown-submenu:hover a:after {
        border-left-color: #fff
    }

    .dropdown-submenu.pull-left {
        float: none
    }

    .dropdown-submenu.pull-left .dropdown-menu {
        left: -100%;
        margin-left: 10px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0
    }

    .white {
        background-color: #fff;
        border-color: #fff !important
    }

    .black {
        background-color: #000;
        border-color: #000;
        border-width: 10px;
        border-top-width: 0;
        border-bottom-width: 20px;
        border-style: solid
    }

    .blue-lt {
        background-color: #5D9CEC;
        border-color: #5D9CEC !important
    }

    .blue-dk {
        background-color: #4A89DC;
        border-color: #4A89DC !important
    }

    .aqua-lt {
        background-color: #4FC1E9;
        border-color: #4FC1E9 !important
    }

    .aqua-dk {
        background-color: #3BAFDA;
        border-color: #3BAFDA !important
    }

    .mint-lt {
        background-color: #48CFAD;
        border-color: #48CFAD !important
    }

    .mint-dk {
        background-color: #37BC9B;
        border-color: #37BC9B !important
    }

    .green-lt {
        background-color: #A0D468;
        border-color: #A0D468 !important
    }

    .green-dk {
        background-color: #8CC152;
        border-color: #8CC152 !important
    }

    .sunflower-lt {
        background-color: #FFCE54;
        border-color: #FFCE54 !important
    }

    .sunflower-dk {
        background-color: #F6BB42;
        border-color: #F6BB42 !important
    }

    .red-lt {
        background-color: #ED6D58;
        border-color: #ED6D58 !important
    }

    #three.red-lt {
        background-color: #ee1c28;
        border-color: #ee1c28
    }

    #cform {
        background-color: #652d91;
        border-color: #652d91 !important
    }

    .red-dk {
        background-color: #E9573F;
        border-color: #E9573F !important
    }

    .red-lt h3, .red-dk h3, .red-lt p, .red-dk p, .red-lt span, .red-dk span {
        color: #fff
    }

    .red-lt span.number, .red-lt span.number {
        color: #F08978
    }

    .grapefruit-lt {
        background-color: #ED5565;
        border-color: #ED5565 !important
    }

    .grapefruit-dk {
        background-color: #DA4453;
        border-color: #DA4453 !important
    }

    .lavender-lt {
        background-color: #AC92EC;
        border-color: #AC92EC !important
    }

    .lavender-dk {
        background-color: #967ADC;
        border-color: #967ADC !important
    }

    .rose-lt {
        background-color: #EC87C0;
        border-color: #EC87C0 !important
    }

    .rose-dk {
        background-color: #D770AD;
        border-color: #D770AD !important
    }

    .light-grey-lt {
        background-color: #F3F3F3;
        border-color: #F3F3F3 !important
    }

    .light-grey-dk {
        background-color: #E6E9ED;
        border-color: #E6E9ED !important
    }

    .dark-grey-lt {
        background-color: #555;
        border-color: #555 !important
    }

    .dark-grey-dk {
        background-color: #333;
        border-color: #333 !important
    }

    .dark-grey-lt p, .dark-grey-dk p, .dark-grey-lt h4, .dark-grey-dk h4, .dark-grey-lt span, .dark-grey-dk span {
        color: #999
    }

    .navy-lt {
        background-color: #4b4667;
        border-color: #4b4667 !important
    }

    .navy-dk {
        background-color: #3f3b55;
        border-color: #3f3b55 !important
    }

    .electric-lt {
        background-color: #3FD8DF;
        border-color: #3FD8DF !important
    }

    .electric-dk {
        background-color: #37c3c9;
        border-color: #37c3c9 !important
    }

    .turquoise-lt {
        background-color: #E2F9FF;
        border-color: #E2F9FF !important
    }

    .turquoise-dk {
        background-color: #D0EDF5;
        border-color: #D0EDF5 !important
    }

    .orange-lt {
        background-color: #F8991C;
        border-color: #F8991C !important
    }

    .orange-dk {
        background-color: #e19229;
        border-color: #e19229 !important
    }

    .purple-lt {
        background-color: #B15FDC;
        border-color: #B15FDC !important
    }

    .purple-dk {
        background-color: #994ec0;
        border-color: #994ec0 !important
    }

    .pink-lt {
        background-color: #E52D7B;
        border-color: #E52D7B !important
    }

    .pink-dk {
        background-color: #CD246C;
        border-color: #CD246C !important
    }

    .beige-lt {
        background-color: #FFFED8;
        border-color: #FFFED8 !important
    }

    .beige-dk {
        background-color: #f3f2ca;
        border-color: #f3f2ca !important
    }

    .tan-lt {
        background-color: #AE895D;
        border-color: #AE895D !important
    }

    .tan-dk {
        background-color: #997850;
        border-color: #997850 !important
    }

    .gold-lt {
        background-color: #AA9A66;
        border-color: #AA9A66 !important
    }

    .gold-dk {
        background-color: #968859;
        border-color: #968859 !important
    }

    #home #portfolio-item {
        padding-bottom: 0
    }

    #home #portfolio-item .col-xs-12 {
        padding: 0 80px
    }

    #portfolio-item h3.text-left {
        margin-bottom: 0
    }

    @media ( max-width: 767px ) {
        #home #portfolio-item .col-xs-12 {
            padding: 0 30px
        }
    }

    @media ( max-width: 1200px ) {
        #projects.menu .projects {
            width: 25%
        }
    }

    @media ( max-width: 1000px ) {
        #projects.menu .projects {
            width: 33.33333333%
        }
    }

    @media ( max-width: 768px ) {
        #projects.menu .projects {
            width: 50%
        }

        #wrapper .gallery .gallery-item {
            width: 33.33333333%
        }

        #home #portfolio-item .col-sm-3 {
            width: 50%;
            float: left
        }

        #start address {
            display: none
        }
    }

    @media ( max-width: 400px ) {
        #projects.menu .projects, #three .col-md-3.col-xs-6 {
            width: 100%
        }

        #wrapper .gallery .gallery-item {
            width: 50%
        }

        #portfolio-item .titlemeta {
            padding: 0 0 20px 20px
        }
    }

    .explore.modallogo {
        height: 65px;
        line-height: 65px
    }

    #bkgimg h1 {
        color: #fff
    }

    #bkgimg hr.title {
        border-color: #fff;
        color: rgba(0, 0, 0, 0);
        background-color: rgba(0, 0, 0, 0)
    }

    #bkgimg hr.title:before, #bkgimg hr.title:after {
        border-top-color: #FFF
    }

    #developers {
        width: 116px;
        height: 22px;
        background: url(http://gameinn.com.ua/wp-content/themes/game/img/rlogo.png) no-repeat 50%;
        position: relative;
        margin: 0 auto;
        background-size: auto 22px
    }

    #wrapper .gallery.gallery-size-thumbnail {
        margin: 0 -5px
    }

    #wrapper .gallery .gallery-item {
        margin: 0 0 10px;
        outline: 0;
        overflow: hidden
    }

    #wrapper .gallery .gallery-item .gallery-icon {
        height: 100%;
        margin: 0 5px;
        background-color: #000
    }

    #wrapper .gallery .gallery-item .gallery-icon a {
        display: block;
        height: 100%
    }

    #wrapper .gallery .gallery-item .gallery-icon a:hover img {
        opacity: .4
    }

    #wrapper .gallery .gallery-item img {
        border: 0;
        display: inline;
        vertical-align: middle;
        -webkit-transition: opacity .6s ease-in-out;
        -moz-transition: opacity .6s ease-in-out;
        -ms-transition: opacity .6s ease-in-out;
        -o-transition: opacity .6s ease-in-out;
        transition: opacity .6s ease-in-out
    }

    #wrapper .gallery br {
        display: none
    }

    #wrapper .gallery br:last-child {
        display: block
    }

    #popaprooms {
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
        display: none;
        opacity: 0;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: left;
        width: 100%;
        padding: 88px 0 0 80px
    }

    #popaprooms > div {
        min-height: 100%;
        background: #19191c;
        padding: 40px 40px 80px
    }

    #headerp {
        height: 88px;
        overflow: hidden;
        margin: 0;
        padding: 0
    }

    #headerp h2 {
        left: 10px;
        height: 88px;
        margin: 0;
        line-height: 44px
    }

    #textroom {
        margin: 10px
    }

    #headerp h2, #textroom > div {
        opacity: 0;
        display: none
    }

    #headerp h2.display, #textroom > div.display {
        opacity: 1;
        display: inherit
    }

    #upsite {
        position: fixed;
        right: 40px;
        bottom: 70px;
        width: 60px;
        height: 60px;
        background: none;
        border: none;
        z-index: 8;
        display: none
    }

    #upsite > a.scrollto {
        top: 0;
        left: 0;
        margin-left: 0
    }

    #upsite > a.scrollto .icon-arrow-up2 {
        margin-left: -10px;
        line-height: 60px
    }

    .carousel.slide.container {
        float: left;
        margin: 0 10px 10px 0;
        max-width: 700px;
        width: 50%
    }

    #block-r {
        position: relative
    }

    #block-r .hall {
        width: 100%;
        height: auto
    }

    #block-r .icon {
        position: absolute;
        padding: 0;
        border-radius: 50%;
        width: 2.066%;
        text-align: center;
        box-shadow: 0 25px 7px rgba(0, 0, 0, .3);
        min-width: 26px;
        opacity: 0;
        display: none
    }

    #block-r.display .icon {
        opacity: 1;
        display: block
    }

    #dicons, #dtext {
        position: absolute;
        top: 20px;
        max-width: 210px;
        text-align: center
    }

    #dicons {
        right: 20px
    }

    #dtext {
        left: 20px
    }

    #dicons input {
        border: 2px solid #000101;
        color: #000101;
        text-transform: uppercase;
        background-color: #fff;
        font-size: .8em;
        padding: 10px 30px;
        line-height: .8em
    }

    #dtext {
        margin: 0;
        font-size: 16px;
        padding: 10px 10px 0;
        line-height: 16px
    }

    #block-r .icon > img.h {
        display: block;
        width: 100%;
        height: auto;
        -webkit-transition: all .2s ease-out 0;
        -moz-transition: all .2s ease-out 0;
        -o-transition: all .2s ease-out 0;
        transition: all .2s ease-out 0
    }

    #block-r .icon > img.hover {
        display: block;
        opacity: 0;
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translateY(-50%);
        -o-transform: translate(-50%, -50%);
        -webkit-transition: all .2s ease-out 0;
        -moz-transition: all .2s ease-out 0;
        -o-transition: all .2s ease-out 0;
        transition: all .2s ease-out 0
    }

    #block-r .icon span, #mblock-r .micon span {
        width: 100%;
        position: absolute;
        display: inline-block;
        text-align: center;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        color: #fff;
        font: bold .6em Arial, sans-serif;
        text-shadow: 1px 1px 1px #005770
    }

    #mblock-r .micon span {
        font-size: 1.2em
    }

    #n1 {
        bottom: 35%;
        right: 30%;
        z-index: 22
    }

    #n2 {
        bottom: 32.9%;
        right: 32.7%;
        z-index: 21
    }

    #n3 {
        bottom: 30.6%;
        right: 35.44%;
        z-index: 20
    }

    #n4 {
        bottom: 41%;
        right: 30.8%;
        z-index: 19
    }

    #n5 {
        bottom: 44.3%;
        right: 26.6%;
        z-index: 18
    }

    #n7 {
        bottom: 48.4%;
        right: 26.8%;
        z-index: 17
    }

    #n8 {
        bottom: 52.8%;
        right: 31.4%;
        z-index: 16
    }

    #n9 {
        bottom: 57%;
        right: 36.2%;
        z-index: 12
    }

    #n10 {
        bottom: 59.8%;
        right: 40%;
        z-index: 14
    }

    #n11 {
        bottom: 41.5%;
        right: 34.9%;
        z-index: 15
    }

    #n12 {
        bottom: 48.8%;
        right: 35.6%;
        z-index: 13
    }

    #n14 {
        bottom: 48.2%;
        right: 41.8%;
        z-index: 10
    }

    #n15 {
        bottom: 42%;
        right: 42%;
        z-index: 11
    }

    #n16 {
        bottom: 34%;
        right: 52%;
        z-index: 9
    }

    #n17 {
        bottom: 34%;
        right: 55%;
        z-index: 8
    }

    #n18 {
        bottom: 34%;
        right: 58%;
        z-index: 7
    }

    #n19 {
        bottom: 38%;
        right: 53.5%;
        z-index: 6
    }

    #n20 {
        bottom: 38%;
        right: 56.5%;
        z-index: 5
    }

    #n21 {
        bottom: 60%;
        right: 59.8%;
        z-index: 4
    }

    #n22 {
        bottom: 65%;
        right: 53.4%;
        z-index: 3
    }

    #n23 {
        bottom: 70.2%;
        right: 47.2%;
        z-index: 2
    }

    #block-r .icon.style-1 {
        background-color: #03aae1
    }

    #block-r .icon.style-2 {
        background-color: #e6007e
    }

    #block-r .icon.style-3 {
        background-color: #9aca3c
    }

    #block-p {
        display: none;
        opacity: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        top: 0;
        left: 0;
        z-index: 1051;
        padding: 40px 80px;
        color: #fff
    }

    #block-p > div {
        background-color: rgba(32, 32, 32, 1);
        height: 100%;
        overflow-y: auto;
        position: relative
    }

    #closep {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 .5em;
        background-color: #777;
        font: .5em/20px Furore, sans-serif;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 300;
        letter-spacing: 1px
    }

    #block-p .block-p {
        width: 50%;
        float: left;
        padding: 0 20px;
        display: none
    }

    #block-p .block-p p {
        font-size: .8em;
        margin-bottom: 0
    }

    #block-p .block-p p span {
        color: #652d91;
        font-size: 1.2em;
        font-weight: 900;
        vertical-align: middle
    }

    #block-p .block-p p span.price {
        color: #d20e8c;
        font-size: 1.4em;
        font-weight: 900;
        white-space: pre-line
    }

    #closep + h3 {
        margin: 0 80px 0 20px
    }

    #form-b {
        width: 50%;
        float: right;
        padding: 0 20px;
        form-size: .8em
    }

    #form-b .wpcf7 {
        margin-top: 20px
    }

    #form-b input[type="text"], #form-b input[type="tel"], #form-b input[type="date"], #form-b input[type="email"], #form-b select, #form-b textarea {
        background-color: #202020;
        border-radius: 0;
        border: 0;
        border-bottom: 1px solid #777
    }

    #form-b textarea {
        max-height: 100px
    }

    #form-b label {
        font-size: .8em;
        font-weight: 300
    }

    #form-b .controls {
        font-size: .8em
    }

    #form-b .controls label {
        font-size: 1em
    }

    .form-control.mini {
        max-width: 25%;
        display: inline-block
    }

    .form-control:focus {
        box-shadow: initial;
        -webkit-box-shadow: initial
    }

    #form-b .wpcf7-response-output.wpcf7-display-none {
        clear: both;
        position: inherit;
        color: #0e8716
    }

    #form-b .wpcf7-response-output.wpcf7-display-none.wpcf7-mail-sent-ok, #cform .wpcf7-response-output.wpcf7-display-none.wpcf7-mail-sent-ok {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(32, 32, 32, 1);
        z-index: 10000;
        padding: 40px 20px;
        font-family: Furore, 'Open Sans', Helvetica, Arial, sans-serif;
        font-size: 26px;
        line-height: 28px;
        color: #fff;
        height: 100%
    }

    #cform .wpcf7-response-output.wpcf7-display-none.wpcf7-mail-sent-ok {
        left: 80px
    }

    #form-b .wpcf7-response-output .link, #cform .wpcf7-response-output .link {
        display: none
    }

    .link a {
        background-color: #4fc1e9;
        border-color: #4fc1e9;
        color: #fff;
        font-size: 20px;
        line-height: 28px;
        padding: 6px 12px;
        display: inline-block;
        vertical-align: middle;
        margin: 10px 10px 10px 0
    }

    .link a:hover {
        text-decoration: none
    }

    #form-b .wpcf7-response-output.wpcf7-mail-sent-ok .link, #cform .wpcf7-response-output.wpcf7-mail-sent-ok .link {
        display: block
    }

    #form-b input[type="submit"] {
        margin: 10px 0 20px
    }

    .control-group span.wpcf7-form-control-wrap {
        width: 100%
    }

    label[for="comment"] {
        display: block
    }

    #mblock-r {
        display: none
    }

    #mblock-r:after {
        display: block;
        clear: both
    }

    #mblock-r .micon {
        display: block;
        background-color: #388ED2;
        float: left;
        position: relative;
        -webkit-transition: all .2s ease-out 0;
        -moz-transition: all .2s ease-out 0;
        -o-transition: all .2s ease-out 0;
        transition: all .2s ease-out 0;
        cursor: pointer
    }

    #mblock-r .micon:hover {
        background-color: #d20e8c
    }

    #mblock-r img.h {
        opacity: 0;
        width: 100%;
        height: auto
    }

    .slides, .slides li {
        overflow: hidden
    }

    #blogslider .slides li, #blogslider-two .slides li {
        float: left
    }

    #blogslider .slides li.show, #blogslider-two .slides li.show {
        position: relative;
        opacity: 1;
        top: inherit;
        left: inherit;
        z-index: 5
    }

    #date {
        cursor: pointer
    }

    #clients .col-md-3.col-sm-4.col-xs-6 {
        float: none;
        display: inline-block;
        vertical-align: middle;
        margin-left: -6px
    }

    #clients .col-md-3.col-sm-4.col-xs-6:last-child {
        margin-left: 0
    }

    @media (max-width: 1700px) and (max-width: 1600px) {
        #projects.menu .projects .label-text h3 {
            font-size: 22px
        }
    }

    @media (max-width: 1600px) and (min-width: 1400px) {
        #projects.menu .projects .label-text h3 {
            font-size: 22px
        }
    }

    @media (min-width: 1024px) {
        #yarlik {
            right: -85px
        }
    }

    @media (min-width: 768px) {
        #headerp h2 {
            line-height: 88px
        }

        #dicons {
            top: 15%;
            right: 15%
        }

        #dtext {
            top: 15%;
            left: 5%
        }

        #block-p .block-p p {
            font-size: 1.1em;
            line-height: 1.4em
        }

        #form-b .controls label {
            font-size: 1.4em;
            line-height: 1.6em
        }

        #form-b .form-control {
            font-size: 1em;
            line-height: 1em;
            height: 40px
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        #dicons {
            right: 6%
        }

        #dtext {
            right: 6%
        }
    }

    @media (min-width: 768px) and (max-width: 998px) {
        #dicons {
            top: 10%;
            right: 0
        }

        #dtext {
            top: 10%;
            right: 0
        }
    }

    @media (max-width: 900px) {
        .carousel.slide.container {
            float: none;
            margin: 0 auto;
            width: 100%
        }
    }

    @media (max-width: 1600px) and (min-width: 1200px) {
        #projects.menu .projects {
            width: 25%
        }
    }

    @media (max-width: 1100px) and (min-width: 768px) {
        .form-control.mini {
            max-width: 20%
        }
    }

    @media (max-width: 1200px) {
        #projects.menu .projects:nth-child(4n+1) {
            clear: initial
        }

        #projects.menu .projects:nth-child(3n+1) {
            clear: both
        }
    }

    @media (max-width: 998px) and (min-width: 768px) {
        .modallogo img {
            margin-left: 20px
        }

        .modaltagline {
            padding-left: 20px
        }

        .modaltagline h3, .modaltagline h3 a {
            font-size: 9px
        }
    }

    @media (max-width: 768px) {
        #block-p .block-p, #form-b {
            width: 100%;
            float: none
        }

        #yarlik {
            top: 160px;
            font-size: 24px
        }
    }

    @media (max-width: 880px) and (min-width: 768px) {
        .modaltagline h3, .modaltagline h3 a {
            font-size: 8px
        }
    }

    @media (max-width: 950px) {
        #projects.menu .projects:nth-child(4n+1) {
            clear: initial
        }

        #projects.menu .projects:nth-child(3n+1) {
            clear: initial
        }

        #projects.menu .projects:nth-child(2n+1) {
            clear: both
        }
    }

    @media (max-width: 768px) {
        .explore.modallogo {
            width: 50%
        }

        #close {
            height: 65px;
            line-height: 65px
        }

        #popaprooms {
            padding: 65px 0 0
        }

        #popaprooms > div {
            padding: 20px 20px 40px
        }

        #menumodal .modal-body {
            top: 65px
        }

        #block-p {
            padding: 75px 10px 10px
        }
    }

    @media (min-width: 768px) {
        #block-r .icon {
            cursor: pointer
        }

        #block-r .icon:hover > img.h {
            opacity: 0;
            width: 120%;
            max-width: 120%
        }

        #block-r .icon:hover > img.hover {
            opacity: 1;
            width: 120%;
            max-width: 120%
        }
    }

    @media (max-width: 1200px) and (min-width: 950px) {
        #projects.menu .projects {
            width: 33.33333333%
        }
    }

    @media (max-width: 950px) and (min-width: 768px) {
        #projects.menu .projects {
            width: 50%
        }
    }

    @media (min-width: 768px) and (max-width: 1020px) {
        #portfolio-item .titlemeta {
            padding: 0 20px 20px
        }
    }

    @media (min-width: 768px) and (max-width: 894px) {
        #portfolio-item .titlemeta h3 {
            font-size: 18px;
            line-height: 24px
        }

        #dicons input {
            font-size: .6em
        }
    }

    @media (max-width: 768px) {
        #headc {
            height: 65px
        }

        #dicons, #dtext {
            position: inherit;
            top: inherit;
            right: inherit;
            left: inherit;
            max-width: 100%
        }

        #dicons input {
            font-size: .4em;
            display: inline-block
        }

        .articles .boxthumb {
            width: 50%
        }
    }

    @media (min-width: 692px) {
        #cform .wpcf7-response-output.wpcf7-display-none.wpcf7-mail-sent-ok {
            left: 0
        }
    }

    @media (max-width: 600px) {
        #portfolio-item .titlemeta {
            padding: 0 20px 20px
        }

        #block-r {
            width: 170%;
            margin-left: -35%
        }

        #block-r .icon {
            min-width: 26px;
            cursor: default
        }

        #mblock-r {
            display: block
        }

        .row.margin {
            margin: 0
        }
    }

    @media (max-width: 600px) and (min-width: 500px) {
        #mblock-r .micon {
            width: 16.66666667%
        }
    }

    @media (max-width: 500px) and (min-width: 400px) {
        #mblock-r .micon {
            width: 20%
        }
    }

    @media (max-width: 600px) and (min-width: 400px) {
        #projects.menu .projects {
            width: 50%
        }
    }

    @media (min-width: 500px) {
        #blogslider .slides li.show + li, #blogslider-two .slides li.show + li {
            position: relative;
            opacity: 1;
            top: inherit;
            left: inherit
        }

        #blogslider .slides li, #blogslider-two .slides li {
            width: 50%;
            float: left
        }
    }

    @media (max-width: 500px) {
        body {
            font-size: 19px;
            line-height: 28px
        }

        #portfolio-item .titlemeta h3 {
            font-size: 20px;
            line-height: 26px
        }

        .slides .col-sm-12.col-md-12 {
            padding-right: 0;
            padding-left: 0
        }

        .padding {
            padding: 30px 0
        }

        p, p a {
            font-size: 18px;
            line-height: 29px
        }

        h1, .h1, .articles h1 a {
            font-size: 29px
        }

        h2, .h2 {
            font-size: 24px
        }

        h3 {
            font-size: 22px;
            line-height: 29px
        }

        h4, .h4 {
            font-size: 14px
        }

        hr.mini {
            margin-top: 20px;
            margin-bottom: 16px
        }

        .textpadding {
            padding: 64px 25px
        }

        #blogfeed, #blogfeed-two {
            padding: 0 0 64px
        }

        #blogfeed .modtitle, #blogfeed-two .modtitle {
            padding: 48px 25px 0 30px
        }

        #three .col-md-3 h3 {
            font-size: 16px;
            line-height: 19px
        }

        #block-r .icon {
            width: 20px
        }
    }

    @media (max-width: 400px) {
        .form-control.mini {
            max-width: 90%
        }

        #portfolio-item .titlemeta h3 {
            font-size: 18px;
            line-height: 24px
        }

        .articles .boxthumb {
            width: 100%;
            margin: 0 auto 20px
        }

        #menumodal ul li a {
            font-size: 28px;
            line-height: 38px
        }
    }

    @media (max-width: 400px) and (min-width: 300px) {
        #mblock-r .micon {
            width: 25%
        }
    }

    @media (max-width: 300px) and (min-width: 200px) {
        #mblock-r .micon {
            width: 33.33333333%
        }
    }

    @media (max-width: 200px) and (min-width: 100px) {
        #mblock-r .micon {
            width: 50%
        }
    }

    @media (max-width: 100px) {
        #mblock-r .micon {
            width: 100%
        }
    }

    #ui-datepicker-div {
        z-index: 1052 !important;
        background: #fff
    }

    .ui-datepicker-next {
        float: right
    }

    .ui-corner-all span {
        line-height: 18px;
        font-size: 18px;
        padding: 0 4px
    }

    .ui-datepicker-header .ui-corner-all span {
        padding: 0 10px
    }

    .ui-datepicker-header .ui-corner-all:hover {
        text-decoration: none
    }

    .ui-datepicker-header .ui-corner-all:hover span {
        color: #652d91;
        cursor: pointer
    }

    .ui-datepicker-title .ui-datepicker-month, .ui-datepicker-title .ui-datepicker-year {
        font-size: 18px;
        line-height: 18px
    }

    .ui-datepicker-title .ui-datepicker-month {
        padding: 0 5px 0 10px
    }

    .ui-datepicker-title .ui-datepicker-year {
        padding: 0 10px 0 5px
    }

    .ui-datepicker-calendar {
        margin: 0 6px
    }

    .ui-datepicker-calendar td span, .ui-datepicker-calendar td a {
        line-height: 16px;
        font-size: 16px
    }
</style>
<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Login from './LoginAndReg.vue';
    import Logo from './Items/Logo.vue';
    import Form from './ReservForm.vue';

    export default {
        data(){
            return{
               book: false,
               place: {
                   number: -1,
               }
            }
        },
        beforeCreate(){
           this.book = this.$store.state.booked;
        },
        components: {
            'header-component': Header,
            'footer-component': Footer,
            'loginandreg': Login,
            'logo-component': Logo,
            'form-component': Form
        }
    }
</script>