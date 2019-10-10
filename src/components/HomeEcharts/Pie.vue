<template>
  <div id="pie">
    <div id="pieChart" :style="{width: '100%', height: '400px'}"></div>
  </div>
</template>

<script>
export default {
  name: "pie",
  mounted() {
    this.mcharts();
  },
  methods: {
    mcharts() {
      let pieChart = this.echarts.init(document.getElementById("pieChart"));
      pieChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          left: "center",
          bottom: "10",
          data: ["Vue", "js", "html", "css", "webpack", "node"]
        },
        series: [
          {
            name: "technology stack",
            type: "pie",
            roseType: "radius",
            radius: [15, 120],
            center: ["50%", "42%"],
            data: [
              { value: 40, name: "Vue" },
              { value: 35, name: "js" },
              { value: 20, name: "html" },
              { value: 10, name: "css" },
              { value: 8, name: "webpack" },
              { value: 5, name: "node" }
            ],
            animationEasing: "cubicInOut",
            animationDuration: 2600
          }
        ]
      });
    }
  }
};
</script>
<style>
</style>