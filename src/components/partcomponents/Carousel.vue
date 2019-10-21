<template>
  <div id="carousel">
    <div class="text">轮播图</div>
    <div class="one">
      <div class="luntext">1.箭头</div>
      <!-- 箭头 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="items in imglist" :key="items">
          <img :src="items.imgSrc" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="two">
      <div class="luntext">2.卡片化</div>
      <!-- 卡片化 -->
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="items in imglist" :key="items">
          <img class="medium" :src="items.imgSrc" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      imglist: []
    };
  },
  methods: {
    getimg() {
      this.axios.get("/carousel").then(res => {
        console.log(res);
        let list = res.data.data.swiperList;
        this.imglist = list;
        // console.log(this.imglist);
      });
    }
  },
    // 页面渲染前拿到数据
  mounted() {
    this.getimg();
  }
};
</script>

<style>
.text {
  height: 40px;
  margin: 20px;
  font-size: 20px;
  color: black;
  border-block: 1px solid rgb(230, 228, 228);
  font-weight: bolder;
}
.one {
  height: 340px;
  color: black;
  
}
img {
  width: 100%;
  height: 100%;
}
.luntext {
  font-size: 17px;
  color: black;
  text-align: center;
  width: 20%;
  background: rgb(74, 147, 172);
  border-radius: 50%;
}
/* 箭头 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

/* 卡片化 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>
