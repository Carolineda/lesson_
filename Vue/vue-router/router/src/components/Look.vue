<template>
  <div class="look">
    <!-- {{$route.params.id}}url 传参  app.vue-router-link -->
    {{message}} {{$route.params.id}}
    <!-- <router-view/>路由入口 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'Look',
  data(){
    return{
      message:'看大黄呀！'
    }
  }
}
</script>