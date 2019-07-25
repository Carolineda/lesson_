<template>
  <div class="swiper-container">
   
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/6/27/15616310647862969_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail">
          <h3>更快速 持妆无瑕不假面</h3>
          <p>持妆粉底棒套装</p>
        </div>
        <div class="price">￥380</div>
        <div class="handle-btn">
          <div class="btn">购买</div>
        </div>
      </div>
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/7/1/15619478922562756_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail">
          <h3>明媚樱桃红 把夏天涂嘴上</h3>
          <p>兰蔻菁纯小姐唇膏套装</p>
        </div>
        <div class="price">￥270</div>
        <div class="handle-btn">
          <div class="btn">购买</div>
        </div>
      </div>
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/7/1/15619554261694684_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail">
          <h3>浓郁显色 一抹气场全开</h3>
          <p>兰蔻菁纯唇膏套装</p>
        </div>
        <div class="price">￥270</div>
        <div class="handle-btn">
          <div class="btn">购买</div>
        </div>
      </div>
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/6/20/15610454841307431_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail-wrapper">
        <div class="detail">
          <h3>温柔如你 气质减龄必备</h3>
          <p>兰蔻漆光水唇露套装</p>
        </div>
        <div class="price">￥270</div>
        <div class="handle-btn">
          <div class="btn">购买</div>
        </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: { el: ".swiper-pagination" }
    });
  }
};
</script>

<style>
h2{
  padding-top: 30px;
}
.swiper-slide {
  line-height: 10px;
  width: 100%;
}
.detail {
  height: 50px;
  line-height: 50px;
}
p {
  font-size: 14px;
  color: #666666;
}
.price {
  height: 50px;
  line-height: 70px;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
}
.detail-wrapper{
  height: 180px;
  text-align: center;
}
.handle-btn {
  background-color: #000;
  color: #fff;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  width: 120px;
   display: inline-block;
}

</style>
