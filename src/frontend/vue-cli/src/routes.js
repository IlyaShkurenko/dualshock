import Event from './components/Prices.vue'
import Room from './components/Room.vue'
import Enter from './components/Enter.vue'
export const routes = [
    {path: '/prices', component: Event},
    {path: '', component: Enter},
    {path: '/vip/:id', component: Room}
];