import {
  get,
  post
} from "./https";
let api = {
  register: params => post("/api/auth/register", params), //注册
  login: params => post("/api/auth/login", params), //登录
  refresh: params => post("/api/auth/refresh", params), //token刷新
  action: params => post("/api/action", params) //登录
};
export default api;