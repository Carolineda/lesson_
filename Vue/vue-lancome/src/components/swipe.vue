<template>
  <div class="swiper-container">
    
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://res.lancome.com.cn/resources/2019/7/1/15619504180086968.jpg" alt="" mode="aspectFill" style='width:100%'>
      </div>
      <div class="swiper-slide">
        <img src="https://res.lancome.com.cn/resources/2019/7/1/15619504537974211.jpg" alt="" mode="aspectFill" style='width:100%'>
      </div>
      <div class="swiper-slide">
        <img src="https://res.lancome.com.cn/resources/2019/6/28/15617072252931715.jpg" alt="" mode="aspectFill" style='width:100%'>
      </div>
      <div class="swiper-slide">
        <img src="https://res.lancome.com.cn/resources/2019/6/28/15617072380293370.jpg" alt="" mode="aspectFill" style='width:100%'>
      </div>
      <div class="swiper-slide">
        <img src="https://res.lancome.com.cn/resources/2019/6/28/15617072549681546.jpg" alt="" mode="aspectFill" style='width:100%'>
      </div>
    </div>
    <div class="swiper-pagination"> </div>
  </div>


</template>

<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
export default {
  
 mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true,
          pagination: { el: '.swiper-pagination'}                   
        })
      }
}
</script>

<style>
</style>
