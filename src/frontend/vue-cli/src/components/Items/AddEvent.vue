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
                        <span>Категория</span>
                        <select v-model="category">
                            <option disabled value="">Выберите один из вариантов</option>
                            <option>Турнир</option>
                            <option>Событие</option>
                        </select>
                        <p></p>
                        <div v-if="category === 'Событие'">
                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input v-model="event.title" id="title" type="text" class="form-control" name="title" placeholder="Заглавие">
                        </div>
                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input v-model="event.description" id="description" type="text" class="form-control" name="description" value="" placeholder="Описание">
                        </div>
                        </div>
                        <div v-if="category === 'Турнир'">
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input v-model="tournament.title" id="title" type="text" class="form-control" name="title" placeholder="Заглавие">
                            </div>
                            <!--<div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="fa fa-gamepad"></i></span>
                                <input v-model="participantsStr" @changed = "returnGames" id="participants" type="text" class="form-control" name="participants" placeholder="Учасники">
                            </div>-->
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.description" id="description" type="text" class="form-control" name="description" value="" placeholder="Описание">
                            </div>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.game" id="game" type="text" class="form-control" name="game" value="" placeholder="Игра">
                            </div>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.max" id="max" type="number" class="form-control" name="max" value="" placeholder="Количество участников">
                            </div>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.picking" id="picking" type="text" class="form-control" name="picking" value="" placeholder="Сбор">
                            </div>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.prize" id="prize" type="text" class="form-control" name="prize" value="" placeholder="Приз">
                            </div>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.additional" id="additional" type="text" class="form-control" name="additional" value="" placeholder="Дополнительный приз">
                            </div>
                            <span>Мод</span>
                            <select v-model="tournament.mod">
                                <option disabled value="">Выберите один из вариантов</option>
                                <option>1v1</option>
                                <option>2v2</option>
                            </select>
                            <p></p>
                            <p></p>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.rules" id="rules" type="text" class="form-control" name="rules" value="" placeholder="Правила">
                            </div>
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input v-model="tournament.date" id="date" type="text" class="form-control" name="date" value="" placeholder="Дата">
                            </div>
                        </div>
                        <div class="image-uploader__input-wrapper">
                            <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                            <input id="illya" type="file" class="image-uploader__input" @change="sync" accept="image/*" style="margin-left: -30px">
                        </div>

                        <div class="image-uploader__image-wrapper">
                            <i v-show="isEmpty && !isLoading" class="fa fa-picture-o fa-3x"></i>
                            <i v-show="isLoading" class="fa fa-refresh fa-spin fa-3x"></i>
                            <img
                                    v-show="!isEmpty && !isLoading"
                                    class="image-uploader__image"
                                    ref="img"
                                    :src="src"
                                    style="width: 100%"
                            >
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
                event: {
                    description: '',
                    title: '',
                },
                tournament: {
                    participants: [],
                    brackets: [],
                    title: '',
                    game: '',
                    max: '',
                    picking: '',
                    prize: '',
                    additional: '',
                    mod: '',
                    rules: '',
                    date: '',

                },
                img: '',
                category: '',
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
                return this.event.games = this.gamesStr.split(',')
            },
            src () {
                if (this.content) {
                    return this.content;
                }
                return this.isEmpty ? '' : this.srcPrefix + this.value;
            },
            validation: function () {
                return {
                    index: this.event.id.length > 0
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
                    this.buttonValue = 'Обрабатывается';
                    this.isActive = true;
                    this.$http.post('event', this.data, {
                        headers: {
                            'Content-Type': 'multipart/form-data; charset=UTF-8'
                        }
                    }).then(
                        response => {
                            console.log('Success! Response: ', response.body);
                            this.$emit('addEvent')
                        },
                        response => {
                            // error callback
                        }
                    );
            },
            sync (e) {
                e.preventDefault();
                this.selectImage(e.target.files[0]);
            },
            selectImage (file) {
                this.data = new FormData();
                this.data.append('image', file);
                let event = {};
                if(this.category === 'Турнир'){
                    event = this.tournament;
                }
                else if(this.category === 'Событие'){
                    event = this.event;
                }
                for(let field in event){
                    console.log(field, event[field])
                    this.data.append(field,event[field]);
                }
                this.data.append('category', this.category);
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