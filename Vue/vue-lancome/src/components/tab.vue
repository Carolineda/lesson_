<template>
  <div class="tab">
    
   <div class="tab-item">
    <router-link to="/main" tag="div" >
      <div class="icon">
        <img src="../assets/index.png" alt />
        <div class="txt">首页</div>
      </div>
    </router-link>
   </div>

    <div class="tab-item">
    <router-link tag="div"  to="/sort">
      <div class="icon">
        <img src="../assets/sort.png" alt />
        <div class="txt">分类</div>
      </div>
    </router-link>
    </div>

  <div class="tab-item">
    <router-link tag="div"  to="/recommand">
      <div class="icon">
        <img src="../assets/recommend.png" alt />
        <div class="txt">推荐</div>
      </div>
    </router-link>
  </div>

   <div class="tab-item">
    <router-link tag="div" class="tab-item" to="/cart">
      <div class="icon">
        <img src="../assets/cart.png" alt />
        <div class="txt">购物车</div>
      </div>
    </router-link>
   </div>

   <div class="tab-item">
    <router-link tag="div" class="tab-item" to="/user">
      <div class="icon">
        <img src="../assets/user.png" alt />
        <div class="txt">个人中心</div>
      </div>
    </router-link>
  </div>
  </div>
</template>

<script>
export default {
  name:'tab'
};
</script>

<style scoped>
.tab {
  background-color: #000;
  display: flex;
  height: 50px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between !important;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 99;
}
.tab-item{
  flex: 1;
}
.tab-item .router-link-active {
    color: #fff;
  }
.icon{
   height: 40px;
   text-align: center;
}
.icon img{
  width: 24px;
  height: 24px;
}
.icon text{
  font-size: 12px;
  color: rgb(251, 252, 253);
}

</style>
