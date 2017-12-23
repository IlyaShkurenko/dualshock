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
        <item-cmp v-for="(item, index) in filteredRooms" :rate = "item" :index = "index"> </item-cmp>
        <a @click = "prevPage">Prev</a>
        <a @click = "nextPage">Next</a>
    </div>
</template>
<script>
    import Item from './Items/Rate.vue'
    import ch from  'lodash'
    export default {
        data(){
            return {
                filteredText: '',
                selected: 'Number',
                fields: ['Number', 'Status'],
                dash: [],
                page: 1,
                arrayRomms: []
            }
        },
        components: {
            itemCmp: Item,
        },
        methods:{
            toProfile(index){
                console.log('index = ' + index);
                let user = this.rates[this.page - 1][index];
                console.log(user);
                this.$emit('toProfile',user);
            },
            nextPage(){
                if(this.page < this.rates.length){
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
            rates: Array
        },
        computed: {
            filteredRooms(){
                if(this.rates.length > 0){
                    return this.rates[this.page - 1].filter(post => {
                        console.log(post)
                        if(this.selected.toLowerCase() === 'games'){
                            return post.games.join().toLowerCase().includes(this.filteredText.toLowerCase())
                        }
                        else if(this.selected.toLowerCase() === 'number'){
                            return post.number.toString().toLowerCase().includes(this.filteredText.toLowerCase())
                        }
                        else if(this.selected.toLowerCase() === 'status'){
                            return post.status.toString().toLowerCase().includes(this.filteredText.toLowerCase())
                        }
                        else return post[(this.selected).toLowerCase()].toLowerCase().includes(this.filteredText.toLowerCase())
                    })
                }
            }
        }
    }
</script>