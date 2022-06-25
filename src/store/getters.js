import { checkSupport, getNetworkName } from '@/web3-lib/networks'

const getters = {
  metaMaskDisabled: (state) => {
    const chainId = state.dapp.chainId
    const wallet = state.dapp.walletAddress
    const spFlag = checkSupport(chainId)
    if (!state.dapp.injected || !chainId || !wallet || !spFlag) {
      return true
    } else {
      return false
    }
  },
  web3State: (state) => {
    return {
      injected: Boolean(state.dapp.injected),
      chainId: state.dapp.chainId,
      wallet: state.dapp.wallet,
      network: getNetworkName(state.dapp.chainId)
    }
  }
}

export default getters
