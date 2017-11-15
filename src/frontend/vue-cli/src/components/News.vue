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
                                        <img src="https://www.bandainamcoent.eu/static/2017/08/22/nst-200x200-gamescom-jpg?8805152e213815b849c3c9a08f8f527be495d50515033899291480adbf740a92f9ed0b00a60e1f370f&4beded212f7e30870685332f28c20e2a"
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
                                    <a href="http://www.naruto-videogames.com/ru/create-your-own-ninja-in-naruto-to-boruto-shinobi-striker-4/"
                                       class="more">читать еще</a>
                                </div>
                            </article>
                        </li>
                        <li class="news">
                            <article>
                                <figure>
                                    <a href="">
                                        <img src="https://www.bandainamcoent.eu/static/2017/08/04/nunb-200x200-update-jpg?58e9b2cd94e0897cf8230fa73b2a7df432b596a21501835136ace2f6023e8a815cfbdd59813b82951d&36b62b3a1039dcc24947c834e35338bd"
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
                                    <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/"
                                       class="more">читать еще</a>
                                </div>
                            </article>
                        </li>
                        <li class="news">
                            <article>
                                <figure>
                                    <a href="">
                                        <img src="https://www.bandainamcoent.eu/static/2017/07/04/nsl-nst-200x200-release-date-jpg?1fb0b47d59305e623f6d19270ce072f654eaadc114991610847cffa739710eb400425071686818bc47&13c3b991fd1dc970f17c5dfdb616adc6"
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