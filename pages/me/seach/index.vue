<template>
	<view>
		<view class="bg-white padding">
			<view class="text-xl text-center">搜索组件
			</view>
		</view>
		<view style="margin: 20px;">
			<nx-search :selectList="selectList2" class="sn-earch-input-box" button="inside" placeholder="请输入关键字"
				@search="doSearch()" @confirm="doSearch()" v-model="searchQuery.keyword" />
		</view>
		<view style="margin: 20px;">
			<nx-search :selectList="selectList" class="sn-earch-input-box" button="inside" placeholder="请输入关键字"
				@search="doSearch()" @confirm="doSearch()" v-model="searchQuery.keyword" />
		</view>

		<view style="margin: 20px;">
			<nx-search :selectList="selectList" class="sn-earch-input-box" button="inside" placeholder="请输入关键字"
				@search="doSearch()" @confirm="doSearch()" v-model="searchQuery.keyword" />
		</view>


	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				selectList2: [],
				searchQuery: {
					keyword: '',
					selectIndex: 0
				},
				selectList: [{
						id: 1,
						name: '产品'
					},
					{
						id: 2,
						name: '内容'
					},
				],
			}
		},
		methods: {
			// 执行搜索
			doSearch(searchQuery) {
				console.log('searchQuery', searchQuery);
			},
		}
	}
</script>

<style lang="scss">
	.sn-earch-input-box {
		width: 100%;
	}
</style>
