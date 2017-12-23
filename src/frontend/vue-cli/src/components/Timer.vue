<template>
    <div>
        <div>
            <timer :time="prettyTime" :ps="ps"></timer>
            <div style="margin-top: -40px; position: static">
                <div class="row">
                    <div class="col-md-2 text-center">
                        <ul class="pagination">
                            <li v-if="!isRunning"><a @click="start">Start</a></li>
                            <li v-if="isRunning"><a @click="stop"> Stop </a></li>
                            <li><a @click="reset"> Reset </a></li>						</ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let timerSetup = {
        template:`
	<form>
		 <label for="min">Minutes<br />
		 <input type="number" v-model="minutes" name="time_m" id="min" min="0" max="59">
		 </label>
		 <label for="sec">Secondes<br />
			  <input type="number" v-model="secondes" name="time_s" id="sec" max="59" min="0">
		 </label>
		 <button type="button" @click="sendTime">Set time</button>
	</form>`,
        data () {
            return {
                minutes:0,
                secondes:0
            }
        },
        methods: {
            sendTime() {
                this.$emit('set-time', {minutes:this.minutes, secondes:this.secondes})
            }
        }
    }

    let Timer = {
        template: `
<div class="well" style="width: 80%; height: 100px">
        <div class="media">
            <a class="pull-left" href="#">

            </a>
            <div class="media-body">
                <h4 class="media-heading">  Playstation {{ps}} </h4>

<div id="clock">
<div class="row">
   <div class="col-md-5 time" style="font-size: 3.5vw">{{ time | prettify }}</div>
   <div class="col-md-4 price" style="font-size: 3.5vw">Цена:{{time | price}}</div>
</div>
</div>



            </div>
        </div>
    </div>

	`,
        props:['time','ps'],
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
            },
            price : function(value) {
                console.log(value)
                let data = value.split(':')
                let price = data[3]
                return price
            }
        }
    }
    export default {
        data(){
            return{
                isRunning: false,
                minutes:0,
                priceVip: 140,
                priceAll: 80,
                secondes:0,
                hours:0,
                time:0,
                timer:null,
                sound:new Audio("http://s1download-universal-soundbank.com/wav/nudge.wav")
            }
        },
        components:{
            'timer-setup':timerSetup,
            'timer':Timer
        },
        props:{
            ps:Number
        },
        methods: {
            start() {
                this.isRunning = true
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        if (this.time >= 0) {
                            this.time++
                        } else {
                            clearInterval(this.timer)
                            this.sound.play()
                            this.reset()
                        }
                    }, 1000)
                }
            },
            stop() {
                this.isRunning = false
                clearInterval(this.timer)
                this.timer = null
            },
            reset() {
                this.stop()
                this.time = 0
                this.secondes = 0
                this.minutes = 0
                this.hours = 0;
            },
            setTime(payload) {
                this.time = 0
            }
        },
        computed:{
            prettyTime () {
                let price = 0;
                let time = this.time / 60
                let minutes = parseInt(time)
                let hours = Math.floor(time/60)
                let secondes = Math.round((time - minutes) * 60)
                minutes-=hours*60;
                let priceForMin = (this.ps >=1 && this.ps <=5) ? 80: 140
                price = ((priceForMin/60)*minutes + priceForMin*hours).toFixed(1)
                return hours+":"+minutes+":"+secondes+":"+price
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
    .time {
        font-family: 'Share Tech Mono', monospace;
        color: #ffffff;
        position: relative;
        left: 40%;
        transform: translate(-50%, -50%);
        color: #daf6ff;
        text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
        letter-spacing: 0.05em;
        font-size: 100px;
        padding: 5px 0;
    }
    .price{
        font-family: 'Share Tech Mono', monospace;
        color: black;
        position: relative;
        left: 40%;
        transform: translate(-50%, -50%);
        text-shadow: 2px 2px 8px #FF0000;
        letter-spacing: 0.05em;
        font-size: 100px;
        padding: 5px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
    .text {
        letter-spacing: 0.1em;
        font-size: 22px;
        padding: 20px 0 0;
    }
</style>
<style src='../../styles/gameinn.css' scoped>
</style>