import Vue from 'vue';
// 自动添加省略号
Vue.filter('autoAddPoints', function(address) {
	if (address && address.length > 15) {
		return '...'.padStart(16, address);
	} else {
		return address;
	}
});
