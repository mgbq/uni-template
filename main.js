import Vue from "vue";
import App from "./App";
import {
	router,
	RouterMount
} from "@/nxTemp/router";
import store from "@/nxTemp/store";
import uView from "@/uview-ui";
import nxTemp from "@/nxTemp";


async function bootstrap() {
	App.mpType = "app";
	//引入路由
	Vue.use(router);
	// 引入全局uView
	Vue.use(uView);
	// 加载nxTemp
	Vue.use(nxTemp);

	const app = new Vue({
		store,
		...App
	});
	// #ifdef H5
	RouterMount(app, router, "#app");
	// #endif
	// #ifndef H5
	app.$mount();
	// #endif
}

bootstrap();
