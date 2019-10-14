<template>
  <div id="sidebar">
    <el-container style="border: 1px solid #eee,width:200px;">
      <el-aside id="elaside" width="200px">
        <el-menu :default-openeds="['1', '1']">
          <router-link to="/home">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                首页
              </template>
            </el-submenu>
          </router-link>

          <router-link to="/driver">
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-flag"></i>引导指南
              </template>
            </el-submenu>
          </router-link>

          <div id="titledirver">
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-lock"></i>权限许可
              </template>
              <el-menu-item-group>
                <router-link to="/user">
                  <el-menu-item index="3-1">
                    <i class="el-icon-user"></i>用户页面
                  </el-menu-item>
                </router-link>

                <router-link to="/administrators">
                  <el-menu-item index="3-2">
                    <i class="el-icon-user-solid"></i>管理员页面
                  </el-menu-item>
                </router-link>
                <router-link to="/setting">
                  <el-menu-item index="3-3">
                    <i class="el-icon-s-tools"></i>权限设置
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </div>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-grid"></i>Table
            </template>
            <el-menu-item-group>
              <router-link to="/simpletable">
                <el-menu-item index="4-1">普通表格</el-menu-item>
              </router-link>

              <router-link to="/complextable">
                <el-menu-item index="4-2">复杂表格</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-coin"></i>部分组件
            </template>
            <el-menu-item-group>
              <router-link to="/slide">
                <el-menu-item index="5-1">
                  <i class="el-icon-s-claim"></i>
                  滑动验证
                </el-menu-item>
              </router-link>

              <router-link to="/uploadpic">
                <el-menu-item index="5-2">
                  <i class="el-icon-upload"></i>
                  上传图片
                </el-menu-item>
              </router-link>

              <router-link to="/carousel">
                <el-menu-item index="5-3">
                  <i class="el-icon-lunbo iconfont"></i>
                  轮播
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-marketing"></i>Echarts
            </template>
            <el-menu-item-group>
              <router-link to="/slideecharts">
                <el-menu-item index="6-1">滑动charts</el-menu-item>
              </router-link>

              <router-link to="/switchecharts">
                <el-menu-item index="6-2">切换charts</el-menu-item>
              </router-link>
              <router-link to="/map">
                <el-menu-item index="6-3">map</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-tickets"></i>Excel
            </template>
            <el-menu-item-group>
              <router-link to="/exportexcel">
                <el-menu-item index="7-1">Excel导出</el-menu-item>
              </router-link>
              <router-link to="/importexcel">
                <el-menu-item index="7-2">Excel导入</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <router-link to="/error">
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-s-release"></i>
                404
              </template>
            </el-submenu>
          </router-link>

          <a href="https://github.com/yqxshiki/vue-admin-webapp-" target="_black">
            <el-submenu index="9">
              <template slot="title">
                <i class="el-icon-link"></i>
                项目链接
              </template>
            </el-submenu>
          </a>

          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-setting"></i>导航菜单测试
            </template>
            <el-menu-item-group>
              <router-link to="/nav1">
                <el-menu-item index="3-1">
                  <i class="el-icon-coffee"></i>菜单1
                </el-menu-item>
              </router-link>

              <router-link to="/nav2">
                <el-menu-item index="3-2">
                  <i class="el-icon-cherry"></i>菜单2
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>

    <div class="wrap" id="sidebarwrap">
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
.el-container {
  box-sizing: border-box;
}
#sidebar {
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: -1px;
  margin-left: -1px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(240, 243, 244);
}
#elaside {
  transition: 1s;
}
/* 滚动条 */
.el-aside::-webkit-scrollbar {
  width: 5px;
  height: 20px;
  background-color: rgb(95, 100, 119);
}
.el-aside::-webkit-scrollbar-thumb {
  border-radius: 10px;
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
  margin-left: 2px;
}
.el-menu {
  height: 100%;
  background: rgb(95, 100, 119);
  color: #fff;
}
.el-menu .el-submenu {
  background: rgb(95, 100, 119);
}
.el-menu-item-group {
  background: rgb(95, 100, 119);
}
.el-submenu__title {
  color: #fff !important;
}

/* 图标颜色 */
.el-submenu__title i {
  color: #ccc;
}
/* 二级菜单 */
.el-menu-item {
  color: #fff;
}

/* view */
.wrap {
  position: absolute;
  left: 200px;
  right: 0;
  top: 80px;
  bottom: 0;
  margin: auto;
  background: #ffffff;
  width: calc(100% - 300px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  transition: 1s;
}

.wrap::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.wrap::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.wrap::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>