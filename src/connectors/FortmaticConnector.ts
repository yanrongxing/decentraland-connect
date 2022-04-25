import { ChainId } from '@yanrongxing/schemas/dist/dapps/chain-id'
import { ProviderType } from '@yanrongxing/schemas/dist/dapps/provider-type'
import { FortmaticConnector as BaseFortmaticConnector } from '@web3-react/fortmatic-connector'
import { getConfiguration } from '../configuration'

export class FortmaticConnector extends BaseFortmaticConnector {
  apiKeys: Record<number, string>

  constructor(chainId: ChainId) {
    const { apiKeys } = getConfiguration()[ProviderType.FORTMATIC]

    super({ chainId, apiKey: apiKeys[chainId] })
    this.apiKeys = apiKeys
  }

  public async getApiKey(): Promise<string> {
    const chainId = await this.getChainId()
    return this.apiKeys[chainId]
  }
}
