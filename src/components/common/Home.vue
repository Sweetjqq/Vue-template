<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
       
    </div>
</template>

<script>
    import vHead from './Header.vue';
    export default {
        components:{
            vHead
        }
    }
</script>

<style media="screen">
  .wrapper{
    min-width: 928px;
  }
  .content{
    margin-left: 220px;
    margin-top: 15px;
  }
</style>
