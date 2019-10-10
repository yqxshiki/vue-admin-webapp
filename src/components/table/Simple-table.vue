<template>
  <div id="simple">
    <div class="title">
      <span>基础表格</span>
    </div>
    <el-container>
      <el-container>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
    <!-- 空白 -->
    <div class="blank"></div>

    <div class="title">
      <span>带分页表格</span>
    </div>
    <el-table :data="pagingtable" border style="width: 100%">
      <el-table-column prop="order" label="序号"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="product" label="产品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="number" label="数量"></el-table-column>
      <!-- <el-tag closable :type="tag.type"></el-tag> -->
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(6).fill(item),
      pagingtable: [{ order: order, price: price }]
    };
  },
  methods: {
    getorder() {
      this.axios
        .get(
          "https://www.fastmock.site/mock/7ff7ba8b60619bef6fd647ceec01169a/admin/order"
        )
        .then(res => {
          // console.log(res);
          this.pagingtable.order = res.data.data;
          console.log(this.pagingtable);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getprice() {
      this.axios
        .get(
          "https://www.fastmock.site/mock/7ff7ba8b60619bef6fd647ceec01169a/admin/price"
        )
        .then(res => {
          // console.log(res);
          this.pagingtable.price = res.data.data;
          console.log(this.pagingtable);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // 页面渲染前拿到数据
  mounted() {
    this.getorder();
    this.getprice();
  }
};
</script>


<style>
tr,
th,
td {
  color: #303133;
}
.blank {
  background: rgb(240, 243, 244);
  width: 100%;
  height: 50px;
}
.title {
  color: #303133;
  width: 100%;
  font-size: 12px;
  border-bottom: 1px solid #ebeef5;
  padding: 20px 20px;
}
</style>



