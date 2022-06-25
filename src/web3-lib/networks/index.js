import NWTypes from './network-types'

const DEF_CHAINID = 3

export const Networks = [
  { chainId: 1, name: NWTypes.MAINNET, state: false },
  { chainId: 3, name: NWTypes.ROPSTEN, state: true },
  { chainId: 4, name: NWTypes.RINKEBY, state: true },
  { chainId: 5, name: NWTypes.GOERILI, state: false },
  { chainId: 42, name: NWTypes.KOVAN, state: true },
  { chainId: 1337, name: NWTypes.LOCAL, state: true }
]

export function checkSupport(chainId) {
  if (chainId === undefined) throw 'ChainId Illegal'

  const nw = Networks.find((nw) => nw.chainId === parseInt(chainId))

  return nw && nw.state
}

export function getDefaultNetwork() {
  return Networks.find((network) => network.chainId === DEF_CHAINID)
}

export function getNetwork(chainId) {
  if (!checkSupport(chainId)) return getDefaultNetwork()
  return Networks.find((nw) => nw.chainId === parseInt(chainId))
}

export function getNetworkName(chainId) {
  if (!chainId) return ''
  const nw = Networks.find((network) => network.chainId === parseInt(chainId))
  return nw ? nw.name : ''
}

export default {
  checkSupport,
  getDefaultNetwork,
  getNetwork,
  getNetworkName
}
