<template>
  <div id="personal">
    <div class="wrap">
      <div class="img">
        <img src="../assets/personal/user01.jpg" alt />
      </div>
      <div class="message">
        <div class="user">admin</div>
        <div class="icon">
          <i class="iconfont">&#xe626;</i>
          <i class="iconfont">&#xe625;</i>
          <i class="iconfont">&#xe65c;</i>
        </div>
        <div class="title">议到工治带来你式同身线三际行动京低已已团。</div>
      </div>
      <div class="hobby">
        <span>
          <i class="el-icon-star-on"></i>Collection
        </span>
        <span>
          <i class="el-icon-chat-line-round"></i>Message
        </span>
      </div>
    </div>

    <el-tabs>
      <el-tab-pane label="Timeline">
        <el-timeline>
          <el-timeline-item timestamp="2019/10/13" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2019/10/13 12:56</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/9/27" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2018/9/27 10:24</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/9/24" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2019/9/24 13:50</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/9/10" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2019/9/10 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-tab-pane>
      <el-tab-pane label="Message">Message</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "personal"
};
</script>
<style scoped>
/* 容器 */
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("../assets/personal/personBg.jpg") no-repeat;
  background-size: 100% 100%;
  opacity: 0.8;
  height: 15rem;
}
/* 头像 */
.img img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
/* 中间信息 */
.user {
  font-size: 1.2rem;
  font-weight: bold;
}
.icon i {
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
}
.title {
  color: dargb(168, 160, 160);
}
/* right */
.hobby {
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hobby span {
  margin: 1rem;
}

/* iconfont */
@font-face {
  font-family: "iconfont"; /* project id 1455741 */
  src: url("//at.alicdn.com/t/font_1455741_nqczvkdwtwj.eot");
  src: url("//at.alicdn.com/t/font_1455741_nqczvkdwtwj.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1455741_nqczvkdwtwj.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1455741_nqczvkdwtwj.woff") format("woff"),
    url("//at.alicdn.com/t/font_1455741_nqczvkdwtwj.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1455741_nqczvkdwtwj.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>