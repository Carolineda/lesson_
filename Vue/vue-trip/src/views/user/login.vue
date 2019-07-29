<template>
  <div class="login">
    <div class="login-bg">
      <h1 class="login-title">
        <img src="../../assets/img/logo.png" alt />
      </h1>
      <md-field class="login-input">
        <md-input-item
          ref="name"
          title="手机号 :"
          placeholder="请输入手机号"
          v-model="user.name"
          type="phone"
        ></md-input-item>
        <md-input-item
          ref="id"
          title="密 码 :"
          placeholder="请输入密码"
          v-model="user.password"
          type="password"
        ></md-input-item>
      </md-field>
      <div class="login-btn">
        <span @click="loginOnclick">
          <md-button type="default" round>登录</md-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mand-mobile"
import { mapActions } from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      userDate: null,
      user: {
        name: "15330734121",
        password: "12345"
      }
    };
  },
  methods: {
    loginOnclick() {
      this.loginAjax();
    },
    loginAjax() {
      let params = {
        userName: this.user.name,
        passWord: this.user.password
      };
      // 获取后端接口数据
      this.$http.post("/user", params).then(res => {
        this.userData = res.data.data;         //接收返回值 数据
        let tmpUser = JSON.stringify(this.userData);
        console.log(res.data.data);

        // 存放数据 到localStorage
        localStorage.setItem('user',tmpUser)

        //  存到vuex
        this.setUser(this.userData)                  //调用setUser方法
        Toast.succeed(`欢迎回来,${this.userData.name}`, 1500);
        this.$router.push({path:'/trip'})               //登录成功路由跳转，页面跳转
      });
    },
    // vuex调用
    ...mapActions(['setUser','setUserData'])
  }
};
</script>

<style lang="stylus" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw; // 继承屏幕宽度的100%
  height: 100vh;
  overflow: hidden;
  background: url('../../assets/img/login-bg.jpg');
  background-size: 100% 100%; // 
  padding: 20px;

  &-input {
    margin-top: 20px;
  }

  &-title {
    margin-top: 70px;
    text-align: center;

    img {
      width: 402px;
      height: 101px;
      margin: 0 auto; // 固定宽高
    }
  }

  &-btn {
    width: 100%;
    margin: 0px auto;
    font-size: 130px;
    color: #ffffff;
    text-align: center;
  }
}

.login-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;
}
</style>

修改框架其默认样式
<style lang="stylus" >
.login {
  .md-field {
    background: transparent; // 透明的
  }

  .md-field-item-content:before {
    background-color: #000;
  }

  .md-field-item.is-solid .md-field-item-title {
    width: 100px;
  }

  .md-field-item-title {
    font-size: 22px;
  }

  .md-input-item-input {
    font-size: 22px;
  }

  .md-button.block {
    font-size: 22px;
    width: 50%;
    height: 50px;
    margin: 0 auto;
    background: transparent;
    background-color: rgba(131, 130, 105, 0.4);
  }
}
</style>