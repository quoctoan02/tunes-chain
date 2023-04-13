import { GlobalHooks } from "@app/global-hooks"
import { config } from "@config/swr.config"
import { client } from "@config/wagmi.config"
import { SWRConfig } from "swr"
import { WagmiConfig } from "wagmi"
import AntProvider from "./ant-provider"
import { ToasterContainer } from "./toaster-container"

export const Provider = ({ children }) => {
  return (
    <SWRConfig value={config}>
      <WagmiConfig client={client}>
        <GlobalHooks />
        <ToasterContainer />
        <AntProvider>{children}</AntProvider>
      </WagmiConfig>
    </SWRConfig>
  )
}
