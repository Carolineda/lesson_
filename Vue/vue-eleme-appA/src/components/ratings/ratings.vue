<template>
<div>
  <div class="gradeBox">
    <div class="rating-left">
      <h3 class="markGrade">{{seller.score}}</h3>
      <div class="totalGrade">综合评分</div>
      <div class="detail">高于周边商家{{seller.rankRate}}%</div>
    </div>
   
    <div class="rating-right">
      <div class="service">
        服务
      </div>
      <div class="goodsGrade">商品评分</div>
      <div class="toTime">送达时间 13</div>
    </div>
  </div>
</div> 

</template>

<script>
// import starControl from '@components/star/star'
export default {
  data () {
    return {

    }
  },
  created () {
     this.$http
      .get("https://www.easy-mock.com/mock/5d023d85f91dbf489ccf41e2/vue/goods")
  },
}
</script>

<style>
.gradeBox
{
  
  display: flex;
  height: 100px;
  vertical-align: middle;
  position:flex;
  align-items:center;
}
.rating-left{
 
  width: 40%;
  height: 60px;
  /* line-height: 5px; */
  text-align: center;

  border-right: 1px solid rgb(223, 222, 222);
}
.markGrade
{
  
  color: rgb(233, 172, 80);
  font-size: 18px;
}
.totalGrade
{
  font-size: 12px;
}
.detail{
  font-size: 12px;
  color: rgb(152, 154, 155)
}

.rating-right{
  flex: 2;
  text-align: center;
  font-size: 12px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}


</style>
