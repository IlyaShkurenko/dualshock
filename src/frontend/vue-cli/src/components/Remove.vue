<template>
    <div>
        <div class="alert alert-info">Чтоб удалить сущность - просто нажмите на нее</div>
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
        <a @click = "prevPage">Prev</a>
        <a @click = "nextPage">Next</a>
    </div>
</template>
<script>
import Item from './Items/RemoveItem.vue'
import ch from  'lodash'
    export default {
    data(){
        return {
            filteredText: '',
            selected: 'Id',
            fields: ['Id', 'Description', 'Games', 'Capacity', 'Price'],
            dash: [],
            page: 1,
            arrayRomms: []
        }
    },
    components: {
        itemCmp: Item,
    },
        methods:{
         deleteRoom(index){
             let room = this.rooms[this.page - 1][index];
             this.$emit('deleteRoom',room);
         },
         nextPage(){
             if(this.page < this.rooms.length){
                 this.page++
             }
         },
         prevPage(){
             if(this.page - 1 !== 0){
                 this.page--
             }
         }

    },
        beforeCreate(){
         this.arrayRooms = this.$store.getters.rooms
        },
        props: {
          rooms: Array
        },
        computed: {
        filteredRooms(){
            if(this.rooms.length > 0){
                return this.rooms[this.page - 1].filter(post => {
                    if(this.selected.toLowerCase() === 'games'){
                        return post.games.join().toLowerCase().includes(this.filteredText.toLowerCase())
                    }
                    else if(this.selected.toLowerCase() === 'id'){
                        return post.id.toString().toLowerCase().includes(this.filteredText.toLowerCase())
                    }
                    else return post[(this.selected).toLowerCase()].toLowerCase().includes(this.filteredText.toLowerCase())
                })
            }
        }
        }
    }
</script>