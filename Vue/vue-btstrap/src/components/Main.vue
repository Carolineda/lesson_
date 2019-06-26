<template>
  <div class="jumbotron">
    <h1>任务追踪</h1>
    <p>
      <strong>
        <router-link to="/taskNew">创建一个任务</router-link>
      </strong>
    </p>  
  </div>

</template>

<script>
export default {
  data() {
    return{

    }
  },
  components: {
    
  }
}
</script>

<style lang="stylus" scoped>
  .jumbotron
    border-radius 5px
    width 60%
    padding-left 60px
    margin-left 40px
    
   
</style>
