<template>
	<view class="content">
		<view class="header">
			<image src="/static/images/login/logo.jpg"></image>
		</view>

		<view class="list">
			<view class="list-call">
				<u-icon name="phone" color="#EE2626" size="40"></u-icon>
				<input class="sl-input" v-model="login.phone" type="number" maxlength="11" placeholder="输入手机号" />
			</view>
			<view class="list-call">
				<u-icon name="lock" color="#EE2626" size="40"></u-icon>
				<input class="sl-input" v-model="login.password" type="text" maxlength="32" placeholder="输入密码"
					password="true" />
			</view>

		</view>

		<view class="button-login" hover-class="button-hover" @tap="bindLogin()">
			<text>登录</text>
		</view>

		<view class="agreenment">
			<navigator url="/pages/login/forget" open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="/pages/login/reg" open-type="navigate">注册账户</navigator>
		</view>
	</view>
</template>

<script>
	import {
		postLogin
	} from "@/nxTemp/apis/login.js"
	export default {
		data() {
			return {
				login: {
					phone: '',
					password: ''
				}

			};
		},
		methods: {
			bindLogin() {
				let that = this;
				if (this.login.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
				if (this.login.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码不正确'
					});
					return;
				}
				postLogin(this.login).then(res => {
					uni.showToast({
						title: '登录成功！',
						icon: 'none'
					});
					this.$store.dispatch('setUserData', res.userInfo);
					// 跳转首页
					that.$Router.pushTab({
						path: '/pages/tabbar/home',
					});
				});
				// 以下是云函数示例
				// this.$cloudFun.app.call('member/loginByWeixin', this.login).then(res => {
				// 	if (res.code === 0) {
				// 		console.log('登录成功')
				// 	}
				// });
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		width: 161rpx;
		height: 161rpx;
		border-radius: 50%;
		margin-top: 30rpx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161rpx;
		height: 161rpx;
		border-radius: 50%;
	}

	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50rpx;
		padding-left: 70rpx;
		padding-right: 70rpx;
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		color: #333333;
		border-bottom: 0.5px solid #e2e2e2;
	}



	.list-call .sl-input {
		flex: 1;
		text-align: left;
		font-size: 32rpx;
		margin-left: 16rpx;
	}

	.button-login {
		color: #FFFFFF;
		font-size: 34rpx;
		width: 470rpx;
		height: 100rpx;
		background: linear-gradient(-90deg, rgba(193, 25, 32, 1), rgba(238, 38, 38, 1));
		border-radius: 50rpx;
		line-height: 100rpx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100rpx;
	}

	.button-hover {
		background: linear-gradient(-90deg, rgba(193, 25, 32, 0.8), rgba(238, 38, 38, 0.8));
	}

	.agreenment {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		margin-top: 80rpx;
		color: #FFA800;
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
	}

	.agreenment text {
		font-size: 24rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
	}
</style>
