import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clickType: 0,
    tempLinkSrc: '', //跳转链接
    actionMessage: {
      msg: '',
      code: '',
    },
  },
  mutations: {
    //设置跟踪信息
    setActionMessage(state, data) {
      state.actionMessage = data;
    },
    //设置点击事件类型
    setClickType(state, type) {
      state.clickType = type;
    },
    //设置跳转链接
    setTempLinkSrc(state, src) {
      state.tempLinkSrc = src;
    },
  },
  actions: {

  }
});