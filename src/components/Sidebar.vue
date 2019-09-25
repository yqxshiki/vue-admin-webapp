<template>
  <div class="sidebar">
    <el-container style="border: 1px solid #eee">
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>首页
            </template>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-flag"></i>引导指南
            </template>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-lock"></i>权限许可
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <i class="el-icon-user"></i>用户页面
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-user-solid"></i>管理员页面
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-s-tools"></i>权限设置
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-grid"></i>Table
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">普通表格</el-menu-item>
              <el-menu-item index="4-2">复杂表格</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-coin"></i>部分组件
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <i class="el-icon-s-claim"></i>滑动验证
              </el-menu-item>
              <el-menu-item index="5-2">
                <i class="el-icon-upload"></i>上传图片
              </el-menu-item>
              <el-menu-item index="5-3">
                <i class="el-icon-lunbo iconfont"></i>轮播
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>Echarts
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">
                <router-link to="/slideecharts">滑动charts</router-link>
              </el-menu-item>
              <el-menu-item index="6-2">
                <router-link to="/switchecharts">切换charts</router-link>
              </el-menu-item>
              <el-menu-item index="6-3">
                <router-link to="/map">map</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-tickets"></i>Excel
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">Excel导出</el-menu-item>
              <el-menu-item index="7-2">Excel导入</el-menu-item>
              <el-menu-item index="7-3">多级表头导出</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-s-release"></i>
              <router-link to="/error">404</router-link>
            </template>
          </el-submenu>

          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-link"></i>项目链接
            </template>
          </el-submenu>

          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-setting"></i>导航菜单测试
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <i class="el-icon-coffee"></i>菜单1
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-cherry"></i>菜单2
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>

    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>



<script>
export default {
  name: "sidebar"
};
</script>

 <style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: #fff;
  margin-top: -4px;
  margin-left: -1px;
  height: 619px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(240, 243, 244);
}

.el-header {
  color: #fff;
  line-height: 60px;
}
.el-container {
  height: 100%;
}
.el-aside {
  color: #fff;
}
.el-menu {
  height: 100%;
  background: rgb(95, 100, 119);
  color: #fff;
}
div {
  color: #fff;
}
.el-menu .el-submenu {
  background: rgb(95, 100, 119);
}
.el-menu-item-group {
  background: rgb(95, 100, 119);
}
.el-submenu .el-submenu__title {
  color: #fff;
}
.el-menu-item {
  color: #fff;
}

.wrap {
  position: absolute;
  left: 200px;
  right: 0;
  top: 50px;
  bottom: 0;
  margin: auto;
  height: calc(100% - 100px);
  background: #ffffff;
  width: calc(100% - 300px);
}
</style>