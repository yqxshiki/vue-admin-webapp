<template>
  <div id="exportexcle">
    <div class="title">导出表格</div>
    <el-input placeholder="请输入导出的文件名称" v-model="input" clearable></el-input>
    <el-button type="primary">导出</el-button>
    <el-table :data="excel" stripe style="width: 100%">
      <el-table-column prop="order" label="序号"></el-table-column>
      <el-table-column prop="data" label="出生日期"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="work" label="工作"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "exportexcle",
  data() {
    return {
      input: "",
      excel: []
    };
  },
  methods: {
    getexcel() {
      this.axios
        .get("/export")
        .then(res => {
          this.excel = res.data.data.export;
        })
        .catch(err => {
           ;
        });
    }
  },
  mounted() {
    this.getexcel();
  }
};
</script>
<style scoped>
.el-input {
  width: 300px;
  margin: 1.2rem;
}
div {
  font-size: 0.9rem;
  font-weight: 100;
}
</style>