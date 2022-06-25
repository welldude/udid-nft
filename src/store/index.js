import { createStore } from 'vuex'
import dapp from './modules/dapp'
import getters from './getters'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters,
  modules: { dapp }
})
