<template>
  <el-row>
    <el-row class="metting_left_item">
      <el-row class="metting_left_item_elrow">
        <img class="text_left_icon" src="../assets/content_body1_icon1.png" />
        <span class="metting_title">会议时间</span>
      </el-row>
      <el-row class="metting_left_item_content">
        <img class="text_left_date_icon" src="../assets/date_icon.png" />
        <span class="metting_content1">2020年3月24日 星期二 14:30-16:00</span>
      </el-row>
    </el-row>
    <el-row class="metting_left_item">
      <el-row class="metting_left_item_elrow">
        <img class="text_left_icon" src="../assets/content_body1_icon1.png" />
        <span class="metting_title">会议日程</span>
      </el-row>
      <el-row class="metting_left_item_content metting_schedule">
        <el-row><span>14:30-15:25</span>——<span>资深工程师演讲</span></el-row>
        <el-row><span>15:25-15:30</span>——<span>填写调查问卷</span></el-row>
        <el-row><span>15:30-15:55</span>——<span>在线互动答疑</span></el-row>
        <el-row><span>15:55-16:00</span>——<span>现场抽奖及结束</span></el-row>
      </el-row>
    </el-row>
    <el-row class="metting_left_item">
      <el-row class="metting_left_item_elrow">
        <img class="text_left_icon" src="../assets/content_body1_icon1.png" />
        <span class="metting_title">演讲嘉宾</span>
      </el-row>
      <el-row class="metting_left_item_content flex flex_align_center flex_justify_center">
        <img class="register_lecturer_img" src="../assets/register_lecturer_icon.png" />
        <span class="register_lecturer_text">
          徐晨
          <br />
          Veritas 首席系统工程师
        </span>
      </el-row>
    </el-row>
    <el-row class="metting_left_item">
      <el-row class="metting_left_item_elrow">
        <img class="text_left_icon" src="../assets/content_body1_icon1.png" />
        <span class="metting_title">参会有礼</span>
      </el-row>
      <el-row class="metting_left_item_content">
        <el-row class="apply_notice">
          报名参会并完整填写问卷，即可领取Veritas定制鼠标垫或者手机充电线，数量有限，先到先得！现场将抽取3名听众，赠送Veritas定制双肩包！
        </el-row>
        <el-row class="apply_gifts flex">
          <img src="../assets/register_gift1.png" />
          <img src="../assets/register_gift2.png" />
          <img src="../assets/register_gift3.png" />
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
export default {
  name: "MettingLeftModule"
};
</script>
