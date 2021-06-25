<template>
    <view class="cu-modal bottom-modal" :class="{ show: showModal }" @tap="hideModal">
        <view class="cu-dialog" @tap.stop style="background: none;">
            <view class="modal-box page_box">
                <view class="modal-head x-bc">
                    <text></text>
                    <text class="head-title">选择优惠券</text>
                    <text class="cuIcon-roundclosefill" @tap="hideModal"></text>
                </view>
                <view class="modal-content content_box">

                    <view class="head_box">
                        <view class="coupon-nav x-f">
                            <view class="nav-item y-f" v-for="nav in couponsState" :key="nav.id"
                                @tap="onNav(nav.id)">
                                <view class="item-title">
                                    {{ nav.title }}({{nav.id==0?couponData.couponList.length:couponData.nocouponList.length}})
                                </view>
                                <text class="nav-line" :class="{ 'line-active': stateCurrent === nav.id }"></text>
                            </view>
                        </view>
                    </view>
                    <view  v-if="stateCurrent==0">
                        <view class="cu-form-group" style="margin-top: 10px;padding: 15px 5px 15px 15px;"
                            @tap="selCoupon(-1)">
                            <view class="title">不使用优惠券</view>
                            <checkbox class='round orange' style="pointer-events: none;"
                                :class="couponData.noUseCoupon?'checked':''" :checked="couponData.noUseCoupon">
                            </checkbox>
                        </view>

                        <nx-coupon v-for="(item, index) in couponData.couponList" :key="index" :isShowCheck="true"
                            v-bind:item="item" theme="#ff0000" :index="index" />

                    </view>

                    <view  v-else>

                        <nx-coupon v-for="(item, index) in couponData.nocouponList" :key="index" :isShowCheck="true"
                            v-bind:item="item" theme="#ff0000" :index="index" />

                    </view>
                </view>
                <view class="modal-foot x-c">
                    <button class="cu-btn serve-btn" @tap="saveCoupon">确定</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    /**
     * 选择优惠券模态框
     * @property {Boolean} showModal - v-model="false" 显隐
     * @property {Object} couponData - 可用优惠券列表数据
     *
     */
    export default {
        components: {},
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
            };
        },
        props: {
            value: {},
            couponData: {
                noUseCoupon: true
            }
        },
        computed: {
            showModal: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                }
            }
        },
        methods: {
            onNav(id) {
                this.stateCurrent = id;
            },
            hideModal() {
                this.showModal = false;
            },
            selCoupon(index) {
                console.log('ddd')
                let that = this;
                // that.couponData.noUseCoupon = !that.couponData.noUseCoupon;
                that.$bus.$emit('updateChecked', index);
            },
            saveCoupon() {
                this.showModal = false;
            }
        }
    };
</script>

<style lang="scss">
    .modal-box {
        width: 750rpx;
        height: 700rpx;
        border-radius: 30rpx 30rpx 0 0;
        background: #fff;
        padding: 10px;

        .serve-btn {
            width: 690rpx;
            height: 80rpx;
            background: linear-gradient(92deg, #ffba40 0%, #ff503e 37%, #ff2f50 81%, #ff1b40 100%);
            color: #fff;
            line-height: 26px;
            border-radius: 14px;
            margin-top: 40rpx;
        }

        .modal-head {
            margin-bottom: 30rpx;

            .head-title {
                font-size: 32rpx;
                font-weight: bold;
            }

            .cuIcon-roundclosefill {
                font-size: 34rpx;
                color: #e0e0e0;
            }
        }

        .modal-content {
            .radio-item {
                width: 100%;
                padding: 10rpx 0;

                .coupon-title {
                    font-size: 28rpx;
                }

                .coupon-radio {
                    transform: scale(0.8);
                }
            }
        }


        .modal-foot {
            width: 100%;
            height: 45px;
            margin-top: 10px;
        }
    }

    .page_box {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-x: hidden;

        .content_box {
            background-color: #F5F5F7;
            padding: 10px;
            flex: 1;
            max-height: 368px;
            overflow: auto;

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
                        background: #FF4A26;
                    }
                }
            }

        }
    }
</style>
