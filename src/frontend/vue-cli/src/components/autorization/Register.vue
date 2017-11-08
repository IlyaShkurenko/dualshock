<template>
    <div>
        <header-component></header-component>
    <section id="join-us" style="background-image: url('../../images/zel2.jpg')">

        <div class="wrapper">
            <div class="content">
                <h2><span class='orange'>Будем</span><span class='normal'>всегда</span><span class='big'>на связи</span></h2>
                <p class="p1">Присоединяйтесь к сообществу Bandai Namco</p>
                <p class="p1">- Узнавайте эксклюзивную информацию о любимых играх</p>
                <p class="p1">- Получайте специальные предложения и принимайте участие в конкурсах</p>
                <p class="p1">- Узнавайте первым о новых играх</p>
            </div>
            <div class="form">
                <span class="input">
                    <input type="email" name="email" placeholder="email" v-model="credentials.username">
                    <span></span>
                </span>
                    <span class="input">
                    <input type="text" name="firstname" placeholder="имя">
                    <span></span>
                </span>
                    <span class="input">
                    <input type="text" name="name" placeholder="фамилия">
                    <span></span>
                </span>
                <span>
                    <span class="input">
                    <input type="text" name="name" placeholder="пароль" v-model="credentials.password">
                    <span></span>
                </span>
                    <div class="submit">
                        <input value="подписаться" @click="submit()">
                    </div>
                </span>

            </div>
        </div>
    </section>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import auth from '../../auth'
    import Vue from 'vue'
    import {mapActions} from 'vuex'
    import Header from  '../Header.vue'
    import Footer from '../Footer.vue'
    export default {
        data() {
            return {
                // We need to initialize the component with any
                // properties that will be used in it
                credentials: {
                    username: '',
                    password: ''
                },
                error: ''
            }
        },
        methods: {
            submit() {
                var credentials = {
                    username: this.credentials.username,
                    password: this.credentials.password
                };
                // We need to pass the component's this context
                // to properly make use of http in the auth service
                auth.signup(this,credentials,'/');
            },
            ...mapActions([
                'getRooms',
                'delRooms',
                'signUp'
            ])
        },
        components: {
            'header-component': Header,
            'footer-component': Footer,
        }

    }
</script>
<style>
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: black;
    }
</style>