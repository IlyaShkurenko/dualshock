<template>
    <div class="well">
        <div class="media">
            <a class="pull-left" href="#">
                <img class="media-object" src="" style="width: 150px; height: 150px">
            </a>
            <div class="media-body">
                <h4 class="media-heading">rate {{rate.number}}</h4>
                <p>{{rate.status}}</p>
                <p>{{rate.name}}</p>
                <p>{{rate.money}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            rate: Object,
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