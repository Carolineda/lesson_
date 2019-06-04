<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 钩子函数 判断
  // 路由跳转 next 方法 确定是否跳转  to：跳转的页面 
  beforeRouteEnter: (to,from,next) => {
    console.log(from,to)
    next()
  },
  // 路由离开之前
   beforeRouteLeave: (to,from,next) => {
    console.log(from,to,'0000')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
/* ul {
  list-style-type: none;
  padding: 0;
} */
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
