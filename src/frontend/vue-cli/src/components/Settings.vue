<template>
    <div class="settings">
        <header-cmp></header-cmp>
        <loginandreg-cmp></loginandreg-cmp>
        <logo-cmp></logo-cmp>
        <body class="logged " style="margin-top: 20px">
        <div class="w960" style="overflow: hidden;">
            <div class="nav">
                <ul>
                    <li>
                        <a href="#" class="home "><span></span></a>
                    </li>
                    <li>
                        <a href="#">Турниры</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                    <li class="reportBug">
                        <a href="#">Сообщить об ошибке</a>
                    </li>
                </ul>
            </div>
            <div id="Breadcrumbs">
                <a href="#" class=""><span>Dualshock</span></a><a href="" class="Last"><span>Настройки</span></a>
            </div>
            <div id="BreadcrumbsFiller">&nbsp;</div>
            <div class="adWide top">

            </div><div id="Error"><img src="https://binarybeast.com/img/Icons/PNG-32/Delete.png" alt="" /><span></span></div><div id="Message"><img src="https://binarybeast.com/img/Icons/PNG-32/Info.png" alt="" /><span></span></div><div class="tabs"><ul class="tabs"><li :class={current:!password}><a href="#"@click="password=!password">Главные настройки</a></li><li :class={current:password}><a href="#" @click="password=!password">Сменить пароль</a></li></ul></div>
            <div v-if="!password">
                <input type="hidden" name="Reference" value="https://binarybeast.com/" />
                <input type="hidden" name="BBFormKey" id="BBFormKey" value="5a26135b1841a" />
                <div class="tabContent">
                    <fieldset>

                        <div class="h125">
                            <div class="leftCentered">
                                <label for="DisplayName">Ник</label>
                                <div class="PaddedInput">
                                    <input v-model="user.nickname" type="text" id="DisplayName" name="DisplayName" value="NSF-HulK" />
                                </div>
                            </div>
                            <div class="rightCentered">
                                <p>
<span>
Ваш <b> никнейм </b> в турнирах и мероприятиях. Его можно изменить позже, и <b> должен быть уникальным </b> </span>
                                </p>
                            </div>
                        </div>

                        <div class="h125">
                            <div class="leftCentered">
                                <label for="FirstName">Имя</label>
                                <div class="PaddedInput">
                                    <input v-model="user.name" type="text" id="FirstName" name="FirstName" value="" class="ValueFade" />
                                    <span class="ValueFadeDefault">Optional</span>
                                </div>
                                <label for="LastName">Фамилия</label>
                                <div class="PaddedInput">
                                    <input v-model="user.surname" type="text" id="LastName" name="LastName" value="" class="ValueFade" />
                                    <span class="ValueFadeDefault">Optional</span>
                                </div>
                            </div>
                            <div class="rightCentered" style="margin-top:30px;">
                                <p>
<span><b class="Highlight">необязательный</b>  набор полей, чтобы идентифицировать себя более точно. <br /><br />
На всякий случай, когда вы чувствуете себя особенно социально сегодня  </span>
                                </p>
                            </div>
                        </div>

                        <div class="h125">

                        </div>

                        <div class="h125" style="margin-top: -80px">
                            <div class="leftCentered" style="margin-top:-30px;">
                                <label for="CountrySearch" style="margin-top: 45px">Telegram аккаунт</label>
                                <div class="PaddedInput">
                                    <input v-model="user.telegram" type="text" name="CountrySearch" id="CountrySearch" />
                                </div>
                            </div>
                            <div class="rightCentered" style="margin-top:-5px">
                                <p>
                                    <span>Введите ваш username с telegrsm для отправки уведомлений<br /><br />Примите к сведению <b class="Highlight">без этого вы не сможете узнать о грядущих турнирах и скидках</b></span>
                                </p>
                            </div>
                        </div>

                        <div class="h125">
                            <div class="leftCentered">
                                <label for="Avatar">Загрузить</label>
                                    <div style="margin-left:90px;margin-top:10px;float:left;">
                                        <div class="image-uploader__input-wrapper">
                                            <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                                            <input id="Avatar" type="file" class="image-uploader__input" @change="sync" accept="image/*" style="margin-left: -30px">
                                        </div>

                                        <div class="image-uploader__image-wrapper">
                                            <i v-show="isEmpty && !isLoading" class="fa fa-picture-o fa-3x"></i>
                                            <i v-show="isLoading" class="fa fa-refresh fa-spin fa-3x"></i>
                                        </div>
                                </div>
                            </div>
                            <div class="rightCentered">
                                <p>
<span style="line-height:25px;">
Выберите аватар <br/>
<b class="Highlight">Принятый формат</b> .png .jpg .jpeg .gif </span>
                                </p>
                            </div>
                            <div class="rightCentered" style="padding-left:35px;margin-top:10px;overflow:hidden;height:auto;">
                                <h1>Current avatar:</h1>
                                <img
                                        v-show="!isEmpty && !isLoading"
                                        class="image-uploader__image"
                                        ref="img"
                                        :src="src"
                                        style="margin-left: 0; width: 200px; height: 250px"
                                >
                            </div>
                        </div>
                    </fieldset>
                    <!--<button type="submit" class="PaddedButton Green" @click="submit">Подтвердить изменения</button>-->
                    <button  @click = "submit" type="button" class="PaddedButton Green" id="load" ><i :class="{'fa fa-spinner fa-spin': isActive}"></i>{{buttonValue}}</button>
                </div>
            </div></div>
        <div class="logged " v-if="password">
            <div class="w960" style="overflow: hidden;">
                <div id="BreadcrumbsFiller">&nbsp;</div>
                <div class="adWide top">

                </div>
                <div>
                    <input type="hidden" name="Reference" value="https://binarybeast.com/user/settings" />
                    <input type="hidden" name="BBFormKey" id="BBFormKey" value="5a2623562a715" />
                    <div class="tabContent">
                        <fieldset>
                            <div class="alert alert-warning" v-if="!compare">Пароли не совпадают</div>
                            <div class="h125" style="margin-top: 20px">
                                <div class="leftCentered">
                                    <label for="NewPassword">Новый пароль</label>
                                    <div class="PaddedInput">
                                        <input v-model="firstPassword" type="password" id="NewPassword" name="NewPassword" />
                                    </div>
                                </div>
                                <div class="rightCentered" style="margin-top: 30px; margin-bottom: -70px">
                                    <p>
<span>
Ограничения: вы не можете использовать специальные символы, такие как апострофы: <b class = 'Highlight'> '</b> и цитаты: <b class =' Highlight '> "</b> </span>
                                    </p>
                                </div>
                            </div>
                            <div class="h125" style="margin-top: -50px">
                                <div class="leftCentered">
                                    <label for="ConfirmPassword">Подтвердите пароль</label>
                                    <div class="PaddedInput">
                                        <input v-model="secondPassword" type="password" id="ConfirmPassword" name="ConfirmPassword" />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <button  @click="resetPassword" type="button" class="PaddedButton Green" id="load" style="float:left;margin-right:10px;margin-left:10px;" ><i :class="{'fa fa-spinner fa-spin': isActive}"></i>{{buttonPassword}}</button>
                        <a href="#" class="PaddedButton Red" style="float:left;">Отмена</a>
                    </div>
                </div></div>
        </div>
        </body>
    </div>
</template>
<style src="../../styles/index.css" scoped>

</style>
<style scoped>
    .settings{
        height: 55px;
        background-color: #23b08e;
    }
</style>
<script>
    import Logo from './Items/Logo.vue'
    import Header from './Header.vue'
    import LoginAndReg from './LoginAndReg.vue'
    import Password from './ChangePassword.vue'
    export default {
        data(){
            return{
                user: {
                    name: '',
                    surname: '',
                    nickname: '',
                    telegram: '',
                    email: localStorage.getItem('username')
                },
                password: false,
                gamesStr: '',
                srcPrefix: '/vue/image-uploader/assets/img/',
                content: "",
                // New image's File object
                file: null,
                isLoading: false,
                isDragging: false,
                data: {},
                isEmpty: false,
                isActive: false,
                buttonValue: 'Подтвердить изменения',
                buttonPassword: 'Сбросить пароль',
                firstPassword: '',
                secondPassword: ''
            }
        },
        components:{
            headerCmp: Header,
            logoCmp: Logo,
            loginandregCmp: LoginAndReg,
            passwordCmp: Password
        },
        computed: {
            returnGames(){
                return this.room.games = this.gamesStr.split(',')
            },
            src () {
                if (this.content) {
                   return this.content
                }
                else {
                    let img = this.getImage();
                    console.log(img)
                    return img;
                }
            },
            validation: function () {
                return {
                    index: true
                }
            },
            isValid(){
                var validation = this.validation
                return Object.keys(validation).every(function (key) {
                    return validation[key]
                })
            },
            compare(){
                    if(this.firstPassword === this.secondPassword){
                        return true
                    }
                    return false
            }
        },
        methods: {
            async submit(){
                if(!this.file){
                    let file = new File([""], 'https/binarybeast.com/img/avatar/200.png');
                    await this.selectImage(file);
                }
                if(this.isValid){
                    await this.returnData()
                    console.log(this.data)
                    this.buttonValue = 'Обрабатывается';
                    this.isActive = true;
                    this.$http.post('users/update', this.data, {
                    }).then(
                        response => {
                            console.log('Success! Response: ', response.body);
                            this.$router.push('/')
                            location.reload();
                        },
                        response => {
                            // error callback
                        }
                    );
                }
            },
            resetPassword() {
                if (this.compare) {
                    this.buttonPassword = 'Обрабатывается'
                    this.data = new FormData();
                    this.data.append('username', this.user.email);
                    this.data.append('password', this.secondPassword);
                    this.$http.post('users/reset', this.data, {
                    }).then(
                        response => {
                            console.log('Success! Response: ', response.body);
                            this.$router.push('/')
                            location.reload();
                        },
                        response => {
                            // error callback
                        }
                    );
                }

            },
           getImage(){
                let img = ''
               this.$store.state.users.forEach(function (user,i) {
                    if(user.username === localStorage.getItem('username')){
                        img = user.img
                        console.log('img = ', img)
                    }
                })
                console.log('img = ', img)
                return img
            },
            sync (e) {
                e.preventDefault();
                console.log(e.target.files[0])
                this.selectImage(e.target.files[0]);
            },
            selectImage (file) {
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
            returnData(){
                this.data = new FormData();
                this.data.append('image', this.file);
                for(let field in this.user){
                    console.log(field, this.user[field])
                    this.data.append(field,this.user[field]);
                }
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