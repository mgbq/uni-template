<template>
	<view class="nx-box">
		<u-navbar :is-back="false" :background="{}" :border-bottom="false" title="注册">
		</u-navbar>
		<image src="@/static/images/login/register.png" mode='aspectFit' class="nx-logo"></image>
		<view class="nx-title">LOGO区域</view>
		<view class="nx-form">
			<input class="nx-input" placeholder-class placeholder="请输入用户名" />
			<input class="nx-input" placeholder-class password placeholder="请输入密码"/>
			<input class="nx-input" placeholder-class password placeholder="请再输入一次密码"/>
			<button class="nx-btn">立即注册</button>
			<navigator url="./login" open-type='navigateBack' hover-class="none" class="nx-label">已有账号，点此去登录.</navigator>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.nx-box{
		padding: 0 100upx;
		position: relative;
	}
	.nx-logo{
		width: 100%;
		width: 100%;
		height: 310upx;
	}
	.nx-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.nx-form{
		margin-top: 300upx;
	}
	.nx-input{
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
		box-sizing: content-box;
	}
	.input-placeholder, .nx-input{
		color: #94afce;
	}
	.nx-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.nx-btn{
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
		margin-top: 60upx;
	}
	.nx-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.nx-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
