<template>
    <section id="home-sharing" style="background-image: url('http://static.bandainamcogames.eu/sites_products/naruto-videogames/uploads/2015/03/BG_Share_5.png'); z-index:2;">

        <div class="wrapper">
            <h2>Поделиться в</h2>

            <div class="links" dir='ltr'>

                <a href="" class="fb">Facebook</a>
                <a href="" class="tw">Twitter</a>
            </div>

        </div>

    </section>
</template>
<style>

    #home-sharing {
        text-align: center;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 280px;
        width: 100%;
        margin-top: -70px;
        padding-top: 50px;
        position: relative;
        z-index: 0
    }

    #home-sharing .wrapperstart {
        height: auto;
        position: absolute;
        top: 60%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%)
    }

    #home-sharing h2 {
        display: inline-block;
        font-family: "Lovelo";
        font-size: 60px;
        line-height: 60px;
        color: white;
        text-transform: uppercase;
        text-align: center;
        text-shadow: 3px 3px 0px #000
    }

    #home-sharing a {
        display: inline-block;
        width: 60px;
        height: 60px;
        position: relative;
        margin: 20px;
        transition: background-image 0.3s;
        border-radius: 50%;
        text-indent: -9999px;
        background-position: center center;
        background-repeat: no-repeat
    }

    #home-sharing a::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        z-index: -1;
        transition: -webkit-transform 0.3s, box-shadow 0.3s;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: inset 0 0 0 35px #FF4E00;
        -ms-transform: scale3d(0.9, 0.9, 1);
        -webkit-transform: scale3d(0.9, 0.9, 1);
        transform: scale3d(0.9, 0.9, 1)
    }

    #home-sharing a:hover::before {
        box-shadow: inset 0 0 0 2px #FF4E00;
        -ms-transform: scale3d(1, 1, 1);
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    #home-sharing .tw {
        background-image: url("https://tvigi.com/landing/img/icons/instagram.svg");
        background-size: 27px 21px
    }

    #home-sharing .fb {
        background-image: url("http://static.bandainamcogames.eu/sites_products/naruto-videogames/assets/img/pictos/facebook-white.svg");
        background-size: 13px 21px
    }

</style>