import ContractManager from '../abi-manager/index'

export function udidMintInstance(web3js, chainId, options = {}) {
  let ctx = ContractManager.udidMint(chainId)
  console.log(ctx)
  return new web3js.eth.Contract(ctx.abi, ctx.address, options)
}

export default {
  udidMintInstance
}
