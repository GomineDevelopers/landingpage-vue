<template>
  <el-row>
    <!-- 底部开始 -->
    <el-row class="bottom_body">
      <el-row class="bottom_title flex">联系我们</el-row>
      <el-row class="bottom_content">
        <el-row class="bottom_content_item">
          <el-col :span="6">
            Veritas 联系电话：
            <br />
            (86)400-120-4816
          </el-col>
          <el-col :span="6">
            Veritas 联系邮箱：
            <br />
            veritas.china@veritas.com
          </el-col>
          <el-col :span="6">
            Veritas 官网：
            <br />
            https://www.veritas.com/zh/cn
          </el-col>
          <el-col :span="6">&nbsp;</el-col>
        </el-row>
        <el-row class="flex flex_justify_center flex_direction_column flex_align_center">
          <img class="bottom_img" src="../assets/logo4.png" />
          <el-row class="bottom_copyright">
            2020年Veritas Technologies LLC版权所有。All rights reserved.保留所有权利
          </el-row>
        </el-row>
        <el-row class="bottom_right">
          <el-row class="bottom_right_attention">关注我们</el-row>
          <el-row><img src="../assets/qr.png"/></el-row>
          <el-row class="bottom_right_weixin">微信公众号</el-row>
        </el-row>
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
