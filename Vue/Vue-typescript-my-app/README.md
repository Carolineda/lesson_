##Vue + Typescript  Typescript 变成强类型
  Typescript 
  1.后缀变成.TS typescript是js的超集，typescript会编译成js 可以跟写java一样
      .ts -> webpack loader ->babel ->js
  2.用来做大型项目,可以有效减少bug 更好的多人协作
  3. 将弱类型的Js变成静态类型的typescript 错误在编译阶段就解决了 
   ： let a : string = 1   x类型错误

- Interface 声明自定义的类型 也称接口,可以类型检测。代码更加可靠

- vuex 提供一些类型给Typescript 



代码：
import {State} from '@/store/interface'

1.export interface State {
  movieList:[]
}
 - 在此中  State类似一个结构体 在里面定义
2.interface 实现一个约束 保证代码报错量减少,是一个结构体 以;隔开  
export interface movie{
  name:string;
  title:string;
  id:string;
}
   在State state中每一项都要满足其约束


## 安装命令：
  1.yarn
  2.npm run serve 