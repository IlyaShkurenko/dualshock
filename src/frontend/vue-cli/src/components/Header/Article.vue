<template>
  <div>

        <h1 style="font-family: 'Helvetica Narrow', sans-serif; font-weight: bold">{{$store.state.sale.title[0]}}</h1>

        <figure>
            <img :src="$store.state.sale.img[0]" style="width: 100%"
                 alt="NARUTO SHIPPUDEN: ULTIMATE NINJA STORM LEGACY and STORM TRILOGY now available">
        </figure>

        <div class="content" style="font-size: 1vw">
            <p class="Normal1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p class="Normal1">&nbsp;</p>
            <p class="Normal1"><strong><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em></strong>
            </p>
            <p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
            </p>
        </div>
  </div>
</template>
<script>
    export default{
        props: {
            index: Number
        },
        created(){
            console.log('title = '+ this.$store.state.sale.title[0])
        }
    }
</script>