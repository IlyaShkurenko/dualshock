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
        <form action="https://binarybeast.com/user/settings" id="MainForm" enctype="multipart/form-data" method="post" v-if="!password">
            <input type="hidden" name="Reference" value="https://binarybeast.com/" />
            <input type="hidden" name="BBFormKey" id="BBFormKey" value="5a26135b1841a" />
            <div class="tabContent">
                <fieldset>

                    <div class="h125">
                        <div class="leftCentered">
                            <label for="DisplayName">Ник</label>
                            <div class="PaddedInput">
                                <input type="text" id="DisplayName" name="DisplayName" value="NSF-HulK" />
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
                                <input type="text" id="FirstName" name="FirstName" value="" class="ValueFade" />
                                <span class="ValueFadeDefault">Optional</span>
                            </div>
                            <label for="LastName">Фамилия</label>
                            <div class="PaddedInput">
                                <input type="text" id="LastName" name="LastName" value="" class="ValueFade" />
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
                                <input type="text" name="CountrySearch" id="CountrySearch" />
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
                                <input type="file" name="Avatar" id="Avatar" />
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
                            <img src="//binarybeast.com/img/avatar/200.png" alt="Avatar" />
                        </div>
                    </div>
                </fieldset>
                <button type="submit" class="PaddedButton Green">Подтвердить изменения</button>
            </div>
        </form></div>
    <div class="logged " v-if="password">
    <div class="w960" style="overflow: hidden;">
        <div id="BreadcrumbsFiller">&nbsp;</div>
        <div class="adWide top">

        </div>
        <form action="https://binarybeast.com/user/settings/password" id="MainForm" enctype="multipart/form-data" method="post">
            <input type="hidden" name="Reference" value="https://binarybeast.com/user/settings" />
            <input type="hidden" name="BBFormKey" id="BBFormKey" value="5a2623562a715" />
            <div class="tabContent">
                <fieldset>
                    <div class="h125">
                        <div class="leftCentered">
                            <label for="CurrentPassword">Текущий пароль</label>
                            <div class="PaddedInput">
                                <input type="password" id="CurrentPassword" name="CurrentPassword" />
                            </div>
                        </div>
                        <div class="rightCentered">
                            <p>
<span>
Чтобы ваша учетная запись была защищена, мы просим вас повторно аутентифицироваться перед изменением пароля </span>
                            </p>
                        </div>
                    </div>
                    <div class="h125">
                        <div class="leftCentered">
                            <label for="NewPassword">Новый пароль</label>
                            <div class="PaddedInput">
                                <input type="password" id="NewPassword" name="NewPassword" />
                            </div>
                        </div>
                        <div class="rightCentered">
                            <p>
<span>
Ограничения: вы не можете использовать специальные символы, такие как апострофы: <b class = 'Highlight'> '</b> и цитаты: <b class =' Highlight '> "</b> </span>
                            </p>
                        </div>
                    </div>
                    <div class="h125">
                        <div class="leftCentered">
                            <label for="ConfirmPassword">Подтвердите пароль</label>
                            <div class="PaddedInput">
                                <input type="password" id="ConfirmPassword" name="ConfirmPassword" />
                            </div>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" class="PaddedButton Green" style="float:left;margin-right:10px;margin-left:10px;">Сбросить ваш пароль</button>
                <a href="#" class="PaddedButton Red" style="float:left;">Отмена</a>
            </div>
        </form></div>
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
              password: false
          }
        },
        components:{
            headerCmp: Header,
            logoCmp: Logo,
            loginandregCmp: LoginAndReg,
            passwordCmp: Password
        }

    }
</script>