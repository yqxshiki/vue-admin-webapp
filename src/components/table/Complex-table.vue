<template>
  <div id="complex">
    <div class="title">
      <span>复杂操作表格</span>
    </div>
    <!-- search -->
    <div class="search">
      <!-- 订单号 -->
      <div class="searchbox">
        <el-input v-model="input" placeholder="请输入订单号" :style="{width:'180px',height:'40px'}"></el-input>
      </div>
      <!-- 状态 -->
      <div class="searchbox">
        <el-select v-model="select">
          <el-option label="待审核" value="shanghai"></el-option>
          <el-option label="配送中" value="beijing"></el-option>
          <el-option label="已完成" value="beijing"></el-option>
          <el-option label="已取消" value="beijing"></el-option>
        </el-select>
      </div>
      <!-- 日期 -->
      <div class="searchbox">
        <div class="block">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="searchbox">
        <el-button type="primary">
          <i class="el-icon-zoom-in"></i>
          搜索
        </el-button>
      </div>
      <div class="searchbox">
        <el-button type="primary">
          <i class="el-icon-circle-plus-outline"></i>
          添加
        </el-button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table ref="filterTable" border :data="tableData" style="width: 100%">
        <el-table-column width="80" prop="order" label="序号"></el-table-column>
        <el-table-column width="120" prop="id" label="订单号"></el-table-column>
        <el-table-column width="120" prop="date" label="下单时间"></el-table-column>
        <el-table-column width="200" prop="address" label="配送地址"></el-table-column>
        <el-table-column width="120" prop="phone" label="联系电话"></el-table-column>
        <el-table-column width="80" prop="people" label="配送员"></el-table-column>
        <el-table-column width="120" prop="tag" label="状态">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag =='已完成' ? 'success':'danger' "
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="status" label="操作" width="374">
          <el-button type="primary">编辑</el-button>
          <el-button type="warning" @click="open2">审核</el-button>
          <el-button type="success" @click="open3">完成</el-button>
          <el-button type="danger" @click="open4">取消</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "complex",
  data() {
    return {
      value1: "",
      input: "",
      select: "",
      tableData: [
        {
          date: "2016-05-02",
          people: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "已完成"
        },
        {
          date: "2016-05-04",
          people: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-01",
          people: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "已完成"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司"
        }
      ]
    };
  },
  methods: {
    open2() {
      this.$notify({
        title: "成功",
        message: "审核提交成功",
        type: "success"
      });
    },
    open3() {
      this.$notify({
        title: "成功",
        message: "该订单已配送完毕",
        type: "success"
      });
    },
    open4() {
      this.$notify({
        title: "成功",
        message: "已取消该订单",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.search {
  margin-top: 2rem;
  display: flex;
  align-items: center;
}
.searchbox {
  padding-left: 2rem;
}

/* table */
.table {
  padding-top: 2rem;
}
</style>