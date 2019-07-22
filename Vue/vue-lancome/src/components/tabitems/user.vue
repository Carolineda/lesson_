<template>
  <div class="user-wrapper">
    <!-- 头像部分 -->
    <div class="user-detail-wrapper">
      <div class="user-detail">
        <div class="avatar">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563292434576&di=dc9542021432f450d01a1d04ee505107&imgtype=0&src=http%3A%2F%2Fattach.zhiyoo.com%2Fforum%2Fthreadcover%2F46%2Fc7%2F13453990.jpg"
            alt
            mode="aspectfill"
          />
        </div>
        <div class="user-name">-大大大黄呀</div>
        <div class="complete-more">完善信息 ></div>
      </div>
    </div>

    <!-- 订单中心 -->
    <div class="order-wrapper">
      <div class="order">订单中心</div>
      <div class="order-items">
        <div class="img">
          <img src="../../assets/images/no-paying.png" alt="">
          <p>未付款</p>
        </div>
        <div class="img">
          <img src="../../assets/images/pre-deliver.png" alt="">
          <p>待发货</p>
        </div>
        <div class="img">
          <img src="../../assets/images/no-sigin.png" alt="">
          <p>待收货</p>
        </div>
        <div class="img">
          <img src="../../assets/images/qianshou.png" alt="">
          <p>已签收</p>
        </div>
      </div>

    </div>

    <div class="selected-list">
    
    <v-listitems></v-listitems>
    </div>
  </div>
</template>

<script>
import listitems from '../listitems'
export default {
  name:'user',
  components:{
    'v-listitems':listitems
  }
};
</script>

<style>

/* 头像 */
.user-wrapper{
  height: 640px;
  background-color: rgb(248, 245, 245);
  text-align: center;
}
.user-detail-wrapper {
  background-color: rgb(71, 68, 68);
  /* background-color: rgb(231, 205, 205); */

  height: 180px;
}
.user-detail {
  display: flex;
  color: #fff;
  height: 120px;
  line-height: 120px;
}
.avatar,
.user-name {
  margin-left: 10px;
  font-size: 18px;
}
.avatar img {
  width: 80px;
  height: 80px;
  border-radius: 80px;
}
.complete-more {
  position: absolute;
  right: 10px;
  font-size: 12px;
}

/* 订单 */
.order-wrapper{
  width: 360px;
  border-radius: 10px;
  height: 150px;
  background-color: #fff;
  margin-top: -40px;
   display: inline-block;
}
.order{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgb(240, 239, 239);
  /* padding-left: 10px; */
  /* position: absolute; */
  /* left: 40px; */
}
.order-items{
  height: 80px;
  line-height: 80px;
  display: flex;
  text-align: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0 30px 0 30px;
  
}
.img{
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.img img{
  width: 24px;
  height:24px;
}

/* list-items */

/* #303133 */
.selected-list{
  border-radius: 10px;
  width: 360px;
  margin-top: 40px;
  /* margin-left: 20px; */
  display: inline-block;
}

 .el-collapse-item__content {
    padding-bottom: 0px;
    }
  .el-collapse-item__header {
    padding-left: 10px;
  }

</style>
