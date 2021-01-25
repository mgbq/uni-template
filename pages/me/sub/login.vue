<template>
	<view class="nx-box">
		<u-navbar :is-back="false" :background="{}" :border-bottom="false" title="登录">
		</u-navbar>
		<image src="@/static/images/login/login.png" mode='aspectFit' class="nx-logo"></image>
		<view class="nx-title">LOGO区域</view>
		<view class="nx-form">
			<input class="nx-input" placeholder-class placeholder="请输入用户名"  v-model="login.loginName"/>
			<input class="nx-input" placeholder-class password placeholder="请输入密码"  v-model="login.password"/>
			<view class="nx-label">忘记密码？</view>
			<button class="nx-btn" @tap="loginFunction">立即登录</button>
			<navigator url="./register" hover-class="none" class="nx-label">还没有账号？点此注册.</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		onShow() {

		},
		data() {
			return {
				login: {
					loginName: '13688889995', //手机号码
					password: '555666' //密码
				},
			};
		},
		methods: {
			//当前登录按钮操作
			loginFunction() {
				let  that = this;
				if (!that.login.loginName) {
					uni.showToast({
						title: '请输入账户',
						icon: 'none'
					});
					return;
				}
				// if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.loginName)) {
				// 	uni.showToast({
				// 		title: '请输入正确手机号',
				// 		icon: 'none'
				// 	});
				// 	return;
				// }
				if (!that.login.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}
				// this.$apis.postLogin(this.login).then(res => {
				// 	uni.showToast({
				// 		title: '登录成功！',
				// 		icon: 'none'
				// 	});
				// 	that.$store.commit("SET_TOKEN", res.token);
					that.$Router.pushTab({
						path: 'pages/index/index',
					});
				// });
			}
		}
	}
</script>

<style scoped>
	.nx-box {
		padding: 0 100upx;
		position: relative;
	}

	.nx-logo {
		width: 100%;
		width: 100%;
		height: 310upx;
	}

	.nx-title {
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}

	.nx-form {
		margin-top: 300upx;
	}

	.nx-input {
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
		box-sizing: content-box;
	}


	.nx-label {
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}

	.nx-btn {
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}

	.nx-btn:after {
		border: 0;
	}

	/*按钮点击效果*/
	.nx-btn.button-hover {
		transform: translate(1upx, 1upx);
	}
</style>
