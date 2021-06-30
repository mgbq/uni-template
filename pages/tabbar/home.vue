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
			let that = this;
			this.$bus.$on('updateChecked', this.updateChecked)
		},
		onUnload() {
			// 移除监听事件
			uni.$off('updateChecked')
		},
		methods: {
			updateChecked(index) {
				let that = this;
				console.log('index', index);
				if (index == -1) { // 不使用优惠券
					that.couponData.noUseCoupon = true;
					for (let i = 0; i < that.couponData.couponList.length; i++) {
						that.couponData.couponList[i].checked = false;
					}
				} else {
					that.couponData.noUseCoupon = false;
					that.couponData.couponList[index].checked = !that.couponData.couponList[index].checked;
				}


			},
		}
	}
</script>

<style lang="less" scoped>

</style>
