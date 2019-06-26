<template>
  <div class="tab">
     <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/main">首页</router-link></li>
          <li><router-link to="/taskNew">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:'tab'
}
</script>

<style>
.tab
{
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
