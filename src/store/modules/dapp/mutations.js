import * as types from './mutation-types'
import Cookies from 'js-cookie'
export default {
  [types.SET_INJECTED](state, injected) {
    state.injected = injected
  },
  [types.SET_METAMASK_LOGIN](state, payload) {
    state.chainId = payload.chainId || null
    state.walletAddress = payload.wallet || null
    if (payload.chainId)
      Cookies.set(types.LAST_CHAINID_KEY, payload.chainId, { expires: 1 })
  },
  [types.UPDATE_CHAINID](state, chainId) {
    console.log(chainId)
    state.chainId = chainId
    if (chainId) Cookies.set(types.LAST_CHAINID_KEY, chainId, { expires: 1 })
  }
}
