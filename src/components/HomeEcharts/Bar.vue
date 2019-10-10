<template>
  <div id="bar">
    <div id="barChart" :style="{width : '100%',height:'400px'}"></div>
  </div>
</template>

<script>
export default {
  name: "bar",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let barChart = this.echarts.init(document.getElementById("barChart"));
      barChart.setOption({
        title: {
          text: "Yearly Expense",
          textStyle: {
            color: "#36a3f7",
            fontStyle: "italic"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["2017", "2018", "2019"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "2017",
            type: "bar",
            data: [
              100000,
              130000,
              156000,
              108000,
              188000,
              158000,
              231000,
              254000,
              265000,
              236000,
              137000,
              272000
            ],
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "2018",
            type: "bar",
            data: [
              239000,
              336000,
              297000,
              176000,
              260000,
              213000,
              214000,
              247000,
              235000,
              288000,
              235600,
              285000
            ],
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },

          {
            name: "2019",
            type: "bar",
            data: [
              250000,
              258000,
              208000,
              262000,
              294000,
              341000,
              340000,
              348500,
              293000,
              345000,
              278000,
              221000
            ],
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    }
  }
};
</script>
<style>
</style>