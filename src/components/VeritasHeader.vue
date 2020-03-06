<template>
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
          <img class="hidden-xs-only" src="../assets/veritas_header_img.png" />
          <img
            class="hidden-sm-and-up veritas_header_phone"
            src="../assets/veritas_header_img2.png"
          />
        </el-row>
      </el-row>
    </el-row>
    <!-- banner结束 -->
  </el-row>
</template>
<script>
export default {
  name: "VeritasHeader"
};
</script>
