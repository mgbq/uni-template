
import {
	debug
} from '@/env.js'
import $tools from '@/nxTemp/utils/tools'

let func = {};

func = new Proxy(func, {
	get: function(target, key) {
		return new FuncContext(key);
	}
});

function FuncContext(name) {
	this.funcname = name;
	this.response = {
		code: 200,
		datas: {},
		msg: ''
	}
}

FuncContext.prototype = {
	funcname: '',	// 云函数名称
	response: {} 	// 统一响应格式
};

/**
 * 调用云函数
 * action controller 函数路径
 * data controller 数据参数
 * */
FuncContext.prototype.call = function(action, data) {
	uni.showNavigationBarLoading();
	return uniCloud.callFunction({
		name: this.funcname,
		data: {
			action,
			data
		}
	}).then(res => {
		if (debug) {
			console.log(this.funcname + '/' + action + ' call', res);
		}
		if (res.result) {
			this.response.code = res.result.code === 0 ? 200 : res.result.code;
			if (this.response.code != 200) {
				this.response.msg = res.result.msg || res.result.message;
			} else {
				this.response.msg = res.result.msg
			}
			this.response.datas = res.result.datas || res.result;
			return Promise.resolve(this.response);
		}
		
		return Promise.reject(res);
	}).catch(err => {
		if (debug) {
			console.log(this.table + ' call catch', err);
			$tools.showModal(JSON.stringify(err));
		}
		return Promise.reject(err);
	}).finally(res => {
		uni.hideNavigationBarLoading();
	});
}

export default func;
