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
        <!-- <el-collapse v-model="activeName" accordion>
          <el-collapse-item :title="menus[index].type" v-for="(item,index) in menus" :key="index" @change="selectMenu(index)">
            <div
              v-for="(e, n) in item.sorts ? item.sorts :  []"
              :key="n"
              @click="selectMenu(index, n)"
              class="menuTitle"
              :class="{'current' : currentIndex == n}"
            >{{e.goodstype}}</div>
          </el-collapse-item>
        </el-collapse>-->
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleOpen"
          text-color="#000"
          active-text-color="#ffd04b"
        >
          <el-submenu :index="String(index+1)" v-for="(item,index) in menus" :key="index" :class="{'current' : currentIndex == index}">
            <template slot="title">
              <span>{{item.type}}</span>
            </template>
            <el-menu-item :index="String(index+1)+'-'+String(n+1)" v-for="(e, n) in item.sorts ? item.sorts :  []" :key="n" @click="selectMenu(index, n)" :class="{'current' : currentIndex == n}">
              {{e.goodstype}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="selectMenu(index)"
        >
          <el-submenu
            index="1"
            v-for="(item,index) in menus"
            :key="index"
            @change="selectMenu(index)"
          >
            <template slot="title">
              <span>{{menus[index].type}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index=index+1-n+1
                v-for="(e, n) in item.sorts ? item.sorts :  []"
                :key="n"
                @click="selectMenu(index, n)"
                class="menuTitle"
                :class="{'current' : currentIndex == n}"
              >{{e.goodstype}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>-->

        <div class="menu-down">
          <p>我的福利</p>
          <p>线上美容顾问</p>
        </div>
      </div>

      <!-- 右边 -->
      <div class="content-wrapper" ref="contentWrapper">
        <div class="menu-name">产品类型</div>

        <div class="goodsType">
          <div
            class="content-img"
            v-for="(itemdetail,index) in menusRight"
            :key="index"
            @click="selectMenu(index,$event)"
          >
            <img :src="itemdetail.goodsImg" alt mode="aspectFill" style="width:100%" />
            <div class="brief">{{itemdetail.goodstitle}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search";
import header from "@/components/header";
export default {
  data() {
    return {
      activeName: "1",
      menus: [],
      currentIndex: null,
      menusRight: []
    };
  },
  methods: {
    selectMenu(index, n) {
      console.log(typeof(index), index, n);
      if (n > -1) {
        // this.$set(this.menus[index].sorts[n], 'active', true)
        this.menusRight = this.menus[index].sorts[n].typedetail;
      } else {
        console.log(n)
        this.menusRight =
          this.menus[Number(index)-1].typedetail || this.menus[Number(index)-1].sorts[0].typedetail;
      }
      // this.menusRight = this.menus[index].sorts ? this.menus[index].sorts[n].typedetail : this.menus[index].typedetail
      // let menu = [];
      // this.menus.forEach(itemdetail => {
      //   itemdetail.forEach(itemdetailChild => {
      //     if (itemdetail.count) {
      //       itemdetail.push(itemdetail);
      //     }
      //   });
      // });
    },
    handleOpen(index, keyPath) {
      console.log(index, keyPath);
      this.menusRight =
          this.menus[Number(index)-1].typedetail || this.menus[Number(index)-1].sorts[0].typedetail;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    "V-search": search,
    "v-header": header
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5d36f12f8cf9694121098d48/lancome-sort/sort"
      )
      .then(res => {
        console.log(res);
        this.menus = res.body.data;
        console.log(this.menus);
        this.menusRight = res.body.data[0].sorts[0].typedetail;
      });
  },
  computed: {
    goods() {
      return this.menus.length > 0 ? this.menus[0].sorts[0].typedetail : [];
    }
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
.current {
  color: rgb(247, 81, 141);
  display: block;
  border-left: 2px solid rgb(247, 81, 141);
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
.el-icon-arrow-down:before {
  content: none;
}
/* 右边 */
.category {
  margin-top: 110px;
  display: flex;
  /* height: 100%; */
  /* width: 300px; */
}

.content-wrapper {
  width: 300px;
  height: 500px;
}
.menu-name {
  height: 40px;
  line-height: 40px;
  position: fixed;
  margin-left: 10px;
  width: 300px;
  background: #fff;
}
.goodsType {
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
.brief {
  font-size: 12px;
  width: 100px;
}
</style>
