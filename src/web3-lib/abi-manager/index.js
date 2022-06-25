import * as Types from './name-enums'
import udidMintContract from './udid-mint'
import { getDefaultNetwork } from '../networks'
export default {
  [Types.udidMint](chainId) {
    if (!chainId) chainId = getDefaultNetwork().chainId
    return {
      abi: udidMintContract.udidMintABI,
      address: udidMintContract.udidMintAddresses[chainId] || ''
    }
  }
}
