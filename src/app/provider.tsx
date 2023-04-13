import { GlobalHooks } from "@app/global-hooks"
import { config } from "@config/swr.config"
import { client } from "@config/wagmi.config"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { SWRConfig } from "swr"
import { WagmiConfig } from "wagmi"
import AntProvider from "./ant-provider"

export const Provider = ({ children }) => {
  return (
    <SWRConfig value={config}>
      <WagmiConfig client={client}>
        <GlobalHooks />
        <ToastContainer closeButton draggable position="top-right" theme="colored" pauseOnHover autoClose={3500} />
        <AntProvider>{children}</AntProvider>
      </WagmiConfig>
    </SWRConfig>
  )
}
