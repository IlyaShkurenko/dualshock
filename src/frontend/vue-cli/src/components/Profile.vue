<template>
    <div>
        <loginandreg></loginandreg>
        <logo-component></logo-component>
    <div class="profile-page">
        <div class="w960" style="overflow: hidden;">
            <div class="nav"  style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">
                <ul>
                    <li>
                        <a href="/" class="home "><span></span></a>
                    </li>
                    <li>
                        <a href="/tourney/list/public">Турниры</a>
                    </li>
                    <li>
                        <a href="/contact">Контакты</a>
                    </li>
                </ul>
            </div>
            <div id="Breadcrumbs">
                <a href="/" class="Last"><span>DualShock</span></a>
            </div>
            <div id="BreadcrumbsFiller">&nbsp;</div>
            <div class="adWide top">
            </div>
            <div id="Error"><img src="https://binarybeast.com/img/Icons/PNG-32/Delete.png" alt=""/><span></span></div>
            <div id="Message"><img src="https://binarybeast.com/img/Icons/PNG-32/Info.png" alt=""/><span></span></div>
            <div id="profile" style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">
                <div id="details">
                    <div id="portrait">
                        <img :src="$store.state.users[$route.params.id].img" alt="#" style="width: 100%"/>
                    </div>
                    <div id="infoBox">
                        <div id="title">
                            <img src="https://binarybeast.com/img/Icons/flagicons/ua.png" alt="Ukraine"/>
                            <h2 style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold"><span id="alias">{{$store.state.users[$route.params.id].nickname}}</span></h2>
                            <p id="id">id: {{$store.state.users[$route.params.id]._id}}</p>
                        </div>
                        <div id="infoStats">
                            <div id="info">
                                <p>
                                    <span>Name:</span>
                                    - </p>
                                <p>
                                    <span>Alias:</span>
                                    NSF-HulK </p>
                                <p>
                                    <span>Join Date:</span>
                                    Tuesday August 19th, 2014 </p>
                                <p>
                                    <span>Nationality:</span>
                                    <img src="https://binarybeast.com/img/Icons/flagicons/ua.png" alt="Ukraine"/>
                                    Ukraine </p>

                                <p>
                                    <span>Website:</span>
                                    - </p>
                            </div>
                            <div id="stats">
                                <p>
                                    <span>Tournaments Played:</span>
                                    10 </p>

                                <p>
                                    <span>Most Played Game:</span>
                                    <a href="/game/load/NSUNS3FB">
                                        <img src="https://binarybeast.com/img/games/icons/NSUNS3FB.png"/>
                                        Naruto Shippuden : Ultimate Ninja Storm 3 Full Burst </a></p>
                            </div>
                        </div>
                        <div id="comms">
                            <a href="#">
                            </a>
                            <a href="#">
                            </a>
                            <a href="#">
                            </a>
                        </div>
                    </div>
                </div>
                <div id="wall">
                    <div id="left">
                        <div id="playerNav">
                            <a href="/player/168251/tournies">
                                Турниры </a>
                            <a href="/player/168251/matches" class="current">
                                Matches </a>
                            <a href="/player/168251/teams">
                                Teams </a>
                            <a href="/player/168251/games">
                                Games </a>
                            <a href="/player/168251/contact">
                                Контакты </a>
                            <a href="/player/168251/guestbook">
                                Guestbook </a>
                        </div>
                        <div id="latestVisitors" >
                            <h3><span>Latest</span> Visitors</h3>
                            <a href="/player/204971">
                                <img src="https://binarybeast.com/img/avatar/30.png" class="visitorThumb" alt="#"/>
                                <img src="https://binarybeast.com/img/Icons/flagicons/ru.png" class="flagIcon"
                                     alt="Russian Federation" title="Russian Federation"/>
                                <span>KawaLI</span>
                            </a>
                            <a href="/player/175689">
                                <img src="https://binarybeast.com/img/uploads/user/175689/avatar/30.png"
                                     class="visitorThumb" alt="#"/>
                                <img src="https://binarybeast.com/img/Icons/flagicons/ru.png" class="flagIcon"
                                     alt="Russian Federation" title="Russian Federation"/>
                                <span>Avanger</span>
                            </a>
                            <a href="/player/174821">
                                <img src="https://binarybeast.com/img/uploads/user/174821/avatar/30.png"
                                     class="visitorThumb" alt="#"/>
                                <img src="https://binarybeast.com/img/Icons/flagicons/se.png" class="flagIcon"
                                     alt="Sweden" title="Sweden"/>
                                <span>VodkaCitron</span>
                            </a>
                            <a href="/player/165367">
                                <img src="https://binarybeast.com/img/uploads/user/165367/avatar/30.png"
                                     class="visitorThumb" alt="#"/>
                                <img src="https://binarybeast.com/img/Icons/flagicons/ru.png" class="flagIcon"
                                     alt="Russian Federation" title="Russian Federation"/>
                                <span>RusiKSlate</span>
                            </a>
                            <a href="/player/175696">
                                <img src="https://binarybeast.com/img/uploads/user/175696/avatar/30.png"
                                     class="visitorThumb" alt="#"/>
                                <img src="https://binarybeast.com/img/Icons/flagicons/ru.png" class="flagIcon"
                                     alt="Russian Federation" title="Russian Federation"/>
                                <span>Tommy</span>
                            </a>
                        </div>
                    </div>
                    <div id="right">
                        <div id="matches">
                            <div class="matchTourney" style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">
                                <h3>
                                    <img src="https://binarybeast.com/img/games/icons/NSUNS3FB.png"
                                         alt="Naruto Shippuden : Ultimate Ninja Storm 3 Full Burst"/>
                                    <a href="/xNSUNS3FB1508010" target="_blank">Weekly Tournament II №1[PC]</a>
                                    <span>Tournament</span>
                                </h3>
                                <a href="/tourney/load_match/1439123" target="_blank" class="loss">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>1</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">mot9_mot9</p>

                                    <p class="match">Loss</p>
                                </a>
                                <a href="/tourney/load_match/1439117" target="_blank" class="win">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>1</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">Zhenya Mironov</p>

                                    <p class="match">Win</p>
                                </a>
                            </div>
                            <div class="matchTourney">
                                <h3>
                                    <img src="https://binarybeast.com/img/games/icons/NSUNS3FB.png"
                                         alt="Naruto Shippuden : Ultimate Ninja Storm 3 Full Burst"/>
                                    <a href="/xNSUNS3FB1501240" target="_blank">Naruto Storm Winter Tournament [PS3]</a>
                                    <span>Tournament</span>
                                </h3>
                                <a href="/tourney/load_match/1295688" target="_blank" class="loss">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>1</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">DennossPL</p>

                                    <p class="match">Loss</p>
                                </a>
                            </div>
                            <div class="matchTourney">
                                <h3>
                                    <img src="https://binarybeast.com/img/games/icons/NSUNS3FB.png"
                                         alt="Naruto Shippuden : Ultimate Ninja Storm 3 Full Burst"/>
                                    <a href="/xNSUNS3G1501240" target="_blank">Naruto Storm Winter Tournament [PC]</a>
                                    <span>Tournament</span>
                                </h3>
                                <a href="/tourney/load_match/1294329" target="_blank" class="loss">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>1</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">fantomext</p>

                                    <p class="match">Loss</p>
                                </a>
                                <a href="/tourney/load_match/1294258" target="_blank" class="win">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>1</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">AtomicAnvil</p>

                                    <p class="match">Win</p>
                                </a>
                            </div>
                            <div class="matchTourney">
                                <h3>
                                    <img src="https://binarybeast.com/img/games/icons/NSUNS3FB.png"
                                         alt="Naruto Shippuden : Ultimate Ninja Storm 3 Full Burst"/>
                                    <a href="/xNSUNS3FB1412260" target="_blank">New Year's Cup (PlayStation 3)</a>
                                    <span>Tournament</span>
                                </h3>
                                <a href="/tourney/load_match/1277200" target="_blank" class="loss">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>2</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">NintendofreakFTW</p>

                                    <p class="match">Loss</p>
                                </a>
                            </div>
                            <div class="matchTourney">
                                <h3>
                                    <img src="https://binarybeast.com/img/games/icons/NSUNS3FB.png"
                                         alt="Naruto Shippuden : Ultimate Ninja Storm 3 Full Burst"/>
                                    <a href="/xNSUNS3FB1412130" target="_blank">Christmas Cup (PC)</a>
                                    <span>Tournament</span>
                                </h3>
                                <a href="/tourney/load_match/1266917" target="_blank" class="loss">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>2</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">Avanger</p>

                                    <p class="match">Loss</p>
                                </a>
                            </div>
                            <div class="matchTourney">
                                <h3>
                                    <img src="https://binarybeast.com/img/games/icons/NSUNS3FB.png"
                                         alt="Naruto Shippuden : Ultimate Ninja Storm 3 Full Burst"/>
                                    <a href="/xSC21412134" target="_blank">Christmas Cup</a>
                                    <span>Tournament</span>
                                </h3>
                                <a href="/tourney/load_match/1266992" target="_blank" class="loss">
                                    <p class="result"></p>
                                    <p class="score">
                                        <span>2</span>
                                        -
                                        <span class="opponentScore">0</span>
                                    </p>
                                    <p class="opponent">ChrisZero_17</p>

                                    <p class="match">Loss</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
    </div>
</template>
<script>
    import auth from '../auth'
    import Loggined from './LogginedHeader.vue';
    import Footer from './Footer.vue';
    import Header from './Header.vue';
    import Logo from './Items/Logo.vue';

    export default {
        data() {
            return {
                role: ''
            }
        },
        components: {
            'loginandreg': Loggined,
            'footer-component': Footer,
            'header-component': Header,
            'logo-component': Logo
        },
        computed: {
            getRole() {
                return localStorage.getItem('username')
            },
            src(){
                console.log(localStorage.getItem('nickname'))
                return localStorage.getItem('img')
            }
        },
        beforeCreate() {
            auth.checkAuth();
            if (!auth.user.authenticated) {
                this.$router.push('/login')
            }
        }
    }

</script>
<style scoped>
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        margin: 0;
        padding: 0
    }
    body {
        line-height: 1.5;
        position: relative;
        z-index: 1;
        border: 0;
        color: #FFF;
        font-family: Helvetica Narrow, sans-serif; font-weight: bold;
        font-size: 12px;
        text-align: left
    }
    .profile{
        height: 55px;
        background-color: #23b08e;
    }
    ol, ul {
        list-style: none
    }
    .enter{
        margin-top: 60px;
    }
    blockquote, q {
        quotes: none
    }

    blockquote:before, blockquote:after, q:before, q:after {
        content: none
    }

    :focus {
        outline: 0
    }

    ins {
        text-decoration: none
    }

    del {
        text-decoration: line-through
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    * {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0
    }

    .w960 {
        width: 960px;
        margin: 0 auto
    }

    hr {
        border: 1px solid #333
    }

    a {
        color: #0AF;
        text-decoration: none
    }

    .bb-bar p {
        float: left;
        color: #FFF;
        margin-right: 20px
    }
    .bb-bar form p {
        width: 110px;
        height: 30px;
        padding-top: 5px;
        margin-right: 0
    }

    .bb-bar form p:hover {
        background: #2B2B2B
    }

    .bb-bar form input[type=text], .bb-bar form input[type=password] {
        width: 100px;
        height: 20px;
        overflow: hidden;
        background: none;
        border: none;
        color: #484848;
        border-left: 1px solid #484848;
        border-radius: 0;
        -moz-border-radius: 0;
        margin: 0;
        padding: 0 5px
    }

    .bb-bar ul li a {
        display: block;
        height: 27px;
        line-height: 27px;
        margin-top: 1px;
        color: #0AF;
        padding: 0 10px
    }

    .bb-bar ul li a:hover, .bb-bar ul li a:focus {
        color: #FFF
    }

    .bb-bar ul li a:active {
        padding-top: 1px;
        box-shadow: inset 0 3px 15px rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: inset 0 3px 15px rgba(0, 0, 0, 0.8);
        -moz-box-shadow: inset 0 3px 15px rgba(0, 0, 0, 0.8)
    }

    .bb-bar ul li p.DisplayName a {
        color: #0AF;
        margin: 1px 0 0 -9px
    }

    .bb-bar ul li p.matches a {
        display: inline-block;
        color: #0AF;
        margin: 1px -10px 0 -9px
    }

    .bb-bar ul li a[href*=facebook]:hover img[src*=white], .bb-bar ul li a[href*=facebook] img[src*=blue] {
        display: inline-block
    }

    .nav {
        width: 960px;
        height: 35px;
        font-size: 1em
    }

    .nav ul {
        float: left;
        z-index: 5;
        position: relative;
        width: 660px;
        height: 35px;
        line-height: 35px;
        background: rgba(0, 0, 0, 0.5);
        padding: 1px
    }

    .nav ul li {
        height: 33px;
        float: left;
        margin-right: 1px
    }

    .nav ul li.createTournament a {
        color: #90CC44
    }

    .nav ul li.createTournament a:hover, .nav ul li.createTournament a:focus, .nav ul li.createTournament a.current {
        background: #6FAF1E
    }

    .nav ul li.reportBug a {
        color: #be3b2d
    }

    .nav ul li.reportBug a:hover, .nav ul li.reportBug a:focus, .nav ul li.reportBug a.current {
        background: #be3b2d
    }

    .nav ul li a {
        display: block;
        height: 33px;
        line-height: 33px;
        overflow: hidden;
        font-family: Helvetica Narrow;
        font-size: 1.4em;
        text-shadow: 1px 1px 0 #000;
        color: #0AF;
        padding: 0 10px
    }

    .nav ul li a:active {
        padding-top: 1px;
        box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8)
    }

    .nav ul li a.home span {
        width: 20px;
        height: 20px;
        float: left;
        margin: 7px 0 0
    }

    .nav ul li a.current:active {
        box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8)
    }

    .nav .search form input {
        float: left;
        width: 190px;
        height: 22px;
        line-height: 22px;
        background: none;
        border: none;
        color: #484848;
        font-family: Arial;
        font-size: 9pt;
        margin: 9px 0 0 5px
    }

    .nav .search form button {
        float: right;
        height: 33px;
        background: none;
        border: none;
        padding: 0
    }

    .nav .search form button:hover {
    }

    .nav .search form button:active {
        box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8)
    }

    .nav .search form button span {
        display: block;
        width: 31px;
        height: 31px;
        margin: 0
    }

    .nav .search form button:active span, .nav .search form button:hover span {
        margin: 0
    }

    #Breadcrumbs {
        position: relative;
        z-index: 10;
        display: inline-block;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        margin: 1px 0 10px
    }

    #Breadcrumbs a {
        float: left;
        display: block;
        height: 25px;
        width: auto;
        padding-right: 15px;
    }

    #Breadcrumbs a span {
        display: block;
        height: 25px;
        background: rgba(0, 0, 0, 0.5);
        color: #888;
        padding: 0 5px 0 10px
    }

    #Breadcrumbs a.Last {
    }

    #BreadcrumbsFiller {
        position: relative;
        z-index: 5;
        display: block;
        height: 25px;
        width: 960px;
        background: rgba(0, 0, 0, 0.25);
        margin: -40px 0 10px
    }


    #TimestampContainer .Timestamps .Timestamp span {
        font-weight: 700
    }

    #TimestampContainer .Timestamps .Timestamp div {
        display: inline;
        color: #0AF
    }

    #TimestampContainer .Timestamps #TimestampLocal, #TimestampContainer .Timestamps #TimestampLocalConfigured {
        margin-left: 0;
        margin-right: -35px
    }

    #TimestampWindow h2 {
        color: #F90;
        font-size: 15px
    }


    button img {
        vertical-align: bottom
    }

    form {
        display: inline
    }

    #Message, #Error {
        display: none;
        text-align: left;
        font-weight: 700;
        border-radius: 2px;
        -moz-border-radius: 2px;
        margin: 0 0 10px
    }

    #Message {
        border: 2px solid #F90;
        background: rgba(255, 153, 0, .25)
    }

    #Error {
        border: 2px solid red;
        background: rgba(255, 0, 0, .25)
    }

    #Message img, #Error img {
        vertical-align: middle;
        margin-top: 5px;
        margin-left: 5px;
        margin-right: 5px
    }

    .listTable table {
        display: block;
        clear: both;
        border-collapse: separate;
        border-spacing: 1px;
        font-size: 12px;
        margin: 0 auto
    }

    .listTable table tr {
        cursor: pointer
    }

    .listTable table tr th {
        background: rgba(0, 0, 0, 0.50);
        color: #0AF;
        text-align: center;
        margin: 1px 1px 0;
        padding: 5px 10px
    }

    .listTable table tr td {
        color: #888;
        padding: 5px 10px
    }

    .listTable table tr:nth-child(even) td {
        background: rgba(0, 0, 0, 0.20)
    }

    .listTable table tr:nth-child(odd) td {
        background: rgba(0, 0, 0, 0.30)
    }

    .listControls p {
        color: #888;
        display: block;
        width: 960px;
        height: 45px;
        line-height: 45px;
        margin-bottom: -45px;
        padding-left: 10px;
        text-shadow: 1px 1px 0 #000
    }

    .listControls .buttons button {
        display: inline-block;
        float: left;
        margin-right: 10px
    }


    .tabs ul li {
        float: left;
        margin-right: 1px
    }

    .tabs ul li a {
        display: block;
        height: 34px;
        background: rgba(0, 0, 0, 0.5);
        color: #FFF;
        padding: 0 10px
    }

    .tabs ul li.current a {
        height: 35px;
        background: rgba(0, 0, 0, 0.25);
        color: #F70
    }


    fieldset .h125 .leftCentered label {
        text-align: left;
        margin-left: 90px;
        margin-top: 10px;
        font-weight: 400
    }

    fieldset .h125 .leftCentered input {
        width: 195px
    }

    fieldset .h125 .rightCentered p {
        float: left;
        display: block;
        height: 125px;
        width: 550px;
        padding-left: 15px;
    }

    fieldset .h125 .rightCentered p span {
        display: block;
        width: 550px;
        height: 100px;
        line-height: 20px;
        margin-top: 12px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        -moz-border-radius: 3px;
        padding: 10px 20px
    }

    div.PaddedInput input, div.PaddedInput textarea, fieldset div.PaddedInput input, fieldset div.PaddedInput textarea {
        width: 195px;
        float: left;
        display: inline;
        background: none;
        border: none;
        margin: 0;
        padding: 0
    }

    .PaddedInput.Icon input, fieldset .PaddedInput.Icon input {
        width: 165px
    }
    input, textarea {
        background: none;
        border: none;
        color: #484848;
        overflow: hidden;
        margin: 0;
        padding: 0
    }

    input {
        height: 20px
    }

    textarea {
        height: 60px;
        resize: none
    }

    input[type=radio] {
        vertical-align: bottom;
        margin-right: 10px
    }

    input[type=file] {
        background: none;
        border: none
    }


    fieldset input {
        clear: both
    }

    fieldset label {
        float: left;
        clear: left;
        width: 130px;
        margin-right: 10px;
        padding-right: 2px;
        padding-top: 4px;
        text-align: right;
        font-weight: 700
    }

    fieldset legend {
        color: #FFF;
        font-size: 18px;
        font-weight: 700
    }

    fieldset div.Info {
        padding-top: 4px;
        margin-bottom: 10px;
        color: #0AF
    }

    fieldset div.Info img {
        vertical-align: middle;
        padding-right: 5px
    }


    fieldset input[type=text], fieldset input[type=password] {
        clear: right;
        width: 160px;
        margin-bottom: 10px
    }
    #caldays span {
        text-align: center;
        display: block;
        float: left;
        width: 28px
    }

    #caltitle select {
        font-size: 10px
    }


    .calweek a {
        display: block;
        float: left;
        width: 27px;
        height: 20px;
        margin-left: 1px;
        line-height: 20px;
        text-decoration: none;
        font-size: 11px;
        text-align: center;
        color: #666;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px
    }

    .calweek a:hover, .calfocus, .calweek a:focus {
        background-color: #ddd
    }
    ul.DropDown li a {
        display: block;
        height: 30px;
        width: 190px;
        line-height: 30px;
        color: #BE3B2D;
        background: none;
        font-size: 15px;
        font-weight: 400;
        text-shadow: 1px 1px 0 #000;
        margin: 0 0 1px;
        padding: 0
    }

    ul.DropDown li:last-child a {
        border-bottom: none;
        margin-bottom: 0
    }

    td input[type=checkbox] {
        display: block;
        margin-left: auto;
        margin-right: auto
    }



    .dd .ddChild .opta a, .dd .ddChild .opta a:visited {
        padding-left: 10px
    }

    .dd .ddChild a {
        display: block;
        text-decoration: none;
        color: #FFF;
        white-space: nowrap;
        cursor: pointer;
        width: 100%;
        padding: 2px 20px 2px 3px
    }

    .dd .ddChild a:hover {
        background-color: #6CF
    }

    .dd .ddChild a img {
        border: 0;
        vertical-align: middle;
        padding: 0 2px 0 0
    }

    .terminal .terminal-output div {
        display: block
    }

    .terminal, .terminal .terminal-output, .terminal .terminal-output div, .terminal .terminal-output div div, .cmd, .terminal .cmd span, .terminal .cmd div {
        font-family: monospace;
        color: #aaa;
        background-color: #000;
        font-size: 12px
    }


    .CommentsBox .CommentContainer .Comment textarea {
        width: 310px;
        height: 100%;
        min-height: 75px
    }


    .CommentsBox .CommentContainer .Admin a {
        margin-right: 15px;
        color: #FFF;
        font-weight: 700
    }

    .CommentsBox .CommentContainer .Admin a:hover {
        color: #F90;
        text-decoration: none
    }

    #footer .w960.top img {
        float: left;
        margin-top: -63px
    }

    #footer .w960.top div {
        float: left;
        margin: 10px 0 10px 10px
    }

    #footer .w960.top .links img {
        margin: 0 0 0 -5px
    }

    #footer .w960.top .links ul {
        float: left;
        line-height: 14px;
        margin-right: 5px
    }

    #footer .w960.top .about h4 {
        margin-bottom: 6px;
        font-family: Cuprum;
        font-size: 18px;
        font-weight: 400
    }

    #footer .w960.top .about p {
        line-height: 14px;
        margin-bottom: 10px;
        color: #FFF;
        font-size: 12px
    }

    #footer .w960.top .twitter h4 {
        font-size: 18px;
        font-weight: 400;
        font-family: Cuprum
    }

    #footer .w960.top .twitter img {
        display: inline;
        break: right;
        margin: 0 10px
    }

    #footer .w960.top .twitter p {
        display: inline;
        padding-left: 0;
        color: #FFF;
        font-size: 12px
    }

    #footer .w960.bottom .languages select {
        width: 130px
    }

    #footer .w960.bottom .credits p {
        color: #FFF;
        font-size: 12px
    }

    #footer .w960.bottom .credits p a {
        display: inline-block;
        height: 29px;
        color: #0AF
    }

    #footer .w960.bottom .credits p a:hover {
        z-index: 5;
        position: relative;
        color: #F70
    }

    .adWide {
        display: block;
        float: none;
        clear: both;
        width: 728px;
        margin: 10px auto 5px
    }


    .positioner div {
        z-index: 1 !important
    }

    .positioner a {
        z-index: 2 !important
    }

    ul#bracketNav li a.current {
        border-right: 1px solid #484848 !important;
        border-left: 1px solid #484848 !important;
        position: relative;
        z-index: 50;
        margin-bottom: -1px
    }


    .adSkin ~ .w960 .header {
        margin-top: 30px !important;
        margin-bottom: 30px !important
    }

    ::-moz-selection, ::selection, .PaddedButton:hover, .PaddedButton:focus {
        color: #FFF;
        background: #08D
    }

    h2.contentTitle img, input[type=checkbox] {
        vertical-align: middle
    }

    h2.contentTitle span, .bb-bar form input[type=text]:focus, .bb-bar form input[type=password]:focus, .nav .search form input:focus, input:focus, textarea:focus, input.Error:focus, textarea.Error:focus, #footer .w960.top .about h4 a:hover, #footer .w960.top .about a, #footer .w960.top .twitter h4 a:hover, #footer .w960.top .twitter h4 a:hover span, #footer .w960.top .twitter p.tweet a {
        color: #FFF
    }

    .PreLoad, .bb-bar ul li a[href*=facebook] img[src*=white], .bb-bar ul li a[href*=facebook]:hover img[src*=blue], .ValueFadeDefault, .hidden, .CommentsBox .CommentContainer .CommentID, .CommentsBox .CommentContainer .CommentCache {
        display: none
    }

    a:hover, a:focus, #Breadcrumbs a:hover span, #Breadcrumbs a.Last span, .tabs ul li a:hover, .PaddedButton.Orange, #footer .w960.top .links ul li a:hover, #footer .w960.top .links ul li a.internal:hover, #footer .w960.top .about p span, #footer .w960.top .about a:hover, #footer .w960.top .twitter h4 a span, #footer .w960.top .twitter p.tweet a:hover {
        color: #F70
    }

    a img, fieldset {
        border: none
    }

    .bb-bar ul li p.DisplayName a:hover, .bb-bar ul li p.matches a:hover {
        background: none;
        color: #F70
    }

    .nav ul li a:hover, .nav ul li a:focus, .nav ul li a.current {
        background: #08D;
        color: #FFF
    }

    .nav ul li a.home:hover span, .nav ul li a.home.current span {
    }

    .listTable table tr td img, table tr th img, .CommentsBox .CommentContainer .Admin img {
        vertical-align: top;
        margin-right: 5px
    }

    .listTable table tr:nth-child(even):hover td, .listTable table tr:nth-child(odd):hover td {
        background: rgba(0, 0, 0, 0.50)
    }

    input[readonly], textarea[readonly], input[readonly]:focus, textarea[readonly]:focus {
        background: none;
        color: #FFF
    }


    .terminal div::selection, .terminal span::selection, .terminal .cmd span.inverted, .terminal div::-moz-selection, .terminal span::-moz-selection {
        background-color: #aaa;
        color: #000
    }

    .CommentsBox .TotalCount b, #footer .w960.top .links ul li a, #footer .w960.top .about h4 a, #footer .w960.top .twitter h4 a {
        color: #0AF
    }

    .CommentsBox .Post textarea, .CommentsBox .CommentContainer .Post textarea {
        width: 300px
    }

    #sponsorLogos a, #partnerLogos a {
        margin-right: 10px;
        display: inline-block;
        height: 40px
    }

    #profile {
        width: 960px;
    }

    #details {
        height: 250px;
    }

    #portrait {
        float: left;
        width: auto;
        max-width: 210px;
        height: auto;
        max-height: 240px;
        overflow: hidden;
        padding: 5px;
        background: rgba(0, 0, 0, 0.50);
    }

    #portrait img {
        display: block;
        padding: 0;
        margin: 0;
    }

    #infoBox {
        float: right;
        width: 740px;
    }

    #title {
        height: 36px;
        line-height: 35px;
        padding: 0 10px;
        background: rgba(0, 0, 0, 0.50);
    }

    #title img {
        float: left;
        margin: 12px 10px 0 0;
    }

    #title h2 {
        float: left;
        color: #FFFFFF;
        font-family: 'Cuprum';
        font-size: 1.4em;
        font-weight: normal;
        text-shadow: 1px 1px 0px #000000;
    }

    #title h2 #alias {
        color: #00AAFF;
    }

    #title p {
        float: right;
        font-size: 11px;
        color: #888888;
        margin: 2px 0 0 10px;
    }

    #infoStats {
        width: 740px;
        overflow: hidden;
    }

    #info, #stats {
        float: left;
        height: 178px;
        width: 370px;
        padding: 15px 20px;
        background: rgba(0, 0, 0, 0.25);
        margin-bottom: 1px;
    }

    #stats {
        width: 369px;
        margin-left: 1px;
    }

    #info p, #stats p {
        line-height: 24px;
        font-size: 12px;
        color: #888888;
    }

    #info p span, #stats p span {
        display: inline-block;
        font-weight: bold;
        color: #FFFFFF;
    }

    #info p span {
        width: 100px;
    }

    #stats p span {
        width: 150px;
    }

    #info p img {
        margin: 0 5px -1px 0;
    }

    #stats p img {
        margin: 0 5px -4px 0;
    }

    #comms {
        height: 35px;
        line-height: 35px;
        padding: 0 10px;
        margin-bottom: 1px;
        background: rgba(0, 0, 0, 0.25);
    }

    #comms a {
        float: left;
        display: block;
        height: 35px;
        padding: 0 10px;
        margin-right: 10px;
    }

    #wall {
        margin-top: 10px;
    }

    #left {
        float: left;
        width: 210px;
    }

    #playerNav {
        margin-bottom: 10px;
    }

    #playerNav a {
        width: 209px;
        margin-left: 10px;
        display: block;
        height: 35px;
        line-height: 35px;
        font-family: 'Helvetica Narrow', sans-serif;
        font-weight: bold;
        font-size: 1.4em;
        padding: 0 10px;
        background: rgba(0, 0, 0, 0.50);
        margin-bottom: 1px;
        color: #888888;
        text-shadow: 1px 1px 0px #000000;
    }

    #playerNav a:hover {
        width: 214px;
        background: rgba(0, 0, 0, 0.25);
        color: #FF7700;
        margin-left: 5px;
    }

    #playerNav a:active {
        color: #00AAFF;
    }

    #playerNav a.current {
        width: 220px;
        background: rgba(0, 0, 0, 0.25);
        color: #00AAFF;
        margin-left: 0;
    }

    #playerNav a:last-child {
        margin-bottom: 0;
    }

    #latestVisitors {
    }

    #latestVisitors h3 {
        height: 35px;
        line-height: 35px;
        font-family: 'Helvetica Narrow', sans-serif;
        font-weight: bold;
        font-size: 1.4em;
        padding: 0 10px;
        background: rgba(0, 0, 0, 0.50);
        margin-bottom: 1px;
        color: #FFFFFF;
        text-shadow: 1px 1px 0px #000000;
    }

    #latestVisitors h3 span {
        color: #00AAFF;
    }

    #latestVisitors a {
        display: block;
        height: 40px;
        background: rgba(0, 0, 0, 0.25);
        margin-bottom: 1px;
    }

    #latestVisitors a:hover {
        background: rgba(0, 0, 0, 0.35);
    }

    #latestVisitors a img.visitorThumb {
        margin: 5px 5px -18px 5px;
        height: 30px;
        width: 30px;
        -moz-object-fit: contain;
        -ms-object-fit: contain;
        -o-object-fit: contain;
        -webkit-object-fit: contain;
        object-fit: contain;
    }

    #latestVisitors a:hover img.visitorThumb {
        -webkit-box-shadow: 0px 0px 3px #000000;
        -moz-box-shadow: 0px 0px 3px #000000;
        box-shadow: 0px 0px 3px #000000;
    }

    #latestVisitors a span {
        color: #FFFFFF;
    }

    #latestVisitors a:hover span {
        text-shadow: 1px 1px 0px #000000;
    }

    #latestVisitors a img.flagIcon {
        margin: 0 -20px -16px 0;
    }

    #right {
        float: right;
        width: 740px;
    }

    #teams, #matches, #contact, #games, #guestbook, #tournies {
        height: auto;
        overflow: auto;
        background: rgba(0, 0, 0, 0.25);
        padding: 20px;
        min-height: 195px;
    }
    .teamLogo a {
    }

    .teamLogo a img {
        position: relative;
        z-index: 25;
    }

    .teamLogo a span {
        position: relative;
        z-index: 50;
        display: none;
        width: 50px;
        height: 20px;
        line-height: 20px;
        background: rgba(0, 0, 0, 0.75);
        text-align: center;
        margin-top: -25px;
    }

    .teamLogo a:hover span {
        display: block;
        color: #FFFFFF;
    }

    .teamInfo h3 {
        display: block;
        height: 30px;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.35);
        padding: 0 10px;
    }

    .teamInfo h3 img {
        margin: 0 3px -1px 0;
    }

    .teamInfo h3 span {
        float: right;
        color: #888888;
        font-weight: normal;
        font-size: 11px;
    }

    .teamWebsite p, .teamIRC p {
        float: left;
        margin-right: 10px;
        color: #FFFFFF;
    }

    .teamWebsite a, .teamIRC a {
        float: left;
        color: #888888;
        margin-right: 3px;
    }

    .teamWebsite a:hover, .teamIRC a:hover {
        color: #FF7700;
    }

    .teamWebsite a span, .teamIRC a span {
        color: #FFFFFF;
        font-style: italic;
    }

    #matches {
    }

    .matchTourney {
        margin-bottom: 20px;
    }

    .matchTourney h3 {
        width: 700px;
        height: 35px;
        line-height: 35px;
        font-family: 'Helvetica Narrow', sans-serif;
        font-weight: bold;
        font-size: 1.4em;
        padding: 0 10px;
        background: rgba(0, 0, 0, 0.25);
        margin-bottom: 1px;
        color: #FFFFFF;
        text-shadow: 1px 1px 0px #000000;
    }

    .matchTourney h3 img {
        margin-bottom: -3px;
    }

    .matchTourney h3 span {
        color: #888888;
        font-family: Arial;
        font-weight: normal;
        font-size: 11px;
        margin: 2px 0 0 10px;
    }

    .matchTourney > a {
        display: block;
        width: 700px;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        padding: 0 10px;
        margin-bottom: 1px;
        overflow: hidden;
    }

    .matchTourney a.win {
        background: rgba(111, 175, 30, 0.20);
    }

    .matchTourney a.win:hover {
        background: rgba(111, 175, 30, 0.30);
    }

    .matchTourney a.loss {
        background: rgba(190, 59, 45, 0.20);
    }

    .matchTourney a.loss:hover {
        background: rgba(190, 59, 45, 0.30);
    }

    .matchTourney a p {
        float: left;
        padding: 0 10px;
        text-shadow: 1px 1px 0px #000000;
    }

    .matchTourney a p.result {
        width: 50px;
        color: #FFFFFF;
    }

    .matchTourney a p.score {
        width: 120px;
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
        padding: 0;
    }

    .matchTourney a.win p.score span {
        color: #6FAF1E;
    }

    .matchTourney a.win p.score span.opponentScore {
        color: #BE3B2D;
    }

    .matchTourney a.loss p.score span {
        color: #BE3B2D;
    }

    .matchTourney a.loss p.score span.opponentScore {
        color: #6FAF1E;
    }

    .matchTourney a p.opponent {
        width: 160px;
        color: #FFFFFF;
    }

    .matchTourney a p.date {
        width: 275px;
        color: #FFFFFF;
        text-align: right;
    }

    .matchTourney a p.match {
        width: 75px;
        color: #00AAFF;
        text-align: right;
    }

    .matchTourney a p.match:hover {
        color: #FF7700;
    }

    #contact h3, #contact h4 {
        display: block;
        height: 30px;
        line-height: 32px;
        margin-bottom: 1px;
        padding: 0 10px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.35);
        color: #00AAFF;
    }

    #contact h4 {
        margin-top: 10px;
    }

    #contact p {
        display: 700px;
        height: 30px;
        margin-top: 1px;
        font-size: 12px;
    }

    #contact p span {
        float: right;
        display: block;
        width: 449px;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background: rgba(0, 0, 0, 0.15);
        color: #888888;
    }

    .gameInfo h3 {
        display: block;
        height: 30px;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.35);
        padding: 0 10px;
    }

    .gameInfo h3 img {
        margin: 0 3px -5px 0;
    }

    .gameInfo h3 span {
        float: right;
        color: #888888;
        font-weight: normal;
        font-size: 11px;
    }

    .gameWebsite p, .gameBB p {
        float: left;
        margin-right: 10px;
        color: #FFFFFF;
    }

    .gameWebsite a, .gameBB a {
        float: left;
        color: #888888;
        margin-right: 3px;
    }

    .gameWebsite a:hover, .gameBB a:hover {
        color: #FF7700;
    }

    .teamWebsite a span, .gameBB a span {
        color: #FFFFFF;
        font-style: italic;
    }
    #tournies .tourney:hover h2 {
        color: #F70;
    }

    #tournies .tourney h2 img {
        margin: -3px 10px 0 0;
    }
</style>