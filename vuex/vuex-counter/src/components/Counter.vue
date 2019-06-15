<template>
  <div>
    {{$store.state.count}} times
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // this.count++
      // console.log(11)
      // this.$emit('increment')

    }
  },

}
</script>

<style>

</style>
