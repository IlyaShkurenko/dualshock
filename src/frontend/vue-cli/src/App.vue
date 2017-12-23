
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
            'getArray',
            'getUsers',
            'getEvents',
            'getTournaments',
            'getHookahs',
            'getPlaces',
            'getRates'
        ])
    },
    created(){
        this.getRooms();
        this.getUsers();
        this.getEvents();
        this.getTournaments();
        this.getHookahs();
        this.getPlaces()
        this.getRates()
    }

}
</script>

