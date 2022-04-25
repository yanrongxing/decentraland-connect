import { ChainId } from '@yanrongxing/schemas/dist/dapps/chain-id'
import { NetworkConnector as BaseNetworkConnector } from '@web3-react/network-connector'

export const RPC_URLS = Object.freeze({
  [ChainId.ETHEREUM_MAINNET]:
    'https://mainnet.infura.io/v3/21ee2680fd58460ba96d2b3addd7c38c',
  [ChainId.ETHEREUM_ROPSTEN]:
    'https://ropsten.infura.io/v3/21ee2680fd58460ba96d2b3addd7c38c',
  [ChainId.ETHEREUM_RINKEBY]:
    'https://rinkeby.infura.io/v3/21ee2680fd58460ba96d2b3addd7c38c',
  [ChainId.ETHEREUM_GOERLI]:
    'https://goerli.infura.io/v3/21ee2680fd58460ba96d2b3addd7c38c',
  [ChainId.ETHEREUM_KOVAN]:
    'https://kovan.infura.io/v3/21ee2680fd58460ba96d2b3addd7c38c',
  [ChainId.MATIC_MAINNET]:
    'https://rpc-mainnet.maticvigil.com/v1/aad675783e3f73a13efbf6e95338d6de7fd5c9b9',
  [ChainId.MATIC_MUMBAI]:
    'https://rpc-mumbai.maticvigil.com/v1/aad675783e3f73a13efbf6e95338d6de7fd5c9b9'
})

export class NetworkConnector extends BaseNetworkConnector {
  constructor(chainId: ChainId) {
    super({ urls: RPC_URLS, defaultChainId: chainId })
  }
}
