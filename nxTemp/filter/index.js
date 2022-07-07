
// 自动添加省略号
export function autoAddPoints(address) {
	if (address && address.length > 15) {
		return '...'.padStart(16, address);
	} else {
		return address;
	}
	
}

