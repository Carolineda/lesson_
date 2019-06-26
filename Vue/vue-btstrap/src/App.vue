<template>
  <div id="app">
   <!-- tab -->
   <v-tab></v-tab>

   <!-- 左边 -->
   <div class="content">
   <v-sidebar></v-sidebar>
   <v-Main></v-Main>
   <router-view></router-view>
   </div>
  </div>
</template>

<script>
import tab from '@/components/tab'
import sidebar from '@/components/sidebar'
import Main from '@/components/Main'
export default {
  name: 'App',
  components:{
  'v-tab':tab,
  'v-sidebar':sidebar,
  'v-Main':Main
  }
}
</script>

<style>
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px; 
}
.content
{
  display: flex;
}
</style>
