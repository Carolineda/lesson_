 ## vue大型项目开发 分成两种工作：
    1.组件开发工作  业务量开发
    2.Vuex 数据设计
      -store  独立于组件之外，应用App的中央数据管理中心
        中央管理中心
          公司：
            1.CEO state {count:0} 共享的状态
              actions 日常动作 工作，修改状态
              对其状态修改: dispatch 派发 action ('name',payload) => action ->commit('mutation name') mutations => state 修改数据
               mutations  财务  跟老板接触state，负责审核对状态的修改是否合公司规定

            2.组件 读取属性：this.$store.state.count
              写： actions(组件调用动作方法)


## 组件开发
  组件可以分开 vuex中央管理  数据管理方便

  - data 是组件自有数据，没有多少 思考会不会被共享，应用层的共享，只要多于一个组件要用，且关系不是简单的兄弟就要用vuex
  - 共享状态
     vuex state 管理
     mutation 来修改
     actions 被触发动作 并且提交动作到mutations
     getters 是对state的包装 只能读

    mapActions mapGetters引入组件