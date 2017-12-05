<template>
    <div class="enter" style="font-family: 'Helvetica Narrow', sans-serif;">
        <div class="buttom  login hvr-grow hvr-icon-pulse" @click="logout">Выйти</div>
        <div class="rectangle-big">
            <div class="rectangle" style="margin-right: 0.6vw; width: 6.3vw">
                <div class="rectangle-small" style="width: 5vw">
                    <div class="triangle_right">
                    </div>
                </div>
            </div>
        </div>
        <div class="buttom register hvr-grow hvr-icon-up" @click="settings">Настройки</div>
        <div class="rectangle-big">
            <div class="rectangle" style="margin-right: 8vw;">
                <div class="rectangle-small">
                    <div class="triangle_right">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Event from './Event.vue';
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
            logout(){
                auth.logout();
                this.$router.push('/');
            },
            login(){
                this.$router.push('login');
            },
            home(){
                this.$router.push(localStorage.getItem('role'));
            },
            settings(){
                this.$router.push('/settings')
            }
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
        }
    }
</script>
<style>
    .enter{
    }
    .register,
    .login {
        float: right;
        position: relative;
        margin-top: -40px;
        font-size: 1vw;
    }

    .register {
        font-size: 1vw;
        margin-right: 8vw;
    }

    .button {
        font-size: 1.8vw;
    }

    .rectangle {
        width: 9.5vw;
        height: 2.5vw;
        background-color: #124025;
        margin-right: 130px;
        border-radius: 5px;
    }

    .rectangle-small {
        width: 7.5vw;
        background-color: #30764e;
        height: 2.5vw;
        border-radius: 5px;
    }

    .triangle_right {
        margin-top: 0.9vw;
        float: right;
        width: 0;
        height: 0;
        border-top: 0.5vw solid transparent;
        border-right: 0.5vw solid #124025;
        border-bottom: 0.5vw solid transparent;
    }

    .rectangle-big {
        float: right;
        margin-top: -50px;
    }

    .hvr-icon-up,
    .hvr-icon-pulse {
        color: white;
        font-weight: bold;
    }
</style>