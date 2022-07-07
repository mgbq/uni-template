'use strict';

const uidObj = require('uni-id');
const {
	Controller
} = require('uni-cloud-router');


module.exports = class MemberController extends Controller {
	// 微信小程序登录
	async loginByWeixin() {
		console.log('this.ctx.data888888888',this.ctx.data);
		let response = {
			code: 1,
			member: {},
			msg: null
		};
		try {
			this.ctx.data.role = ['member'];
			const res = await uidObj.loginByWeixin(this.ctx.data);

			let member = {
				member_name: res.username || res.userInfo.nickname,
				member_access_token: res.token,
				member_nickname: res.userInfo.nickname || res.username,
				member_gender: res.userInfo.gender || 0,
				member_weixin_headimg: res.userInfo.avatar || '',
				member_city: res.userInfo.comment || '',
				member_openid: res.openid || '',
			}

			response.code = 0;
			response.user = res;

		} catch (e) {
			//TODO handle the exception
			response.msg = e;
			console.log('catch', e);
		}

		return response;
	}

}
