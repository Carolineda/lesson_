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

// 
export const playerMixin = {
  computed: {
    ...mapGetters([
      'playList',
      'currentSong',
      'currentIndex',
      'favoriteList'
    ]),
    // 喜欢歌曲点亮红心
    favoriteIcon () {
      return this.getFavoriteIcon(this.currentSong)
    }
  },
  methods: {
    toggleFavorite(song){  //点击喜欢Icon方法
      if(this.isFavorite(song)){
        this.deleteFavoriteList(song)
      }
      else{
        this.saveFavoriteList(song)
      }
    },
    getFavoriteIcon (song) {
      if (this.isFavorite(song)) {
        return 'icon-favorite'
      }
      return 'icon-not-favorite'
    },
    // 取出喜欢歌单
    ifFavorite(song) {
      const index = this.favoriteList.findIndex((item) => {
        return item.id === song.id     //当前点击加入喜欢的歌曲已经存在列表
      })
      return index > -1    
    },

    ...mapMutations({
      setPlstlist:'SET_PLAY_LIST',     //放在页面调用的方法 不在actions里面调用
      setCurrentIndex:'SET_CURRENT_INDEX',
      setPlaying:'SET_PLAYING'
    }),
    ...mapActions([
      'saveFavoriteList'
    ])

   
  }
}