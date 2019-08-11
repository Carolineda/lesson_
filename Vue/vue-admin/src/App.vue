<template>
  <div id="app">
   <v-header></v-header>
   <div class="content">
     <router-view></router-view>
     <v-sidebar></v-sidebar>
   </div>
   <!-- <router-view></router-view>
     <v-sidebar></v-sidebar> -->

   
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components:{
    'v-header':Header,
    'v-sidebar':Sidebar
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.content{
  display: flex;
}
</style>
