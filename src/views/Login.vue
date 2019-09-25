<template>
  <div id="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h1>vue-admin-app用户登录</h1>
      <el-form-item label="用户名" prop="login">
        <el-input type="text" v-model="ruleForm.login" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.login !== "") {
          this.$refs.ruleForm.validateField("login");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.pass !== "") {
          this.$refs.ruleForm.validateField("pass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        login: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass2, trigger: "blur" }],
        login: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    this.$notify({
      title: "提示",
      message:
        "目前有两个账号可以登录，分别收管理员和用户，用户名分别收admin,user密码都为：123456",
      type: "warning",
      duartion: 0
    });
  }
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  background: url("../assets/pageBg/loginBg.jpg") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-ruleForm {
  background: #fff;
  border-radius: 20px;
  padding: 50px;
}
h1 {
  margin-left: -50px;
  font-family: Helvetica, ‘Hiragino Sans GB’, ‘Microsoft Yahei’, ‘微软雅黑’,
    Arial, sans-serif;
}

.el-form-item {
  margin: 30px;
  width: 400px;
  font-weight: 500;
}
button {
  width: 100%;
}
</style>