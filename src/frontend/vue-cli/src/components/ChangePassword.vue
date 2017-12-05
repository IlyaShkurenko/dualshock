<template>
    <body class="logged ">
    <div class="w960" style="overflow: hidden;">
        <div class="nav">
            <ul>
                <li>
                    <a href="/" class="home "><span></span></a>
                </li>
                <li>
                    <a href="/tourney/list/public">Турниры</a>
                </li>
                <li>
                    <a href="/contact">Контакты</a>
                </li>
                <li class="createTournament">
                    <a href="/tourney/create">Create Tournament</a>
                </li>
                <li class="reportBug">
                    <a href="/bug">Report Bug</a>
                </li>
            </ul>
            <div class="search">
                <form method="get" action="/search">
                    <input type="text" id="MainSearch" name="search" class="ValueFade" value="" />
                    <span class="ValueFadeDefault">Поиск...</span>
                    <button><span></span></button>
                </form>
            </div>
        </div>
        <div id="Breadcrumbs">
            <a href="/" class=""><span>BinaryBeast</span></a><a href="/user/settings" class="previous"><span>User Settings</span></a><a href="/user/settings/password" class="Last"><span>Change your Password</span></a>
        </div>
        <div id="BreadcrumbsFiller">&nbsp;</div>
        <div class="adWide top">

        </div><div id="Error"><img src="https://binarybeast.com/img/Icons/PNG-32/Delete.png" alt="" /><span></span></div><div id="Message"><img src="https://binarybeast.com/img/Icons/PNG-32/Info.png" alt="" /><span></span></div><div class="tabs"><ul class="tabs"><li><a href="/user/settings">General Settings</a></li><li class="current"><a href="/user/settings/password">Manage Password</a></li><li><a href="/user/settings/api">API Key</a></li><li><a href="/user/settings/api_history">API Activity</a></li><li><a href="/user/settings/game_networks">In-Game Names</a></li><li><a href="/user/settings/game_race">Default game races</a></li></ul></div>
        <form action="https://binarybeast.com/user/settings/password" id="MainForm" enctype="multipart/form-data" method="post">
            <input type="hidden" name="Reference" value="https://binarybeast.com/user/settings" />
            <input type="hidden" name="BBFormKey" id="BBFormKey" value="5a2623562a715" />
            <div class="tabContent">
                <fieldset>
                    <div class="h125">
                        <div class="leftCentered">
                            <label for="CurrentPassword">Current Password</label>
                            <div class="PaddedInput">
                                <input type="password" id="CurrentPassword" name="CurrentPassword" />
                            </div>
                        </div>
                        <div class="rightCentered">
                            <p>
<span>
To help keep your account secure, we ask that you re-authenticate yourself before changing your password </span>
                            </p>
                        </div>
                    </div>
                    <div class="h125">
                        <div class="leftCentered">
                            <label for="NewPassword">New Password</label>
                            <div class="PaddedInput">
                                <input type="password" id="NewPassword" name="NewPassword" />
                            </div>
                        </div>
                        <div class="rightCentered">
                            <p>
<span>
Restrictions: You cannot use special characters like apostrophes: <b class='Highlight'>'</b> and quotations: <b class='Highlight'>"</b> </span>
                            </p>
                        </div>
                    </div>
                    <div class="h125">
                        <div class="leftCentered">
                            <label for="ConfirmPassword">Confirm New Password</label>
                            <div class="PaddedInput">
                                <input type="password" id="ConfirmPassword" name="ConfirmPassword" />
                            </div>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" class="PaddedButton Green" style="float:left;margin-right:10px;margin-left:10px;">Reset your Password</button>
                <a href="/user/settings; ?>" class="PaddedButton Red" style="float:left;">Отмена</a>
            </div>
        </form></div>
    </body>
</template>
<style src="../../styles/index.css" scoped>

</style>