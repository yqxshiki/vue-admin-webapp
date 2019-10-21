<template>
  <div id="slide">
    <div class="title">滑动验证</div>
    <div class="wrap">
      <div class="yanz">
        <i class="el-icon-s-opportunity"></i>
        点击按钮调出滑动验证模块，相关配置如下：
      </div>
      <el-button type="primary" @click="onSubmit">验证</el-button>
      <vcode :show="isShow" @onSuccess="onSuccess" @onClose="onClose" />
    </div>

    <!-- 空白 -->
    <div class="blank"></div>

    <div class="table">
      <div class="show">参数说明:</div>
      <el-table :data="orderData" border stripe style="width: 100%" highlight-current-row>
        <el-table-column prop="order" label="参数"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="orderdefault" label="默认值"></el-table-column>
        <el-table-column prop="ordershow" label="说明"></el-table-column>
      </el-table>

      <div class="show">回调函数:</div>
      <el-table :data="callbackData" border style="width: 100%" highlight-current-row>
        <el-table-column prop="event" label="事件名"></el-table-column>
        <el-table-column prop="returnvalue" label="类型"></el-table-column>
        <el-table-column prop="callbackshow" label="说明"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import vcode from "vue-puzzle-vcode";
export default {
  name: "slide",
  data() {
    return {
      isShow: false,
      orderData: [],
      callbackData: []
    };
  },
  components: {
    vcode
  },
  methods: {
    // 获取数据
    getorderData() {
      this.axios.get("/slide").then(res => {
        console.log(res.data.data);
        this.orderData = res.data.data.orderData;
        this.callbackData = res.data.data.callbackData;
      });
    },
    onSubmit() {
      this.isShow = true;
    },
    // 用户通过了验证
    onSuccess(msg) {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
    },
    // 用户点击遮罩层，应该关闭模态框
    onClose() {
      this.isShow = false;
    }
  },
  mounted() {
    this.getorderData();
  }
};
</script>
<style scoped>
.wrap {
  margin: 1rem;
}
.el-icon-s-opportunity {
  color: orange;
}
.yanz {
  margin: 1rem;
}
/* 空白 */
.blank {
  width: 100%;
  height: 50px;
}
/* 参数标题 */
.show {
  margin: 1rem;
  text-shadow: 0px 5px 5px cornflowerblue;
}
</style>