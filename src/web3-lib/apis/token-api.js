export async function getBalances(chainId, wallet) {
  const web3js = winWeb3()
  const ethwei = new Web3.utils.BN(await web3js.eth.getBalance(wallet), 16)

  let baswei = new Web3.utils.BN(0x0, 16)

  if (checkSupport(chainId)) {
    const inst = getTokenInst(chainId, wallet)
    baswei = new Web3.utils.BN(await inst.methods.balanceOf(wallet).call(), 16)
  }

  return {
    ethwei,
    baswei
  }
}

export default {
  getBalances
}
