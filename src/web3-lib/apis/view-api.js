import { getInfuraWeb3 } from '../infura'
import { udidMintInstance } from './index'
export async function udidMint(chainId) {
  const web3js = getInfuraWeb3(chainId)
  const mintInst = udidMintInstance(web3js, chainId)
  console.log(mintInst.methods)
  const res = await mintInst.methods
    .MintPassCard()
    .call({ from: '0xd1af2fe0bc15e47c3a6c9f4270311b74ab5bf9d1' })
  const res1 = await mintInst.methods
    .balanceOf('0xd1af2fe0bc15e47c3a6c9f4270311b74ab5bf9d1')
    .call()
  console.log('mint:', res, 'balance', res1)
}
