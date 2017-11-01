<template>
    <h1>User page - {{getRole}}</h1>
</template>
<script>
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
      }
    }

</script>