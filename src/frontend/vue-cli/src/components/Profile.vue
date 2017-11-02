<template>
    <h1>User page - {{getRole}}</h1>
</template>
<script>
    import auth from '../auth'
    export default {
       data(){
           return{
               role: ''
           }
       },
       computed: {
           getRole(){
              return localStorage.getItem('username')
           }
      },
        beforeCreate(){
           if(localStorage.getItem('role') === 'admin'){
               this.$router.push('admin')
           }
           else if(!auth.user.authenticated){
               this.$router.push('login')
           }
        }
    }

</script>