<template>
    <div>
        <div class="input-group" style="margin-bottom: 10px">
            <div class="input-group-btn search-panel">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <span id="search_concept">{{selected}}</span> <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" v-model="selected">
                    <li v-for="field in fields"><a v-on:click="selected = field"><i class="fa fa-angle-double-right"></i> {{field}}</a></li>
                </ul>
            </div>
            <input type="hidden" name="search_param" value="name" id="search_param">
            <input type="text" v-model="filteredText" class="form-control" name="q" placeholder="Search.." id="search_key" value="">
        </div>
        <item-cmp v-for="(item, index) in filteredRooms" :room = "item" :index = "index" @click.native = "deleteRoom(index)"> </item-cmp>
    </div>
</template>
<script>
import Item from './Items/RemoveItem.vue'
    export default {
    data(){
        return {
            filteredText: '',
            fruits: ['комната для больших компаний', 'комната для маленьких компаний'],
            selected: 'Id',
            fields: ['Id', 'Description', 'Games', 'Capacity', 'Price']
        }
    },
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
        },
        computed: {
        filteredRooms(){
            return this.rooms.filter(post => {
                if(this.selected.toLowerCase() === 'games'){
                    return post.games.join().toLowerCase().includes(this.filteredText.toLowerCase())
                }
                else return post[(this.selected).toLowerCase()].toLowerCase().includes(this.filteredText.toLowerCase())
            })
        }
        }
    }
</script>