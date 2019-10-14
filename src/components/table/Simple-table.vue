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
    <el-table
      :data="pagingtable.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
      border
      style="width: 100%"
    >
      <el-table-column prop="order" label="序号"></el-table-column>
      <el-table-column prop="gid" label="ID"></el-table-column>
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="number" label="数量"></el-table-column>
      <el-table-column width="120" prop="tag" label="状态">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag =='已取消' ? 'danger':'success' "
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagingtable.length"
    ></el-pagination>
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
      pagingtable: [],
      pagesize: 5,
      currentPage: 1
    };
  },
  methods: {
    // 每页展示多少条数据
    handleSizeChange(size) {
      this.pagesize = size;
    },
    // 第几页
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    // 获取数据
    getorder() {
      this.axios
        .get("/api/order")
        .then(res => {
          // console.log(res);
          this.pagingtable = res.data.data.table;
          // console.log(this.pagingtable.length);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // 页面渲染前拿到数据
  mounted() {
    this.getorder();
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
div {
  font-size: 1.1rem;
  font-weight: 100;
}
</style>



