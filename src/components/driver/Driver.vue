<template>
  <div id="driver">
    <div class="title">
      <i class="el-icon-s-opportunity"></i>
      点击按钮可查看本管理系统的基本操作
    </div>
    <div class="button">
      <el-button type="primary" @click="guide()">引导</el-button>
    </div>
  </div>
</template>

<script>
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import steps from "./guide";
export default {
  name: "driver",
  mounted() {
    this.driver = new Driver({
      opacity: 0.5,
      animate: true,
      padding: 10,
      allowClose: true,
      overlayClickNext: false,
      stageBackground: false,
      doneBtnText: "完成",
      closeBtnText: "关闭",
      nextBtnText: "下一步",
      prevBtnText: "上一步",
      onReset: () => {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("elaside").style.marginTop = "50px";
        document.getElementById("elaside").style.marginLeft = "2px";
      }
    });
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps);
      document.getElementById("header").style.position = "fixed"; //解决fixed显示空白bug
      // document.getElementById("sidebar").style.position = "fixed"; //解决fixed显示空白bug
      this.driver.start();
    }
  }
};
</script>

<style>
.title i {
  color: orange;
  font-size: 1rem;
}
.button button {
  margin: 1rem;
  width: 90px;
  height: 45px;
}
div#driver-highlighted-element-stage {
  opacity: 0.6;
  background: #ffffff;
}
</style>