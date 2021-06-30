import Vue from 'vue'
import App from './App'
import store from '@/common/store'
import * as $apis from '@/apis/index.js'
// 引入路由
import {
	router,
	RouterMount
} from '@/common/router';
Vue.use(router);

import $mUtils from '@/common/utils.js'
import * as filter from '@/common/filter.js'; // global filter
Object.keys(filter).forEach(item => {
	Vue.filter(item, filter[item]);
});
// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.$apis = $apis;
Vue.prototype.$store = store;
Vue.prototype.$mUtils = $mUtils;
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。

App.mpType = 'app'


const app = new Vue({
	store,
	...App
})

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
// 为了兼容小程序及app端必须这样写才有效果
app.$mount();
// #endif
