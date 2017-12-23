import Vue from 'vue'
import Vuex from 'vuex'
import ch from  'lodash'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        slider: [],
        items:[0],
        rates:[],
        index: -1,
        rooms: [],
        events: [],
        hookahs: [],
        roomsForSave: [],
        users: [],
        tournaments: [],
        games: ' ',
        places: [],
        authenticated: false,
        booked: false,
        remove: false,
        sale:{
            img:['https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/saleweek.jpg?alt=media&token=0237c4c2-382e-49a2-ad9b-178adadda1c9',
                'https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/twicesale.jpg?alt=media&token=245143cf-b030-441e-9787-2fc2e56f37e8',
                'https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/5.jpg?alt=media&token=8e2606eb-5218-47f0-977f-73ab226e9fed',
                'https://firebasestorage.googleapis.com/v0/b/vue-app-75351.appspot.com/o/10.jpg?alt=media&token=b6eeb6ac-4301-4104-904e-528e07b6d92a'],
            title:['Выгодное и интересное предложение для каждого клиента', 'Скидки доступные лишь за особые заслуги',
                'Скидка 5% на весь чек в заведении', 'Скидка 10% на весь чек в заведении']
        }
    },
    actions: {
        getRooms({commit}) {
            commit('GET_ROOM')
        },
        getEvents({commit}) {
            commit('GET_EVENT')
        },
        getHookahs({commit}) {
            commit('GET_HOOKAH')
        },
        getUsers({commit}) {
            commit('GET_USER')
        },
        getRates({commit}) {
            commit('GET_RATE')
        },
        getPlaces({commit}) {
            commit('GET_PLACE')
        },
        getTournaments({commit}) {
            commit('GET_TOURNAMENT')
        },
        delRooms({commit}, room) {
            commit('DEL_ROOM', room)
        },
        delEvent({commit}, event) {
            commit('DEL_EVENT', event)
        },
        delHookah({commit}, event) {
            commit('DEL_HOOKAH', event)
        },
        delPlace({commit}, event) {
            commit('DEL_PLACE', event)
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
                    state.roomsForSave = result;
                    console.log('room for save = ', state.roomsForSave[0]);
                    if(state.roomsForSave.length > 0){
                        state.rooms = state.roomsForSave;
                        console.log('state = ', state.rooms[0])
                    }
                    console.log('state = ', state.rooms[0])
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
        GET_EVENT(state) {
            Vue.http.get('event')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const result = [];
                    for(let key in data){
                        result.push(data[key]);
                    }
                    state.events = result

                    return state.events
                })
        },
        GET_RATE(state) {
            Vue.http.get('rate')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const result = [];
                    for(let key in data){
                        result.push(data[key]);
                    }
                    state.rates = result

                    return state.rates
                })
        },
        GET_HOOKAH(state) {
            Vue.http.get('hookah')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const result = [];
                    for(let key in data){
                        result.push(data[key]);
                    }
                    state.hookahs = result

                    return state.hookahs
                })
        },
        GET_USER(state) {
            Vue.http.get('users')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const result = [];
                    for(let key in data){
                        result.push(data[key]);
                    }
                    state.users = result;
                    return state.users
                })
        },
        GET_PLACE(state) {
            Vue.http.get('reserve')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const result = [];
                    for(let key in data){
                        result.push(data[key]);
                    }
                    state.places = result;
                    return state.places
                })
        },
        GET_TOURNAMENT(state) {
            Vue.http.get('tournament')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const result = [];
                    for(let key in data){
                        result.push(data[key]);
                    }
                    state.tournaments = result;
                    return state.tournaments
                })
        },
        DEL_ROOM(state,room) {
            let url = 'rooms/remove/' + room.id
            console.log(url)
            Vue.http.delete(url)
                .then(function(response) {
                    //Redirect goes here
                    //something like:  window.location = the url
                })
                .error(function(errors) {
                    //Handle error
                });
        },
        DEL_EVENT(state,room) {
            let url = 'event/remove/' + room.id
            console.log(url)
            Vue.http.delete(url)
                .then(function(response) {
                //Redirect goes here
                //something like:  window.location = the url
            })
                .error(function(errors) {
                    //Handle error
                });
        },
        DEL_HOOKAH(state,hookah) {
            let url = 'hookah/remove/' + hookah.id
            console.log(url)
            Vue.http.delete(url)
                .then(function(response) {
                //Redirect goes here
                //something like:  window.location = the url
            })
                .error(function(errors) {
                    //Handle error
                });
        },
        DEL_PLACE(state,hookah) {
            let url = 'reserve/remove/' + hookah.id
            console.log(url)
            Vue.http.delete(url)
                .then(function(response) {
                //Redirect goes here
                //something like:  window.location = the url
            })
                .error(function(errors) {
                    //Handle error
                });
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
        hookahs(state) {
            return ch.chunk(state.hookahs,2)
        },
        places(state) {
            return ch.chunk(state.places,2)
        },
        events(state) {
            return ch.chunk(state.events,2)
        },
        users(state) {
            return ch.chunk(state.users,2)
        },
        rates(state) {
            return ch.chunk(state.rates,2)
        },
        indexByLogin(state){
            state.users.forEach(function(item, i, arr) {
                if(item.username === localStorage.getItem('username')){
                    console.log('index = ', i)
                    return i
                }
                else return -1;
            });
        },
        async playedTournaments(state) {
            let playedTournaments = {
                tournaments: [],
                matches: {
                    opponents: [],
                    theirScore: [],
                    myScore: [],
                    wins: []
                }
            }
            let part = state.users[state.index]
            console.log('part = ', part['username'])
                    let participant = part['username']
                    console.log('participant = ', participant)
                    let events = [];
                    events = state.events;
                    let title = '';
                    let index;
                    let count = -1;
                    let bestPlayer = {
                        player: Object,
                        index: Number
                    };
                   await state.tournaments.forEach(async function (tournament,i) {
                       await tournament.players.forEach(function (item,k) {
                            for(let prop in item){
                                item[prop].players.forEach(function (player, j) {
                                    if(player.player === participant){
                                        index = j;
                                        playedTournaments.matches.opponents.push(item[prop].players[1-j].player);
                                        playedTournaments.matches.theirScore.push(item[prop].players[1-j].score);
                                        playedTournaments.matches.myScore.push(item[prop].players[j].score);
                                        playedTournaments.matches.wins.push(item[prop].players[j].win);
                                        // console.log('player = ',item[prop].players[1-j].player)
                                        title = events[tournament.id].title;
                                    }
                                })
                            }
                        })
                        playedTournaments.tournaments.push(title)
                    })
            console.log('tournaments = ', playedTournaments)
            return playedTournaments

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