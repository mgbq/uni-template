'use strict';
const Router = require("uni-cloud-router").Router; // 引入 Router
const router = new Router(require("./config.js")); // 根据 config 初始化 Router
exports.main = async (event, context) => {
	return router.serve(event, context); // 由 Router 接管云函数
};
