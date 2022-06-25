import ApiErrors from './api-errors.js'

export function winWeb3() {
  if (!window.ethereum || !window.web3) throw ApiErrors.NO_METAMASK
  return window.ethereum
}

export async function connectMetaMask() {
  try {
    const ethereum = window.ethereum
    let accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    if (!accounts.length) throw ApiErrors.NO_ACCOUNT

    const wallet = accounts[0]
    const web3js = winWeb3()
    const chainId = parseInt(web3js.chainId)

    console.log('>>>>>>', chainId, wallet)
    return {
      chainId,
      wallet
    }
  } catch (ex) {
    console.log('MetaMask Enable Fail:', ex)
    if (ex.code === ApiErrors.USER_REJECTED_REQUEST) {
      throw ApiErrors.USER_REJECTED_REQUEST
    } else if (ex.code === ApiErrors.RPC_TIMEOUT) {
      throw ApiErrors.RPC_TIMEOUT
    } else if (ex === ApiErrors.NO_ACCOUNT) {
      throw ApiErrors.NO_ACCOUNT
    }
  }
}
