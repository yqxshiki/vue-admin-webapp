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
.title {
  color: #303133;
  width: 100%;
  font-size: 1rem;
  border-bottom: 1px solid #c3c6cf;
  padding: 20px 20px;
}
</style>

