<template>
	
    <view class="page_box">
		<view class="bg-white padding">
			<view class="text-xl text-center">我的优惠券
			</view>
		</view>

        <view class="head_box">
            <view class="coupon-nav x-f">
                <view class="nav-item y-f" v-for="nav in couponsState" :key="nav.id" @tap="onNav(nav.id)">
                    <view class="item-title">{{ nav.title }}({{nav.id==0?couponList.length:nocouponList.length}})</view>
                    <text class="nav-line" :class="{ 'line-active': stateCurrent === nav.id }"></text>
                </view>
            </view>
        </view>


        <view class="content_box" v-if="stateCurrent==0">
            <view v-if="couponList.length==0" class="nodata-empty">
                <u-empty text="暂无优惠券" mode="coupon" icon-size="280">
                    <u-button slot="bottom" size="medium" @click="gotoHome">
                        首页逛逛
                    </u-button>
                </u-empty>
            </view>
            <nx-coupon v-for="(item, index) in couponList" :key="index" v-bind:item="item" theme="#ff0000" />
        </view>
        <view class="content_box" v-if="stateCurrent==1">
            <view v-if="nocouponList.length==0" class="nodata-empty">
                <u-empty text="暂无优惠券" mode="coupon" icon-size="280">
                    <u-button slot="bottom" size="medium" @click="gotoHome">
                        首页逛逛
                    </u-button>
                </u-empty>
            </view>
            <nx-coupon v-for="(item, index) in nocouponList" :key="index" v-bind:item="item" theme="#ff0000" />
        </view>

    </view>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                stateCurrent: 0,
                couponsState: [{
                        id: 0,
                        title: '可用'
                    },
                    {
                        id: 1,
                        title: '不可用'
                    }
                ],
                couponList: [{
                        url: "/pages/brand/index/id/1",
                        money: "150",
                        title: "满2000减150元",
                        ticket: "YMC_5c929fbf47235",
                        seller_name: "天猫官方旗舰店",
                        end_time: "2019-04-20 01:51:20",
                        state: "1",
                        checked:false
                    },
                    {
                        url: "/pages/brand/index/id/1",
                        money: "50",
                        title: "满1000减50元",
                        ticket: "YMC_5c929fbf47235",
                        seller_name: "天猫官方旗舰店",
                        end_time: "2019-04-20 01:51:20",
                        state: "1",
                        checked:false
                    }
                ],
                nocouponList: [
                    // {
                    //     url: "/pages/brand/index/id/1",
                    //     money: "150",
                    //     title: "满2000减1500元",
                    //     ticket: "YMC_5c929fbf47235",
                    //     seller_name: "天猫官方旗舰店",
                    //     end_time: "2019-04-20 01:51:20",
                    //     state: "1"
                    // },
                    // {
                    //     url: "/pages/brand/index/id/1",
                    //     money: "50",
                    //     title: "满1000减50元",
                    //     ticket: "YMC_5c929fbf47235",
                    //     seller_name: "天猫官方旗舰店",
                    //     end_time: "2019-04-20 01:51:20",
                    //     state: "1"
                    // }
                ]
            }
        },


        methods: {
            gotoHome() {
                uni.navigateTo({
                    url:'/pages/home/index'
                })
            },
            onNav(id) {
                this.stateCurrent = id;
            },
        }
    }
</script>


<style lang="scss" scoped>
    page {
        background-color: #F5F5F7;
    }

    .page_box {
        //  background: #fff;
    }

    .coupon-nav {
        background: #fff;
        height: 100rpx;

        .nav-item {
            flex: 1;

            .item-title {
                font-size: 30rpx;
                font-family: PingFang SC;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 76rpx;
            }

            .nav-line {
                width: 120rpx;
                height: 4rpx;
                background: #fff;
            }

            .line-active {
                // background: rgba(230, 184, 115, 1);
                background: #FF4A26;
            }
        }
    }

    .content_box {
        margin: 20px;

        .nodata-empty {
            margin-top: 50%;
            
            /deep/ button {
            	&::after {
            		border: none;
            
            	}
            }
        }
    }
</style>
