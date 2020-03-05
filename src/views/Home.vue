<template>
  <el-row class="home">
    <el-row class="main_body">
      <el-row class="banner_content">
        <el-col :xs="24" :sm="24" :md="8" class="flex">
          <span>
            <img class="banner_list_icon" src="../assets/banner_content_icon1.png" />
          </span>
          <el-row>
            <el-row class="banner_list_title">面向混合云环境的分析</el-row>
            <el-row class="banner_list_content"
              >可通过单一面板管理操作和交付的运维数据透视分析平台</el-row
            >
            <el-row class="banner_list_button">下载产品资料 ›</el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" class="flex">
          <span>
            <img class="banner_list_icon" src="../assets/banner_content_icon2.png" />
          </span>
          <el-row>
            <el-row class="banner_list_title">APTARE 应用指南</el-row>
            <el-row class="banner_list_content"
              >了解 APTARE 运维数据透视分析平台如何助力管理复杂的IT
              环境，降低整体存储成本和用例。</el-row
            >
            <el-row class="banner_list_button">下载白皮书 ›</el-row>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" class="flex">
          <span>
            <img class="banner_list_icon" src="../assets/banner_content_icon3.png" />
          </span>
          <el-row>
            <el-row class="banner_list_title"
              >IDC Vendor Profile：APTARE 运维数据透视分析平台</el-row
            >
            <el-row class="banner_list_content"
              >了解 APTARE 运维数据透视分析平台如何解决 IT 资源管理的痛点。</el-row
            >
            <el-row class="banner_list_button">下载报告 ›</el-row>
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
          <el-row class="watch_button flex flex_align_center">
            观看视频演示
            <img src="../assets/content_body1_icon2.png" />
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" class="content_body1_right flex flex_justify_center">
          <img src="../assets/content_body1_img.png" />
          <img class="play_img" src="../assets/play_icon.png" />
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
            <el-col :span="12" :sm="24" :xs="24" class="hidden-sm-and-down">
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
                    <li>
                      未受保护的数据发现：自动识别不在备份策略保护范围内的客户端和数据集，降低未受保护数据曝光的风险；
                    </li>
                    <li>
                      可疑备份识别：判断备份软件报告的成功备份是否部分成功备份或失败备份，从而消除”误报“风险。
                    </li>
                  </ul>
                  <el-row>
                    对于在环境中使用 ServiceNow 的企业而言，只需轻轻单击一次，APTARE Backup Manager
                    Solution App 即可提供即时有用的备份洞察以及详细的审计跟踪。
                    <br />这种功能有助于ServiceNow 用户将备份作为一项资产进行管理。
                  </el-row>
                  <el-row class="watch_button flex flex_align_center">
                    观看视频
                    <img src="../assets/content_body1_icon2.png" />
                  </el-row>
                </el-row>
              </el-row>
            </el-col>
            <el-col :span="12" :sm="24" :xs="24" class="hidden-md-and-up">
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
                  <el-row class="watch_button flex flex_align_center">
                    观看视频
                    <img src="../assets/content_body1_icon2.png" />
                  </el-row>
                </el-row>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12">
              <img class="content_body2_img1" src="../assets/content_body2_img2.png" />
            </el-col>
          </el-row>
          <el-row class="data_manage_body1_item">
            <el-col :xs="24" :sm="24" :md="12" class="hidden-sm-and-down">
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
                  <span class="main_title3">APTARE IT Analytics 可帮助您：</span>
                  <ul>
                    <li>获得多租户环境的管理级别报告；</li>
                    <li>
                      查看已消耗的存储和备份及虚拟机资源，从而有效管理资源成本和需求，并且支持成本分摊；
                    </li>
                    <li>
                      将用户提升到适当水平，并根据用户需求优化存储成本和数据保护
                      <br />实现本地或云中业务IT 成本的可视化。
                    </li>
                  </ul>
                  <el-row class="watch_button flex flex_align_center">
                    观看视频
                    <img src="../assets/content_body1_icon2.png" />
                  </el-row>
                </el-row>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" class="hidden-md-and-up">
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
                <ul class="main_content_text">
                  <li>支持 Veeam、Oracle RMAN、Cohesity、Rubrik、ECS、Unity 及 Hyper-V；</li>
                  <li>接收警报并根据收集数据触发自动化操作流程，从而缩短故障解决时间；</li>
                  <li>通过警报趋势和向下挖掘分析报告，获取新洞察并加快根本原因分析；</li>
                  <li>基于历史数据为环境设置具体规则。</li>
                </ul>
                <el-row class="watch_button flex flex_align_center">
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
              <img src="../assets/data_manage_body2_button1.png" />
              <img src="../assets/data_manage_body2_button2.png" />
            </el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_title">
              “我们手动的报告系统太耗时了，而且效率低下。APTARE IT Analytics
              极大简化了这个流程，有助于集中精力关注更具战略性的问题。”
            </el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_title2"
              >Chris Davidson,Trustmark National Bank 开放式系统管理副总裁兼经理</el-row
            >
            <el-row class="flex flex_justify_center data_manage_body2_row2_logo">
              <img src="../assets/logo3.png" />
            </el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_more">
              <img src="../assets/data_manage_body2_img5.png" />
            </el-row>
            <el-row class="flex flex_justify_center data_manage_body2_row2_button">
              <el-row class="data_manage_body2_row2_button">
                <img src="../assets/data_manage_body2_img3.png" />
                <el-row>报名参会 ></el-row>
              </el-row>
              <el-row class="data_manage_body2_row2_button">
                <img src="../assets/data_manage_body2_img4.png" />
                <el-row>请求演示 ></el-row>
              </el-row>
            </el-row>
          </el-row>
        </el-row>
      </el-row>
      <!-- 数据中心管理结束 -->
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "Home"
};
</script>
