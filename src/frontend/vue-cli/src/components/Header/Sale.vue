<template>
    <div class="sale">
        <div class="body-sale">
            <header-component></header-component>

            <loginandreg></loginandreg>
        </div>
        <div class="news-comp">
            <section id="news">

                <div class="wrapper">
                    <div class="top sale-title">
                        <div class="title">
                            <h1 class="main-title">Скидки</h1>
                            <h2 class="sub-title"><span>все, что вы должны</span> знать о</h2>
                        </div>
                    </div>

                    <div class="list">
                        <ul>
                            <li class="news">
                                <article>
                                    <figure>
                                        <a href="">
                                            <img src="../../images/saleweek.jpg"
                                                 alt="FIFA 18 турнир открытие">
                                            <img src="" alt="">
                                        </a>
                                    </figure>
                                    <div class="content">
                                        <h3  style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">
                                            <router-link to="/tournament/1">Выгодное и интересное предложение для каждого клиента</router-link>
                                        </h3>
                                        <p>
                                            Cамые разные предложения каждую неделю</p>
                                        <a href=""
                                           class="more">читать еще</a>
                                    </div>
                                </article>
                            </li>
                            <li class="news">
                                <article>
                                    <figure>
                                        <a href="">
                                            <img src="../../images/twicesale.jpg"
                                                 alt="">
                                            <img src="" alt="">
                                        </a>
                                    </figure>
                                    <div class="content">
                                        <h3  style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">
                                            <a href="">Скидки доступные лишь за особые заслуги</a>
                                        </h3>
                                        <p>
                                             Хочешь двойную скидку? Выиграй турнир.</p>
                                        <a href=""
                                           class="more">читать еще</a>
                                    </div>
                                </article>
                            </li>
                            <li class="news">
                                <article>
                                    <figure>
                                        <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/">
                                            <img src="https://www.bandainamcoent.eu/static/2017/08/04/nunb-200x200-update-jpg?58e9b2cd94e0897cf8230fa73b2a7df432b596a21501835136ace2f6023e8a815cfbdd59813b82951d&36b62b3a1039dcc24947c834e35338bd"
                                                 alt="NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrates First Anniversary With In Game Events and Updates">
                                            <img src="" alt="">
                                        </a>
                                    </figure>
                                    <div class="content">
                                        <h3>
                                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-blazing-celebrates-first-anniversary-with-in-game-events-and-updates-4/">NARUTO SHIPPUDEN: Ultimate Ninja Blazing Celebrate...</a>
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
                                        <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-naruto-shippuden-ultimate-ninja-storm-trilogy-available-on-august-25th-8/">
                                            <img src="https://www.bandainamcoent.eu/static/2017/07/04/nsl-nst-200x200-release-date-jpg?1fb0b47d59305e623f6d19270ce072f654eaadc114991610847cffa739710eb400425071686818bc47&13c3b991fd1dc970f17c5dfdb616adc6"
                                                 alt="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and NARUTO SHIPPUDEN: ULTIMATE NINJA STORM TRILOGY available on August 25th">
                                            <img src="" alt="">
                                        </a>
                                    </figure>
                                    <div class="content">
                                        <h3>
                                            <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-naruto-shippuden-ultimate-ninja-storm-trilogy-available-on-august-25th-8/">NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and ...</a>
                                        </h3>
                                        <p>
                                            All the NARUTO SHIPPUDEN Ultimate Ninja Storm published titles are included in one edition, NARUTO SHIPPUDEN: Ultimate Ninja STOR...</p>
                                        <a href="http://www.naruto-videogames.com/ru/naruto-shippuden-ultimate-ninja-storm-legacy-and-naruto-shippuden-ultimate-ninja-storm-trilogy-available-on-august-25th-8/"
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
    import Header from '../Header.vue';
    import Footer from '../Footer.vue';
    import Sharing from '../HomeSharing.vue'
    import LoginAndReg from '../LoginAndReg.vue';
    import Logo from '../Items/Logo.vue'

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
<style src="../../../styles/news.css" scoped>
    h3{
        font-size: 20px;
    }
    </style>