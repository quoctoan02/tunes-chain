interface Wallet {
  injected: boolean
  name: string
  connectorId: ConnectorIds
  etherId: string
  mobileOnly: boolean
  iconURI: string
  downloadUrl: string
  deepLink: string
}
