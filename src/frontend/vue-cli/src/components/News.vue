<template>
    <div>
    <div class="body-news">
        <header-component></header-component>

        <loginandreg></loginandreg>
    </div>
    <div class="news-comp">
        <section id="news">

            <div class="wrapper">
                <div class="top news-title">
                    <div class="title">
                        <h1 class="main-title">НОВОСТИ</h1>
                        <h2 class="sub-title"><span>все, что вы должны</span> знать о</h2>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Выберите событие</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>

                <div class="list">
                    <ul>
                        <li class="news">
                            <article>
                                <figure>
                                    <a href="">
                                        <img src="fifa.jpeg"
                                             alt="FIFA 18 турнир открытие">
                                        <img src="" alt="">
                                    </a>
                                </figure>
                                <div class="content">
                                    <h3>
                                        <router-link to="/tournament/1">FIFA 18 Турнир открытие</router-link>
                                    </h3>
                                    <p>
                                        ...</p>
                                    <router-link to="/tournament/1"><a
                                       class="more">читать еще</a></router-link>
                                </div>
                            </article>
                        </li>
                        <li class="news">
                            <article>
                                <figure>
                                    <a href="">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/The-best-top-hd-desktop-naruto-shippuden-wallpaper-naruto-shippuden-wallpapers-hd-11.jpg?alt=media&token=cda6ba1b-3498-4a3b-8aca-ce1a4b1ac128"
                                             alt="Create your own ninja in NARUTO TO BORUTO: SHINOBI STRIKER">
                                        <img src="" alt="">
                                    </a>
                                </figure>
                                <div class="content">
                                    <h3>
                                        <a href="">Create your own ninja in NARUTO TO BORUTO: SHINOBI...</a>
                                    </h3>
                                    <p>
                                        NARUTO TO BORUTO: SHINOBI STRIKER is ready to be showcased at gamescom 2017! BANDAI NAMCO Entertainment Europe is excited to reveal...</p>
                                    <a href=""
                                       class="more">читать еще</a>
                                </div>
                            </article>
                        </li>
                        <li class="news">
                            <article>
                                <figure>
                                    <a href="">
                                        <img src="mortal.jpeg"
                                             alt="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                        <img src="" alt="">
                                    </a>
                                </figure>
                                <div class="content">
                                    <h3>
                                        <a href="">NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrate...</a>
                                    </h3>
                                    <p>
                                        BANDAI NAMCO Entertainment Inc.&rsquo;s NARUTO SHIPPUDEN: Ultimate Ninja Blazing, the Ultimate Ninja series game for mobile platfor...</p>
                                    <a href=""
                                       class="more">читать еще</a>
                                </div>
                            </article>
                        </li>
                        <li class="news">
                            <article>
                                <figure>
                                    <a href="">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/The-best-top-hd-desktop-naruto-shippuden-wallpaper-naruto-shippuden-wallpapers-hd-11.jpg?alt=media&token=cda6ba1b-3498-4a3b-8aca-ce1a4b1ac128"
                                             alt="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and NARUTO SHIPPUDEN: ULTIMATE NINJA STORM TRILOGY available on August 25th">
                                        <img src="" alt="">
                                    </a>
                                </figure>
                                <div class="content">
                                    <h3>
                                        <a href="">NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and ...</a>
                                    </h3>
                                    <p>
                                        All the NARUTO SHIPPUDEN Ultimate Ninja Storm published titles are included in one edition, NARUTO SHIPPUDEN: Ultimate Ninja STOR...</p>
                                    <a href=""
                                       class="more">читать еще</a>
                                </div>
                            </article>
                        </li>
                    </ul>


                    <a href="" class="more-news "><span>Другие</span>НОВОСТИ</a>

                </div>

            </div>

        </section>
        <logo-component></logo-component>
        <sharing></sharing>
        <footer-component></footer-component>
    </div>
    </div>
</template>
<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Sharing from './HomeSharing.vue'
    import LoginAndReg from './LoginAndReg.vue';
    import Logo from './Items/Logo.vue'

    export default {
        components: {
            'header-component': Header,
            'footer-component': Footer,
            'sharing': Sharing,
            'loginandreg': LoginAndReg,
            'logo-component': Logo
        }
    }
</script>
<style src="../../styles/news.css" scoped>

</style>