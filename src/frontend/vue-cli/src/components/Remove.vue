<template>
    <div>
        <item-cmp v-for="id in rooms.length" :rooms = "rooms" :index = "id" @click.native = "deleteRoom(id-1)"> </item-cmp>
    </div>
</template>
<script>
import Item from './Items/RemoveItem.vue'
    export default {
    components: {
        itemCmp: Item
    },
        methods:{
         deleteRoom(index){
             this.$emit('deleteRoom', index)
         }
        },
        props: {
          rooms: Array
        }
    }
</script>