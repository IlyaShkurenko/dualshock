import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       counter: 2,
       rooms: []
   },
    actions: {
        getRooms({commit}) {
            commit('GET_ROOM')
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
                })
        }

    },
    getters: {
        rooms(state) {
            return state.rooms
        }
    }
});