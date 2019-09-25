<template>
  <div class="header">
    <div class="wrap">
      <div class="left">
        <a class="image">
          <img src="../assets/github.png" alt />
          Vue project
        </a>
      </div>
      <div class="right">222</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.header {
  width: 100%;
  height: 50px;
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100%;
}
.left {
  width: 200px;
  background: rgb(58, 63, 81);
}
.right {
  width: calc(100% - 200px);
  background: #fff;
}

/* left */
.image {
  color: #fff;
  text-align: center;
  position: absolute;
  line-height: 50px;
  margin-left: 24px;
  cursor: pointer;
}
.image img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: #fff;
  vertical-align: middle;
}
</style>
