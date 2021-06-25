<template>
	<view>
		<view class="bg-white padding">
			<view class="text-xl text-center">list标题组件
			</view>
		</view>
		<view style="margin: 20rpx;">

			<view style="font-size: 20px;margin: 10px;">常规标题</view>

			<nx-list-title title="爆款产品" titleSize="32" fontWeight="600" titleColor="#333" @goto="goto" />
			
			
			<view style="font-size: 20px;margin: 10px;">右边加文字</view>
			
			<nx-list-title title="爆款产品" titleSize="32" tip="更多" fontWeight="600" titleColor="#333" @goto="goto" />

			<view style="font-size: 20px;margin: 10px;">左边加（uviewui）的icon</view>

			<nx-list-title title="限时抢购" iconSrcLeft="clock" titleSize="32" fontWeight="600" titleColor="#333"
				@goto="goto" />

			<view style="font-size: 20px;margin: 10px;">左边加图片</view>

			<nx-list-title title="爆款产品" :iconSrcLeft="imgUrl" titleSize="32" fontWeight="600" titleColor="#333"
				@goto="goto" />

			<view style="font-size: 20px;margin: 10px;">左边加边框</view>

			<nx-list-title title="活动产品" borderLeft="6rpx solid #ec706b"  titleSize="32" fontWeight="600" titleColor="#333"
				@goto="goto" />
			<view style="font-size: 20px;margin: 10px;">加渐变</view>
			
			<nx-list-title :background="{'background-image': 'linear-gradient(180deg, #e5f7f8, #ffffff)'}" title="爆款产品"
				titleSize="32" fontWeight="600" titleColor="#333" @goto="goto" />
		</view>


	</view>
</template>

<script>
	export default {
		methods: {
			goto() {}

		},
		data() {
			return {
				imgUrl: 'https://sino-cloud-base.oss-cn-hangzhou.aliyuncs.com/fileupload-product/sino-ces2.0/img/mafile/images/index/hot.png'

			};
		}
	}
</script>

<style lang="scss">

</style>
