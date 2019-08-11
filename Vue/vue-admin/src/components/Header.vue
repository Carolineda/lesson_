<template>
  <div class="header">
    <div class="left-wrapper">
      <div class="logo">LOGO</div>
      <div class="el-icon-s-unfold" @click="clickSidebar"></div>
    </div>
    <div class="right-wrapper">
      <div class="el-icon-message">反馈</div>
      <div class="el-icon-question">帮助</div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'选项1',
      options: [
        {
          value: "选项1",
          label: "简体中文"
        },
        {
          value: "选项2",
          label: "Enslish"
        }
      ]
    }
  },
  methods: {
    clickSidebar(){

    }
  },
};
</script>

<style>
.header {
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
  background-color: rgb(26, 25, 43);
  color: #fff;
  height: 50px;
}
.left-wrapper {
  display: flex;
  cursor: pointer;

}
.logo {
  font-weight: bold;
  color: #3080fe;
  font-size: 36px;
}

.el-icon-s-unfold{
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  margin-left: 10px;
}
.right-wrapper{
  position: absolute;
  right: 10%;
}
.el-icon-message, .el-icon-question{
  margin-right: 30px;
}
</style>
