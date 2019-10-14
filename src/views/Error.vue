<template>
  <div id="error">
    <div class="wrap">
      <div class="no">哎哟！抱歉，找不到该页</div>
      <h3>404</h3>
      <router-link to="/home">
        <span class="zhuye">点击返回主页</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
#error {
  width: 100%;
  height: 100%;
  background: #b5c794 url("../assets/404img/img-404.png") no-repeat 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.no {
  color: red;
  font-family: sans-serif;
}
h3 {
  font-weight: bold;
  font-size: 40px;
  color: rgb(199, 26, 26);
}
.zhuye {
  color: red;
  font-weight: bolder;
}
.zhuye:hover {
  box-shadow: 0 2px 12px 10px black;
  font-size: 45px;
}
</style>