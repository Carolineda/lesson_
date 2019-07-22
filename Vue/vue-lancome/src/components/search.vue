<template>
  <div class="input-box">
  <div class="search-box">
  <input type="text" placeholder=" 持久气垫全新上线" class="inputSearch"  />
   <i class="glyphicon glyphicon-search"></i>

</div>
</div>
</template>

<script>
export default {
  name:'search'

}
</script>

<style>
.input-box{
  text-align: center;
  margin-top: 20px;
  
}
.search-box
{
  display: inline-block;
  width: 100%;
}
.inputSearch{
  margin-top: 30px;
  border-radius: 4px;
  border: 1px solid black;
  width: 90%;
  height: 40px;
  line-height: 40px;
  outline: none;
}
.inputSearch{
  font-size: 14px;
}
.glyphicon-search{
 left: -30px;
}
</style>
