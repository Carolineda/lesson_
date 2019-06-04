<template>
   <div class="main-Content">
     <Header></Header>
   </div>
</template>

<script>
 import Header from "./common/Header.vue"
export default {
  name:'mainContent',
  data(){
    return{
      mgs:'hello world'
    }
  },
  components:{
    Header
  }
}
</script>