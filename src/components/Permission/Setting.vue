<template>
  <div id="setting">
    <div class="button">
      <el-button type="primary" @click="dialogFormVisible = true">添加权限</el-button>
      <el-dialog title="添加编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="身份" :label-width="formLabelWidth">
            <el-input v-model="form.status" autocomplete="off" placeholder="请输入要他添加的身份类别"></el-input>
          </el-form-item>
          <el-form-item label="说明" :label-width="formLabelWidth">
            <el-input v-model="form.show" autocomplete="off" placeholder="请输入相关说明"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sendform(form)">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 展示数据 -->
    <div class="wrap">
      <el-table :data="settingdata" border style="width: 100%">
        <el-table-column prop="status" label="身份"></el-table-column>
        <el-table-column prop="show" label="说明"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="dialogFormVisible1 = true;">编辑</el-button>
            <el-dialog title="权限编辑" :visible.sync="dialogFormVisible1">
              <el-form :model="form1">
                <el-form-item label="身份" :label-width="formLabelWidth">
                  <el-input v-model="form1.status1" autocomplete="off" placeholder="请输入要他添加的身份类别"></el-input>
                </el-form-item>
                <el-form-item label="说明" :label-width="formLabelWidth">
                  <el-input v-model="form1.show1" autocomplete="off" placeholder="请输入相关说明"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="revise()">确 定</el-button>
              </div>
            </el-dialog>
            <el-button type="warning" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      settingdata: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        status: "",
        show: ""
      },
      form1: {
        status1: "",
        show1: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    // 删除
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 渲染数据
    getsetting() {
      this.axios
        .get("/setting")
        .then(res => {
          this.settingdata = res.data.data.setting;
        })
        .catch(err => {
           ;
        });
    },
    // 发送数据
    sendform() {
      if (this.form.status == "" || this.form.show == "") {
        this.$message({
          type: "error",
          message: "请输入相关信息"
        });
      } else {
        let newform = {
          status: this.form.status,
          show: this.form.show
        };
        this.settingdata.push(newform);
        this.dialogFormVisible = false;
      }
    },
    revise() {
      this.$message({
        type: "error",
        message: "该功能没有实现!"
      });
      this.dialogFormVisible1 = false;
    }
  },
  mounted() {
    this.getsetting();
  }
};
</script>
<style scoped>
button {
  margin: 1rem;
}
.button {
  margin: 2rem;
}

.wrap {
  margin-left: 1rem;
}
</style>