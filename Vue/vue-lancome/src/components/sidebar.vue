<template>
  <div class="sidebar" :class="{showSidebar:showSidebar}">
    <div class="sidebar-on" :class="{showbar: showSidebar}">
      <div class="menu">
        <ul>
        <div class="title">
          <li  @click="hideBar">
            <router-link to="/main"  class="click-menu">
            <span>返回首页</span>
            <span class="glyphicon glyphicon-menu-right"></span>
            </router-link>
          </li>
          </div>

        <div class="title">
          <li class="title" @click="hideBar" >
            <!-- <router-link to="" > -->
            <span>搜索兰蔻</span>
          </li>
        </div>

        <div class="title">
          <li class="title" @click="hideBar">
            <!-- <router-link to=""> -->
            <span>会员权益</span>
          </li>
        </div>

        <div class="title">
          <li class="title" @click="hideBar">
            <!-- <router-link to=""> -->
            <span>畅销榜单</span>
          </li>
        </div>

        <div class="title">
          <li class="title" @click="hideBar">
            <!-- <router-link to=""> -->
            <span>官网礼遇</span>
          </li>
        </div>

        <div class="title">
          <li class="title" @click="hideBar">
            <!-- <router-link to=""> -->
            <span>兰蔻试装间</span>
          </li>
        </div>

        <div class="title">
          <li class="title" @click="hideBar">
            <!-- <router-link to="" > -->
            <span>线上美容顾问</span>
          </li>
        </div>
        </ul>
      </div>
    </div>
    <div v-show="showSidebar" class="sidebar_mask" @click="hideBar"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters ([
      'showSidebar'
    ])
  },
  methods: {
     hideBar(){
      this.$store.dispatch('setShowSidebar',false)
    }
  },
};
</script>

<style>

.sidebar-on {
  position: absolute;
  width: 200px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  font-size: 16px;
  margin-left: 0;
  z-index:1002;
  overflow:auto;
  left:-300px;
  transform:translateZ(0);
  transition:all 0.6s ease;
}
.glyphicon-menu-right {
  float: right;
  height: 50px;
  line-height: 50px;
}
.showbar{
  transform:translateZ(0);
  transform:translateX(300px);
}
ul {
  list-style: none;
  padding: 0;
  margin-left: 20px;
}
.title {
  height: 50px;
  line-height: 50px;
  font-weight: bold;
}
.title .router-link-active {
   text-decoration: none;
  color: #d51b51;
  }
/* 右边蒙层 */
.sidebar_mask {
    position:fixed;
    width:100%;
    margin:0 auto;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1001;
    background:rgba(10, 10, 10, 0.6);
}

</style>
