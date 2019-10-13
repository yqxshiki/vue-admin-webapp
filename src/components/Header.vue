<template>
  <div id="header">
    <div class="wrap">
      <div id="title-sidebar">
        <a class="image">
          <img src="../assets/github.png" alt />
          Vue project
        </a>
      </div>
      <div class="right">
        <div class="shouye">
          <li id="domshouye">首页</li>
        </div>
        <div class="loginin">
          <li id="domMessage">
            <i class="el-icon-message-solid"></i>
          </li>
          <li id="domFullScreen">
            <i class="el-icon-full-screen" @click="screen"></i>
          </li>
          <div class="geren">
            <div class="admin">
              admin
              <i class="el-icon-arrow-down"></i>
            </div>
            <div>
              <img src="../assets/personal/user01.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      fullscreen: false
    };
  },
  methods: {
    // 点击全屏
    screen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid rgb(101, 105, 122);
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
#title-sidebar {
  width: 200px;
  background: rgb(95, 100, 119);
}
.right {
  width: calc(100% - 200px);
  background: #fff;
}
li {
  list-style: none;
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

/* right */
.shouye {
  float: left;
  line-height: 50px;
  text-align: center;
  margin-left: 100px;
}
.loginin {
  float: right;
  width: 260px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.loginin i {
  font-size: 1.5rem;
  color: #9b9292;
  cursor: pointer;
}
.loginin li:hover {
  background: #ccc;
  opacity: 0.6;
}
.geren {
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
}
.geren:hover {
  background: #ccc;
  opacity: 0.6;
}
.geren img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
