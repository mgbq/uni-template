// 用户数据模块
import {router} from '@/nxTemp/router/index.js'
const TOKEN = uni.getStorageSync("token") || "";
const OPENID = uni.getStorageSync("openId") || "";
const USER_INFO = uni.getStorageSync("userInfo") || {};

export const state = {
	// 前端token
	token: TOKEN,
	// 用户openid
	openId: OPENID,
	// 用户信息 头像 昵称
	userInfo: USER_INFO
}

export const actions = {
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
	// 登录过期 重新登录
	reLogin({
		commit
	}, info) {
		commit('setStateAttr', {
			key: 'token',
			val: ''
		})
		uni.setStorageSync("token", '');
		router.push({
			path: 'pages/login/login'
		});
	}
}

export const mutations = {
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

}

export const getters = {
	// 用户是否登录
	hasLogin: state => {
		if (state.token) {
			return true;
		} else {
			return false
		}
	}
}

