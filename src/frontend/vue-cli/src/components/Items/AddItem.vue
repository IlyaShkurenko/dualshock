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

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input v-model="room.description" id="description" type="text" class="form-control" name="username" value="" placeholder="Описание">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input v-model="room.type" id="type" type="text" class="form-control" name="email" placeholder="Тип">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="fa fa-gamepad"></i></span>
                            <input v-model="gamesStr" @changed = "returnGames" id="games" type="text" class="form-control" name="password" placeholder="Игры">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                            <input v-model="room.capacity" id="capacity" type="text" class="form-control" name="password" placeholder="Вместимость">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                            <input v-model="room.id" id="id" type="text" class="form-control" name="password" placeholder="Номер">
                        </div>

                        <div style="margin-bottom: 25px" class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                            <input v-model="room.price" id="price" type="text" class="form-control" name="password" placeholder="Цена">
                        </div>

                        <div class="image-uploader__input-wrapper">
                            <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                            <input type="file" class="image-uploader__input" @change="sync" accept="image/*">
                        </div>

                        <div class="image-uploader__image-wrapper">
                            <i v-show="isEmpty && !isLoading" class="fa fa-picture-o fa-3x"></i>
                            <i v-show="isLoading" class="fa fa-refresh fa-spin fa-3x"></i>
                            <img
                                    v-show="!isEmpty && !isLoading"
                                    class="image-uploader__image"
                                    ref="img"
                                    :src="src"
                            >
                        </div>


                        <div style="margin-top:10px" class="form-group">
                            <!-- Button -->
                            <center>
                                <div class="col-sm-12 controls">
                                    <a id="btn-login" @click="submit" class="btn btn-success">Добавить  </a>
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
                room: {
                    id: '',
                    description: '',
                    capacity: '',
                    type: '',
                    price: '',
                    games: [],
                    img: ''
                },
                gamesStr: '',
                srcPrefix: '/vue/image-uploader/assets/img/',
                content: null,
                // New image's File object
                file: null,
                isLoading: false,
                isDragging: false,
                data: {},
                isEmpty: false
            }
        },
        computed: {
            returnGames(){
                return this.room.games = this.gamesStr.split(',')
            },
            src () {
                if (this.content) {
                    return this.content;
                }
                return this.isEmpty ? '' : this.srcPrefix + this.value;
            }
        },
        methods: {
            submit(){
                this.$http.post('rooms', this.data, {
                    headers: {
                        'Content-Type': 'multipart/form-data; charset=UTF-8'
                    }
                }).then(
                    response => {
                        console.log('Success! Response: ', response.body);
                    },
                    response => {
                        // error callback
                    }
                );
                this.$emit('addRoom')
            },
            sync (e) {
                e.preventDefault();
                this.selectImage(e.target.files[0]);
            },
            selectImage (file) {
                this.data = new FormData();
                this.data.append('image', file);
                for(let field in this.room){
                    this.data.append(field,this.room[field]);
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
            },
        }
    }
</script>
<style>
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