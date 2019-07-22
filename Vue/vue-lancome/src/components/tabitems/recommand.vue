<template>
  <div class="recommend-wrapper">
    <div class="search-wrapper">
      <v-search></v-search>
    </div>

    <!-- 推荐部分 -->
    <div class="recommend-title">
      <div class="content-detail" :class="contentSelected?'':'active' " @click="contentNew">护肤新品</div>
      <div class="content-star" :class="!contentSelected?'':'active'" @click="contentStar">明星彩香</div>
    </div>

    <!-- 推荐栏图 -->
    <div class="recommend-img" v-if="!contentSelected">
      <img :src="item[0].imgUrl" mode="aspectFill" style="width:100%" alt />
    </div>
    <div class="recommend-img" v-if="contentSelected">
      <img :src="item[1].imgUrl" mode="aspectFill" style="width:100%" alt />
    </div>

    <!-- items content-->
    <div class="items">
      <div class="recommend-items" v-if="!contentSelected">
        <div class="recommend-item" v-for="(context,index) in item[0].itemsData" :key="index">
          <img :src="context.itemPic" alt mode="aspectFill" style="width:100%" />
          <div class="item-name">{{context.name}}</div>
          <p class="item-price">￥{{context.price}}</p>
        </div>

         <div class="recommend-items" v-if="contentSelected" >
        <div class="recommend-item" v-for="(ct,index) in item[1].itemsData" :key="index">
          <img :src="ct.itemPic" alt mode="aspectFill" style="width:100%" />
          <div class="item-name">{{ct.name}}</div>
          <p class="item-price">￥{{ct.price}}</p>
        </div>
      </div>

      </div>

     
    </div>
  </div>
</template> 

<script>
import search from "@/components/search";

export default {
  data() {
    return {
      contentSelected: false,
      itemsData: [],
      item: [],
      imgUrl: ""
    };
  },
  components: {
    "v-search": search
  },
  methods: {
    contentNew() {
      this.contentSelected = false;
    },
    contentStar() {
      this.contentSelected = true;
    }
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5d33f94eed2cb75d229b594e/lancome-recomend/lancome_recommend"
      )
      .then(res => {
        console.log(res);
        this.item = res.body.data;
        // console.log(item);
      });
  }
};
</script>

<style scoped>
.recommend-wrapper {
  width: 100%;
}
.search-wrapper {
  width: 100%;
}

/* 推荐标题切换 */
.recommend-title {
  display: flex;
  background-color: #fff;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
}
.recommend-title .active {
  font-weight: bold;
  color: #d51b51;
}
.recommend-title div {
  flex: 1;
  text-align: center;
}

.items {
  display: flex;
}
.selectedRecommend a .router-link-active {
  color: #d51b51;
}

/* 推荐内容 */
.items {
  height: 100%;
  padding-bottom: 50px;
}
.recommend-items {
  padding: 30px 10px 30px 10px;
  text-align: center;
}
.recommend-item {
  width: 160px;
  height: 200px;
  display: inline-block;
  margin: 20px 0 0 10px;

}
.item-name {
  color: #000;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommend-item p {
  font-weight: bold;
  font-size: 16px;
  color: #000;
}
</style>
