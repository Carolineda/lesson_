<template>
<div>
  <swiper indicator-dots="false"
  :autoplay="true" :interval="5000" :duration="1000">
  <block v-for="(img,i) in imgUrls" :key="i">
    <swiper-item>
      <image :src="img" class="slide-image" width="100%" height="150" mode:aspectFill style='width:100%'/>
    </swiper-item>
  </block>
</swiper>

  <input type="text" v-model="mytodo" placeholder="please input">
  <button @click="addTodo">添加</button>
  <button @click="clearTodo">删除</button>
  <ul class="todos">
    <li v-for="(todo, i) in todos" :key="i" :class="{'done':todo.done}" @click="toggle(i)">{{ todo.text}}</li>
  </ul>
</div>
  
</template>
<script>
export default {
  data () {
    
    return {
      imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],

      todos:[
        {text:'泡芙',done:false},
        {text:'炸鸡',done:false},
        {text:'奶茶',done:false}
      ]
    }
    
  },
  methods: {
    addTodo:function() {
      if (!this.mytodo) return;
      this.todos.push({
        text:this.mytodo,
        done:false
      })
    },
    clearTodo:function() {
      // 把未完成的事过滤 filter
      this.todos = this.todos.filter(todo => !todo.done)
    },

    toggle:function(i) {
      console.log(i)
      let todos = this.todos.slice(0);
      todos[i].done = !todos[i].done;
      this.todos=todos;
    }
  },
  // 数据持久化 watch
  watch: {
    todos: function (todos) {
      // console.log(todos)
      wx.setStorageSync('todos',todos);
    }
  },
  // 函数执行 数据读取
  created() {
    this.todos = wx.getStorageSync('todos') || []
  },
}
</script>

<style>
  .done{
    text-decoration: line-through;
  }
</style>