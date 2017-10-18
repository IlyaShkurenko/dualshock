import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       slider: [],
       rooms: []
   },
    actions: {
        getRooms({commit}) {
            commit('GET_ROOM')
        },
        delRooms({commit}) {
            commit('DEL_ROOM')
        },
        getArray({commit}) {
            commit('GET_ARRAY')
        }
    },
    mutations: {
        GET_ROOM(state) {
            Vue.http.get('rooms')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const result = [];
                    for(let key in data){
                        result.push(data[key]);
                    }
                    state.rooms = result;
                    return state.rooms
                })
                .then(result => {
                    let count = 0;
                    let length = state.rooms.length - 4;
                    while(length >= 4){
                        state.slider[count] = 4;
                        count++;
                        length-=4;
                    }
                    state.slider[count] = length;
                })
        },
        DEL_ROOM(state) {
            let data = new FormData();
            for (var i = 0; i < state.rooms.length; i++) {
                data.append('arr[]', state.rooms[i]);
            }
            Vue.http.post('delete/room', JSON.stringify(state.rooms )).then(
                response => {
                    console.log('Success! Response: ', response.body);
                },
                response => {
                    // error callback
                }
            );
        },
        GET_ARRAY(state) {
            let count = 0;
            let length = state.rooms.length - 4;
            while(length >= 4){
                state.slider[count] = 4;
                count++;
                length-=4;
            }
            state.slider[count] = length;
        }

    },
    getters: {
        rooms(state) {
            return state.rooms
        },
        sliders(state){
            return state.slider
        }
    }
});