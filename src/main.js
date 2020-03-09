import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import api from "./api/api";
import "./js/element-ui";
import "./css/common.css";
import 'element-ui/lib/theme-chalk/display.css';

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");