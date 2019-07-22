<template>
 <div class="content">

   <!--  -->
   <div class="header-compont">
   <v-header></v-header>
   </div>
   <!-- 轮播 -->
  <v-swipe></v-swipe>
  <!-- 搜索 -->
  <v-search></v-search>

  <div class="active">
    <h2>持妆家族买2赠2</h2>
    <div class="active-img">
      <img src="https://res.lancome.com.cn/resources/2019/7/1/15619473765295631.jpg" alt="" mode="aspectFill" style='width:100%'>
    </div>

  <div class="hotSelling">
    <v-swiperhot></v-swiperhot>
  </div>

  <div class="article">
    <div class="article-wrapper">
      <div class="article-img">
        <h3>兰蔻明星系列</h3>
        <img src="https://res.lancome.com.cn/resources/2019/7/1/15619474994488392.jpg" alt="" mode="aspectFill" style='width:100%'>
      </div>
      <div class="article-detail">
        <h3>夏日彩妆系列</h3>
        <p>兰蔻底妆家族，为您打造轻薄无瑕，持久妆容；搭配眼眉产品，“妆”出会说话的电力魅眼；魅惑唇妆，人气潮色美出天际，这个夏日，让我们放肆“玩美”！</p>
      </div>

  <v-swiperA></v-swiperA>
      
  </div>
  </div>
    
  </div>
 </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import header from '@/components/header'
import search from './search'
import swipe from './swipe'
import swiperhot from './siperhot'
import swiperA from './swiperA'
export default {
  name:'Main',
  data() {
    return {
      
    }
  },
  components:{
    'v-swipe':swipe,
    'v-search':search,
    'v-swiperhot':swiperhot,
    'v-swiperA':swiperA,
    'v-header':header
  }
}
</script>

<style scoped>

.content{
  padding: 60px 0 50px 0;
}
.active{
  margin-top: 50px;
  text-align: center;
  color: black;
}
</style>
