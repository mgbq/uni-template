import http from '@/config/requestConfig'
import config from "@/config/index.config.js";

// 用户登录
export const postLogin = (data) => http.post(`${config.baseUrl}/shop/auth/login`, data);
