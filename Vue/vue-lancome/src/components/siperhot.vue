<template>
  <div class="swiper-container">
    <h2>当季热销</h2>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/6/27/15616278508041872_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail">
          <h3>收眼袋·平细纹·养睫毛</h3>
          <p>全新大眼精华修护套装</p>
        </div>
        <div class="price">￥688</div>
        <div class="handle-btn">
          <div class="btn">购买</div>
        </div>
      </div>
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/6/27/15616283856899033_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail">
          <h3>淡褪黑眼圈 熬夜也发光</h3>
          <p>发光眼霜修护套装</p>
        </div>
        <div class="price">￥520</div>
        <div class="handle-btn">
          <div class="btn">购买</div>
        </div>
      </div>
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/6/27/15616273080232075_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail">
          <h3>肌肤喝饱水 焕出澎弹少女肌</h3>
          <p>大粉水修护套装</p>
        </div>
        <div class="price">￥420</div>
        <div class="handle-btn">
          <div class="btn">购买</div>
        </div>
      </div>
      <div class="swiper-slide">
        <img
          src="https://res.lancome.com.cn/resources/2019/6/27/15616284562523977_920X920.jpg?version=20190702233736694"
          alt
          mode="aspectFill"
          style="width:100%"
        />
        <div class="detail-wrapper">
        <div class="detail">
          <h3>保湿舒缓 调节肌肤水油平衡</h3>
          <p>水份缘舒缓凝霜套装</p>
        </div>
        <div class="price">￥575</div>
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
.detail p{
  font-size: 14px;
  color: #666666;
}
.price {
  height: 50px;
  line-height: 50px;
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
