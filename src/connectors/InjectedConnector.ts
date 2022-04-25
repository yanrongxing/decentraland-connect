import { ChainId } from '@yanrongxing/schemas/dist/dapps/chain-id'
import { InjectedConnector as BaseInjectedConnector } from '@web3-react/injected-connector'

export class InjectedConnector extends BaseInjectedConnector {
  constructor(chainId: ChainId) {
    super({
      supportedChainIds: [chainId]
    })
  }
}
