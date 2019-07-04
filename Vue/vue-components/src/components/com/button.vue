<template>
  <button :class="'i-button-size'+size" :disabled="disabled" @click="handleClick">
    <!-- 在button里面写数据 插槽 -->
    <slot></slot>   
  </button>
</template>

<script>
// 校验的方法
function oneOf(value,validList) {
  for(let i = 0;i<validList.length;i++){
    if(value === validList[i]){
      return true
    }
  }
  return false
}

import bus from '@/bus/bus'

export default {
  props:{
    size:{
      // 校验传过来的value
      validator (value) {
        return oneOf(value,['small','large','default'])
      },
      default:'default'
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      msg:'我是button组件的数据'
    }
  },
  methods: {
    handleClick(event) {
      // console.log(event)
      // console.log(123)
      // this.$emit('on-click',this.msg)  //从子组件发散出一个方法'on-click' 在此用.native 不需要向外emit可以
      bus.$emit('todo',this.msg)
    }
  },
}
</script>

<style scoped>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none; 
  background: white
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}
</style>
