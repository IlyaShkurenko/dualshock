<template>
    <div class="admin">
        <div id="throbber" style="display:none; min-height:120px;"></div>
        <div id="noty-holder"></div>
        <div id="wrapper">
        <router-view></router-view>
            <!-- Navigation -->
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" @click = "$router.push('/')">
                        <img src='DS_logo_насветломфоне2a.png' style="width: 17vw; height: 6.5vw">
                    </a>
                </div>
                <!-- Top Menu Items -->
                <ul class="nav navbar-right top-nav">
                    <li><a href="#" data-placement="bottom" data-toggle="tooltip" data-original-title="Stats"><i class="fa fa-bar-chart-o"></i>
                    </a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Admin User <b class="fa fa-angle-down"></b></a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/settings"><a><i class="fa fa-fw fa-user"></i> Edit Profile</a></router-link></li>
                            <li><a href="http://localhost:5000/diagram"><i class="fa fa-fw fa-cog"></i> Change Password</a></li>
                            <li class="divider"></li>
                            <li><a href="#"><i class="fa fa-fw fa-power-off"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
                <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
                <div class="collapse navbar-collapse navbar-ex1-collapse" style="background-color: #0d3920">
                    <ul class="nav navbar-nav side-nav" style="background-color: #0d3920; margin-top: 60px">
                        <li>
                            <a href="#" data-toggle="collapse" data-target="#submenu-1"><i class="fa fa-fw fa-search"></i> MENU 1 <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                            <ul id="submenu-1" class="collapse">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.1</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.2</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="investigaciones/favoritas"><i class="fa fa-fw fa-user-plus"></i>  MENU 3</a>
                        </li>
                        <li>
                            <a @click="home"><i class="fa fa-fw fa-paper-plane-o" @click="home"></i> Персональная страница</a>
                        </li>
                        <li>
                            <a href="faq"><i class="fa fa-fw fa fa-question-circle"></i> MENU 5</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </nav>


            <div id="page-wrapper">
                <div class="container-fluid" style="margin-left: 60px">

                    <!-- Page Heading -->
                    <!-- /.row -->

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="panel with-nav-tabs panel-primaryes" style="background-color: #1f5f3a">
                                <div class="panel-heading">
                                    <ul class="nav nav-tabs" style="background-color: #0d3920">
                                        <li class="active"><a href="#tab3primary" data-toggle="tab"><span class="fa fa-gamepad"></span> Приставки</a></li>
                                        <li class="dropdown">
                                            <a href="#" data-toggle="dropdown"><span class="glyphicon glyphicon-user"></span>Места</a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#tabadd_place" data-toggle="tab"><span class="glyphicon glyphicon-user"></span> Добавить</a></li>
                                                <li><a href="#tabremove_place" data-toggle="tab"><span class="glyphicon glyphicon-user"></span> Посмотреть</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#tab2primary" data-toggle="tab"><span class="glyphicon glyphicon-cutlery"></span> Eда и напитки</a></li>
                                        <li class="dropdown">
                                            <a href="#" data-toggle="dropdown"><span class="glyphicon glyphicon-cloud"></span> Кальяны</a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#tabadd_hookah" data-toggle="tab"><span class="glyphicon glyphicon-cloud"></span> Добавить</a></li>
                                                <li><a href="#tabremove_hookah" data-toggle="tab"><span class="glyphicon glyphicon-cloud"></span> Удалить</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#tab3primary" data-toggle="tab"><span class="fa fa-beer"></span> Бар</a></li>
                                        <li><a href="#tabusers" data-toggle="tab"><span class="glyphicon glyphicon-user"></span> Пользователи</a></li>
                                        <li class="dropdown">
                                            <a href="#" data-toggle="dropdown"><span class="fa fa-gamepad"></span> Комнаты</a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#tabadd" data-toggle="tab"><span class="fa fa-gamepad"></span> Добавить</a></li>
                                                <li><a href="#tabremove" data-toggle="tab"><span class="fa fa-gamepad"></span> Удалить</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#" data-toggle="dropdown"><span class="fa fa-gamepad"></span> События</a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#tabadd_event" data-toggle="tab"><span class="fa fa-gamepad"></span> Добавить</a></li>
                                                <li><a href="#tabremove_event" data-toggle="tab"><span class="fa fa-gamepad"></span> Удалить</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#tabrates" data-toggle="tab"><span class="glyphicon glyphicon-user"></span> Ставки</a></li>
                                    </ul>
                                </div>
                                <div class="panel-body">
                                    <div class="tab-content">

                                        <div class="tab-pane fade in active" id="tab1primary">
                                            <div v-for="i in 8">
                                                <timer-cmp :ps="i"></timer-cmp>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tab3primary">Primary 3</div>
                                        <div class="tab-pane fade" id="tab2primary">
                                        </div>
                                        <div class="tab-pane fade" id="tabremove"><remove-cmp :rooms = "$store.getters.rooms" @deleteRoom = "deleteRoom"></remove-cmp></div>
                                        <div class="tab-pane fade" id="tabremove_event"><removeevent-cmp :events = "$store.getters.events" @deleteEvent = "deleteEvent"></removeevent-cmp></div>
                                        <div class="tab-pane fade" id="tabremove_hookah"><removehookah-cmp :hookahs = "$store.getters.hookahs" @deleteHookah = "deleteHookah"></removehookah-cmp></div>
                                        <div class="tab-pane fade" id="tabremove_place"><removeplace-cmp :places = "$store.getters.places" @deletePlace = "deletePlace"></removeplace-cmp></div>
                                        <div class="tab-pane fade" id="tabadd_event"><add-event @addEvent = "added"></add-event></div>
                                        <div class="tab-pane fade" id="tabadd_hookah"><add-hookah @addHookah = "added"></add-hookah></div>
                                        <div class="tab-pane fade" id="tabadd_place"><add-place @addPlace = "added"></add-place></div>
                                        <div class="tab-pane fade" id="tabadd"><add-cmp @addRoom = "added"></add-cmp></div>
                                        <div class="tab-pane fade" id="tabusers"><user-list-cmp :users = "$store.getters.users" @toProfile = "toProfile"></user-list-cmp></div>
                                        <div class="tab-pane fade" id="tabrates"><rate-list-cmp :rates = "$store.getters.rates"></rate-list-cmp></div>
                                        <p>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- /#wrapper -->

                    <!-- jQuery -->




                </div>
            </div>
            <!-- /#page-wrapper -->
        </div><!-- /#wrapper -->

    </div>
</template>
<style scoped>
    @media(min-width:768px) {
        .admin {
            margin-top: 50px;
        }
        /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/
    }
    body{
        background-image: url("../images/look.com.ua-110011.jpg");
    }
    #wrapper {
        padding-left: 0;
    }

    #page-wrapper {
        width: 100%;
        padding: 0;
       // background-color: #1f5f3a;
    }

    @media(min-width:768px) {
        #wrapper {
            padding-left: 225px;
        }

        #page-wrapper {
            padding: 22px 10px;
        }
    }

    /* Top Navigation */

    .top-nav {
        padding: 0 15px;
    }

    .top-nav>li {
        display: inline-block;
        float: left;
    }

    .top-nav>li>a {
        padding-top: 20px;
        padding-bottom: 20px;
        line-height: 20px;
        color: #fff;
    }

    .top-nav>li>a:hover,
    .top-nav>li>a:focus,
    .top-nav>.open>a,
    .top-nav>.open>a:hover,
    .top-nav>.open>a:focus {
        color: #fff;
        background-color: #1f5f3a;
    }

    .top-nav>.open>.dropdown-menu {
        float: left;
        position: absolute;
        margin-top: 0;
        /*border: 1px solid rgba(0,0,0,.15);*/
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background-color: #fff;
        -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }

    .top-nav>.open>.dropdown-menu>li>a {
        white-space: normal;
    }

    /* Side Navigation */

    @media(min-width:768px) {
        .side-nav {
            position: fixed;
            top: 60px;
            left: 225px;
            width: 225px;
            margin-left: -225px;
            border: none;
            border-radius: 0;
            border-top: 1px rgba(0,0,0,.5) solid;
            overflow-y: auto;
            background-color: #222;
            /*background-color: #5A6B7D;*/
            bottom: 0;
            overflow-x: hidden;
            padding-bottom: 40px;
        }

        .side-nav>li>a {
            width: 225px;
            border-bottom: 1px rgba(0,0,0,.3) solid;
        }

        .side-nav li a:hover,
        .side-nav li a:focus {
            outline: none;
            background-color: #1f5f3a !important;
        }
    }

    .side-nav>li>ul {
        padding: 0;
        border-bottom: 1px rgba(0,0,0,.3) solid;
    }

    .side-nav>li>ul>li>a {
        display: block;
        padding: 10px 15px 10px 38px;
        text-decoration: none;
        /*color: #999;*/
        color: #fff;
    }

    .side-nav>li>ul>li>a:hover {
        color: #fff;
    }

    .navbar .nav > li > a > .label {
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        top: 14px;
        right: 6px;
        font-size: 10px;
        font-weight: normal;
        min-width: 15px;
        min-height: 15px;
        line-height: 1.0em;
        text-align: center;
        padding: 2px;
    }

    .navbar .nav > li > a:hover > .label {
        top: 10px;
    }

    .navbar-brand {
        padding: 5px 15px;
    }
    .panel.with-nav-tabs .panel-heading{
        padding: 5px 5px 0 5px;
    }
    .panel.with-nav-tabs .nav-tabs{
        border-bottom: none;
    }
    .panel.with-nav-tabs .nav-justified{
        margin-bottom: -1px;
    }
    /********************************************************************/
    /*** PANEL DEFAULT ***/
    .with-nav-tabs.panel-default .nav-tabs > li > a,
    .with-nav-tabs.panel-default .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-default .nav-tabs > li > a:focus {
        color: #777;
    }
    .with-nav-tabs.panel-default .nav-tabs > .open > a,
    .with-nav-tabs.panel-default .nav-tabs > .open > a:hover,
    .with-nav-tabs.panel-default .nav-tabs > .open > a:focus,
    .with-nav-tabs.panel-default .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-default .nav-tabs > li > a:focus {
        color: #777;
        background-color: #ddd;
        border-color: transparent;
    }
    .with-nav-tabs.panel-default .nav-tabs > li.active > a,
    .with-nav-tabs.panel-default .nav-tabs > li.active > a:hover,
    .with-nav-tabs.panel-default .nav-tabs > li.active > a:focus {
        color: #555;
        background-color: #fff;
        border-color: #ddd;
        border-bottom-color: transparent;
    }
    .with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu {
        background-color: #f5f5f5;
        border-color: #ddd;
    }
    .with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a {
        color: #777;
    }
    .with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,
    .with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {
        background-color: #ddd;
    }
    .with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a,
    .with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,
    .with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {
        color: #fff;
        background-color: #555;
    }
    /********************************************************************/
    /*** PANEL PRIMARY ***/
    .with-nav-tabs.panel-primaryes .nav-tabs > li > a,
    .with-nav-tabs.panel-primaryes .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-primaryes .nav-tabs > li > a:focus {
        color: #fff;
    }
    .with-nav-tabs.panel-primaryes .nav-tabs > .open > a,
    .with-nav-tabs.panel-primaryes .nav-tabs > .open > a:hover,
    .with-nav-tabs.panel-primaryes .nav-tabs > .open > a:focus,
    .with-nav-tabs.panel-primaryes .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-primaryes .nav-tabs > li > a:focus {
        color: #fff;
        background-color: #1f5f3a;
        border-color: transparent;
    }
    .with-nav-tabs.panel-primaryes .nav-tabs > li.active > a,
    .with-nav-tabs.panel-primaryes .nav-tabs > li.active > a:hover,
    .with-nav-tabs.panel-primaryes .nav-tabs > li.active > a:focus {
        color: #1f5f3a;
        background-color: #fff;
        border-color: #1f5f3a;
        border-bottom-color: transparent;
    }
    .with-nav-tabs.panel-primaryes .nav-tabs > li.dropdown .dropdown-menu {
        background-color: #1f5f3a;
        border-color: #1f5f3a;
    }
    .with-nav-tabs.panel-primaryes .nav-tabs > li.dropdown .dropdown-menu > li > a {
        color: #fff;
    }
    .with-nav-tabs.panel-primaryes .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,
    .with-nav-tabs.panel-primaryes .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {
        background-color: #1f5f3a;
    }
    .with-nav-tabs.panel-primaryes .nav-tabs > li.dropdown .dropdown-menu > .active > a,
    .with-nav-tabs.panel-primaryes .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,
    .with-nav-tabs.panel-primaryes .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {
        background-color: #1f5f3a;
    }
    /********************************************************************/
    /*** PANEL SUCCESS ***/
    .with-nav-tabs.panel-success .nav-tabs > li > a,
    .with-nav-tabs.panel-success .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-success .nav-tabs > li > a:focus {
        color: #3c763d;
    }
    .with-nav-tabs.panel-success .nav-tabs > .open > a,
    .with-nav-tabs.panel-success .nav-tabs > .open > a:hover,
    .with-nav-tabs.panel-success .nav-tabs > .open > a:focus,
    .with-nav-tabs.panel-success .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-success .nav-tabs > li > a:focus {
        color: #3c763d;
        background-color: #d6e9c6;
        border-color: transparent;
    }
    .with-nav-tabs.panel-success .nav-tabs > li.active > a,
    .with-nav-tabs.panel-success .nav-tabs > li.active > a:hover,
    .with-nav-tabs.panel-success .nav-tabs > li.active > a:focus {
        color: #3c763d;
        background-color: #fff;
        border-color: #d6e9c6;
        border-bottom-color: transparent;
    }
    .with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu {
        background-color: #dff0d8;
        border-color: #d6e9c6;
    }
    .with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a {
        color: #3c763d;
    }
    .with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,
    .with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {
        background-color: #d6e9c6;
    }
    .with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a,
    .with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,
    .with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {
        color: #fff;
        background-color: #3c763d;
    }
    /********************************************************************/
    /*** PANEL INFO ***/
    .with-nav-tabs.panel-info .nav-tabs > li > a,
    .with-nav-tabs.panel-info .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-info .nav-tabs > li > a:focus {
        color: #1f5f3a;
    }
    .with-nav-tabs.panel-info .nav-tabs > .open > a,
    .with-nav-tabs.panel-info .nav-tabs > .open > a:hover,
    .with-nav-tabs.panel-info .nav-tabs > .open > a:focus,
    .with-nav-tabs.panel-info .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-info .nav-tabs > li > a:focus {
        color: #1f5f3a;
        background-color: #1f5f3a;
        border-color: #1f5f3a;
    }
    .with-nav-tabs.panel-info .nav-tabs > li.active > a,
    .with-nav-tabs.panel-info .nav-tabs > li.active > a:hover,
    .with-nav-tabs.panel-info .nav-tabs > li.active > a:focus {
        color: #1f5f3a;
        background-color: #fff;
        border-color: #1f5f3a;
        border-bottom-color: #1f5f3a;
    }
    .with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu {
        background-color: #1f5f3a;
        border-color: #1f5f3a;
    }
    .with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > li > a {
        color: #1f5f3a;
    }
    .with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,
    .with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {
        background-color: #1f5f3a;
    }
    .with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > .active > a,
    .with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,
    .with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {
        color: #fff;
        background-color: #1f5f3a;
    }
    /********************************************************************/
    /*** PANEL WARNING ***/
    .with-nav-tabs.panel-warning .nav-tabs > li > a,
    .with-nav-tabs.panel-warning .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-warning .nav-tabs > li > a:focus {
        color: #8a6d3b;
    }
    .with-nav-tabs.panel-warning .nav-tabs > .open > a,
    .with-nav-tabs.panel-warning .nav-tabs > .open > a:hover,
    .with-nav-tabs.panel-warning .nav-tabs > .open > a:focus,
    .with-nav-tabs.panel-warning .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-warning .nav-tabs > li > a:focus {
        color: #8a6d3b;
        background-color: #faebcc;
        border-color: transparent;
    }
    .with-nav-tabs.panel-warning .nav-tabs > li.active > a,
    .with-nav-tabs.panel-warning .nav-tabs > li.active > a:hover,
    .with-nav-tabs.panel-warning .nav-tabs > li.active > a:focus {
        color: #8a6d3b;
        background-color: #fff;
        border-color: #faebcc;
        border-bottom-color: transparent;
    }
    .with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu {
        background-color: #fcf8e3;
        border-color: #faebcc;
    }
    .with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > li > a {
        color: #8a6d3b;
    }
    .with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,
    .with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {
        background-color: #faebcc;
    }
    .with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > .active > a,
    .with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,
    .with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {
        color: #fff;
        background-color: #8a6d3b;
    }
    /********************************************************************/
    /*** PANEL DANGER ***/
    .with-nav-tabs.panel-danger .nav-tabs > li > a,
    .with-nav-tabs.panel-danger .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-danger .nav-tabs > li > a:focus {
        color: #a94442;
    }
    .with-nav-tabs.panel-danger .nav-tabs > .open > a,
    .with-nav-tabs.panel-danger .nav-tabs > .open > a:hover,
    .with-nav-tabs.panel-danger .nav-tabs > .open > a:focus,
    .with-nav-tabs.panel-danger .nav-tabs > li > a:hover,
    .with-nav-tabs.panel-danger .nav-tabs > li > a:focus {
        color: #a94442;
        background-color: #ebccd1;
        border-color: transparent;
    }
    .with-nav-tabs.panel-danger .nav-tabs > li.active > a,
    .with-nav-tabs.panel-danger .nav-tabs > li.active > a:hover,
    .with-nav-tabs.panel-danger .nav-tabs > li.active > a:focus {
        color: #a94442;
        background-color: #fff;
        border-color: #ebccd1;
        border-bottom-color: transparent;
    }
    .with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu {
        background-color: #f2dede; /* bg color */
        border-color: #ebccd1; /* border color */
    }
    .with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > li > a {
        color: #a94442; /* normal text color */
    }
    .with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,
    .with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {
        background-color: #ebccd1; /* hover bg color */
    }
    .with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > .active > a,
    .with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,
    .with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {
        color: #fff; /* active text color */
        background-color: #a94442; /* active bg color */
    }

    .img {
        width: 100%;
    }

    .media-object{
        width: 250px;
        margin: 1px 6px 1px 1px;
        float: left;
        display: block;
        height: 150px;
    }

    .p {
        font-family: 'Verdana','Geneva','sans-serif';
        text-align: justify;
        color: #333;
        display: block;
        -webkit-margin-before: 1em;
        -moz-margin-before: 1em;
        -webkit-margin-after: 1em;
        -moz-margin-after: 1em;
        -webkit-margin-start: 0px;
        -moz-margin-start: 0px;
        -webkit-margin-end: 0px;
        -moz-margin-end: 0px;
    }
    .panel-primaryes {
        border-color: #1f5f3a;
    }
    .panel-primaryes > .panel-heading {
        color: #fff;
        background-color: #1f5f3a;
        border-color: #1f5f3a;
    }
    .panel-primaryes > .panel-heading + .panel-collapse > .panel-body {
        border-top-color: #1f5f3a;
    }
    .panel-primaryes > .panel-heading .badge {
        color: #1f5f3a;
        background-color: #fff;
    }
    .panel-primaryes > .panel-footer + .panel-collapse > .panel-body {
        border-bottom-color: #1f5f3a;
    }
    .panel-info > .panel-heading {
        color: #1f5f3a;
        background-color: #d9edf7;
        border-color: #1f5f3a;
    }
    .panel-info > .panel-heading + .panel-collapse > .panel-body {
        border-top-color: #1f5f3a;
    }
    .panel-info > .panel-heading .badge {
        color: #1f5f3a;
        background-color: #1f5f3a;
    }
    body{
        background-image: url("../images/zel2.jpg");
    }

</style>

<script>
    import Remove from './Remove.vue'
    import RemoveEvent from './RemoveEvent.vue'
    import RemoveHookah from './RemoveHookah.vue'
    import RemovePlace from './RemovePlace.vue'
    import Add from './Items/AddItem.vue'
    import Timer from  './Timer.vue'
    import AddEvent from './Items/AddEvent.vue'
    import AddPlace from './Items/AddPlace.vue'
    import AddHookah from './Items/AddHookah.vue'
    import UserList from './UserList.vue'
    import RateList from './RatesList.vue'
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        data(){
            return{
                rm: this.$store.state.rooms,
                ev: this.$store.state.events
            }
        },
        beforeCreate(){
            if (localStorage.getItem('role') !== 'admin'){
                this.$router.push('/');
            }
        },
        components: {
            removeCmp: Remove,
            removeeventCmp: RemoveEvent,
            removehookahCmp: RemoveHookah,
            removeplaceCmp: RemovePlace,
            addCmp: Add,
            addHookah: AddHookah,
            addPlace: AddPlace,
            userListCmp: UserList,
            addEvent: AddEvent,
            timerCmp: Timer,
            rateListCmp: RateList
        },
        methods: {
            deleteRoom(room){
                let index = this.$store.state.rooms.indexOf(room);
                this.$store.state.rooms.splice(index,1);
                this.delRooms(room);
                location.reload();
                //this.getRooms()
            },
            deleteHookah(hookah){
                let index = this.$store.state.hookahs.indexOf(hookah);
                this.$store.state.hookahs.splice(index,1);
                this.delHookah(hookah);
                location.reload();
                //this.getRooms()
            },
            deletePlace(place){
                let index = this.$store.state.places.indexOf(place);
                this.$store.state.places.splice(index,1);
                this.delPlace(place);
                location.reload();
                //this.getRooms()
            },
            deleteEvent(event){
                let index = this.$store.state.events.indexOf(event);
                this.$store.state.events.splice(index,1);
                this.delEvent(event);
                location.reload();
                //this.getRooms()
            },
            added(){
                this.$router.go(this.$router.currentRoute);
                this.getRooms()
            },
            toProfile(user){
                let index = this.$store.state.users.indexOf(user);
                this.$router.push('user/' + index);
            },
            home(){
                let role = localStorage.getItem('role');
                let index = -1;
                console.log(localStorage.getItem('username'))
                this.$store.state.users.forEach(function(item, i, arr) {
                    if(item.username === localStorage.getItem('username')){
                        index = i;
                    }
                });
                if(role === 'admin'){
                    this.$router.push('/user/'+index);
                }
            },
        ...mapActions([
            'getRooms',
            'delRooms',
            'delHookah',
            'delPlace',
            'getUsers',
            'delEvent',
        ])
        },
        computed: {
            ...mapGetters([
                'rooms',
                'users'
            ])
        }
    }
</script>
