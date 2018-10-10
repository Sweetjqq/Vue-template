import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from '../plugins/logger'

import Login from '../view/Login/vuex/store'
import LoginOut from '../components/common/vuex/store'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Login,
    LoginOut
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
