<template>
  <div class="user-items-wrapper">
    <router-link to="/changegoods">
    <div class="item-warpper">
      <img src="../assets/images/huanhuo.png" alt />
      <p class="title-item">换退货政策</p>
      <i class="el-icon-arrow-right"></i>
    </div>
    </router-link>
    
    <router-link to="/vip">
      <div class="item-warpper">
        <img src="../assets/images/vip.png" alt />
        <p class="title-item">会员中心</p>
        <i class="el-icon-arrow-right"></i>
      </div>
    </router-link>
    <div class="item-warpper">
      <img src="../assets/images/service.png" alt />
      <p class="title-item">在线客服</p>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="item-warpper">
      <img src="../assets/images/gongzhonghao.png" alt />
      <p class="title-item">关注公众号</p>
      <i class="el-icon-arrow-right"></i>
    </div>

    <div class="item-warpper">
      <img src="../assets/images/fuli.png" alt />
      <p class="title-item">我的福利</p>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user-items-wrapper {
  background-color: #fff;
  border-radius: 10px;
}
.title-item {
  padding-top: 10px;
  padding-left: 10px;
}
.item-warpper img {
  width: 20px;
  height: 20px;
}
.item-warpper {
  display: flex;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ebedf1;
  align-items: center;
  vertical-align: middle;
  padding-left: 10px;
}
.el-icon-arrow-right {
  margin: 0 8px 0 auto;
  float: right;
}
</style>
