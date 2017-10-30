import Vue from 'vue'
import Vuex from 'vuex'
import ch from  'lodash'
Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       slider: [],
       rooms: [],
       games: ' ',
       authenticated: false,
   },
    actions: {
        getRooms({commit}) {
            commit('GET_ROOM')
        },
        delRooms({commit}, room) {
            commit('DEL_ROOM', room)
        },
        getArray({commit}) {
            commit('GET_ARRAY')
        },
        signUp({commit}, creds,redirect){
            commit('SIGN_UP', creds, redirect)
        },
        login({commit}){
            commit('LOGIN')
        },
        logout({commit}){
            commit('LOG_OUT')
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
        DEL_ROOM(state,room) {
            let data = new FormData();
            for (var i = 0; i < state.rooms.length; i++) {
                data.append('arr[]', state.rooms[i]);
            }
            Vue.http.post('delete/room', JSON.stringify(room)).then(
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
        },
        SIGN_UP(state, creds, redirect) {
            Vue.http.post('users', JSON.stringify(creds)).then(data => {
                    localStorage.setItem('id_token', data.id_token);
                    localStorage.setItem('access_token', data.access_token);

                    state.authenticated = true;

                    if(redirect) {
                        this.$router.go(redirect)
                    }
            }
            )

        },
        LOGIN(state){
            state.authenticated = true;
        },
        LOG_OUT(state){
            state.authenticated = false
        }

    },
    getters: {
        rooms(state) {
            return ch.chunk(state.rooms,2)
        },
        sliders(state){
            return state.slider
        },
        returnGames(state){
            let games = '';
            let room = state.rooms[0];
            for(let game in room.games){
                state.games += room[game] + ' ';
            }
            return state.games;
        }
    }
});