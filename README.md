


## 前言

```作者利用业余时间开发，维护, 下载请给个好评或收藏```

```有问题给5星后留言可得到及时的解答```

```插件交流QQ群 : 736073015 ```

做一个新的项目就需要常用的代码，比如

 - 登录，注册 ,找回密码，用户协议，404页面(模板)
- 全局路由守卫（路由配置）
- Request封装（请求封装）
- api集中管理
- 引入依赖的UI库（color-ui,uview-ui）
- flex常用布局css,
- 配置分包
- utils常用工具函数
- 全局过滤器filters
- 配置Vuex(store)
- 无关系组件间的通信。
- 使用easycom模式，让您无需引入组件即可直接使用（按需加载）
- 后面持续更新

为了提高自己的效率（说白了有点懒）决定把这些作为基础模板，下次做新项目直接用就行了

## 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210630100255442.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)

## 1、全局路由守卫

#####  (1) 路由拦截
[uni-simple-router](https://hhyang.cn/) 路由、拦截、最优雅的解决方案

#####  (2) 路由配置
通过 vue.config.js 配合[uni-read-pages](https://github.com/SilurianYang/uni-read-pages)，可以随心所欲的读取 pages.json 下的所有配置


## 2、Request封装
 适用于一项目多域名请求、七牛云图片上传、本地服务器图片上传、支持 Promise.

## 3、api集中管理
api集中管理； 为简化逻辑代码量整洁的原则，像调用函数一样调用api，做到代码分离，在apis目录统一创建api函数，并且封装接口返回数据类型校验的方法，挂载到vue原型中，页面通过`this.$apis.apiName()`调用

## 4、分包
sub目录分包管理 由于微信小程序的限制，上传发布机制总包大小不能大于2m，所以项目若超出该限制，要在page.json中做分包处理，分包处理的配置与pages目录保持一致

## 5、配置vuex
不需要引入每个子store模块

```javascript
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const files = require.context("./modules", false, /\.js$/);
let modules = {
	state: {},
	mutations: {},
	actions: {}
};

files.keys().forEach((key) => {
  Object.assign(modules.state, files(key)["state"]);
  Object.assign(modules.mutations, files(key)["mutations"]);
  Object.assign(modules.actions, files(key)["actions"]);
});
const store = new Vuex.Store(modules);
export default store;
```
页面使用Vuex

```javascript
import { mapState,mapActions } from 'vuex';

computed: {
			...mapState(['userInfo'])
		}
methods: {
			...mapActions(['getUserInfo'])
		}
		
```

## 6、全局过滤器filters
main.js引入filters，使用如下
```javascript
{{shop.shopAddress|autoAddPoints}}
```

## 7、无关系组件间的通信=>事件车
> 事件车的基本原理就是在本项目Vue的原型对象里新生成一个Vue对象专门用来负责无关系，跨级组件间的通信

main.js声明事件bus
```javascript
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
```
A组件 监听($on) 

```javascript
// onload 里面
 this.$bus.$on('updateChecked', this.updateChecked)

// methods 里面
updateChecked(index){
 	console.log('这里就拿到了跨级组件的index',index)
 }
```
B组件 触发($emit)
> B组件触发A组件的updateChecked 传index值给A组件 
```javascript
 this.$bus.$emit('updateChecked', index);
```

## [源码下载](https://github.com/mgbq/uni-template)

## 常见问题
#### 1 运行不了，控制台报错，请安装依赖

```npm install ```


## 后面持续更新。。。。

如果你导入源码或者学习过程中有任何问题，都可以加我qq：392716797。大家一起学习，一起进步。 
前端学习大佬群493671066，美女多多。老司机快上车，来不及解释了。

#### 作者相关文章

[反编译获取任何微信小程序源码——看这篇就够了](https://blog.csdn.net/qq_32340877/article/details/110993362) 

[零基础搭建获利的美团饿了么优惠券CPS小程序(附源码)](https://blog.csdn.net/qq_32340877/article/details/113478901)

[5分钟实现微信云小程序支付功能（含源码）](https://blog.csdn.net/qq_32340877/article/details/111595124)


