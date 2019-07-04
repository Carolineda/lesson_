<template>
  <div>

    <v-menu></v-menu>
      <!-- <v-button size="large" @on-click="handle">等同使用子组件内部的事件方法 -->

      <!-- 添加修饰符native获取子组件的事件，子组件不需要向外emit -->
      <v-button size="large" @click.native="handleClick">  
     按钮
    </v-button>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
  provide(){
    return {
      name:this.obj
    }
  },
  data () {
    return {
      obj:{
        name:'冰淇淋'
      }
    }
  },
  components:{
    'v-menu':menu,
    'v-button':button
  },
  methods: {
    handleClick() {

    }
  },
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
