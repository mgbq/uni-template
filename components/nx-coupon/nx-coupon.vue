<template>
    <view class="coupon-item x-bc" @tap="selectCoupon">


        <view class="box-con">
            <view class="box-text" v-if="index==0">厂商</view>
            <view class="box-text" v-else>经销商</view>
        </view>

        <view class="coupon-money">
            <view class="nick" v-if="!types">{{item.seller_name}}使用</view>
            <view class="layof" :style="{color:theme}">￥{{item.money}}</view>
            <view class="end_time">{{item.end_time}}前使用</view>
            <view v-if="!types">
                <view class="tit">券号：{{item.ticket}}</view>
                <view class="demand">{{item.title}}</view>
            </view>
            <view style="padding: 4px 0;text-decoration:underline;" class="demand" @click.stop="gotoDetails()">
                使用范围
            </view>
        </view>
        <view>

            <view v-if="isShowCheck">
                <checkbox class='round orange' :disabled="item.disable" :class="item.checked?'checked':''" :checked="item.checked?true:false">
                </checkbox>
            </view>
            <view v-else>
                <navigator class="get-btn" :style="{color:color, borderColor:color, background:solid}"
                    url='/pages/home/index'>去使用</navigator>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {

            }
        },
        props: {
            index: {
                type: Number,
                default: 0
            },
            // 是否有勾选框
            isShowCheck: {
                type: Boolean,
                default: false
            },
            item: {
                type: Object
            },
            types: {
                type: String,
                default: ''
            },
            theme: {
                type: String,
                default: '#FF4A26'
            },
            solid: {
                type: String,
                default: '#ffffff'
            },
            color: {
                type: String,
                default: '#FF4A26'
            },
        },
        methods: {
            // 查看优惠券使用范围
            gotoDetails() {
                console.log('优惠券使用范围')
            },
            selectCoupon() {
                let that = this;
                if (that.isShowCheck) {
                    that.$bus.$emit('updateChecked', that.index);

                }

            }

        }
    }
</script>

<style lang='scss'>
    .coupon-item {
        width: 100%;
        /* height: auto; */
        height: 131px;
        /* display: table; */
        border-radius: 10upx;
        /* padding: 0 30upx; */
        padding: 15px 5px 15px 15px;
        margin-top: 22upx;
        border: 1px solid #FFFFFF;
        position: relative;
        background-color: #FFFFFF;

        .box-con {
            width: 85px;
            height: 88px;
            overflow: hidden;
            position: absolute;
            top: -3px;
            right: -3px;
        }

        .box-text {
            color: white;
            text-align: center;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            position: relative;
            padding: 2px 0;
            left: 37px;
            top: 4px;
            width: 65px;
            background-color: #00801C;
            background-image: -webkit-gradient(linear, left top, left bottom, from(#ff503e), to(#ff2f50));
            background-image: -webkit-linear-gradient(top, #ff503e, #ff2f50);
            background-image: -moz-linear-gradient(top, #ff503e, #ff2f50);
            background-image: -ms-linear-gradient(top, #ff503e, #ff2f50);
            background-image: -o-linear-gradient(top, #ff503e, #ff2f50);
            -webkit-box-shadow: 0px 0px 3px #ff1b40;
            -moz-box-shadow: 0px 0px 3px #ff1b40;
            box-shadow: 0px 0px 3px #ff1b40;
        }

        .box-text:before,
        .box-text:after {
            content: "";
            position: absolute;
            bottom: -3px;
        }

        .box-text:before {
            left: 0;
        }

        .box-text:after {
            right: 0;
        }


        .coupon-money {
            width: 465upx;
            height: auto;
            /* display: table;
             */
            /* float: left; */
            text-align: left;
            padding: 26upx 0;
            border-style: none dotted none none;
            border-color: #eeeeee;

            .nick {
                width: 100%;
                height: 50upx;
                line-height: 30upx;
                font-size: $uni-font-size-sm;
                color: $uni-text-color-grey;
            }

            .tit {
                width: 100%;
                height: 50upx;
                line-height: 50upx;
                font-size: $uni-font-size-sm;
                color: $uni-text-color-grey;
            }

            .demand {
                width: 100%;
                height: 30upx;
                line-height: 30upx;
                font-size: $uni-font-size-sm;
                color: $uni-text-color-grey;
            }

            .layof {
                width: 100%;
                height: 48upx;
                line-height: 30upx;
                font-size: 44upx;
                color: #FF4A26;
                font-weight: bold;
            }

            .end_time {
                width: 100%;
                height: 30upx;
                line-height: 30upx;
                font-size: $uni-font-size-sm;
                color: $uni-text-color-grey;
            }
        }

        .get-btn {
            width: 146upx;
            height: 52upx;
            line-height: 50upx;
            /* position: absolute;
            top: 50%;
            right: 20upx; */
            margin-top: -26upx;
            text-align: center;
            border-radius: 60upx;
            color: #FF4A26;
            border: 1px solid #FF4A26;
            font-size: $uni-font-size-sm;
            /* float: right; */
        }
    }

    .coupon-item:after {
        width: 40upx;
        height: 20upx;
        position: absolute;
        left: 470upx;
        top: -1px;
        border-radius: 0 0 40upx 40upx;
        content: "";
        display: block;
        background: #F5F5F7;
        border: 1px solid #eeeeee;
        border-top: 0px;
    }

    .coupon-item:before {
        width: 40upx;
        height: 20upx;
        position: absolute;
        left: 470upx;
        bottom: -1px;
        border-radius: 40upx 40upx 0 0;
        content: "";
        display: block;
        background: #F5F5F7;
        border: 1px solid #eeeeee;
        border-bottom: 0px;
    }
</style>
