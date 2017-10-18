
<template>
<div>
   <!-- <div class="image-uploader__input-wrapper">
        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
        <input type="file" class="image-uploader__input" @change="sync" accept="image/*">
    </div>

    <div class="image-uploader__image-wrapper">
        <i v-show="isEmpty && !isLoading" class="fa fa-picture-o fa-3x"></i>
        <i v-show="isLoading" class="fa fa-refresh fa-spin fa-3x"></i>
        <img
                v-show="!isEmpty && !isLoading"
                class="image-uploader__image"
                ref="img"
                :src="src"
        >
    </div>-->
    <div class="enter">
        <router-link to="/admin">
            <div class="buttom  login hvr-grow hvr-icon-up">Войти</div>
            <div class="rectangle-big">
                <div class="rectangle" style="margin-right: 0.6vw; width: 6.3vw">
                    <div class="rectangle-small" style="width: 5vw">
                        <div class="triangle_right">
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
        <div class="buttom register hvr-grow hvr-icon-up">Регистрация</div>
        <div class="rectangle-big">
            <div class="rectangle" style="margin-right: 8vw;">
                <div class="rectangle-small">
                    <div class="triangle_right">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-header" style="">
        <div class="nav-header">
          <div class="navs hvr-sweep-to-bottoms hvr-grow">Бронирование</div>
            <a href="pages/menu.html"><div class="navs hvr-sweep-to-bottoms hvr-grow">Игротека</div></a>
            <a href="pages/menu.html"><div class="navs hvr-sweep-to-bottoms hvr-grow">События</div></a>
            <a href="pages/menu.html"><div class="navs hvr-sweep-to-bottoms hvr-grow">Акции и скидки</div></a>
            <router-link to="/prices"><div class="navs hvr-sweep-to-bottoms hvr-grow">Меню и цены</div></router-link>
        </div>
    </div>
    <div class="main-container">
        <div class="background">
        </div>
        <img src="../images/room.jpg" style="width: 1400px;" class="room-img">

    </div>
    <div class="main-img">
        <img src="../images/main.jpg" style="width: 100%" class="image-opacity">
            <event-component v-for="(image, index) in $store.state.rooms.length" :rooms="$store.state.rooms" :index="index"></event-component>
    </div>
    </div>
</template>
<script>
    //import 'hover.css/css/hover.css'
    import Event from './Event.vue';
    import axios from 'axios'
    export default {
      data(){
          return {

              imageSrc: 'http://nahmdong.com/vitalhill/img/default.png',
              success: null,
              message: '',
              image: {},
              srcPrefix: '/vue/image-uploader/assets/img/',
              content: null,
              // New image's File object
              file: null,
              isLoading: false,
              isDragging: false
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

        },
        created(){
        },
        computed: {
            src () {
                if (this.content) {
                    return this.content;
                }
                return this.isEmpty ? '' : this.srcPrefix + this.value;
            }
        },
      components: {
          'event-component': Event
      }
    }
</script>
<style>
    .container-header{
        height: 50px;
        margin-top: 40px;

    }
    body{
        background-image: url("../images/zel2.jpg");
    }
    .nav-header{
        width: 65%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0;
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

    .hvr-icon-up{
        color: white;
        font-weight: bold;
    }
    .main-container .background{
        background-image: url("../images/zel3.jpg");
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

</style>