export async function getWithdrawable(chainId, wallet) {
  if (!wallet) throw apiErrors.PARAM_ILLEGAL
  const ret = {
    withdrawWei: 0,
    withdrawBas: 0
  }

  if (!checkSupport(chainId)) return ret

  const web3js = winWeb3()
  const account = basAccountInstance(web3js, chainId, { from: wallet })

  const wei = await account.methods.ledger(wallet).call()
  const basvol = web3js.utils.fromWei(wei, 'ether')

  ret.withdrawWei = wei
  ret.withdrawBas = basvol

  return ret
}

export default {
  getWithdrawable
}
