


## 前言

```作者利用业余时间开发，维护, 下载请给个好评或收藏```

```有问题给5星后加作者微信 可得到及时的解答```

```作者微信：nxmin68（加微信，进微信群交流）```

![微信二维码](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b35bac59-8c68-4e5a-86c9-99ba1b58193d/c6ba1149-3e67-4a42-8668-9d2eb58ff1f3.jpg)


做一个新的项目就需要常用的代码，比如

- 登录，注册 ,找回密码，用户协议，404页面(模板)
- 全局路由守卫（路由配置）
- Request封装（请求封装）
- api集中管理
- 引入依赖的UI库（color-ui,uview-ui2.0）
- flex常用布局css,
- 小程序更新提示代码，配置分包，分享等必备代码
- utils常用工具函数
- 全局过滤器filters
- 配置Vuex(store)
- 无关系组件间的通信。
- 使用easycom模式，让您无需引入组件即可直接使用（按需加载）
- unicloud云函数封装请求
- 进可攻，退可守的架构
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
 [uni-ajax](https://uniajax.ponjs.com/) 基于 promise，轻量、灵活的uni-app 网络请求库

## 3、api集中管理
api集中管理； 为简化逻辑代码量整洁的原则，像调用函数一样调用api，做到代码分离，在apis目录统一创建api函数

## 4、小程序更新提示代码，配置分包，分享等必备代码
sub目录分包管理 由于微信小程序的限制，上传发布机制总包大小不能大于2m，所以项目若超出该限制，要在page.json中做分包处理，分包处理的配置与pages目录保持一致，封装更新提示代码

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

通用的mutations方法，只需要写一个就行了

```javascript
	//更新state数据
	setStateAttr(state, param) {
		if (param instanceof Array) {
			for (let item of param) {
				state[item.key] = item.val;
			}
		} else {
			state[param.key] = param.val;
		}
	}
```
actions调用

```javascript
	async setUserData({
		state,
		commit
	}, data) {
		commit('setStateAttr', {
			key: 'userInfo',
			val: data
		})
		uni.setStorageSync('userInfo', data);
	},
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

## [github源码下载](https://github.com/mgbq/uni-template)

## [插件市场源码](https://ext.dcloud.net.cn/plugin?id=4008)

## 常见问题
#### 1 运行不了，控制台报错，请安装依赖
`HBuilderX导入的项目带有中文，必须使用cnpm install 安装依赖` [cnpm安装依赖](https://blog.csdn.net/qq_32340877/article/details/125364934)


## 后面持续更新。。。。



## 牛云团队项目推荐

[斗图，表情包小程序](https://ext.dcloud.net.cn/plugin?id=8806)

[万能节日头像小程序](https://ext.dcloud.net.cn/plugin?id=8085)

[智能垃圾分类小程序](https://ext.dcloud.net.cn/plugin?id=6711)

[微信小程序支付unicloud版](https://ext.dcloud.net.cn/plugin?id=8185)

[资源变现资讯、自媒体、新闻、博客小程序](https://ext.dcloud.net.cn/plugin?id=8548)

[反编译获取任何微信小程序源码——看这篇就够了](https://blog.csdn.net/qq_32340877/article/details/110993362) 

```承接各类软件开发业务价格美丽 ，QQ 2214904953```



