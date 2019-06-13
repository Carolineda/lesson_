<template>
  <div>
    <div class="goods">
      <!-- 左边部分 -->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>  <!-- currentIndex === index时 加上'current'类名' 左边点击出现Icon图标 -->
          <li v-for="(item, index) in goods" 
          :key="index"
          class="menu-item"
          :class="{'current': currentIndex === index}">
            <span class="text border-1px">
                <!-- 根据item返回type加上数组里的类名 -->
              <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'goods',
  data () {
    return {
      goods:[],
      classMap:[]
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];

    this.$http.get('https://www.easy-mock.com/mock/5d023d8cfb82272509b46e35/goods/vue-goods')
      .then(res => {
        // console.log(res)
        // 请求成功
        if(res.data.errno === 0)
        {
          this.goods = res.data.data
          this.$nextTick(()=>{
            //保证html渲染完成才能执行 防止出现页面响应异步问题 
          this._initScroll()
          })
         
        }
        
      })

  },
  methods: {
    _initScroll () {
      // 获取ref结构
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click:true
      })
    }
  },

}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin.styl'
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        font-weight 700
      .text
        display table-cell
        width 56px
        vertical-align middle
        border-1px(rgba(7,17,27,0.1))
        font-size 12px
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice 
            bg-image('invoice_3')
          &.special 
            bg-image('special_3')







</style>
