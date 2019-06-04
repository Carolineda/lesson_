<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航:
      <!-- 路由跳转 -->
      <router-link to="/">首页</router-link>
      <router-link to="/look/12345">看看</router-link>
      <router-link to="/look/look-one">look1</router-link>
      <!-- <div class="test" @click="go">loo1</div> -->
      <!-- <router-link to="/look/look-two">look2</router-link> -->
      <!-- 路由传递参数 -->
       <router-link :to="{ name:'lookTwo', params : { userId : 3}}">look2</router-link>
       <router-link to="/detail">重定向</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go(){
      // 编程式路由跳转 name
      this.$router.push({name:'lookOne',params:{name:'小柴'}})
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
