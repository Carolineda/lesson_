<template>
  <div id="app">
    Clicked {{$store.state.count}} times,count is {{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment Odd</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
// 引入vuex mapActions将中央管理映射本地
import { mapActions,mapGetters} from 'vuex'
export default {
  name: 'App',
  computed: mapGetters([
    'evenOrOdd'
  ]),
  components: {
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  

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
