import http from '@/nxTemp/config/requestConfig'
import config from "@/nxTemp/config/index.config.js";

// 用户登录
export function postLogin(data) {
	return http.post(`${config.baseUrl}/shop/auth/login`, data);
}
