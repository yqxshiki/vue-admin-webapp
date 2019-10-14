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
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="sendform('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  nameL: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.username !== "") {
          // this.$refs.ruleForm.validateField("username");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
          // this.$refs.ruleForm.validateField("password");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        password: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 页面自动获取数据,直接登录
    getform() {
      this.axios
        .post("/api/login")
        .then(res => {
          // console.log(res);
          this.ruleForm = res.data.data.form;
          // console.log(res.data.data.form);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 登录发送数据
    sendform() {
      if (this.ruleForm.username == "" || this.ruleForm.password == "") {
        alert("请输入用户名或者密码");
      } else {
        let newform = {
          username: this.ruleForm.username,
          password: this.ruleForm.password
        };
        this.axios
          .post("/api/login", newform)
          .then(res => {
            // console.log(res.data.data.userInfo.token);
            const token = res.data.data.userInfo.token;
            localStorage.setItem("loginToken", token);
            this.$router.push("/display");
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.$notify({
      title: "提示",
      message:
        "目前有两个账号可以登录，分别收管理员和用户，用户名分别收admin,user密码都为：123456",
      type: "warning",
      duartion: 0
    }),
      this.getform();
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