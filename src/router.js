import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import login from './views/Login.vue'
import sidebar from './components/Sidebar.vue'
import header from './components/Header.vue'
import charts from './views/charts.vue'
import error from './views/Error.vue'

import map from './components/Echarts/Map.vue'
import slideecharts from './components/Echarts/Slide-echarts.vue'
import switchecharts from './components/Echarts/Switch-echarts.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/login", component: login },
    { path: "/charts", component: charts },
    { path: "/header", component: header },
    { path: "/error", component: error },
    {
      path: "/sidebar", component: sidebar
    },
    // echarts
    { path: "/map", name: "map", component: map },
    { path: "/slideecharts", name: "slideecharts", component: slideecharts },
    { path: "/switchecharts", name: "switchecharts", component: switchecharts }

  ]
})
