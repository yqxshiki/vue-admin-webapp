import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.axios = axios
//引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 使用echarts
import echarts from 'echarts'
Vue.prototype.echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 请求拦截
axios.interceptors.request.use(config => {
  // 判断是否有token
  if (localStorage.loginToken) {
    config.headers.Authorization = localStorage.loginToken;
  }
  return config;
}, err => {
  // 请求错误
  return Promise.reject(err);
})

// 响应拦截（不用每次请求都写一遍catch）

axios.interceptors.response.use(res => {
  return res;
},
  err => {
    const { status } = err.response;
    if (status == 401) {
      // 后台定义401为过期
      alert("token过期,请重新登录!")
      // 清楚token
      localStorage.removeItem("loginToken");
      router.push("/login");
    } else {
      alert(err.response.data)
    }
    return Promise.reject(err);
  });
