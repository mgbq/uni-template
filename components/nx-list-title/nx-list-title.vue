<template>
	<view>
		<!-- 列表标题 -->
		<view class="nx-list-title x-bc w-full" :style="[cusStyle]" @click="goto">
			<view class="flex left-border" :style="{
			                       '--border-left': borderLeft,
			                   }">
				<u-icon v-if="iconSrcLeft" :name="iconSrcLeft" :custom-style="iconStyleLeft" :size="iconSizeLeft"
					:color="iconColorLeft" style="margin-right: 10rpx;"></u-icon>
				<text :style="{fontSize: titleSize + 'rpx', fontWeight: titleFwt,color:titleColor }">{{ title }}</text>
			</view>
			<view class="flex">
				<text v-if="tip" class="tip margin-right-xs">{{tip}}</text>
				<u-icon v-if="iconSrcRight" :name="iconSrcRight" :custom-style="iconStyleRight" :size="iconSizeRight"
					:color="iconColorRight"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			background: {
				type: Object,
				default () {
					return {
						background: '#ffffff',
						// 导航栏背景图
						// background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
						// 还可以设置背景图size属性
						// backgroundSize: 'cover',
						// 渐变色
						// backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
					}
				}
			},
			// 伪元素左边框
			borderLeft: {
				type: String,
				// default: '6rpx solid #ec706b'
				default: ''
			},
			// 左边图标的颜色
			iconColorLeft: {
				type: String,
				default: '#c0c4cc'
			},
			// 左边图标的大小
			iconSizeLeft: {
				type: [String, Number],
				default: 28
			},
			// 左边图标路径
			iconSrcLeft: {
				type: String,
				default: ''
			},
			// 左边自定义图标style
			iconStyleLeft: {
				type: Object,
				default () {
					return {}
				}
			},
			// 右边图标的颜色
			iconColorRight: {
				type: String,
				default: '#c0c4cc'
			},
			// 右边图标的大小
			iconSizeRight: {
				type: [String, Number],
				default: 28
			},
			// 右边图标路径
			iconSrcRight: {
				type: String,
				default: 'arrow-right'
			},
			// 右边自定义图标style
			iconStyleRight: {
				type: Object,
				default () {
					return {}
				}
			},
			// 标题大小，单位rpx
			titleSize: {
				type: [String, Number],
				default: 26
			},
			// 标题 fontWeight
			titleFwt: {
				type: String,
				default: 'normal'
			},
			// 标题颜色
			titleColor: {
				type: String,
				default: '#c0c4cc'
			},
			// 标题
			title: {
				type: String,
				default: '列表标题'
			},

			tip: {
				type: [String, Number],
				default: ''
			},


		},
		data() {
			return {

			};
		},
		computed: {
			// 整个样式
			cusStyle() {
				let style = {};
				// 合并用户传递的背景色对象
				Object.assign(style, this.background);
				return style;
			},

		},
		methods: {
			goto() {
				this.$emit('goto', {
					type: 'goto'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.left-border {
		&:before {
			content: '';
			width: 0;
			margin: 20rpx 24rpx 20rpx 0;
			border-left: var(--border-left);
		}
	}



	.w-full {
		width: 100%;
	}

	.nx-list-title {
		background: #fff;
		height: 100rpx;
		line-height: 100rpx;

		.tip {
			font-size: $uni-font-size-sm;
			color: #c0c0c0;
		}
	}
</style>
