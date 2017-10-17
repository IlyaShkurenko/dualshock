import Event from './components/Prices.vue'
import Room from './components/Room.vue'
import Enter from './components/Enter.vue'
import Admin from './components/Admin.vue'
export const routes = [
    {path: '/prices', component: Event},
    {path: '', component: Enter},
    {path: '/vip/:id', component: Room},
    {path: '/admin', component: Admin}
];