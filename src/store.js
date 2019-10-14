import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // types: {
  //   SET_USER: 'SET_USER' //用户信息
  // },
  // state: {
  //   user: {}
  // },
  // getters: {
  //   user: state => state.user
  // },
  // mutations: {
  //   [types.SET_USER](state, user) {// [types.SET_USER]确定types类型等于SET_USER,
  //     if (user) {
  //       state.user = user;
  //     } else {
  //       state.user = {}
  //     }
  //   }
  // },
  // actions: {
  //   setUser: ({ commit }, user) => {
  //     commit(types.SET_USER, user)
  //   }
  // }
})
