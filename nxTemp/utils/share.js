export default {
	data() {
		return {
			//设置默认的分享参数
			shareInfo: {
				title: '', //分享标题
				path: '', //转发链接  小程序转发只有页面链接和参数,其他全部带域名
				imageUrl: '', //分享图片
			}
		}
	},
	onLoad(options) {
		// options.scene ='FeFy9fhC2TaMMovG5QOdZLeRahzWrayH';
		let that = this;
		// console.log('nxshare onload options', options);
		//为每个页面设置分享信息
		that.setShareInfo();
		let query = this.$Route.query;
		// //直接进入页面
		// if (options.page) {
		// 	let page = decodeURIComponent(options.page);
		// 	uni.navigateTo({
		// 		url: page
		// 	})
		// }
	},

	methods: {
		setShareInfo(scene = {
			title: '', //自定义分享标题
			image: '', //自定义分享图片
			query: {}, //自定义分享参数
			path: '', // 自定义分享路径
		}) {
			let that = this;
			let defaultShareInfo = uni.getStorageSync('shareInfo');

			//设置自定义分享标题
			if (scene.title != '') {
				that.shareInfo.title = scene.title;
			} else {
				that.shareInfo.title = defaultShareInfo.title;
			}
			//设置分享图片
			if (scene.image != '') {
				that.shareInfo.imageUrl = scene.image;
			} else {
				that.shareInfo.imageUrl = defaultShareInfo.image;
			}

			//设置分享路径
			if (scene.path != '') {
				that.shareInfo.path = scene.path;
			} else {
				that.shareInfo.path = 'pages/index/index';
			}
			uni.setStorageSync('shareInfo', that.shareInfo);
		},

	},

	// #ifdef MP-WEIXIN

	onShareAppMessage(res) {
		let that = this;
		return {
			title: that.shareInfo.title,
			path: that.shareInfo.path,
			imageUrl: that.shareInfo.imageUrl,
			success(res) {
				uni.showToast({
					title: '分享成功'
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				})
			},
			complete() {}
		}
	},
	onShareTimeline(res) {
		let that = this;
		let query = '';
		//携带当前页面资源ID参数
		let currentPage = getCurrentPages()[getCurrentPages().length - 1];
		let options = currentPage.options;
		if (JSON.stringify(options) != '{}' && options.id) {
			query += `id=${options.id}`;
		}
		let shareInfoUrl = that.shareInfo.path.split('?');
		if (shareInfoUrl.length > 1) {
			if (query !== '') {
				query += '&';
			}
			query += shareInfoUrl[1];
		}

		return {
			title: that.shareInfo.title,
			query: query,
			imageUrl: that.shareInfo.imageUrl,
			success(res) {
				uni.showToast({
					title: '分享成功'
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				})
			},
			complete() {}
		}
	}
	// #endif

}
