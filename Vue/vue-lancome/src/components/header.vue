<template>
  <div class="header">
    <div class="header-left" @click="showLeft">
      <i class="glyphicon glyphicon-list"></i>
      <!-- <span class="glyphicon glyphicon-search"></span> -->
    </div>
    <div class="header-content">
      <img src="https://res.lancome.com.cn/build/images/logo@2x.png" alt />
    </div>
    <div class="header-right">
      <i class="glyphicon glyphicon-user"></i>
      <span class="glyphicon glyphicon-shopping-cart"></span>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  methods: {
    showLeft() {
      this.$store.dispatch("setShowSidebar", true);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  background-color: black;
  height: 60px;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
}

.header-left,
.header-right {
  color: aliceblue;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 5px;
  flex: 0 0 100px;
}

.header-left {
  padding-left: 10px;
}
.header-content {
  /* margin: 0 auto; */
  flex: 1;
  text-align: center;
}
.header-content img {
  width: 100px;
  height: auto;
}
.header-right {
  text-align: right;
}
</style>
