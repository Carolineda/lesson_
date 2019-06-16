<template>
  <div>
    <!-- 组件 counter -->
    <counter></counter>
    <counter-borther></counter-borther>
  </div>
</template>

<script>
// 两个组件都要用到 count 状态 怎么办?

import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'
export default {
  name: 'App',
  data() {
  },
  methods: {
  },
  components: {
    "counter" :Counter,
    "counter-borther": CounterBrother
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
