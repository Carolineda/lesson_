<template>

  

  <div class="sort">
    <v-header></v-header>
    <!-- 搜索 -->
    <div class="search">
      <V-search></V-search>
    </div>

    <div class="category"> 
      <div class="menu-wrapper">
        <!-- 目录左边引入组件 -->
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="护肤" name="1" >
            <div :class="{isshow}" @click="isshow=!isshow" class="menuTitle">产品类型</div>
            <div :class="{isshow}" @click="isshow=!isshow" class="menuTitle">肌肤需求</div>
            <div :class="{isshow}" @click="isshow=!isshow" class="menuTitle">产品系列</div>
          </el-collapse-item>
          <el-collapse-item title="彩妆" name="2">
            <div :class="{isshow}" @click="isshow=!isshow" class="menuTitle">唇妆</div>
            <div :class="{isshow}" @click="isshow=!isshow" class="menuTitle">底妆</div>
            <div :class="{isshow}" @click="isshow=!isshow" class="menuTitle">眼妆</div>
          </el-collapse-item>
          <el-collapse-item title="香水" name="3"></el-collapse-item>
          <el-collapse-item title="夏季热卖新品" name="4" ></el-collapse-item>
          <el-collapse-item title="畅销榜单" name="5" ></el-collapse-item>
        </el-collapse>


        <div class="menu-down">
          <p>我的福利</p>
          <p>线上美容顾问</p>
        </div>
      </div>

      <!-- 右边 -->
      <div class="content-wrapper">
        <div class="menu-name">
           产品类型
        </div>

      <div class="goodsType">
        <div class="content-img">
          <img src="https://res.lancome.com.cn/resources/2019/2/25/15510633519926180_460X460.png?version=20190702233736694" 
          alt=""
          mode="aspectFill"
          style="width:100%">
          <div class="brief">卸妆&洁面</div>
        </div>
        <div class="content-img">
          <img src="https://res.lancome.com.cn/resources/2019/6/27/15616273080232075_920X920.jpg?version=20190702233736694" 
          alt=""
          mode="aspectFill"
          style="width:100%">
          <div class="brief">美容液&爽肤水 </div>
        </div>
      <div class="content-img">
          <img src="https://res.lancome.com.cn/resources/2019/6/20/15610452727638141_460X460.jpg?version=20190702233736694" 
          alt=""
          mode="aspectFill"
          style="width:100%">
          <div class="brief">精华</div>
      </div>
        <div class="content-img">
          <img src="https://res.lancome.com.cn/resources/2019/6/20/15610453273874336_460X460.jpg?version=20190702233736694" 
          alt=""
          mode="aspectFill"
          style="width:100%">
          <div class="brief">眼部护理</div>
        </div>
       <div class="content-img">
          <img src="https://res.lancome.com.cn/resources/2018/6/9/15285367331056501_460X460.jpg?version=20190702233736694" 
          alt=""
          mode="aspectFill"
          style="width:100%">
          <div class="brief">乳液</div>
        </div>
         <div class="content-img">
          <img src="https://res.lancome.com.cn/resources/2019/5/27/15589469130178237_460X460.jpg?version=20190702233736694" 
          alt=""
          mode="aspectFill"
          style="width:100%">
          <div class="brief">面霜</div>
        </div>
       </div>

      </div>
      
    </div>
  </div>
</template>

<script>
import search from "@/components/search";
import header from '@/components/header'
export default {
  data() {
    return {
      activeName: "1",
      isshow: false
    };
  },
  methods: {},
  components: {
    "V-search": search,
    'v-header':header
  }
};
</script>

<style>
.search {
  position: fixed;
  width: 400px;
  top: 20px;
}
.menuTitle {
  height: 30px;
  line-height: 30px;
  font-weight: normal;
  list-style: none;
  font-size: 11px;
  display: block;
}
.isshow {
  color: rgb(247, 81, 141);
  display: block;
  border-left: 2px solid rgb(247, 81, 141);
  padding-left: 8px;
}

.menu-wrapper {
  margin-top: 8px;
  width: 120px;
  border-right: 1px solid rgb(214, 209, 209);
  height: 520px;
  margin-left: 8px;
}
.menu-down {
  position: fixed;
  bottom: 90px;
  left: 0;
  height: 40px;
  line-height: 40px;
  color: #000;
  font-size: 13px;
  margin-left: 8px;
 
}
.el-collapse-item__content {
  padding-bottom: 0;
}
.el-icon-arrow-right:before {
  content: none;
}

/* 右边 */
.category {
  margin-top: 110px;
  display: flex;
  /* height: 100%; */
  /* width: 300px; */
}

.content-wrapper{
  width: 300px;
  height: 500px;
}
.menu-name{
  height: 40px;
  line-height: 40px;
  position: fixed;
  margin-left: 10px;
  width: 300px;
  background: #fff;
  
}
.goodsType{
  padding: 30px 0 0 0;
  margin-top: 5px;
  text-align: center;
}
.content-img {
  display: inline-block;
  width: 100px;
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
}
.brief{
  font-size: 12px;
  width: 100px;
}
</style>
