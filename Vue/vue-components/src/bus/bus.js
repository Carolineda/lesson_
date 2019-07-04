// 实现兄弟之间的组件通信不使用vuex  使用bus 在两个组件中传入bus
import Vue from 'vue'
const bus = new Vue()
export default bus 