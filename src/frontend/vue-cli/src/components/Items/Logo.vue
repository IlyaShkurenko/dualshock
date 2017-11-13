<template>
    <div class="logo" @click="$router.push('/')">
        <img src='../../images/DS_logo_насветломфоне2a.png'/>
    </div>
</template>

<style>
    .logo {
        float: left;
        height: 6.5vw;
        width: 17vw;
        top: 0;
        z-index: 10;
        position: fixed;
    }

    .logo img {
        height: 6.5vw;
        width: 17vw;
    }
</style>