<template>
  <el-row>
    <el-row class="logo flex flex_align_center">
      <img src="../assets/logo2.png" />
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
            <img class="hidden-sm-and-up" src="../assets/phone_top_button1.png" />
            <span class="flex flex_align_center flex_justify_center">
              <i class="hidden-xs-only"></i>
            </span>
            <img class="hidden-xs-only" src="../assets/top_button2.png" />
            <img class="hidden-sm-and-up" src="../assets/phone_top_button2.png" />
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <!-- banner结束 -->
  </el-row>
</template>
<script>
export default {
  name: "Header"
};
</script>
