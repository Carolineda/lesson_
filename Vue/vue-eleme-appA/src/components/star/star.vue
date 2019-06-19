<template>
  <div>
    <div class="star">
     <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
    </div>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
export default { 
  props: {
    size: {
      type: Number
    },
    score:{
      type:Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClass() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;   //计算所有星星
      let hasDecimal = score % 1 !==0 ;     // 非整数星星
      let integer = Math.floor(score);
      for (let i =0;i<integer;i++) {       //整数星星 on
        result.push(CLS_ON);
      }
      if(hasDecimal){
        result.push(CLS_HALF);
      }
      while (result.length <LENGTH) {
        result.push(CLS_OFF);
      }
      return result
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        box-sizing 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
