import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'
Vue.use(VueRouter);
Vue.use(VueResource);
export const router = new VueRouter({
    routes,
    mode: 'history'
});
const proxy = "https://lab6progbase-server.herokuapp.com/";
Vue.http.options.root = proxy;
var vm = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
