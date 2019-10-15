import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    driverkey: 0
  },
  getters: {
    change(state) {
      return state.driverkey = 1;
    }
  },
  mutations: {

  },
  actions: {

  }
})
