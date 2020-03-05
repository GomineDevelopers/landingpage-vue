<template>
  <el-row class="MettingRightModule">
    <el-row>
      <span class="veritas_register_title">观看 APTARE 运维数据透视分析平台演示</span>
    </el-row>
    <el-row class="form_content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-input v-model="ruleForm.department"></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="position">
          <el-select v-model="ruleForm.position" placeholder="请选择">
            <el-option
              v-for="item in positionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司名称" prop="company">
          <el-input v-model="ruleForm.company"></el-input>
        </el-form-item>
        <el-form-item label="行业" prop="business">
          <el-select v-model="ruleForm.business" placeholder="请选择">
            <el-option
              v-for="item in businessOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工人数" prop="number">
          <el-select v-model="ruleForm.number" placeholder="请选择">
            <el-option
              v-for="item in numberOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <!-- <el-input v-model="ruleForm.number"></el-input> -->
        </el-form-item>
        <el-form-item label="省份、城市" prop="city">
          <el-cascader
            size="large"
            :options="options"
            v-model="ruleForm.city"
            @change="handleChange"
          >
          </el-cascader>
          <!-- <el-input v-model="ruleForm.city"></el-input> -->
        </el-form-item>
        <el-row class="declare_text flex">
          <el-checkbox v-model="ruleForm.agreeChecked"></el-checkbox>
          <span>
            我同意 Veritas 就产品和促销信息与我联系。我们尊重您的隐私权，详见我们的
            <a href="">隐私声明</a>
          </span>
        </el-row>
        <el-form-item class="form_submit_button">
          <el-button type="primary" @click="submitForm('ruleForm')">申请演示</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </el-row>
</template>
<script>
import { provinceAndCityData } from "element-china-area-data";
export default {
  name: "VeritasRightModule",
  data() {
    return {
      options: provinceAndCityData,
      positionOptions: [
        {
          value: "总裁",
          label: "总裁"
        },
        {
          value: "副总裁",
          label: "副总裁"
        },
        {
          value: "首席执行官",
          label: "首席执行官"
        },
        {
          value: "首席信息官",
          label: "首席信息官"
        },
        {
          value: "首席运营官",
          label: "首席运营官"
        },
        {
          value: "首席技术官",
          lable: "首席技术官"
        },
        {
          value: "财务总管",
          lable: "财务总管"
        },
        {
          value: "运营及维护总管",
          lable: "运营及维护总管"
        },
        {
          value: "法务及合规",
          lable: "法务及合规"
        },
        {
          value: "IT总监",
          lable: "IT总监"
        },
        {
          value: "IT经理",
          lable: "IT经理"
        },
        {
          value: "IT架构师",
          lable: "IT架构师"
        },
        {
          value: "云架构师",
          lable: "云架构师"
        },
        {
          value: "IT管理员",
          lable: "IT管理员"
        },
        {
          value: "数据库管理员",
          lable: "数据库管理员"
        },
        {
          value: "虚拟化管理员",
          lable: "虚拟化管理员"
        },
        {
          value: "市场和运营人员",
          lable: "市场和运营人员"
        },
        {
          value: "其他",
          lable: "其他"
        }
      ], //职位选择
      businessOptions: [
        {
          value: "政府",
          label: "政府"
        },
        {
          value: "制造业",
          label: "制造业"
        },
        {
          value: "电信",
          label: "电信"
        },
        {
          value: "交通运输",
          label: "交通运输"
        },
        {
          value: "旅游休闲",
          label: "旅游休闲"
        },
        {
          value: "传媒娱乐",
          lable: "传媒娱乐"
        },
        {
          value: "物流",
          lable: "物流"
        },
        {
          value: "教育",
          lable: "教育"
        },
        {
          value: "零售",
          lable: "零售"
        },
        {
          value: "房地产",
          lable: "房地产"
        },
        {
          value: "政府公共事业",
          lable: "政府公共事业"
        },
        {
          value: "医疗保健",
          lable: "医疗保健"
        },
        {
          value: "制药",
          lable: "制药"
        },
        {
          value: "银行",
          lable: "银行"
        },
        {
          value: "证券理财",
          lable: "证券理财"
        },
        {
          value: "期货和基金",
          lable: "期货和基金"
        },
        {
          value: "保险",
          lable: "保险"
        },
        {
          value: "高新技术",
          lable: "高新技术"
        },
        {
          value: "互联网",
          lable: "互联网"
        },
        {
          value: "电子商务",
          lable: "电子商务"
        },
        {
          value: "其他",
          lable: "其他"
        }
      ], //行业选择
      numberOptions: [
        { value: "1-10", label: "1-10" },
        { value: "11-50", label: "11-50" },
        { value: "51-100", label: "51-100" },
        { value: "101-250", label: "101-250" },
        { value: "251-500", label: "251-500" },
        { value: "501-1000", label: "501-1000" },
        { value: "1001-2500", label: "1001-2500" },
        { value: "2501-5000", label: "2501-5000" },
        { value: "5000+", label: "5000+" }
      ], //人数选择
      ruleForm: {
        name: "",
        phone: "",
        email: "",
        department: "",
        position: "",
        company: "",
        business: "",
        number: "",
        city: [],
        agreeChecked: false
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机", trigger: "blur" }],
        email: [{ required: true, message: "请输入电子邮箱", trigger: "blur" }],
        department: [{ required: true, message: "请输入部门", trigger: "blur" }],
        position: [{ required: true, message: "请选择职位", trigger: "change" }],
        company: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
        business: [{ required: true, message: "请选择行业", trigger: "change" }],
        number: [{ required: true, message: "请选择员工人数", trigger: "change" }],
        city: [{ required: true, message: "请选择城市", trigger: "change" }]
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
