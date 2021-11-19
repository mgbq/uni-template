export default {
	/**
	 * 图片处理-预览图片
	 * @param {Array} urls - 图片列表
	 * @param {Number} current - 首个预览下标
	 */
	previewImage(urls = [], current = 0) {
		uni.previewImage({
			urls: urls,
			current: current,
			indicator: 'default',
			loop: true,
			fail(err) {
				console.log('previewImage出错', urls, err)
			},
		})
	},


	/**
	 * 打电话
	 * @param {String<Number>} phoneNumber - 数字字符串
	 */
	callPhone(phoneNumber = '') {
		let num = phoneNumber.toString()
		uni.makePhoneCall({
			phoneNumber: num,
			fail(err) {
				console.log('makePhoneCall出错', err)
			},
		});
	},

}
