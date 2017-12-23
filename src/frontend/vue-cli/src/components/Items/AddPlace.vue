<template>
    <div class="container">
        <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div class="panel panel-info" >
                <div class="panel-heading">
                    <center><div class="panel-title">Добавить</div></center>
                </div>
                <div style="padding-top:30px" class="panel-body" >

                    <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                    <form id="registerform" class="form-horizontal" role="form">
                        <transition name="bounce">
                            <div class="alert alert-warning" v-if="!validation.index">Id обязательное поле для ввода</div>
                        </transition>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input v-model="place.name" id="description" type="text" class="form-control" name="username" value="" placeholder="Имя">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input v-model="place.phone" id="type" type="text" class="form-control" name="email" placeholder="Телефон">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                            <input v-model="place.timeBefore" id="timeBefore" type="text" class="form-control" name="password" placeholder="Время от">
                        </div>
                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                            <input v-model="place.timeAfter" id="timeAfter" type="text" class="form-control" name="password" placeholder="Время до">
                        </div>
                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                            <input v-model="place.personCount" id="personCount" type="text" class="form-control" name="password" placeholder="Количество людей">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                            <input v-model="place.number" id="id" type="text" class="form-control" name="password" placeholder="Номер">
                        </div>
                        <div style="margin-top:10px" class="form-group">
                            <!-- Button -->
                            <center>
                                <div class="col-sm-12 controls">
                                    <button  @click = "submit" type="button" class="btn btn-success" id="load" ><i :class="{'fa fa-spinner fa-spin': isActive}"></i>{{buttonValue}}</button>
                                </div>
                            </center>
                            <br>
                            <br>
                            <br>
                            <br>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                place: {
                    number: '',
                    name: '',
                    personCount: '',
                    timeBefore: '',
                    timeAfter: '',
                    phone: ''
                },
                gamesStr: '',
                srcPrefix: '/vue/image-uploader/assets/img/',
                content: null,
                // New image's File object
                file: null,
                isLoading: false,
                isDragging: false,
                data: {},
                isEmpty: false,
                isActive: false,
                buttonValue: 'Добавить'
            }
        },
        computed: {
            returnGames(){
                return this.place.games = this.gamesStr.split(',')
            },
            src () {
                if (this.content) {
                    return this.content;
                }
                return this.isEmpty ? '' : this.srcPrefix + this.value;
            },
            validation: function () {
                return {
                    index: this.place.number.length > 0
                }
            },
            isValid(){
                var validation = this.validation
                return Object.keys(validation).every(function (key) {
                    return validation[key]
                })
            }
        },
        methods: {
            submit(){
                if(this.isValid){
                    this.buttonValue = 'Обрабатывается';
                    this.isActive = true;
                    this.$http.post('reserve', this.place, {
                    }).then(
                        response => {
                            console.log('Success! Response: ', response.body);
                            this.$router.go(this.$router.currentRoute);
                        },
                        response => {
                            // error callback
                        }
                    );
                }
            },
            sync (e) {
                e.preventDefault();
                this.selectImage(e.target.files[0]);
            },
            selectImage (file) {
                this.data = new FormData();
                this.data.append('image', file);
                for(let field in this.place){
                    console.log(field, this.place[field])
                    this.data.append(field,this.place[field]);
                }
                this.file = file;
                let reader = new FileReader();
                reader.onload = this.onImageLoad;
                reader.readAsDataURL(file);
            },
            onImageLoad (e) {
                this.content = e.target.result;
                let filename = this.file instanceof File ? this.file.name : '';
                // Dispatch new input event with filename
                this.$emit('input', filename);
                // Dispatch new event with image content
                this.$emit('image-changed', this.content);
            }
        }
    }
</script>
<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    .image-uploader {
        position: relative;
        display: flex;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    }
    /* Wrapper for file input */
    .image-uploader__input-wrapper {
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.2);
        transition: 0.4s background;
        width: 40px;
    }
    .image-uploader__input-wrapper:hover {
        background: #e0e0e0;
    }
    /* Hidden file input */
    .image-uploader__input {
        position: absolute;
        display: block;
        min-height: 100%;
        opacity: 0;
        right: 0;
        top: 0;
        text-align: right;
        cursor: pointer;
    }
    /* Wrapper for image */
    .image-uploader__image-wrapper {
        height: 30vw;
        width: 100%;
        border-radius: 1px;
        overflow-y: hidden;
        justify-content: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        display: flex;
        padding: 2px;
    }
    /* Target image */
    img.image-uploader__image {
        max-height: 100%;
        height: auto;
        border: none;
        margin: auto;
        display: block;
    }
    /* Two settings for image width */
    img.image-uploader__image.with-info {
        max-width: 60%;
    }
    img.image-uploader__image.without-info {
        max-width: 100%;
    }
</style>