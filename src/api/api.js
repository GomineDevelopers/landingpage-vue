import { get, post } from "./https";
let baseURL1 = "http://back.zidata.cn/admin";
let baseURL2 = "https://www.xiaoyuer.net";
let api = {
  login: params => post(baseURL1 + "/login", params, 1), //登录
  getKey: params => get(baseURL2 + "/open-api/genKey", params) //获取口令
};
export default api;
