<template>
  <div id="app">
    <appheader />
    <Sidebar />
    <!-- <router-link to="/switchecharts">charts</router-link> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import login from "./views/Login";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default {
  components: {
    // login,
    Sidebar: Sidebar,
    appheader: Header
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Helvetica, ‘Hiragino Sans GB’, ‘Microsoft Yahei’, ‘微软雅黑’,
    Arial, sans-serif;
}
#app {
  width: 100%;
  height: 100%;
}
</style>

