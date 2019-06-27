// #search.vue  Js 
import { mapGetters,mapMutations,mapActions } from 'vuex';

export const searchMixin = {
  data () {
    return {
      query:'',
      refreshDelay:120
    }
  },
  computed: { 
    ...mapGetters([
      'searchHistory'
    ])
  },

  methods: {
    onQueryChange(query)     
    {
      this.query=query.trim()
    },
    blurInput(){
      //  search.vue调用searchBox方法
      // 子组件调用父组件方法 企鹅没有传入参数
      this.$refs.searchBox.blur()
    },
    addQuery(query) {
      this.$refs.searchBox.setQuery(query)
    },
    saveSearch(song){
      console.log(song)
      this.selectPlaySong(song)
      // dispatch 调用actions里的方法  另一种方法的调用vuex里的方法 
      this.saveSearchHistory(this.query)  
    },
    // 另一种方法的调用vuex里的方法 
    ...mapActions([
      'saveSearchHistory',
      'selectPlaySong'
    ])
  }
}