import * as types from './mutation-types'

// import { checkSupport } from '@/web3-lib/networks'
// import { getBalances } from '@/web3-lib/apis/token-api'

export function checkInjected({ commit }) {
  const injected = window.web3 && window.ethereum && window.ethereum.isMetaMask
  if (window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false
  }
  commit(types.SET_INJECTED, injected)
}

const AccountsChangedHandler = ({ commit, state }) => {
  if (
    window.ethereum &&
    window.ethereum.isMetaMask &&
    !window.ethereum.eventNames().find((n) => n === 'accountsChanged')
  ) {
    console.log('Start AccountChanged listener...')
    window.ethereum.on('accountsChanged', handler)
  }

  function handler(accounts) {
    const chainId = parseInt(window.ethereum.chainId)
    commit(types.UPDATE_CHAINID, chainId)
    console.log('account changed', state.injected, accounts, chainId)
    if (accounts && accounts.length) {
      const wallet = accounts[0]
      commit(types.UPDATE_WALLET, wallet)

      // Balance reload
      // loadDappBalances({ commit, state })
      //   .then((ret) => {
      //     console.info(`reload ${wallet} balance`, ret)
      //   })
      //   .catch((ex) => {
      //     console.log(ex)
      //   })

      // reload assets,move in show page watch
      // try {
      //   if (checkSupport(chainId)) {
      //     dispatch('dapp/loadPublicMailDomains')
      //   }
      // } catch (ex) {}
    } else {
      commit(types.CLEAN_WEB3_STATE)
    }
  }
}

// export async function loadDappBalances({ commit, state }) {
//   const chainId = state.chainId
//   const wallet = state.wallet
//   console.log('load Balance on ', chainId)
//   const resp = await getBalances(chainId, wallet)
//   console.log('load balances dispatch', resp)
//   commit(types.SET_BALANCES, resp)

//   if (checkSupport(chainId) && wallet) {
//     try {
//       const drawRet = await getWithdrawable(chainId, wallet)
//       if (drawRet !== undefined) {
//         commit(types.UPDATE_WITHDRAWABLE_WEI, drawRet.withdrawWei)
//       }
//     } catch (ex) {
//       console.log(ex)
//     }
//   } else {
//     commit(types.UPDATE_WITHDRAWABLE_WEI, '0')
//   }
//   return resp
// }

export default {
  checkInjected,
  AccountsChangedHandler
  // loadDappBalances
}
