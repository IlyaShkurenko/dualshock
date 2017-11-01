const LOGIN_URL = 'sessions/create';
const SIGNUP_URL = 'users';
import {router} from './main'
export default {

    // User object will let us check authentication status
    user: {
        authenticated: false
    },

    // Send a request to the login URL and save the returned JWT
    login(context, creds, redirect) {
        context.$http.post(LOGIN_URL, creds).then(data => {
            console.log('data = ' + data.body.id_token);
            localStorage.setItem('id_token', data.id_token);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('role', data.body.role);

            this.user.authenticated = true;

            if(redirect) {
                router.push(redirect)
            }
        })

    },

    signup(context, creds, redirect) {
        let data = new FormData();
        for(let field in creds){
            data.append(field,creds[field]);
        }
        context.$http.post(SIGNUP_URL, creds).then(data => {
                localStorage.setItem('id_token', data.id_token);
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('role', data.body.role);

                this.user.authenticated = true;

                if(redirect) {
                    router.push(redirect)
                }
            }
        )
    },

    // To log out, we just need to remove the token
    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('access_token');
        localStorage.removeItem('role');
        this.user.authenticated = false
    },

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        if(jwt) {
            this.user.authenticated = true
            console.log('role = ' + localStorage.getItem('role'))

        }
        else {
            this.user.authenticated = false
        }
    },

    // The object to be passed as a header for authenticated requests
    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    }
}