<template>
  <el-row>
    <el-row>
      <el-row class="logo flex flex_align_center">
        <router-link class="flex flex_align_center" :to="{ path: '/' }">
          <img src="../assets/logo2.png" />
        </router-link>
      </el-row>
      <!-- banner开始 -->
      <el-row class="top_big_img">
        <img class="hidden-xs-only" src="../assets/top_big_logo.png" />
        <img class="hidden-sm-and-up" src="../assets/phone_big_logo.png" />
        <el-row class="top_content">
          <el-row class="top_content_body">
            <img class="hidden-xs-only" src="../assets/top_banner_content.png" />
            <img class="hidden-sm-and-up" src="../assets/top_banner_content_phone.png" />
            <el-row class="top_content_button flex">
              <img class="hidden-xs-only" src="../assets/top_button1.png" />
              <img class="hidden-sm-and-up" src="../assets/phone_top_button2.png" />

              <span class="flex flex_align_center flex_justify_center">
                <i></i>
              </span>
              <img class="hidden-xs-only" src="../assets/top_button2.png" />
              <img class="hidden-sm-and-up" src="../assets/phone_top_button1.png" />
            </el-row>
          </el-row>
        </el-row>
      </el-row>
      <!-- banner结束 -->
    </el-row>

    <el-row class="register_body">
      <el-row class="metting_content">
        <el-col :xs="24" :sm="24" :md="12" class="hidden-sm-and-down">
          <MettingLeftModule></MettingLeftModule>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" class="metting_content_right">
          <MettingRightModule></MettingRightModule>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" class="hidden-md-and-up xs_show_left">
          <MettingLeftModule></MettingLeftModule>
        </el-col>
      </el-row>
    </el-row>
    <!-- 底部开始 -->
    <el-row class="bottom_body">
      <el-row class="bottom_title flex">联系我们</el-row>
      <el-row class="bottom_content">
        <el-row class="bottom_content_item">
          <el-col :xs="24" :sm="24" :md="6">
            <el-row>Veritas 联系电话：</el-row>
            <el-row>(86)400-120-4816</el-row>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <el-row>Veritas 联系邮箱：</el-row>
            <el-row>veritas.china@veritas.com</el-row>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <el-row>Veritas 官网：</el-row>
            <el-row>https://www.veritas.com/zh/cn</el-row>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">&nbsp;</el-col>
        </el-row>
        <el-row class="bottom_right">
          <el-row class="bottom_right_attention">关注我们</el-row>
          <el-row>
            <img src="../assets/qr.png" />
          </el-row>
          <el-row class="bottom_right_weixin">微信公众号</el-row>
        </el-row>
        <el-row class="flex flex_justify_center flex_direction_column flex_align_center">
          <img class="bottom_img" src="../assets/logo4.png" />
          <el-row class="bottom_copyright">
            <span>2020年Veritas Technologies LLC版权所有。</span>
            <span>All rights reserved.保留所有权利</span>
          </el-row>
        </el-row>
      </el-row>
      <!-- 手机端底部 -->
      <el-row
        class="hidden-sm-and-up phone_footer_bottom flex flex_justify_center flex_align_center"
        v-if="$route.path == '/'"
      >
        <img class="hidden-sm-and-up" @click="applyRegister" src="../assets/phone_top_button1.png" />
        <img
          class="hidden-sm-and-up"
          @click="demonstrationRegister"
          src="../assets/phone_top_button2.png"
        />
      </el-row>
    </el-row>
    <!-- 底部结束 -->
  </el-row>
</template>
<script>
import MettingLeftModule from "../components/MettingLeftModule";
import MettingRightModule from "../components/MettingRightModule";
export default {
  name: "Register",
  components: {
    MettingLeftModule,
    MettingRightModule
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
