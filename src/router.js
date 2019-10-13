import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import login from './views/Login.vue'
import sidebar from './components/Sidebar.vue'
import header from './components/Header.vue'

import charts from './views/charts.vue'
import error from './views/Error.vue'
import home from './views/Home.vue'
import driver from './components/driver/Driver.vue'

// personal
import personal from './components/Personal.vue'

// Permission
import user from './components/Permission/User.vue'
import setting from './components/Permission/Setting.vue'
import administrators from './components/Permission/Administrators.vue'

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

// Excel
import importexcel from './components/Excel/Importexcel.vue'
import exportexcel from './components/Excel/Exportexcel.vue'


// nav
import nav1 from './components/nav/Nva1.vue'
import nav2 from './components/nav/Nav2.vue'


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
    { path: "/login", component: () => import('./views/Login.vue') },
    { path: "/charts", component: () => import('./views/charts.vue') },
    { path: "/header", component: () => import('./components/Header.vue') },
    { path: "/error", component: () => import('./views/Error.vue') },
    {
      path: "/home", component: () => import('./views/Home.vue'),
      // children: [
      //   { path: "/statistics", component:()=>import('')  },
      //   { path: "/piechart", component:()=>import('')  },
      //   { path: "/yearlyexpense", component:()=>import('')  },

      // ]
    },

    {
      path: "/sidebar", component: () => import('./components/Sidebar.vue')
    },
    { path: "/personal", component: () => import('./components/Personal.vue') },
    { path: "/driver", component: () => import('./components/driver/Driver.vue') },
    //permission
    { path: "/user", component: () => import('./components/Permission/User.vue') },
    { path: "/setting", component: () => import('./components/Permission/Setting.vue') },
    { path: "/administrators", component: () => import('./components/Permission/Administrators.vue') },

    // Table
    { path: "/simpletable", component: () => import('./components/table/Simple-table.vue') },
    { path: "/complextable", component: () => import('./components/table/Complex-table.vue') },

    //partcomponents
    { path: "/slide", component: () => import('./components/partcomponents/Slide.vue') },
    { path: "/uploadpic", component: () => import('./components/partcomponents/Uploadpic.vue') },
    { path: "/carousel", component: () => import('./components/partcomponents/Carousel.vue') },

    // Echarts
    { path: "/map", name: "map", component: () => import('./components/Echarts/Map.vue') },
    { path: "/slideecharts", name: "slideecharts", component: () => import('./components/Echarts/Slide-echarts.vue') },
    { path: "/switchecharts", name: "switchecharts", component: () => import('./components/Echarts/Switch-echarts.vue') },

    // Excel
    { path: "/importexcel", component: () => import('./components/Excel/Importexcel.vue') },
    { path: "/exportexcel", component: () => import('./components/Excel/Exportexcel.vue') },

    // nav
    { path: "/nav1", component: () => import('./components/nav/Nva1.vue') },
    { path: "/nav2", component: () => import('./components/nav/Nav2.vue') },
    { path: "*", redirect: "/error", hidden: true }
  ]
})
