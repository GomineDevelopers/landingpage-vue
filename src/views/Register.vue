<template>
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
</template>
<script>
import MettingLeftModule from "../components/MettingLeftModule";
import MettingRightModule from "../components/MettingRightModule";
export default {
  name: "Register",
  components: {
    MettingLeftModule,
    MettingRightModule
  }
};
</script>
