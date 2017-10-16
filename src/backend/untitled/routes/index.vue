<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <link href="//fonts.googleapis.com/css?family=PT+Sans:400&subset=cyrillic" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="stylesheets/game.css">
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>
<div id="wrapblock">
    <div id="left-column">
        <p class="text">YOU</p>
        <div class = "healthbar">
            <div class = "health" :style="{width: youwidth + '%'}">
                {{youwidth}}
            </div>
        </div>
    </div>
    <div id="right-column">
        <p class="text">MONSTER</p>
        <div class = "healthbar">
            <div class = "health" v-bind:style="{width: monsterwidth + '%'}">
                {{monsterwidth}}
            </div>
        </div>
    </div>
</div>
<script>

    new Vue({
        el: "#wrapblock",
        data:{
            youwidth: 100,
            monsterwidth: 100
        },
        computed:{

        },
        methods:{

        }

    });
</script>
</body>
</html>