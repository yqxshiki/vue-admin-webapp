import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import login from './views/Login.vue'
import sidebar from './components/Sidebar.vue'
import header from './components/Header.vue'
import display from './views/Diplay.vue'
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




Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: '/login' },
    { path: "/login", component: () => import('./views/Login.vue') },
    {
      path: "/display", component: display, name: "home", meta: { title: '#' }, redirect: "/home", children: [
        // 二级路由
        { path: "/home", meta: { title: '首页2' }, component: () => import('./views/Home.vue') },
        { path: "/personal", meta: { title: '个人中心' }, component: () => import('./components/Personal.vue') },
        { path: "/driver", meta: { title: '引导' }, component: () => import('./components/driver/Driver.vue') },
        //permission
        { path: "/user", meta: { title: '用户权限界面' }, component: () => import('./components/Permission/User.vue') },
        { path: "/setting", meta: { title: '权限设置' }, component: () => import('./components/Permission/Setting.vue') },
        { path: "/administrators", meta: { title: '管理员权限界面' }, component: () => import('./components/Permission/Administrators.vue') },

        // Table
        { path: "/simpletable", meta: { title: '简单表格' }, component: () => import('./components/table/Simple-table.vue') },
        { path: "/complextable", meta: { title: '复杂表格' }, component: () => import('./components/table/Complex-table.vue') },
        //partcomponents
        { path: "/slide", meta: { title: '引导' }, component: () => import('./components/partcomponents/Slide.vue') },
        { path: "/uploadpic", meta: { title: '引导' }, component: () => import('./components/partcomponents/Uploadpic.vue') },
        { path: "/carousel", meta: { title: '引导' }, component: () => import('./components/partcomponents/Carousel.vue') },
        // Echarts
        { path: "/map", name: "map", meta: { title: 'map' }, component: () => import('./components/Echarts/Map.vue') },
        { path: "/slideecharts", meta: { title: 'slideecharts' }, name: "slideecharts", component: () => import('./components/Echarts/Slide-echarts.vue') },
        { path: "/switchecharts", meta: { title: 'switchecharts' }, name: "switchecharts", component: () => import('./components/Echarts/Switch-echarts.vue') },
        // Excel
        { path: "/importexcel", meta: { title: 'Excel导入' }, component: () => import('./components/Excel/Importexcel.vue') },
        { path: "/exportexcel", meta: { title: 'Excel导出' }, component: () => import('./components/Excel/Exportexcel.vue') },

        // nav
        { path: "/nav1", meta: { title: '导航1' }, component: () => import('./components/nav/Nva1.vue') },
        { path: "/nav2", meta: { title: '导航2' }, component: () => import('./components/nav/Nav2.vue') }
      ]
    },
    { path: "/header", component: () => import('./components/Header.vue') },
    { path: "/error", component: () => import('./views/Error.vue') },
    {
      path: "/sidebar", component: () => import('./components/Sidebar.vue')
    },

    { path: "*", redirect: "/error", hidden: true }
  ]
})
// 判断进入其他页面有没有先登录
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.loginToken ? true : false;
  if (to.path == "/login") {
    next();
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
