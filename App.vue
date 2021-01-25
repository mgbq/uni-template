<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
/* 	page {
		background-color: #F5F5F5;
	} */

	/*每个页面公共css */
	@import "static/colorui/main.css";
	@import "static/colorui/icon.css";
</style>
<style lang="scss">
	@import "static/uview-ui/index.scss";
	/*每个页面公共css */
	@import "static/style/base.scss";
</style>
