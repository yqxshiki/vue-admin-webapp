<template>
  <div id="app">
    <!-- <login /> -->
    <appheader />
    <Sidebar />
  </div>
</template>

<script>
// import login from "./views/Login";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default {
  components: {
    // login,
    Sidebar,
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
  overflow: hidden;
  font-family: Helvetica, ‘Hiragino Sans GB’, ‘Microsoft Yahei’, ‘微软雅黑’,
    Arial, sans-serif;
  background: #f0f3f4;
}
#app {
  width: 100%;
  height: 100%;
}
a {
  color: #303133;
  text-decoration: none;
}
</style>

