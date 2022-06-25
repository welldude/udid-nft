import InfuraCfg from './infura-cfg'
import { getNetwork, getDefaultNetwork } from '../networks'
import proTypes from './provider-types'
import Web3 from 'web3'
const InfuraProps = {
  ver: 'v3',
  projectId: InfuraCfg.INFURA_PROJECTID,
  secret: InfuraCfg.INFURA_SECRET,
  host: 'infura.io'
}

export function getProviderURL(chainId, providerType) {
  if (chainId == 1337) chainId = 3
  const network = getNetwork(chainId)
  const nwPrefix = network.name.toLocaleLowerCase()
  switch (providerType) {
    case proTypes.HTTP:
      return `${proTypes.HTTP}://${nwPrefix}.${InfuraProps.host}/${InfuraProps.ver}/${InfuraProps.projectId}`
    case proTypes.HTTPS:
      return `${proTypes.HTTPS}://${nwPrefix}.${InfuraProps.host}/${InfuraProps.ver}/${InfuraProps.projectId}`
    case proTypes.WSS:
      return `${proTypes.WSS}://${nwPrefix}.${InfuraProps.host}/ws/${InfuraProps.ver}/${InfuraProps.projectId}`
    default:
      return `${proTypes.HTTPS}://${nwPrefix}.${InfuraProps.host}/${InfuraProps.ver}/${InfuraProps.projectId}`
  }
}

export function getInfuraWeb3(chainId) {
  const LOCAL_CID = process.env.LOCAL_CID || ''

  /**
   * Local Develop
   */
  if (
    window.ethereum &&
    window.ethereum.chainId &&
    parseInt(window.ethereum.chainId) === LOCAL_CID
  ) {
    console.log(
      'Use Local Develop Mode:',
      LOCAL_CID,
      chainId,
      parseInt(window.ethereum.chainId)
    )
    return new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
  }

  // if (window.web3 && window.ethereum.chainId){
  //   return window.web3
  // }
  if (chainId === undefined || chainId === 0) {
    if (window.ethereum && window.ethereum.chainId) {
      chainId = parseInt(window.ethereum.chainId)
    } else {
      chainId = getDefaultNetwork().chainId
    }
  }

  const providerUrl = getProviderURL(chainId, proTypes.HTTPS)
  console.log('Infura Provider URL:', providerUrl)
  return new Web3(providerUrl)
}
