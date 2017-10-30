import Event from './components/Prices.vue'
import Room from './components/Room.vue'
import Enter from './components/Enter.vue'
import Admin from './components/Admin.vue'
import Remove from './components/Remove.vue'
import Login from './components/autorization/Login.vue'
import SignUp from './components/autorization/Register.vue'
export const routes = [
    {path: '/prices', component: Event},
    {path: '', component: Enter},
    {path: '/vip/:id', component: Room},
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp},
    {path: '/admin', component: Admin, children: [
        { path: 'remove', component: Remove}
    ]}
];