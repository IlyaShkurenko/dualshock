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
        <item-cmp v-for="(item, index) in filteredplaces[page-1]" :place = "item" :index = "index" @click.native = "deletePlace(item)"> </item-cmp>
        <a @click = "prevPage">Prev</a>
        <a @click = "nextPage">Next</a>
    </div>
</template>
<script>
    import Item from './Items/RemovePlaceItem.vue'
    import ch from  'lodash'
    export default {
        data(){
            return {
                filteredText: '',
                selected: 'Number',
                fields: ['Number'],
                dash: [],
                page: 1,
                arrayRomms: []
            }
        },
        components: {
            itemCmp: Item,
        },
        methods:{
            deletePlace(item){
                this.$emit('deletePlace',item);
            },
            nextPage(){
                if(this.page < this.places.length){
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
            this.arrayplaces = this.$store.getters.places
        },
        props: {
            places: Array
        },
        asyncComputed: {
            async filteredplaces() {
                let array = await this.returnArray;
                let newArray = ch.chunk(array,2);
                return newArray
            }
        },
        computed:{
            returnArray(){
                if(this.places.length > 0){
                    return this.$store.state.places.filter(post => {
                        if(this.selected.toLowerCase() === 'number'){
                            return post.number.toString().toLowerCase().includes(this.filteredText.toLowerCase())
                        }
                        else {
                            console.log(this.selected.toLowerCase())
                            console.log(post[this.selected.toLowerCase()])
                            return post[(this.selected).toLowerCase()].toLowerCase().includes(this.filteredText.toLowerCase())
                        }
                    })
                }
            }
        }
    }
</script>