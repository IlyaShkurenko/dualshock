<template>
    <div>
    <body class="logged  xCSGO1710032">
    <header-cmp></header-cmp>
    <loginandreg></loginandreg>
    <div class="w960" style="overflow: hidden; margin-top: 50px">
        <div class="nav">
            <ul>
                <li>
                    <a href="/" class="home "><span></span></a>
                </li>
                <li>
                    <a href="/tourney/list/public" class="current">Турниры</a>
                </li>
            </ul>
        </div>
        <div id="Breadcrumbs">
            <a href="/" class=""><span>DualShock</span></a><a href="/tourney" class="previous"><span>Турниры</span></a><a href="/xCSGO1710032" class="Last"><span>FIFA18 | Турнир открытие </span></a>
        </div>
        <div id="BreadcrumbsFiller">&nbsp;</div>
        <div class="adWide top">
        </div><div id="Error"><img src="" alt="" /><span></span></div><div id="Message"><img src="" alt="" /><span></span></div><div id="tourneyTitleBar">
        <h2>
            <img src="../../images/fifa.jpeg" alt="FIFA 18" style="height: 30px; width: 30px; margin-top: 10px"/>FIFA18 | Турнир открытие </h2>
        <div id="ajaxNav">
            <div id="ajaxLoading">
            </div>
            <a href="#participants">Teams</a>
            <a href="#streams">Streams</a>
            <a href="#info" class="current">Info</a>
        </div>
        <a href="/xCSGO1710032/join" class="join">Join this Tournament</a>

    </div>
        <div id="tourneyBannerContainer" style="height: 27vw; width: 80vw">
            <div id="tourneyBanner" style="height: 99%; width: 100%"></div>
        </div>
        <div id="socialButtons">
        </div></div><div id="tourneyContent"><div class="w960">
        <div id="toolsContainer">
            <div id="toolsNav">
                <a href="#" class="current">Детали</a>
                <a href="#" id="referencesLink">Сетка</a>
            </div>
            <div class="tools current">
                <table class="toolsTable">
                    <tr>
                        <th>Статус</th>
                        <td>Набор участников</td>
                    </tr>
                    <tr>
                        <th>Игра</th>
                        <td><img src="../../images/fifa.jpeg" alt="Counter-Strike: Global Offensive"  style="width: 30px; height: 30px"/><a href="/game/load/CSGO">FIFA 18</a></td>
                    </tr>
                    <tr>
                        <th>Максимум игроков</th>
                        <td>16</td>
                    </tr>
                    <tr>
                        <th>Зарегистрировано</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Принято</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Мод</th>
                        <td>1v1</td>
                    </tr>
                    <tr>
                        <th>Правила</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Дата начала</th>
                        <td>День Месяц Число, Год</td>
                    </tr>
                    <tr>
                        <th>Просмотры турнира</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Денежный сбор</th>
                        <td>100 грн</td>
                    </tr>
                    <tr>
                        <th>Призовой фонд</th>
                        <td>1000 грн</td>
                    </tr>
                    <tr>
                        <th>Дополнительный приз</th>
                        <td>Скидка 5%</td>
                    </tr>
                </table>
                <div id="details">
                    <h2>Описание</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div class="tools" id="references"></div>
        </div>
       </div></div><div class="w960"></div>
    <div class="adWide bottom">
      </div>
    <div id="sponsorLogos">
    </div>
    <logo-cmp></logo-cmp>

    </body>
    </div>
</template>
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
    #tourneyBanner{
        background-image: url("http://static.mvideo.ru/media/Promotions/Promo_Page/2017/June/fifa-18/fifa-18-top1-d.png");
        background-size: 100%  100%;

    }
    #tourneyBanner img{
        height: 10px;
    }
    body {
        line-height: 1.5;
        position: relative;
        z-index: 1;
        background-image: url("../../images/look.com.ua-110011.jpg");
        border: 0;
        color: #FFF;
        font-family: 'Helvetica Narrow', sans-serif; font-weight: bold;
        font-size: 12px;
        text-align: left
    }

    ol, ul {
        list-style: none
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

    .header {
        height: 150px
    }

    .header img.left {
        float: left;
        margin-left: 10px;
        padding: 35px 0
    }

    .header img.right {
        float: right;
        margin-right: 20px
    }

    .header img.bigfoot {
        padding: 53px 0
    }

    .header img.ttesports {
        padding: 46px 0
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
        width: 100%;
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

    .nav ul li.createTournament {
        float: right;
        margin-right: 0
    }

    .nav ul li.createTournament a {
        color: #90CC44
    }

    .nav ul li.createTournament a:hover, .nav ul li.createTournament a:focus, .nav ul li.createTournament a.current {
        background: #6FAF1E
    }

    .nav ul li.reportBug {
        float: right;
        margin-right: 1px
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
        font-family: Cuprum;
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
        background: url(https://binarybeast.com/img/home2.png) no-repeat;
        margin: 7px 0 0
    }

    .nav ul li a.current:active {
        box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8)
    }

    .nav .search {
        float: right;
        z-index: 3;
        position: relative;
        width: 235px;
        height: 35px;
        line-height: 35px;
        background: rgba(0, 0, 0, 0.5);
        padding: 1px
    }

    .nav .search:hover {
        background: rgba(0, 0, 0, 0.25)
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
        background: url(https://binarybeast.com/img/button-bg-hover.jpg) repeat-x
    }

    .nav .search form button:active {
        background: url(https://binarybeast.com/img/button-bg-active.jpg) repeat-x;
        box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8);
        -webkit-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: inset 0 9px 18px rgba(0, 0, 0, 0.8)
    }

    .nav .search form button span {
        display: block;
        width: 31px;
        height: 31px;
        background: url(https://binarybeast.com/img/search.png) no-repeat;
        margin: 0
    }

    .nav .search form button:active span, .nav .search form button:hover span {
        background: url(https://binarybeast.com/img/search-overlay.png) no-repeat;
        margin: 0
    }

    #Breadcrumbs {
        position: relative;
        z-index: 10;
        display: inline-block;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        background: url(https://binarybeast.com/img/bg-breadcrumbs.jpg);
        margin: 1px 0 10px
    }

    #Breadcrumbs a {
        float: left;
        display: block;
        height: 25px;
        width: auto;
        padding-right: 15px;
        background: url(https://binarybeast.com/img/breadcrumbsarrow.png) no-repeat right
    }

    #Breadcrumbs a span {
        display: block;
        height: 25px;
        background: rgba(0, 0, 0, 0.5);
        color: #888;
        padding: 0 5px 0 10px
    }

    #Breadcrumbs a.Last {
        background: url(https://binarybeast.com/img/breadcrumbsarrow50-25.png) no-repeat right
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

    .dd .ddTitle span.ddTitleText img {
        text-align: left;
        padding: 2px 5px 0 0
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

    .adWide {
        display: block;
        float: none;
        clear: both;
        width: 728px;
        margin: 10px auto 5px
    }

    .adWide.bottom {
        margin-top: 35px
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

    #sponsorLogos, #partnerLogos {
        width: 981px !important;
        padding: 20px 50px 20px 200px !important
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

    .bb-bar form, .bb-bar ul, .listTable .pageStepper, fieldset .h125 .leftCentered .PaddedInput {
        float: right
    }

    .bb-bar form input, .bb-bar ul li, .listTable .filter, .tabs ul, div.PaddedInput img, .terminal .cmd span {
        float: left
    }

    a.oauth img, .CommentsBox .CommentContainer .Options .Avatar {
        margin-top: 3px
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
        background: url(https://binarybeast.com/img/home2-hover.png) no-repeat
    }

    body.guest #TimestampContainer, fieldset textarea, fieldset select {
        width: 200px
    }

    #TimestampContainer .Add:hover, #TimestampContainer .Add:hover, #TimestampContainer .Timestamps .Timestamp .Remove:hover {
        background-position: 0 -16px
    }

    .listTable table tr td img, table tr th img, .CommentsBox .CommentContainer .Admin img {
        vertical-align: top;
        margin-right: 5px
    }

    .listTable table tr:nth-child(even):hover td, .listTable table tr:nth-child(odd):hover td {
        background: rgba(0, 0, 0, 0.50)
    }

    .listTable table tr td:last-child, #footer .w960.top .links ul#LinksLeftColumn {
        width: 80px
    }

    .listTable table tr td input, #sponsorLogos a img.bigfootLogo {
        margin-bottom: -5px
    }

    .PaddedButton.Red:hover, .PaddedButton.Red:focus, ul.DropDown li a:hover {
        background: #BE3B2D;
        color: #FFF
    }

    input[readonly], textarea[readonly], input[readonly]:focus, textarea[readonly]:focus {
        background: none;
        color: #FFF
    }

    a.calsun, .terminal .terminal-output div.error, .terminal .terminal-output div.error div {
        color: red
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

    @import url('https://binarybeast.com/fonts.googleapis.com/css?family=Open+Sans');
    #replayDownload {
        display: block;
        height: 30px;
        line-height: 30px;
        width: 960px;
        background: rgba(0, 144, 0, 0.35);
        margin: 1px 0;
        padding: 0 10px
    }

    #tourneyBannerContainer {
        height: 160px;
        width: 960px;
        background: rgba(0, 0, 0, 0.50);
        margin-bottom: 10px;
        padding: 5px
    }

    #tourneyBanner {
        height: 150px;
        width: 950px
    }

    #socialButtons {
        width: 960px;
        height: 25px;
        line-height: 25px;
        margin-bottom: 10px;
        padding: 0 0 0 10px
    }

    #socialButtons .twitter-share-button, #socialButtons .facebook, #socialButtons .plusOne {
        float: right;
        margin-left: 10px;
        margin-top: 2px;
        max-width: 100px
    }

    #socialButtons .plusOne {
        margin-top: 0
    }

    #socialButtons .facebook {
        margin-left: -20px
    }

    #tourneyTitleBar {
        width: 960px;
        height: 50px;
        line-height: 50px;
        background: rgba(0, 0, 0, 0.50);
        padding-right: 5px;
        margin-top: 1px;
        margin-bottom: 1px
    }

    #tourneyTitleBar h2 {
        display: inline-block;
        float: left;
        font-weight: 400;
        font-family: Cuprum;
        font-size: 1.4em;
        text-shadow: 1px 1px 0 #000;
        color: #FFF;
        padding: 0 15px
    }

    #tourneyTitleBar h2 img {
        margin: 0 5px -2px 0
    }

    #tourneyTitleBar a, #tourneyTitleBar div.admin {
        display: inline-block;
        float: left;
        font-size: 12px;
        cursor: pointer;
        text-shadow: 1px 1px 0 #000;
        color: #0AF;
        padding: 0 10px
    }

    #tourneyTitleBar a.join, #tourneyTitleBar a.reportMatch, #tourneyTitleBar a.confirm {
        color: #90CC44
    }

    #tourneyTitleBar a.current, #tourneyTitleBar a:hover, #tourneyTitleBar div.admin.current, #tourneyTitleBar div.admin:hover {
        color: #F70;
        background: rgba(0, 0, 0, 0.50)
    }

    #tourneyTitleBar div.admin ul.DropDown li.important a:hover {
        background: #BE3B2D;
        color: #FFF
    }

    #tourneyTitleBar div.admin ul.DropDown li.highlight a {
        color: #6FAF1E
    }

    #tourneyTitleBar div.admin ul.DropDown li.highlight a:hover {
        background: #6FAF1E;
        color: #FFF
    }

    #toolsContainer {
        margin-top: -35px
    }

    #toolsNav {
        height: 35px;
        line-height: 35px
    }

    #toolsNav a {
        display: block;
        float: left;
        height: 34px;
        background: rgba(0, 0, 0, 0.50);
        text-shadow: 1px 1px 0 #000;
        margin-right: 1px;
        color: #888;
        padding: 0 10px
    }

    #toolsNav a.current {
        color: #0AF;
        background: rgba(0, 0, 0, 0.25);
        height: 35px
    }

    .tools {
        display: none;
        background: rgba(0, 0, 0, 0.25);
        overflow: hidden;
        padding: 20px
    }

    .tools .toolsTable {
        width: 450px;
        float: left;
        border-collapse: separate;
        border-spacing: 1px;
        margin-top: -1px
    }

    .tools .toolsTable tr {
        line-height: 25px;
        height: 35px
    }

    .tools .toolsTable tr th {
        background: rgba(0, 0, 0, 0.25);
        text-align: right;
        font-weight: 400;
        font-style: italic;
        font-size: 12px;
        color: #888;
        padding: 5px 10px
    }

    .tools .toolsTable tr td {
        background: rgba(0, 0, 0, 0.1);
        padding: 5px 10px
    }

    .tools .toolsTable tr td img {
        display: block;
        float: left;
        margin: 3px 10px 0 0
    }

    .tools #details {
        width: 450px;
        float: right
    }

    .tools #details h2 {
        display: block;
        height: 35px;
        line-height: 25px;
        background: rgba(0, 0, 0, 0.25);
        font-family: 'Helvetica Narrow', sans-serif; font-weight: bold;
        font-size: 12pt;
        color: #0AF;
        margin-bottom: 1px;
        padding: 5px 20px
    }

    .tools #details p {
        background: rgba(0, 0, 0, 0.1);
        line-height: 20px;
        padding: 10px 20px
    }

    .tools a.reference span {
        width: 100px;
        float: left;
        color: #FFF
    }

    .tools.maps .round {
        display: block;
        width: 920px;
        margin-bottom: 20px
    }

    .tools.maps .round h3 {
        display: block;
        height: 30px;
        line-height: 30px;
        color: #FFF;
        background: rgba(0, 0, 0, 0.50);
        padding: 0 10px
    }

    .tools.maps .round .roundInfo {
        display: block;
        height: 30px;
        line-height: 30px;
        margin-top: 1px
    }

    .tools.maps .round .roundInfo p {
        display: block;
        float: left;
        margin-right: 1px;
        background: rgba(0, 0, 0, 0.25);
        color: #888;
        padding: 0 10px
    }

    .tools.maps .round .roundInfo p.bestOf {
        width: 200px
    }

    .tools.maps .round .roundInfo p.otherMaps {
        width: 418px;
        margin-right: 0
    }

    .tools#mapPool .map p {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        color: #888;
        background: rgba(0, 0, 0, 0.35);
        text-shadow: 1px 1px 0 #000;
        padding: 0 10px
    }

    table.picture tr th {
        height: 40px;
        background: rgba(0, 0, 0, 0.50)
    }

    table.picture tr td {
        background: rgba(0, 0, 0, 0.25)
    }

    table.picture tr td img {
        display: block;
        height: 30px;
        width: 30px;
        margin: 5px 5px 6px
    }

    table.teamInfo tr th {
        height: 40px;
        line-height: 40px;
        background: rgba(0, 0, 0, 0.50);
        text-align: center;
        color: #0AF;
        font-weight: 400;
        text-shadow: 1px 1px 0 #000
    }

    table.teamInfo tr td {
        height: 41px;
        line-height: 40px;
        background: rgba(0, 0, 0, 0.25)
    }

    .player .overlay .info h6 {
        display: block;
        height: 20px;
        line-height: 20px;
        color: #F86300;
        text-shadow: 0 -1px 0 #000
    }

    .player .overlay .info p {
        display: block;
        width: 100%;
        height: 15px;
        line-height: 15px;
        margin-bottom: 10px;
        color: #888
    }

    #tourneyTitleBar div.admin, #tourneyTitleBar a.join, #tourneyTitleBar a.confirm, #tourneyTitleBar a.leave, #tourneyTitleBar a.reportMatch, #ajaxNav, .bracket.right div.Bracket div.BracketColumn, .bracket.right div.Bracket div.LineColumn {
        float: right
    }

    #tourneyTitleBar div.admin, #tourneyTitleBar a.leave, #tourneyTitleBar div.admin ul.DropDown li.important a {
        color: #BE3B2D
    }

    #tourneyTitleBar div.admin ul.DropDown li a, .RoundFormat .BestOf b {
        color: #0AF
    }

    #tourneyTitleBar div.admin ul.DropDown li a:hover, #groupsNav a:hover {
        background: #08D;
        color: #FFF
    }

    #changeSettings, .bracket div.Bracket div.BracketColumn div.RoundFormat.Compact {
        margin-bottom: 10px
    }

    #changeSettings h2, #managePermissions h2, #changeBanner h2 {
        background: rgba(0, 0, 0, 0.50);
        display: block;
        height: 35px;
        line-height: 35px;
        font-family: 'Helvetica Narrow', sans-serif; font-weight: bold;
        font-size: 1.4em;
        text-shadow: 1px 1px 0 #000;
        color: #0AF;
        margin-bottom: 1px;
        padding: 0 15px
    }

    #changeSettings h2 span, #managePermissions h2 span, #changeBanner h2 span, .tools.maps .round .roundInfo p span, .group h2 span, .match p a, .match p.winner, .match p.viewer, .versus a:hover, .match p.loser, .match p.unplayed, .match p.blank, .match p.draw {
        color: #FFF
    }

    #settings, #permissions, #bannerForm {
        background: rgba(0, 0, 0, 0.25);
        padding: 10px
    }

    #toolsNav a:hover, .tools a.reference:hover span.refURL, ul#bracketNav li a:hover, #referencesHeader b, .match p a:hover {
        color: #F70
    }

    .tools.current, .bracketPane.current, .player:hover .overlay {
        display: block
    }

    .tools.maps .round .roundInfo p.firstMap, #participantsTable table tr td.account {
        width: 300px
    }

    table.teamInfo tr td.nationality, table.teamInfo tr td.wins, table.teamInfo tr td.draws, table.teamInfo tr td.lbWins, table.teamInfo tr td.edit, #participantsTable table tr td.avatar {
        text-align: center
    }

    #bracketContainer.bracket100, #participantsTable.full table {
        width: 100%
    }

    #bracketContainer ul li, .RoundFormat .BestOf, .match .versus a.view {
        float: left
    }

    .bracket div.Bracket div.BracketColumn .match, .BracketColumn .versus {
        width: 212px
    }

    .bracket div.Bracket div.BracketColumn div.BracketWinner, div.BracketLineTop.Compact, div.BracketLineBottom.Compact, div.BracketLineConnectorTop.Compact, div.BracketLineConnectorBottom.Compact, div.BracketLineStraight.Compact, #CompactViewButton span.CompactMode, #CompactViewButton span.ExpandedMode, .leaderboard table tr td.TourneyTeamID, .leaderboard table tr td.NetworkDisplayName, .match:hover .versus .MatchNumber, .match p span.spoiler, .match p span.SpoilerScoreTemp, #compactViewButton .compact, #compactViewButton .expand {
        display: none
    }

    div.BracketLineStraightBlue, .bracket.right div.BracketLineStraightBlue {
        border-bottom: 3px solid #1b445e
    }

    #participantsTable tr td, #participantsTable tr th, #tourneyStreams td {
        vertical-align: middle
    }

    #participantsTable table tr td.nationality img, .round.three {
        margin-right: 0
    }

    #participantsTable table tr td.wins, #participantsTable table tr td.lbWins, #participantsTable table tr td.draws {
        width: 95px
    }

    #groups.full, #groupsNav.full, .groupfiller.full, .group.full {
        width: 758px
    }

    .leaderboard table tr.advance td, .match p.winner span {
        background: rgba(111, 175, 30, 0.20)
    }

    .leaderboard table tr.advance:hover td, .leaderboard table tr.advance.hover td, .match p.winner:hover span, .match p.winner.hover span {
        background: rgba(111, 175, 30, 0.50)
    }

    .leaderboard table tr.playoff td, .match p.viewer span {
        background: rgba(255, 155, 0, 0.20)
    }

    .leaderboard table tr.playoff:hover td, .match p.viewer:hover span, .match p.viewer.hover span {
        background: rgba(255, 155, 0, 0.50)
    }
</style>
<script>
    import Header from '../Header.vue';
    import Footer from '../Footer.vue';
    import Logo from '../Items/Logo.vue'
    import LoginAndReg from '../LoginAndReg.vue'
    export default {
        components: {
            headerCmp: Header,
            logoCmp: Logo,
            footerCmp: Footer,
            loginandreg: LoginAndReg
        }
    }
</script>