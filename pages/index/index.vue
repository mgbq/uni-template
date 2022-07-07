<template>
	<view>
		<view class="bg-white padding">
			<view class="text-xl text-center">这是首页
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {

			};
		},
		onLoad(parms) {
			let shareInfo = {}
			shareInfo.title = '快速开发框架'
			shareInfo.path = 'pages/index/index'
			this.setShareInfo(shareInfo)
		},
		onUnload() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>

</style>
