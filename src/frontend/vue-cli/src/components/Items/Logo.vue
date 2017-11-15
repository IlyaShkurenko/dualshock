<template>
    <div class="logo" @click="$router.push('/')">
        <img src='https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/DS_logo_%D0%BD%D0%B0%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%BE%D0%BC%D1%84%D0%BE%D0%BD%D0%B52a.png?alt=media&token=fc5918a8-08b1-4b21-aa32-45116fc81c56'/>
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