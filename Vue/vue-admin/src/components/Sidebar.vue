<template>

    <div class="sidebar-wrapper">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-house"></i>
            <span>
              <router-link to="/dashboard"  class="click-menu"> Dash</router-link>
              </span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/check"  class="click-menu">监控页</router-link>
              </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>图表页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/check"  class="click-menu">基本图表</router-link>
              </el-menu-item>
            <el-menu-item index="2-1">通用图表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>表格页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">基础表格</el-menu-item>
            <el-menu-item index="3-2">通用表格</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-more"></i>
            <span>列表页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">基础列表</el-menu-item>
            <el-menu-item index="4-2">通用列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>内容页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">基础详情页</el-menu-item>
            <el-menu-item index="5-2">条款协议页</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-question"></i>
            <span>结果页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">成功</el-menu-item>
            <el-menu-item index="6-2">失败</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>个人页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">个人设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-warning"></i>
            <span>异常页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="8-1">204</el-menu-item>
            <el-menu-item index="8-1">404</el-menu-item>
            <el-menu-item index="8-1">403</el-menu-item>
            <el-menu-item index="8-1">500</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>

</template>

<script>
export default {
  name:'Sidebar',
  methods: {
    handleOpen(){},
    handleClose(){}
  },
};
</script>

<style>
.sidebar-wrapper {
  height: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  border-top: 1px solid #000;
  margin-top: 60px;
  z-index: 99;
}
.click-menu{
  color:#fff;
  text-decoration: none;
}
/* 修改默认样式 */
.el-menu {
  width: 200px;
 height: 100%;
  background-color: rgb(26, 25, 43);
}
.el-menu-item,
.el-submenu__title {
  height: 40px;
  line-height: 40px;
  color: #fff;
}
.el-submenu__title i {
  color: #fff;
}
.el-menu-item-group__title {
  padding: 0;
}
.el-submenu .el-menu-item {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.el-submenu__title:hover {
  background-color: rgb(44, 42, 42);
}
.el-menu-item:focus, .el-menu-item:hover:hover{
  background-color: rgb(44, 42, 42);
}

.el-menu-item.is-active {
    color:#fff;
}
</style>
