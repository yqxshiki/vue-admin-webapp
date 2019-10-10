import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import login from './views/Login.vue'
import sidebar from './components/Sidebar.vue'
import header from './components/Header.vue'

import charts from './views/charts.vue'
import error from './views/Error.vue'
import home from './views/Home.vue'

// table
import simpletable from './components/table/Simple-table.vue'
import complextable from './components/table/Complex-table.vue'


//partcomponents
import slide from './components/partcomponents/Slide.vue'
import carousel from './components/partcomponents/Carousel.vue'
import uploadpic from './components/partcomponents/Uploadpic.vue'


// echarts
import map from './components/Echarts/Map.vue'
import slideecharts from './components/Echarts/Slide-echarts.vue'
import switchecharts from './components/Echarts/Switch-echarts.vue'
// import { Table } from '_element-ui@2.12.0@element-ui'


// 二级路由
// import statistics from './components/HomeEcharts/Statistics.vue'
// import piechart from './components/HomeEcharts/Piechart.vue'
// import yearlyexpense from './components/HomeEcharts/Yearlyexpense.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: '/home' },
    { path: "/login", component: login },
    { path: "/charts", component: charts },
    { path: "/header", component: header },
    { path: "/error", component: error },
    {
      path: "/home", component: home,
      // children: [
      //   { path: "/statistics", component: statistics },
      //   { path: "/piechart", component: piechart },
      //   { path: "/yearlyexpense", component: yearlyexpense },

      // ]
    },

    {
      path: "/sidebar", component: sidebar
    },

    // Table
    { path: "/simpletable", component: simpletable },
    { path: "/complextable", component: complextable },

    //partcomponents
    { path: "/slide", component: slide },
    { path: "/uploadpic", component: uploadpic },
    { path: "/carousel", component: carousel },

    // echarts
    { path: "/map", name: "map", component: map },
    { path: "/slideecharts", name: "slideecharts", component: slideecharts },
    { path: "/switchecharts", name: "switchecharts", component: switchecharts }

  ]
})
