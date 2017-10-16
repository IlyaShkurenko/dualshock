<template>
  <div>
      <p>Status of server: {{status}}</p>
      <hr>
      <button @click = "changeName" @change = "changeStatus">Change</button>
      <br>
      <input v-model="bcolor"/>
      <div class="square" :style = "{'background-color': bcolor }">

      </div>
  </div>
</template>

<script>
    export default {
        data: function () {
            return{
                status: 'critical',
                bcolor: ''
            }
        },
        methods:{
            changeStatus(){
                this.status = $event.target.value;
            },
            changeName(){
                this.status = 'normal';
                this.$emit('onChange', 'critical');
            }
        }
    }
</script>

<style>
    .square{
        height: 100px;
        width: 100px;
        background-color: lawngreen;
    }
</style>