<template>
    <div class="well">
        <div class="media">
            <a class="pull-left" href="#">
                <img class="media-object" :src="hookah.img" style="width: 300px; height: 150px">
            </a>
            <div class="media-body">
                <h4 class="media-heading">hookah {{hookah.id}}</h4>
                <p>{{hookah.description}}</p>
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
</template>
<script>
    export default {
        props: {
            hookah: Object,
            index: Number
        },
        methods: {
            getImgUrl(img) {
                let images = require.context('../../images/', false, /\.png$/);
                return images('./' + img);
            }
        }
    }
</script>
<style>

</style>