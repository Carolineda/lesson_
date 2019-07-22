<template>

<div>
 <!-- <v-header></v-header> -->
 
<!-- <v-main></v-main> -->

<!-- 侧边 -->
<v-sidebar></v-sidebar>

 <router-view></router-view>
 <!-- 导航 -->
<v-tab></v-tab>

</div>
</template>

<script>
// import header from '@/components/header'
import sidebar from '@/components/sidebar'
import tab from '@/components/tab'
export default {
  name: 'App',
  components:{
    // 'v-header':header,
    'v-sidebar':sidebar,
    // 'v-main':main,
    'v-tab':tab
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
  display: flex;
}


</style>
