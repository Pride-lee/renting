import Vue from 'vue'
import Vuex from 'vuex'
import Vuexpersist from 'vuex-persist'
const vuelocal = new Vuexpersist({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    current: '',
    cityValue: ''
  },
  getters: {

  },
  mutations: {
    SetUser (state, payload) {
      state.user = payload
    },
    SetCurrent (state, payload) {
      state.current = payload
    },
    SetcityValue (state, payload) {
      state.cityValue = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuelocal.plugin]

})
