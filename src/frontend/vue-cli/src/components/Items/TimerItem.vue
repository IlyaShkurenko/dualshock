<template>
    <div class="well">
        <div class="media">
            <a class="pull-left" href="#">
                <img class="media-object" src="" style="width: 300px; height: 150px">
            </a>
            <div class="media-body">
                <h4 class="media-heading">Место {{place.number}}</h4>
                <div v-for="i in place.name.length">
                    <p>{{place.timeBefore[i - 1]}} - {{place.timeAfter[i -1]}} на имя {{place.name[i-1]}} ({{place.phone[i-1]}})</p>
                </div>
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
    export default{
        props:['time'],
        filters: {
            prettify : function(value) {
                let data = value.split(':')
                let hours = data[0]
                let minutes = data[1]
                let secondes = data[2]
                if (minutes < 10) {
                    minutes = "0"+minutes
                }
                if (secondes < 10) {
                    secondes = "0"+secondes
                }
                if (hours < 10) {
                    hours = "0"+hours
                }
                return hours+":"+minutes+":"+secondes
            }
        }
    }
</script>
<style>
    html,body {
        height: 100%;
    }
    body {
        background: #0f3854;
        background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
        background-size: 100%;
    }
    p {
        margin: 0;
        padding: 0;
    }
    #clock {
        font-family: 'Share Tech Mono', monospace;
        color: #ffffff;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #daf6ff;
        text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
    .time {
        letter-spacing: 0.05em;
        font-size: 80px;
        padding: 5px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
    .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
    }
</style>