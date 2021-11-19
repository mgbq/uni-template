<script>
	import {
		init
	} from "@/nxTemp";
	export default {
		onLaunch(options) {
			console.log('App onLaunch')
			init(options);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	};
</script>

<style lang="scss">
	@import "static/style/base.scss";
</style>
