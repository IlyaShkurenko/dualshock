import Event from './components/Prices.vue'
import Room from './components/Room.vue'
import Enter from './components/Enter.vue'
import Admin from './components/Admin.vue'
import Remove from './components/Remove.vue'
import Login from './components/autorization/Login.vue'
import SignUp from './components/autorization/Register.vue'
import Profile from './components/Profile.vue'
import News from  './components/News.vue'
import Book from './components/Booking.vue'
import Tournament from './components/tournaments/Tournament.vue'
import Sale from './components/Header/Sale.vue';
export const routes = [
    {path: '/prices', component: Event},
    {path: '/news', component: News},
    {path: '', component: Enter},
    {path: '/reservation', component: Book},
    {path: '/vip/:id', component: Room},
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp},
    {path: '/tournament/:id', component: Tournament},
    {path: '/sale', component: Sale},
    {path: '/user/:id', component: Profile,
        meta: {
            permission: 'user',
            fail: '/error-public'
        },},
    {path: '/admin', component: Admin,
        meta: {
            permission: 'admin',
            fail: '/error-public'
        },
        children: [
        { path: 'remove', component: Remove}
    ]}
];