<template>
  <el-row>
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
export default {
  name: "Footer"
};
</script>
