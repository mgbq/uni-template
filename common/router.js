import Vue from 'vue'
import Router from 'uni-simple-router'
import store from '@/common/store'

Vue.use(Router)
//初始化
const router = new Router({
	encodeURI: false,
	routes: [...ROUTES] //路由表
	// routes: ROUTES, //路由表
	// h5: {
	// 	rewriteFun: false //是否对uni-app reLaunch/navigateBack 两个方法重写 处理uni刷新直接返回到首页和触发路由守卫
	// }
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next()
	// // 有两个个判断条件,一个是token,还有一个路由元信息
	// let userInfo = Boolean(uni.getStorageSync('userInfo'));
	// // 权限控制
	// if (to.meta && to.meta.auth && !userInfo) {//没有登录信息执行登录操作
	// } else {
	// 	next()
	// }
})
// 全局路由后置守卫
router.afterEach((to, from) => {})
export default router;
