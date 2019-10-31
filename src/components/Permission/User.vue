<template>
  <div id="user">
    <div class="title">
      <i class="el-icon-s-opportunity"></i>
      你的权限页面是：
    </div>
    <div class="wrap">
      <div class="tag" v-for="(item,index) in tag" :key="index">
        <el-tag>{{item.userpage}}</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      tag: []
    };
  },
  methods: {
    getuser() {
      this.axios
        .get(
          "/users"
        )
        .then(res => {
          this.tag = res.data.data.user;
        })
        .catch(err => {
           ;
        });
    }
  },
  mounted() {
    this.getuser();
  }
};
</script>
<style scoped>
/* 头部 */
.title {
  color: #303133;
  width: 100%;
  font-size: 1rem;
  border-bottom: 1px solid #ebeef5;
  padding: 20px 20px;
}
.title i {
  color: orange;
}

/* 标签 */
.wrap {
  display: flex;
  flex-wrap: wrap;
}
.tag {
  margin-left: 2rem;
  margin-top: 1rem;
}
</style>
