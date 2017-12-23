<template>
    <!--
  ****************************************
  Contest Entry for Treehouse:
  "Design a Contact Form"
  Submitted by Lisa Wagner
  ****************************************
-->

    <div id="contact-form" style="z-index: 20">
        <div>
            <p style="color: #991D57; font-size: 24px">Заполните контактную информацию
                <span class="glyphicon glyphicon-remove" @click="$store.state.booked = false"></span>
           </p>
        </div>
        <p id="failure">Oopsie...message not sent.</p>
        <p id="success">Your message was sent successfully. Thank you!</p>
        <span style="color: #3caa36; font-size: 24px">Место - {{placeNumber}}</span>
        <span style="color: #3caa36; font-size: 24px">Цена - 100</span>
        <div class="form">
            <div>
                <label for="name">
                    <span class="required">Имя: *</span>
                    <input v-model="place.name" type="text" id="name" name="name" value="" placeholder="Ваше имя" required="required" tabindex="1" autofocus="autofocus" />
                </label>
            </div>
            <div>
                <label for="phone">
                    <span class="required">Телефон: *</span>
                    <input v-model="place.phone" type="name" id="phone" name="phone" value="" placeholder="Ваш телефон" tabindex="2" required="required"/>
                </label>
            </div>
            <div>
                <label for="count">
                    <span class="required">Количество людей</span>
                    <input v-model="place.personCount" type="text" id="count" name="count" value="" placeholder="Количество" required="required" tabindex="1" autofocus="autofocus" />
                </label>
            </div>
            <div>
                <label for="before">
                    <span>Время от: </span>
                    <select v-model="place.timeBefore" id="before" name="subject" tabindex="4">
                        <option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option><option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option><option value="03:00">03:00</option><option value="03:30">03:30</option><option value="04:00">04:00</option><option value="04:30">04:30</option><option value="05:00">05:00</option><option value="05:30">05:30</option></select>
                </label>
                <label for="after">
                    <span>Время до: </span>
                    <select  v-model="place.timeAfter" id="after" name="subject" tabindex="4">
                       <option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option><option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option><option value="03:00">03:00</option><option value="03:30">03:30</option><option value="04:00">04:00</option><option value="04:30">04:30</option><option value="05:00">05:00</option><option value="05:30">05:30</option></select>
                </label>
            </div>
            <div>
                <button name="submit" type="submit" id="submit" v-on:click="onSubmit" >Отправить</button>
            </div>
        </div>

    </div>
</template>
<style scoped>
    * {
        box-sizing:border-box;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-font-smoothing:antialiased;
        -moz-font-smoothing:antialiased;
        -o-font-smoothing:antialiased;
        font-smoothing:antialiased;
        text-rendering:optimizeLegibility;
    }

    /* Contact Form Styles */
    h1 {
        margin: 10px 0 0 0;
    }
    h4{
        margin: 0 0 20px 0;
    }
    #contact-form {
        position: fixed;
        background-color:rgba(82,72,82,0.7);
        padding: 10px 20px 30px 20px;
        width: 30vw;
        float: left;
        top: 50%;
        left: 260px;
        margin-top:30px;
        margin-left: -260px;
        border-radius:7px;
        -webkit-border-radius:7px;
        -moz-border-radius:7px;
    }
    #contact-form input,
    #contact-form select,
    #contact-form textarea,
    #contact-form label {
        font-size: 15px;
        margin-bottom: 2px;
        font-family: Arial, san-serif;
    }
    #contact-form input,
    #contact-form select,
    #contact-form textarea {
        width:100%;
        background: #fff;
        border: 0;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        margin-bottom: 25px;
        padding: 5px;
    }
    #contact-form input:focus,
    #contact-form select:focus,
    #contact-form textarea:focus {
        background-color: #E5E6E7;
    }
    #contact-form textarea {
        width:100%;
    }
    #contact-form button[type="submit"] {
        cursor:pointer;
        width:100%;
        border:none;
        background:#991D57;
        background-image:linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
        background-image:-moz-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
        background-image:-webkit-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
        color:#FFF;
        margin:0 0 5px;
        padding:10px;
        border-radius:5px;
    }
    #contact-form button[type="submit"]:hover {
        background-image:linear-gradient(bottom, #9C215A 0%, #A82767 52%);
        background-image:-moz-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
        background-image:-webkit-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
        -webkit-transition:background 0.3s ease-in-out;
        -moz-transition:background 0.3s ease-in-out;
        transition:background-color 0.3s ease-in-out;
    }
    #contact-form button[type="submit"]:active {
        box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);
    }
    input:required, textarea:required {
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        -o-box-shadow: none;
    }
    #contact-form .required {
        font-weight:bold;
        color: #E5E6E7;
    }

    /* Hide success/failure message
       (especially since the php is missing) */
    #failure, #success {
        color: #6EA070;
        display:none;
    }

    /* Make form look nice on smaller screens */
    @media only screen and (max-width: 580px) {
        #contact-form{
            left: 3%;
            margin-right: 3%;
            width: 88%;
            margin-left: 0;
            padding-left: 3%;
            padding-right: 3%;
        }
    }
    input{
        width: 1000px;
    }
</style>
<script>
    export default {
        data(){
            return{
                place: {
                    timeBefore: '',
                    timeAfter: '',
                    personCount: '',
                    name: '',
                    phone: '',
                    number: this.placeNumber
                }
            }
        },
        methods: {
           onSubmit(){
               this.$http.post('reserve', this.place, {
               }).then(
                   response => {
                       console.log('Success! Response: ', response.body);
                       this.$router.go(this.$router.currentRoute);
                       this.$store.state.booked = false
                   },
                   response => {
                       // error callback
                   }
               );
           }
        },
        props: {
            placeNumber: Number
        }
    }
</script>
