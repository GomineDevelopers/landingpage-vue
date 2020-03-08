<template>
  <el-row class="home">
    <!-- 首页内容 -->
    <el-row class="main_body">
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
                <img class="hidden-xs-only" src="../assets/top_button1.png" @click="applyRegister" />
                <img
                  class="hidden-sm-and-up"
                  src="../assets/phone_top_button2.png"
                  @click="applyRegister"
                />

                <span class="flex flex_align_center flex_justify_center">
                  <i></i>
                </span>
                <img
                  class="hidden-xs-only"
                  src="../assets/top_button2.png"
                  @click="demonstrationRegister"
                />
                <img
                  class="hidden-sm-and-up"
                  src="../assets/phone_top_button1.png"
                  @click="demonstrationRegister"
                />
              </el-row>
            </el-row>
          </el-row>
        </el-row>
        <!-- banner结束 -->
      </el-row>
      <el-row class="banner_content">
        <el-col :xs="24" :sm="24" :md="8" class="flex">
          <span>
            <img class="banner_list_icon" src="../assets/banner_content_icon1.png" />
          </span>
          <el-row>
            <el-row class="banner_list_title">面向混合云环境的分析</el-row>
            <el-row class="banner_list_content">可通过单一面板管理操作和交付的运维数据透视分析平台</el-row>
            <el-row
              class="banner_list_button"
              @click.native="
                downloadPdf({
											name: 'V0877_GA_ENT_DS_Aptare_Data_Sheet_EN-1.pdf',
											msg: '面向混合云环境的分析',
											code: 'ZLD-001-P'
										})
              "
            >下载产品资料 ›</el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" class="flex">
          <span>
            <img class="banner_list_icon" src="../assets/banner_content_icon2.png" />
          </span>
          <el-row>
            <el-row class="banner_list_title">APTARE 应用指南</el-row>
            <el-row class="banner_list_content">了解 APTARE 运维数据透视分析平台如何助力管理复杂的IT 环境，降低整体存储成本和用例。</el-row>
            <el-row
              class="banner_list_button"
              @click.native="
                downloadPdf({
											name: 'V0991 APTARE_Knows_Guide_use case EN.pdf',
											msg: 'APTARE应用指南',
											code: 'ZLD-002-P'
										})
              "
            >下载指南 ›</el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" class="flex">
          <span>
            <img class="banner_list_icon" src="../assets/banner_content_icon3.png" />
          </span>
          <el-row>
            <el-row class="banner_list_title">IDC Vendor Profile：APTARE 运维数据透视分析平台</el-row>
            <el-row class="banner_list_content">了解 APTARE 运维数据透视分析平台如何解决 IT 资源管理的痛点。</el-row>
            <el-row
              class="banner_list_button"
              @click.native="
                downloadPdf({
											name: 'idc_aptare_it_analytics_vendor_profile-3.pdf',
											msg: 'IDC Vendor Profile : APTARE 运维数据透视分析平台',
											code: 'ZLD-003-P'
										})
              "
            >下载报告 ›</el-row>
          </el-row>
        </el-col>
      </el-row>
      <!-- 面向面向异构 IT 环境的运维开始 -->
      <el-row class="content_body1 flex flex_align_center">
        <el-col :xs="24" :sm="24" :md="12" class="content_body1_left">
          <el-row class="content_body1_title flex">
            <img src="../assets/content_body1_icon1.png" />
            <span>面向异构 IT 环境的运维数据透视分析平台</span>
          </el-row>
          <el-row class="content_body1_title2">实现多供应商 IT 基础架构的集中可视化</el-row>
          <el-row class="content_body1_content">
            APTARE IT Analytics 是唯一一款面向异构 IT
            环境，为多个供应商提供的备份、存储和虚拟基础架构提供统一洞察的可扩展平台。可通过单一管理平台,
            提供跨本地、混合云和多云环境的洞察和分析。借助 APTARE IT Analytics，您可以：
          </el-row>
          <el-row class="content_body1_content">
            <ul>
              <li>统一洞察和分析，实现存储和备份性能及完整性的可视化；</li>
              <li>集中管理；</li>
              <li>优化存储和成本，实施存储、备份和虚拟化的成本分摊；</li>
              <li>缓解风险，满足服务级别协议要求 (SLA)；</li>
              <li>简化备份合规。</li>
            </ul>
          </el-row>
          <el-row
            class="watch_button watch_button1 flex flex_align_center"
            @click.native="showVideo({
								src: '/videos/Veritas - 592637 - S01 APTARE_v2 CN.mp4',
								msg: '面向异构IT环境的运维数据透视分析平台',
								code: 'ZLD-005-V'
							})
            "
          >
            观看视频演示
            <img src="../assets/content_body1_icon2.png" />
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" class="content_body1_right flex flex_justify_center">
          <img src="../assets/content_body1_img.png" />
          <img
            class="play_img"
            src="../assets/play_icon.png"
            @click="showVideo ({
								src: '/videos/Veritas - 592637 - S01 APTARE_v2 CN.mp4',
								msg: '面向异构IT环境的运维数据透视分析平台',
								code: 'ZLD-005-V'
							})"
          />
        </el-col>
      </el-row>
      <!-- 面向面向异构 IT 环境的运维结束 -->

      <!-- 最佳场景开始 -->
      <el-row class="header">
        <img class="hidden-xs-only" src="../assets/head.png" />
        <img class="hidden-sm-and-up" src="../assets/phone_head.png" />
      </el-row>
      <!-- 最佳场景结束 -->

      <!-- 数据中心管理开始 -->
      <el-row class="content_body2">
        <el-row class="data_manage_body1">
          <el-row class="data_manage_body1_item">
            <el-col
              :span="12"
              :sm="24"
              :xs="24"
              class="hidden-sm-and-down"
              @click.native="
                showVideo ({
								src: '/videos/Use case video_APTARE Data Center Optimization Lightboard.mp4',
								msg: '数据中心管理的优化 简化备份审计和报告',
								code: 'ZLD-006-V'
							})"
            >
              <img class="content_body2_img1" src="../assets/content_body2_img1.png" />
            </el-col>
            <el-col :span="12" :sm="24" :xs="24">
              <el-row class="data_manage_body1_right">
                <el-row class="flex">
                  <img class="left_icon" src="../assets/content_body2_icon1.png" />
                  <el-row>
                    <el-row class="main_title1">数据中心管理的优化</el-row>
                    <el-row class="main_title2">简化备份审计和报告</el-row>
                  </el-row>
                </el-row>
                <el-row class="main_content_text">
                  APTARE IT Analytics Backup Manager
                  可解决本地和云中备份遇到的诸多常见问题，有助于管理员发现有风险的数据，消除“误报”。Backup
                  Manager 有助于管理员查看所有尝试过的备份，并提供有助解决备份问题的洞察，例如：
                  <ul>
                    <li>未受保护的数据发现：自动识别不在备份策略保护范围内的客户端和数据集，降低未受保护数据曝光的风险；</li>
                    <li>可疑备份识别：判断备份软件报告的成功备份是否部分成功备份或失败备份，从而消除”误报“风险。</li>
                  </ul>
                  <el-row>
                    对于在环境中使用 ServiceNow 的企业而言，只需轻轻单击一次，APTARE Backup Manager
                    Solution App 即可提供即时有用的备份洞察以及详细的审计跟踪。
                    <br />这种功能有助于ServiceNow 用户将备份作为一项资产进行管理。
                  </el-row>
                  <el-row
                    class="watch_button flex flex_align_center"
                    @click.native="
                      showVideo({
                        src: '/videos/Use case video_APTARE Data Center Optimization Lightboard.mp4',
                        msg: '数据中心管理的优化 简化备份审计和报告',
                        code: 'ZLD-006-V'
                      })"
                  >
                    观看视频
                    <img src="../assets/content_body1_icon2.png" />
                  </el-row>
                </el-row>
              </el-row>
            </el-col>
            <el-col
              :span="12"
              :sm="24"
              :xs="24"
              class="hidden-md-and-up"
              @click.native="
                showVideo({
								src: '/videos/Use case video_APTARE Data Center Optimization Lightboard.mp4',
								msg: '数据中心管理的优化 简化备份审计和报告',
								code: 'ZLD-006-V'
							})"
            >
              <img class="content_body2_img1" src="../assets/content_body2_img1.png" />
            </el-col>
          </el-row>
          <el-row class="data_manage_body1_item">
            <el-col :xs="24" :sm="24" :md="12">
              <el-row class="data_manage_body1_right">
                <el-row class="flex">
                  <img class="left_icon" src="../assets/content_body2_icon1.png" />
                  <el-row>
                    <el-row class="main_title1">存储资源管理的优化</el-row>
                    <el-row class="main_title2">有效管理数据存储资源，充分利用可用存储</el-row>
                  </el-row>
                </el-row>
                <el-row class="main_content_text">
                  APTARE IT Analytics Storage Management Suite
                  有助于企业跨本地和混合云管理多供应商存储环境，优化存储性能，最终降低资本支出。管理员可洞察资源的实际消耗情况，便于回收未利用的存储，降低消耗并提高资源利用率。APTARE
                  IT Analytics Storage Management Suite 集成了三大核心产品：Capacity Manager、Fabric
                  Manager 和 Virtualization Manager。
                  <ul>
                    <li>
                      Capacity
                      Manager：提供主机到存储阵列的端到端存储容量报告，便于提高容量使用效率；
                    </li>
                    <li>
                      Fabric Manager：捕获所有平台中 SAN
                      资源的关键性能指标和详细信息，从容预测未来需求；
                    </li>
                    <li>Virtualization Manager：深入洞察虚拟化环境中的存储资源管理。</li>
                  </ul>
                  <el-row
                    class="watch_button flex flex_align_center"
                    @click.native="
                      showVideo({
                        src: '/videos/Use case video_APTARE Storage Optimization Lightboard.mp4',
                        msg: '存储资源管理的优化 有效管理数据存储资源，充分利用可用存储',
                        code: 'ZLD-007-V'
                      })"
                  >
                    观看视频
                    <img src="../assets/content_body1_icon2.png" />
                  </el-row>
                </el-row>
              </el-row>
            </el-col>
            <el-col
              :xs="24"
              :sm="24"
              :md="12"
              @click.native="
                showVideo({
                      src: '/videos/Use case video_APTARE Storage Optimization Lightboard.mp4',
                      msg: '存储资源管理的优化 有效管理数据存储资源，充分利用可用存储',
                      code: 'ZLD-007-V'
                    })"
            >
              <img class="content_body2_img1" src="../assets/content_body2_img2.png" />
            </el-col>
          </el-row>
          <el-row class="data_manage_body1_item">
            <el-col
              :xs="24"
              :sm="24"
              :md="12"
              class="hidden-sm-and-down"
              @click.native="
                showVideo({
                        src: '/videos/Use case_APTARE IT Analytics Chargeback for IaaS.mp4',
                        msg: 'IT 即服务 提升存储、备份和云的需求管理',
                        code: 'ZLD-008-V'
                      })"
            >
              <img class="content_body2_img1" src="../assets/content_body2_img3.png" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12">
              <el-row class="data_manage_body1_right">
                <el-row class="flex">
                  <img class="left_icon" src="../assets/content_body2_icon1.png" />
                  <el-row>
                    <el-row class="main_title1">IT 即服务</el-row>
                    <el-row class="main_title2">提升存储、备份和云的需求管理</el-row>
                  </el-row>
                </el-row>
                <el-row class="main_content_text">
                  成本分摊有助于 IT
                  以即服务形式提供商业模式进行运营，了解预算支出点，并按容量和性能向最终客户或业务单位收取成本。APTARE
                  IT Analytics 还可用于特定业务领域的数据增长，从而进一步让 IT 与业务目标保持一致。
                  <span
                    class="main_title3"
                  >APTARE IT Analytics 可帮助您：</span>
                  <ul>
                    <li>获得多租户环境的管理级别报告；</li>
                    <li>查看已消耗的存储和备份及虚拟机资源，从而有效管理资源成本和需求，并且支持成本分摊；</li>
                    <li>
                      将用户提升到适当水平，并根据用户需求优化存储成本和数据保护
                      <br />实现本地或云中业务IT 成本的可视化。
                    </li>
                  </ul>
                  <el-row
                    class="watch_button flex flex_align_center"
                    @click.native="
                      showVideo({
                        src: '/videos/Use case_APTARE IT Analytics Chargeback for IaaS.mp4',
                        msg: 'IT 即服务 提升存储、备份和云的需求管理',
                        code: 'ZLD-008-V'
                      })"
                  >
                    观看视频
                    <img src="../assets/content_body1_icon2.png" />
                  </el-row>
                </el-row>
              </el-row>
            </el-col>
            <el-col
              :xs="24"
              :sm="24"
              :md="12"
              class="hidden-md-and-up"
              @click.native="
                showVideo({
                        src: '/videos/Use case_APTARE IT Analytics Chargeback for IaaS.mp4',
                        msg: 'IT 即服务 提升存储、备份和云的需求管理',
                        code: 'ZLD-008-V'
                      })"
            >
              <img class="content_body2_img1" src="../assets/content_body2_img3.png" />
            </el-col>
          </el-row>
        </el-row>

        <el-row class="data_manage_body2">
          <el-row class="data_manage_body2_row1 flex flex_align_center">
            <el-col :xs="24" :sm="24" :md="12" class="Analytics_img hidden-sm-and-down">
              <img src="../assets/data_manage_body2_img1.png" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="12">
              <el-row>
                <el-row class="flex">
                  <img class="title_left_icon" src="../assets/content_body1_icon1.png" />
                  <span class="main_title1">APTARE IT Analytics 10.3 新增功能</span>
                </el-row>
                <el-row class="main_content_text">
                  <ul>
                    <li>支持 Veeam、Oracle RMAN、Cohesity、Rubrik、ECS、Unity 及 Hyper-V；</li>
                    <li>接收警报并根据收集数据触发自动化操作流程，从而缩短故障解决时间；</li>
                    <li>通过警报趋势和向下挖掘分析报告，获取新洞察并加快根本原因分析；</li>
                    <li>基于历史数据为环境设置具体规则。</li>
                  </ul>
                </el-row>
                <el-row
                  class="watch_button watch_button1 flex flex_align_center"
                  @click.native="
                    downloadPdf({
											name: 'V0877_APTARE IT Analytics_打造混合云环境的统一 IT 分析 CN.pdf',
											msg: 'APTARE IT Analytics 10.3 新增功能',
											code: 'ZLD-004-P'
										})
                  "
                >
                  查看所有受支持的环境
                  <img src="../assets/content_body1_icon2.png" />
                </el-row>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" class="Analytics_img hidden-sm-and-up">
              <img src="../assets/data_manage_body2_img1.png" />
            </el-col>
          </el-row>
          <el-row class="data_manage_body2_row2">
            <el-row
              class="hidden-sm-and-down data_manage_body2_right flex flex_direction_column flex_align_center flex_justify_center"
            >
              <img src="../assets/data_manage_body2_button1.png" @click="applyRegister" />
              <img src="../assets/data_manage_body2_button2.png" @click="demonstrationRegister" />
            </el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_title">
              “我们手动的报告系统太耗时了，而且效率低下。APTARE IT Analytics
              极大简化了这个流程，有助于集中精力关注更具战略性的问题。”
            </el-row>
            <el-row
              class="flex flex_justify_center data_manage_body2_row2_title2"
            >Chris Davidson,Trustmark National Bank 开放式系统管理副总裁兼经理</el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_logo">
              <img src="../assets/logo3.png" />
            </el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_more">
              <img
                src="../assets/data_manage_body2_img5.png"
                @click="
              toNewPage({
										link: 'https://www.veritas.com/zh/cn/customer-success',
                    msg:'更多客户',
										code: 'ZLD-009-M'
									})"
              />
            </el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_button">
              <el-row class="data_manage_body2_row2_button">
                <img src="../assets/data_manage_body2_img3.png" />
                <el-row @click.native="applyRegister">报名参会 ></el-row>
              </el-row>
              <el-row class="data_manage_body2_row2_button">
                <img src="../assets/data_manage_body2_img4.png" />
                <el-row @click.native="demonstrationRegister">请求演示 ></el-row>
              </el-row>
            </el-row>
          </el-row>
        </el-row>
      </el-row>
      <!-- 数据中心管理结束 -->
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
        <img class="hidden-sm-and-up" @click="applyRegister" src="../assets/phone_top_button2.png" />
        <img
          class="hidden-sm-and-up"
          @click="demonstrationRegister"
          src="../assets/phone_top_button1.png"
        />
      </el-row>
    </el-row>
    <!-- 底部结束 -->

    <!-- 登录弹窗 -->
    <el-dialog
      title="登录"
      :close-on-click-modal="false"
      :lock-scroll="true"
      class="flex flex_align_center flex_justify_center login_dialog"
      :visible.sync="showLogin"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item class="login_button">
          <el-button :loading="true" v-if="logining">登录中</el-button>
          <el-button type="primary" v-else @click="loginSubmit('ruleForm')">登 录</el-button>
          <el-button @click="goRegister">前往注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 提示弹窗 -->
    <div class="toast" v-show="isToast">
      <span>{{ toast }}</span>
    </div>
    <!-- 视频播放弹窗 -->
    <el-dialog
      :close-on-click-modal="false"
      :lock-scroll="true"
      :show-close="false"
      center
      class="flex flex_align_center flex_justify_center video_dialog"
      :visible.sync="dialogTableVisible"
    >
      <el-button
        @click.native="closeVideo"
        title="关闭"
        class="video_close"
        icon="el-icon-close"
        circle
      ></el-button>
      <video
        id="video"
        class="video_body"
        controls
        x5-playsinline
        playsinline
        webkit-playsinline
        autoplay
        :src="tempVideoSrc"
      ></video>
    </el-dialog>
    <!-- 注册弹窗 -->
    <el-dialog
      :close-on-click-modal="false"
      :lock-scroll="true"
      :show-close="false"
      center
      class="flex flex_align_center flex_justify_center register_dialog"
      :visible.sync="registerDialog"
    >
      <el-button
        @click.native="closeRegisterDialog"
        title="关闭"
        class="register_close"
        icon="el-icon-close"
        circle
      ></el-button>
      <el-row>
        <img class="text_left_icon" src="../assets/content_body1_icon1.png" />
        <span class="metting_title">{{registerDialogTitle}}</span>
      </el-row>
      <el-row class="main_font1">{{registerDialogNotice}}</el-row>
      <el-row class="form_content">
        <el-form
          :model="registerRuleForm"
          :rules="registerRule"
          ref="registerRuleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="registerRuleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="registerRuleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="registerRuleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="部门" prop="department">
            <el-input v-model="registerRuleForm.department"></el-input>
          </el-form-item>
          <el-form-item label="职位" prop="position">
            <el-select v-model="registerRuleForm.position" placeholder="请选择">
              <el-option
                v-for="item in positionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司名称" prop="company">
            <el-input v-model="registerRuleForm.company"></el-input>
          </el-form-item>
          <el-form-item label="行业" prop="business">
            <el-select v-model="registerRuleForm.business" placeholder="请选择">
              <el-option
                v-for="item in businessOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="员工人数" prop="number">
            <el-select v-model="registerRuleForm.number" placeholder="请选择">
              <el-option
                v-for="item in numberOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="省份、城市" prop="city">
            <el-cascader size="large" :options="options" v-model="registerRuleForm.city"></el-cascader>
          </el-form-item>
          <el-row class="declare_text flex">
            <el-checkbox v-model="agreeChecked"></el-checkbox>&nbsp;
            <span>
              我同意 Veritas 就产品和促销信息与我联系。我们尊重您的隐私权，详见我们的
              <a
                href="https://www.veritas.com/company/privacy?cname=20Q2-APJ-ZH%2FCN-NBU-Ransomware-PostEvent-Journey&eid=9554&cid=&elqTrackId=49f25dafdbc04e67b1bff63fc3f13072&elq=5d8e52fac74740c79ca2551dfb62648b&elqaid=9554&elqat=1&elqCampaignId=8681"
                target="_blank"
              >隐私声明</a>
            </span>
          </el-row>
          <el-form-item class="form_submit_button">
            <el-button type="primary" @click="submitForm('registerRuleForm')">立即提交</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-dialog>
  </el-row>
</template>

<script>
// 获取网页参数
let getQueryVariable = variable => {
  var query = window.location.href;
  var link = query.split("?")[1];
  var vars = link.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};
import { provinceAndCityData, CodeToText } from "element-china-area-data";
export default {
  name: "Home",
  data() {
    let checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入邮箱"));
      } else {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(value)) {
          return callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }
    };
    let checkphone = (rule, value, callback) => {
      // let phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
      if (value == "") {
        callback(new Error("请输入手机号"));
      } else if (!this.isCellPhone(value)) {
        //引入methods中封装的检查手机格式的方法
        callback(new Error("请输入正确的手机号!"));
      } else {
        callback();
      }
    };
    return {
      original: "", //注册来源
      tempPdfSrc: "", //pdf地址
      trackPdfoMsg: "", //pdf名称
      dialogTableVisible: false, //视频播放弹窗
      tempVideoSrc: "", //视频地址
      trackVideoMsg: "", //视频名称
      tempLinkSrc: "", //外链
      clickType: 0, // 0: 无类型  1: 视频， 2: 下载PDF， 3: 报名参会， 4: 请求演示， 5: 跳转外链
      trackCode: "", //追踪代码 报名参会：BM-001-A  请求演示：BM-002-D
      ruleForm: {
        email: ""
      },
      rules: {
        email: [{ required: true, validator: checkEmail, trigger: "blur" }]
      },
      showLogin: false, //登录弹框
      logining: false, //登录中
      isToast: false, //提示
      toast: "", //提示内容

      //表单注册
      registerDialog: false, //注册弹窗
      registerDialogTitle: "", //注册弹框的title
      registerDialogNotice: "", //注册弹框的title
      agreeChecked: true,
      options: provinceAndCityData,
      codeToText: CodeToText,
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
      registerRuleForm: {
        name: "",
        phone: "",
        email: "",
        department: "",
        position: "",
        company: "",
        business: "",
        number: "",
        city: []
      },
      registerRule: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: true, validator: checkphone, trigger: "blur" }],
        email: [{ required: true, validator: checkEmail, trigger: "blur" }],
        department: [
          { required: true, message: "请输入部门", trigger: "blur" }
        ],
        position: [
          { required: true, message: "请选择职位", trigger: "change" }
        ],
        company: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
        ],
        business: [
          { required: true, message: "请选择行业", trigger: "change" }
        ],
        number: [
          { required: true, message: "请选择员工人数", trigger: "change" }
        ],
        city: [{ required: true, message: "请选择城市", trigger: "change" }]
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.original = getQueryVariable("original");
      console.log(this.original);
    });
  },
  methods: {
    //报名参会
    applyRegister() {
      let loginOn = this.loginOn();
      this.trackCode = "BM-001-A";
      this.clickType = 3;
      if (loginOn) {
        this.isToast = true;
        this.toast = "您已报名成功";
        setTimeout(() => {
          this.isToast = false;
        }, 1000);
        this.track("报名参会");
      }
    },
    //申请演示
    demonstrationRegister() {
      let loginOn = this.loginOn();
      // console.log(loginOn);
      this.trackCode = "BM-002-D";
      this.clickType = 4;
      if (loginOn) {
        this.isToast = true;
        this.toast = "您的请求已提交成功，稍后会有工作人员与您联系";
        setTimeout(() => {
          this.isToast = false;
        }, 2000);
        this.track("请求演示");
      }
    },
    //点击观看视频
    showVideo(arr) {
      let loginOn = this.loginOn();
      this.tempVideoSrc = arr.src;
      this.trackVideoMsg = arr.msg;
      this.trackCode = arr.code;
      this.clickType = 1;
      if (loginOn) {
        this.playVideo();
      }
    },
    // 播放视频
    playVideo() {
      this.dialogTableVisible = true;
      this.track(this.trackVideoMsg);
    },
    // 关闭视频弹窗
    closeVideo() {
      this.dialogTableVisible = false;
      let vdo = document.getElementById("video");
      vdo.pause();
    },
    // 点击pdf下载
    downloadPdf(obj) {
      let loginOn = this.loginOn();
      this.tempPdfSrc = `/pdf/${obj.name}`;
      this.trackPdfoMsg = obj.msg;
      this.trackCode = obj.code;
      this.clickType = 2;
      if (loginOn) {
        this.downPdf();
      }
    },
    //下载PDF
    downPdf() {
      this.track(this.trackPdfoMsg);
      this.openNewPage(this.tempPdfSrc);
    },
    // 跳转超链接
    toNewPage(arr) {
      let loginOn = this.loginOn();
      this.tempLinkSrc = arr.link;
      this.trackCode = arr.code;
      this.clickType = 5;
      if (loginOn) {
        this.toLink();
      }
    },
    // 跳转新连接
    toLink() {
      this.track("更多客户");
      this.openNewPage(this.tempLinkSrc);
    },
    // 打开新页面(预览pdf或者跳转外链)
    openNewPage(link) {
      let targetA = document.createElement("a");
      targetA.href = link;
      targetA.style.display = "none";
      targetA.target = "_blank";
      document.body.appendChild(targetA);
      targetA.click();
      document.body.removeChild(targetA);
    },
    // 信息追踪
    track(msg) {
      let localData = JSON.parse(localStorage.getItem("localData"));
      let code = this.trackCode;
      let params = {
        msg: msg,
        code: code,
        token: localData.token
      };
      this.$api
        .action(params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },

    //登录
    loginSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login(this.ruleForm.email);
          this.logining = true;
        } else {
          return false;
        }
      });
    },
    // 提交登录
    login(email) {
      let params = {
        email: email,
        password: 123456
      };
      this.$api
        .login(params)
        .then(res => {
          let data = res;
          this.logining = false;
          this.isToast = false;
          this.$refs["registerRuleForm"].resetFields();
          let expires_in = parseInt(data.expires_in);
          let expiresDate = new Date().getTime() + expires_in * 1000;
          localStorage.setItem(
            "localData",
            JSON.stringify({
              token: data.access_token,
              validTime: expiresDate
            })
          ); //本地存放token有效时间validTime

          // 判断用户操作类型进行跳转
          switch (this.clickType) {
            case 1:
              this.playVideo();
              break;
            case 2:
              this.downPdf();
              break;
            case 3:
              this.isToast = true;
              this.toast = "报名成功";
              setTimeout(() => {
                this.isToast = false;
              }, 1000);
              this.track("报名参会");
              break;
            case 4:
              this.isToast = true;
              this.toast = "请求成功";
              setTimeout(() => {
                this.isToast = false;
              }, 1000);
              this.track("请求演示");
              break;
            case 5:
              this.toLink();
              break;
          }
          this.showLogin = false;
        })
        .catch(error => {
          console.log(error);
          this.toast = "此邮箱不存在";
          this.isToast = true;
          this.logining = false;
          setTimeout(() => {
            this.isToast = false;
          }, 1000);
        });
    },
    // 判断是否是有效登录
    loginOn() {
      let localData = JSON.parse(localStorage.getItem("localData"));
      if (localData == null) {
        this.isToast = true;
        this.toast = "请先登录";
        setTimeout(() => {
          this.isToast = false;
          this.showLogin = true;
        }, 1000);
      } else {
        let newDate = new Date().getTime();
        let time = localData.validTime - newDate;
        if (time <= 0) {
          this.isToast = true;
          this.toast = "请先登录";
          setTimeout(() => {
            this.isToast = false;
            this.showLogin = true;
          }, 1000);
        } else if (time > 0 && time < 300000) {
          //如果过期时间差小于5分钟  刷新token
          this.refresh();
          return true;
        } else {
          this.$token = localData.token;
          return true;
        }
      }
    },
    // 刷新token
    refresh() {
      // this.toast = "刷新token";
      // this.isToast = true;
      let localData = JSON.parse(localStorage.getItem("localData"));
      let params = {
        token: localData.token
      };
      this.$api
        .refresh(params)
        .then(res => {
          let data = res.data;
          this.logining = false;
          if (res.status == 200) {
            let expires_in = parseInt(data.expires_in);
            let expiresDate = new Date().getTime() + expires_in * 1000;
            localStorage.setItem(
              "localData",
              JSON.stringify({
                token: data.access_token,
                validTime: expiresDate
              })
            ); //重新存放本地token有效时间validTime
            this.$token = data.access_token;
          }
        })
        .catch(error => {
          this.$messageBox.alert("token刷新失败，请重试！", {
            showClose: false,
            center: true,
            callback: action => {
              this.refresh();
            }
          });
        });
    },
    //根据点击按钮类型跳转注册页面  （点击视频和下载pdf弹出注册框，点击报名和申请跳转注册页面）
    goRegister() {
      // 0: 无类型  1: 视频， 2: 下载PDF， 3: 报名参会， 4: 请求演示， 5: 跳转外链
      switch (this.clickType) {
        case 1:
          this.showLogin = false;
          this.registerDialog = true;
          this.registerDialogTitle = "观看视频";
          this.registerDialogNotice = "填写表格，在线观看视频";
          break;
        case 2:
          this.showLogin = false;
          this.registerDialog = true;
          this.registerDialogTitle = "资料下载";
          this.registerDialogNotice = "填写表格，下载Veritas资料";
          break;
        case 3:
          this.$router.push({
            path: "/register",
            query: { original: this.original }
          });
          break;
        case 4:
          this.$router.push({
            path: "/veritasregister",
            query: { original: this.original }
          });
          break;
        case 5:
          this.$router.push({
            path: "/register",
            query: { original: this.original }
          });
          break;
      }
    },
    //手机号验证
    isCellPhone(val) {
      let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      if (!reg.test(val)) {
        return false;
      } else {
        return true;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.agreeChecked) {
            let params = {
              name: this.registerRuleForm.name,
              company: this.registerRuleForm.company,
              job: this.registerRuleForm.position,
              department: this.registerRuleForm.department,
              mobile: this.registerRuleForm.phone,
              email: this.registerRuleForm.email,
              province: this.codeToText[this.registerRuleForm.city[0]],
              city: this.codeToText[this.registerRuleForm.city[1]],
              industry: this.registerRuleForm.business,
              password: "123456",
              stuff_num: this.registerRuleForm.number,
              original: this.original //数据来源
            };
            this.$api
              .register(params)
              .then(res => {
                if (res.code == 200) {
                  this.isToast = true;
                  this.toast = "注册成功";
                  setTimeout(() => {
                    this.isToast = false;
                    this.registerDialog = false;
                    this.login(this.registerRuleForm.email);
                  }, 2000);
                } else {
                  this.isToast = true;
                  this.toast = res.msg;
                  setTimeout(() => {
                    this.isToast = false;
                  }, 2000);
                }
              })
              .catch(error => {
                this.isToast = true;
                this.toast = error.msg;
                setTimeout(() => {
                  this.isToast = false;
                }, 2000);
              });
          } else {
            this.isToast = true;
            this.toast = "请勾选我同意 Veritas 就产品和促销信息与我联系";
            setTimeout(() => {
              this.isToast = false;
            }, 2000);
          }
        } else {
          return false;
        }
      });
    },
    closeRegisterDialog() {
      this.registerDialog = false;
      this.$refs["registerRuleForm"].resetFields();
    }
  }
};
</script>
