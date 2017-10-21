<template>
    <div>
        <div id="throbber" style="display:none; min-height:120px;"></div>
        <div id="noty-holder"></div>
        <div id="wrapper">
            <p>{{$store.state.rooms.length}}</p>
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
                    <a class="navbar-brand" href="#">
                        <img src="/" alt="LOGO">
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
                            <li><a href="#"><i class="fa fa-fw fa-user"></i> Edit Profile</a></li>
                            <li><a href="#"><i class="fa fa-fw fa-cog"></i> Change Password</a></li>
                            <li class="divider"></li>
                            <li><a href="#"><i class="fa fa-fw fa-power-off"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
                <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
                <div class="collapse navbar-collapse navbar-ex1-collapse" style="background-color: #0d3920">
                    <ul class="nav navbar-nav side-nav" style="background-color: #0d3920">
                        <li>
                            <a href="#" data-toggle="collapse" data-target="#submenu-1"><i class="fa fa-fw fa-search"></i> MENU 1 <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                            <ul id="submenu-1" class="collapse">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.1</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.2</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="collapse" data-target="#submenu-2"><i class="fa fa-fw fa-star"></i>  MENU 2 <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                            <ul id="submenu-2" class="collapse">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 2.1</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 2.2</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 2.3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="investigaciones/favoritas"><i class="fa fa-fw fa-user-plus"></i>  MENU 3</a>
                        </li>
                        <li>
                            <a href="sugerencias"><i class="fa fa-fw fa-paper-plane-o"></i> MENU 4</a>
                        </li>
                        <li>
                            <a href="faq"><i class="fa fa-fw fa fa-question-circle"></i> MENU 5</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </nav>


            <div id="page-wrapper">
                <div class="container-fluid" >

                    <!-- Page Heading -->
                    <!-- /.row -->

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="panel with-nav-tabs panel-primaryes" style="background-color: #1f5f3a">
                                <div class="panel-heading">
                                    <ul class="nav nav-tabs" style="background-color: #0d3920">
                                        <li class="active"><a href="#tab1primary" data-toggle="tab"><span class="fa fa-gamepad"></span> Приставки</a></li>
                                        <li><a href="#tab2primary" data-toggle="tab"><span class="glyphicon glyphicon-cutlery"></span> Eда и напитки</a></li>
                                        <li><a href="#tab3primary" data-toggle="tab"><span class="glyphicon glyphicon-cloud"></span> Кальяны</a></li>
                                        <li><a href="#tab3primary" data-toggle="tab"><span class="fa fa-beer"></span> Бар</a></li>
                                        <li class="dropdown">
                                            <a href="#" data-toggle="dropdown"><span class="fa fa-gamepad"></span> Приставки и комнаты</a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a href="#tabadd" data-toggle="tab"><span class="fa fa-beer"></span> Добавить</a></li>
                                                <li><a href="#tabremove" data-toggle="tab"><span class="fa fa-beer"></span> Удалить</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="panel-body">
                                    <div class="tab-content">
                                        <div class="tab-pane fade in active" id="tab1primary">
                                            <div class="well">
                                                <div class="media">
                                                    <a class="pull-left" href="#">
                                                        <img class="media-object" src="http://i1.wp.com/www.moneybook.ro/wp-content/uploads/2016/02/polen-crud.jpg?resize=768%2C480">
                                                    </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading">APILARNILUL</h4>
                                                        <p class="text">By Francisco</p>
                                                        <p>Apilarnilul este un produs apicol natural, obținut din larvele de
                                                            trântor care constituie materia primă principală. Acestea la vârsta de
                                                            7 zile sunt recoltate integral obținându-se astfel apilarnilul.În mod
                                                            normal, sezonul apicol activ este în perioada mai-iulie. Asta într-o colonie
                                                            de albine constituită ca o unitate biologică. Într-o astfel de colonie,
                                                            numărul indivizilor masculi este de 400-1800 trântori rareori numărul lor
                                                            depășind 2000. Într-o colonie de albine numărul de trântori pe care îi crește
                                                            și îi tolerează este limitat și depinde de comportamentul coloniei ca un tot unitar.</p>
                                                        <ul class="list-inline list-unstyled">
                                                            <li><span><i class="glyphicon glyphicon-calendar"></i> 1 days, 8 hours </span></li>
                                                            <li>|</li>
                                                            <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                                                            <li>|</li>
                                                            <li>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                            </li>
                                                            <li>|</li>
                                                            <li>
                                                                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->
                                                                <span><i class="fa fa-facebook-square"></i></span>
                                                                <span><i class="fa fa-twitter-square"></i></span>
                                                                <span><i class="fa fa-google-plus-square"></i></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="well">
                                                <div class="media">
                                                    <a class="pull-left" href="#">
                                                        <img class="media-object" src="http://i0.wp.com/www.moneybook.ro/wp-content/uploads/2016/08/images_8.jpg?resize=299%2C224">
                                                    </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading">Ziua Femeii</h4>
                                                        <p class="text-right">By Anailuj</p>
                                                        <p>In fiecare an, pe 8 Martie, trebuie sa le spunem din toata inima La Multi Ani!
                                                            De cand se serbeaza Ziua Femeii?
                                                            Am putea spune ca Ziua femeii, Ziua mamei se serbeaza inca de pe vremea grecilor antici.
                                                            In fiecare primavara, ei o serbau pe Rhea, mama tuturor zeilor.
                                                            In cultura multor tari, 8 Martie s-a transformat dintr-o simpla zi a calendarului in sarbatoarea primaverii,
                                                            in ziua in care mamele, bunicile, sotiile, prietenele, surorile, fiicele, colegele,
                                                            primesc flori si mici daruri simbolice care subliniaza rolul lor acasa, in familie, in societate.
                                                            1907 – La Copenhaga a avut loc prima Conferinta a femeilor socialiste, la initiativa ziaristei germane Clara Zetkin,
                                                            care conducea din 1890 revista “Die Gleichheit” (Egalitatea).</p>
                                                        <ul class="list-inline list-unstyled">
                                                            <li><span><i class="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
                                                            <li>|</li>
                                                            <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                                                            <li>|</li>
                                                            <li>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                            </li>
                                                            <li>|</li>
                                                            <li>
                                                                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->
                                                                <span><i class="fa fa-facebook-square"></i></span>
                                                                <span><i class="fa fa-twitter-square"></i></span>
                                                                <span><i class="fa fa-google-plus-square"></i></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tab2primary">
                                            <div class="well">
                                                <div class="media">
                                                    <a class="pull-left" href="#">
                                                        <img class="media-object" src="http://www.moneybook.ro/moneybook-feed.png">
                                                    </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading">Galerie</h4>
                                                        <p class="text">By Manager</p>
                                                        <p><img width="300" height="300" src="http://i1.wp.com/www.moneybook.ro/wp-content/uploads/2016/08/maieu-ALB_1.jpg?resize=300%2C300"
                                                                class="attachment-image" alt="image1" title="image"
                                                                sizes="(max-width: 300px) 100vw, 300px">
                                                            <img width="300" height="300" src="http://i1.wp.com/www.moneybook.ro/wp-content/uploads/2015/11/8Martie.png?resize=300%2C265"
                                                                 class="attachment-image" alt="image1" title="image"
                                                                 sizes="(max-width: 300px) 100vw, 300px">
                                                            <img width="300" height="300" src="http://i0.wp.com/www.moneybook.ro/wp-content/uploads/2014/12/pisici.jpg?w=537"
                                                                 class="attachment-image" alt="image1" title="image"
                                                                 sizes="(max-width: 300px) 100vw, 300px">
                                                            <img width="300" height="300" src="http://i0.wp.com/www.moneybook.ro/wp-content/uploads/2014/10/beagle1.jpg?w=448"
                                                                 class="attachment-image" alt="image1" title="image"
                                                                 sizes="(max-width: 300px) 100vw, 300px">
                                                        </p>
                                                        <ul class="list-inline list-unstyled">
                                                            <li><span><i class="glyphicon glyphicon-calendar"></i> 1 days, 8 hours </span></li>
                                                            <li>|</li>
                                                            <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                                                            <li>|</li>
                                                            <li>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                            </li>
                                                            <li>|</li>
                                                            <li>
                                                                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->
                                                                <span><i class="fa fa-facebook-square"></i></span>
                                                                <span><i class="fa fa-twitter-square"></i></span>
                                                                <span><i class="fa fa-google-plus-square"></i></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="well">
                                                <div class="media">
                                                    <a class="pull-left" href="#">
                                                        <img class="media-object" src="http://www.moneybook.ro/moneybook-feed.png">
                                                    </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading">Galerie2</h4>
                                                        <p class="text-right">By Manager</p>
                                                        <p><img width="300" height="300" src="http://dev.webofiice.ro/anunt/oc-content/uploads/0/7_thumbnail.jpg"
                                                                class="attachment-image" alt="image1" title="image"
                                                                sizes="(max-width: 300px) 100vw, 300px">
                                                            <img width="300" height="300" src="http://dev.webofiice.ro/anunt/oc-content/uploads/0/6_thumbnail.jpg"
                                                                 class="attachment-image" alt="image1" title="image"
                                                                 sizes="(max-width: 300px) 100vw, 300px">
                                                            <img width="300" height="300" src="http://i0.wp.com/www.moneybook.ro/wp-content/uploads/2014/12/pisici.jpg?w=537"
                                                                 class="attachment-image" alt="image1" title="image"
                                                                 sizes="(max-width: 300px) 100vw, 300px">
                                                            <img width="300" height="300" src="http://i0.wp.com/www.moneybook.ro/wp-content/uploads/2014/10/beagle1.jpg?w=448"
                                                                 class="attachment-image" alt="image1" title="image"
                                                                 sizes="(max-width: 300px) 100vw, 300px"></p>
                                                        <ul class="list-inline list-unstyled">
                                                            <li><span><i class="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
                                                            <li>|</li>
                                                            <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                                                            <li>|</li>
                                                            <li>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star"></span>
                                                                <span class="glyphicon glyphicon-star-empty"></span>
                                                            </li>
                                                            <li>|</li>
                                                            <li>
                                                                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->
                                                                <span><i class="fa fa-facebook-square"></i></span>
                                                                <span><i class="fa fa-twitter-square"></i></span>
                                                                <span><i class="fa fa-google-plus-square"></i></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>





                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tab3primary">Primary 3</div>
                                        <div class="tab-pane fade" id="tabremove"><remove-cmp :rooms = "$store.state.rooms" @deleteRoom = "deleteRoom"></remove-cmp></div>
                                        <div class="tab-pane fade" id="tabadd"><add-cmp></add-cmp></div>
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
<style>
    @media(min-width:768px) {
        body {
            margin-top: 50px;
        }
        /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/
    }

    #wrapper {
        padding-left: 0;
    }

    #page-wrapper {
        width: 100%;
        padding: 0;
        background-color: #1f5f3a;
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
    import Add from './Items/AddItem.vue'
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        data(){
            return{
                rm: this.$store.state.rooms
            }
        },
        components: {
            removeCmp: Remove,
            addCmp: Add
        },
        methods: {
            deleteRoom(index){
                this.$store.state.rooms.splice(index,1);
                this.delRooms();
                //this.getRooms()
            },
        ...mapActions([
            'getRooms',
            'delRooms'
        ])
        },
        computed: {
            ...mapGetters([
                           'rooms'
                       ])
        }
    }
</script>