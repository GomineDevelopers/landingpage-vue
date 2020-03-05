<template>
  <el-row class="register_body">
    <el-row class="veritas_content">
      <el-col :xs="24" :sm="24" :md="10">
        <VeritasLeftModule></VeritasLeftModule>
      </el-col>
      <el-col :xs="24" :sm="24" :md="14" class="metting_content_right">
        <el-row class="veritas_right_body">
          <VeritasRightModule></VeritasRightModule>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import VeritasLeftModule from "../components/VeritasLeftModule";
import VeritasRightModule from "../components/VeritasRightModule";
export default {
  name: "VeritasRegister",
  components: {
    VeritasLeftModule,
    VeritasRightModule
  }
};
</script>
