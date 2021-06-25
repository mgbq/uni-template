<template>
	<view>

		<view class="bg-white padding">
			<view class="text-xl text-center">首页
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">优惠券</view>
			<view @tap="selCoupon()">
				<text :class="['title',{'price':couponData.isPrice}]"
					v-if="couponData.couponList.length">{{ couponData.title }}</text>
				<text class="title" v-else>暂无优惠券</text>
				<text class='cuIcon-right text-orange'></text>


			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">我的优惠券</view>
			<view @tap="jump('/pages/me/coupon/index',{})">
				<text class="title">查看</text>
				<text class='cuIcon-right text-orange'></text>
			</view>
		</view>

		<view class="cu-form-group">
			<view class="title">搜索组件</view>
			<view @tap="jump('/pages/me/seach/index',{})">
				<text class="title">查看</text>
				<text class='cuIcon-right text-orange'></text>

			</view>
		</view>
		
		<view class="cu-form-group">
			<view class="title">列表标题组件</view>
			<view @tap="jump('/pages/me/listTitle/index',{})">
				<text class="title">查看</text>
				<text class='cuIcon-right text-orange'></text>
		
			</view>
		</view>


		<!-- coupon-pricker -->
		<nx-pic-coupon-modal v-if="couponData.couponList" v-model="couponData.showCouponPicker"
			:couponData="couponData" />


	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 优惠券
				couponData: {
					nocouponList: [{
							url: "/pages/brand/index/id/1",
							money: "150",
							title: "满2000减150元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "天猫官方旗舰店",
							end_time: "2019-04-20 01:51:20",
							state: "1",
							checked: false,
							disable: true
						},
						{
							url: "/pages/brand/index/id/1",
							money: "50",
							title: "满1000减50元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "天猫官方旗舰店",
							end_time: "2019-04-20 01:51:20",
							state: "1",
							checked: false,
							disable: true,
						},
					],
					couponList: [

						{
							url: "/pages/brand/index/id/1",
							money: "150",
							title: "满2000减150元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "天猫官方旗舰店",
							end_time: "2019-04-20 01:51:20",
							state: "1",
							checked: false
						},
						{
							url: "/pages/brand/index/id/1",
							money: "50",
							title: "满1000减50元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "天猫官方旗舰店",
							end_time: "2019-04-20 01:51:20",
							state: "1",
							checked: false
						},
						{
							url: "/pages/brand/index/id/1",
							money: "50",
							title: "满1000减50元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "天猫官方旗舰店",
							end_time: "2019-04-20 01:51:20",
							state: "1",
							checked: true
						},
						{
							url: "/pages/brand/index/id/1",
							money: "50",
							title: "满1000减50元",
							ticket: "YMC_5c929fbf47235",
							seller_name: "天猫官方旗舰店",
							end_time: "2019-04-20 01:51:20",
							state: "1",
							checked: true
						}
					],
					title: '选择优惠券',
					isPrice: false,
					showCouponPicker: false,
					noUseCoupon: true // 是否使用优惠券
				},

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
			// 路由跳转
			jump(path, parmas) {
				this.$Router.push({
					path: path,
					query: parmas
				});
			},
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
			// 选择优惠券
			selCoupon() {
				this.couponData.showCouponPicker = true;
				if (this.couponData.couponList.length) {
					this.couponData.showCouponPicker = true;
				} else {
					this.$util.showToast('暂无优惠券')
				}
			},
		}
	}
</script>

<style lang="less" scoped>

</style>
