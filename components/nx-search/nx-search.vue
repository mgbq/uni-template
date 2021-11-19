<template>
    <view class="serach">
        <view class="content" :style="{ 'border-radius': radius + 'px' }">
            <view class="content-box">
                <!-- 下拉选择框 -->
                <view class="seach-select" v-if="selectList.length>0">
                    <!-- 选中值 -->
                    <view class="select-value" @click="selectClick">
                        {{selectList[selectIndex].name}}
                        <text class="cuIcon-triangledownfill" style=""></text>
                    </view>
                    <!-- 选择列表 -->
                    <view class="select-item-list" :style="{'display':(showSelectList)?'block':'none'}">
                        <text class="cuIcon-triangleupfill"
                            style="position: absolute;top: -18px;left: 60rpx;font-size: 30rpx;color: #FFFFFF;"></text>
                        <view :class="['select-item',(index>0)?'item-border':'']" v-for="(data,index) in selectList"
                            :key="index" @click="selectItem(index)">{{data.name}}</view>
                    </view>
                </view>

                <text class="cuIcon-search" v-if="showSeachIcon" style="margin: 0 10rpx;"></text>
                <input :placeholder="placeholder" @input="inputChange" confirm-type="search" @confirm="triggerConfirm"
                    class="input" :focus="isFocus" v-model="inputVal" @focus="focus" @blur="blur" />
                <text v-if="isDelShow" class="cuIcon-roundclose" @tap.stop="clear"></text>
            </view>
            <view v-if="
					(showSeachBth && button === 'inside') ||
						(isDelShow && button === 'inside')
				" class="serachBtn" style="background-color: #C0191F;color: #fff;" @tap="search">
                搜索
            </view>
        </view>
        <view v-if="button === 'outside'" class="button" :class="{ active: showSeachBth }" @tap="search">
            <view class="button-item">{{ !showSeachBth ? searchName : '搜索' }}</view>
        </view>
        <view v-show="showSelectList" @click="selectClick" class="page-mask"></view>
    </view>
</template>

<script>
    export default {
        props: {
            selectList: {
                type: Array,
                default: [
                    // {
                    //     id: 1,
                    //     name: '产品'
                    // },
                    // {
                    //     id: 2,
                    //     name: '内容'
                    // }

                ]
            },
            placeholder: {
                value: String,
                default: '请输入搜索内容'
            },
            value: {
                type: String,
                default: ''
            },
            button: {
                value: String,
                default: 'outside'
            },
            showSeachIcon: {
                value: Boolean,
                default: true
            },
            showSeachBth: {
                value: Boolean,
                default: true
            },
            radius: {
                value: String,
                default: 60
            }
        },
        data() {
            return {
                showSelectList: false,
                selectIndex: 0,
                isFocus: true,
                inputVal: '',
                searchName: '取消',
                isDelShow: false
            };
        },
        methods: {
            selectItem(index) {
                this.selectIndex = index
                this.showSelectList = !this.showSelectList;
            },
            selectClick() {
                this.showSelectList = !this.showSelectList;
            },
            triggerConfirm() {
				
				let searchQuery = {
				    keyword: this.inputVal
				}
				if (this.selectList.length > 0) {
				    searchQuery.selectIndex = this.selectIndex;
				}
				this.$emit('confirm', searchQuery);
            },
            inputChange(event) {
                const keyword = event.detail.value;
                this.$emit('input', keyword);
                if (this.inputVal) {
                    this.isDelShow = true;
                }
            },
            focus() {
                if (this.inputVal) {
                    this.isDelShow = true;
                }
            },
            blur() {
                this.isFocus = false;
                uni.hideKeyboard();
            },
            clear() {
                uni.hideKeyboard();
                this.isFocus = false;
                this.inputVal = '';
                this.$emit('input', '');
            },
            getFocus() {
                this.isFocus = true;
            },
            search() {
                let searchQuery = {
                    keyword: this.inputVal
                }
                if (this.selectList.length > 0) {
                    searchQuery.selectIndex = this.selectIndex;
                }
                this.$emit('search', searchQuery);
            }
        },
        watch: {
            inputVal(newVal) {
                if (newVal) {
                    this.searchName = '搜索';
                } else {
                    this.searchName = '取消';
                    this.isDelShow = false;
                }
            },
            value(val) {
                this.inputVal = val.trim();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .serach {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        font-size: $uni-font-size-base;

        .content {
            display: flex;
            align-items: center;
            width: 100%;
            height: 60upx;
            background: #fff;
            transition: all 0.2s linear;
            border-radius: 30px;

            .content-box {
                width: 100%;
                display: flex;
                align-items: center;

                .seach-select {
                    min-width: 100rpx;
                    margin-left: 10px;
                    position: relative;
                    max-width: 100rpx;

                    .select-item-list {
                        background-color: #FFFFFF;
                        position: absolute;
                        top: 75rpx;
                        width: 150rpx;
                        left: -20rpx;
                        border-radius: 10rpx;
                        z-index: 10;
                        box-shadow: 0px 0px 5px #C9C9C9;

                        .select-item {
                            text-align: center;
                            padding: 10rpx 0;
                        }

                        .item-border {
                            border-top: 1rpx solid #EEEEEE;
                        }
                    }
                }

                .input {
                    width: 100%;
                    max-width: 100%;
                    line-height: 60upx;
                    height: 60upx;
                    transition: all 0.2s linear;

                }
            }

            .serachBtn {
                height: 100%;
                flex-shrink: 0;
                padding: 0 30upx;
                line-height: 60upx;
                transition: all 0.3s;
                border-top-right-radius: 60px;
                border-bottom-right-radius: 60px;
            }
        }

        .button {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            flex-shrink: 0;
            width: 0;
            transition: all 0.2s linear;
            white-space: nowrap;
            overflow: hidden;

            &.active {
                padding-left: 15upx;
                width: 100upx;
            }
        }

        .page-mask {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 5;
        }
    }
</style>
