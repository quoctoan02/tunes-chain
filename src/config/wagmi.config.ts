import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { configureChains, createClient, CreateClientConfig } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { supportedChains } from './chains.config'

const projectId = '89c62e1e42dece0419fb79f0dd12cf76'

const defaultProvider = jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }) })

export const { provider, webSocketProvider, chains } = configureChains(supportedChains, [defaultProvider])

export enum ConnectorIds {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
}

export const connectorInstances = {
  [ConnectorIds.Injected]: new InjectedConnector({
    chains,
    options: {},
  }),
  // [ConnectorIds.WalletConnect]: new WalletConnectLegacyConnector({
  //   chains,
  //   options: {},
  // }),
  [ConnectorIds.WalletConnect]: new WalletConnectConnector({
    chains,
    options: {
      projectId,
    },
  }),
}

const config: CreateClientConfig = {
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [connectorInstances[ConnectorIds.Injected], connectorInstances[ConnectorIds.WalletConnect]],
}

export const client = createClient(config)
