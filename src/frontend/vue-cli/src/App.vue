
<template>
    <router-view></router-view>
</template>
<script>
import Enter from './components/Enter.vue'
import {mapActions} from 'vuex'
export default {
    components:{
       enterComponent: Enter
    },
    methods:{
        ...mapActions([
            'getRooms',
            'getArray'
        ])
    },
    created(){
        this.getRooms()
    }

}
</script>

