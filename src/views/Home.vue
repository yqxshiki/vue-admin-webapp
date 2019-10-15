<template>
  <div class="iCountUp">
    <el-row :gutter="24">
      <el-col :span="6">
        <div class="wrap">
          <div class="grid-content bg-purple">
            <ICountUp :endVal="endVal" :duration="5000" @ready="onReady" />
            <div class="text">Total Visitors</div>
          </div>
          <i class="el-icon-s-custom"></i>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="wrap">
          <div class="grid-content bg-purple">
            <ICountUp :endVal="endVal1" :duration="3000" @ready="onReady" />
            <div class="text">Messages</div>
          </div>
          <i class="el-icon-chat-dot-square"></i>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="wrap">
          <div class="grid-content bg-purple">
            <ICountUp :endVal="endVal2" :duration="2000" @ready="onReady" />
            <div class="text">Total Order Placeed</div>
          </div>
          <i class="el-icon-shopping-cart-2"></i>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="wrap">
          <div class="grid-content bg-purple">
            <ICountUp :endVal="endVal3" :duration="6000" @ready="onReady" />
            <div class="text">Total Profit</div>
          </div>
          <i class="el-icon-wallet"></i>
        </div>
      </el-col>
    </el-row>

    <!-- Echarts -->
    <div class="linecharts">
      <linecharts />
    </div>
    <div class="pie">
      <pie />
    </div>
    <div class="bar">
      <bar />
    </div>
  </div>
</template>

 <script>
import linecharts from "../components/HomeEcharts/Linecharts";
import pie from "../components/HomeEcharts/Pie";
import bar from "../components/HomeEcharts/Bar";
import ICountUp from "vue-count-to";
export default {
  name: "demo",
  components: {
    ICountUp,
    linecharts,
    pie,
    bar
  },
  data() {
    return {
      endVal: 67810,
      endVal1: 330,
      endVal2: 492,
      endVal3: 85045
    };
  },
  methods: {
    onReady: function(instance, CountUp) {
      const that = this;
      instance.update(that.endVal + 100);
    },
    // isdriver() {
    //   let key = this.$store.state.driverkey;
    //   if (key == 1) {
    //   }
    // }
  }
};
</script>
 
<style scoped>
/* 计数器 */
.iCountUp {
  width: 100%;
  height: 100%;
  background: rgb(240, 243, 244);
  box-shadow: none;
  font-size: 20px;
  margin: 0;
  color: #4d63bc;
  font-weight: 300;
}

/* element ui */
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  width: 25%;
}

/* i 标签 */
.el-col i {
  font-size: 60px;
}
.el-icon-s-custom {
  color: #40c9c6;
}
.el-icon-chat-dot-square {
  color: #36a3f7;
}
.el-icon-shopping-cart-2 {
  color: red;
}
.el-icon-wallet {
  color: #34bfa3;
}

/* 头部信息 */
.wrap {
  background: #fff;
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  font-weight: bolder;
}
.iCountUp .text {
  font-size: 0.8rem;
  color: #36a3f7;
  text-shadow: 0 5px 10px red;
  white-space: nowrap;
}
.bg-purple {
  width: 50%;
  margin-top: 20px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

/* charts */

/* line */
.linecharts {
  width: 98%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  position: absolute;
  left: 10px;
}
/* pie */
.pie {
  width: 98%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  position: absolute;
  top: 600px;
  left: 10px;
}

/* bar */
.bar {
  width: 98%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
  position: absolute;
  top: 1050px;
  left: 10px;
}
</style>

