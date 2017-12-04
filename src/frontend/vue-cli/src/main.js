import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'
import AsyncComputed from 'vue-async-computed'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(AsyncComputed);
export const router = new VueRouter({
    routes,
    mode: 'history'
});
const proxy = "https://lab6progbase-server.herokuapp.com/";
//const proxy = "http://localhost:5000/";
Vue.http.options.root = proxy;
var vm = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
