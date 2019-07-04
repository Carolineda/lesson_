<template>
  <!-- 实现兄弟之间通信 -->
  <div class="menu">
    {{message}}
    <!-- {{name.name}} -->
    {{app.user}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
//用inject接收provide  注入 
  inject:['app'],
  data() {
    return {
      message:'炸鸡泡芙'
    }
  },
  created() {
    let self = this
    bus.$on('todo',(val)=>{  //$.on接收
      console.log(val)
      // 把val渲染到页面上
      self.message=val
    })
  },
}
</script>

<style>

</style>
