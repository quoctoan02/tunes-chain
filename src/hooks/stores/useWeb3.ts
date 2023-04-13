import { DEFAULT_CHAIN } from '@config/chains.config'
import { storageKeys } from '@constants/storage'
import { Chain, Provider, Signer } from '@wagmi/core'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IWeb3Store {
  account: string
  signer: Signer
  signerOrProvider: Signer | Provider
  chain: Chain
  updateSigner(signer: Signer): void
  updateSignerOrProvider(signerOrProvider: Signer | Provider): void
  updateAccount(account: string): void
  updateChain(chain: Chain): void
}

export const useWeb3 = create<Partial<IWeb3Store>>()(
  persist(
    (set, get) => ({
      //states
      account: null,
      signer: null,
      signerOrProvider: null,
      chain: DEFAULT_CHAIN,
      // actions
      updateSigner: (signer) => set({ signer }),
      updateSignerOrProvider: (signerOrProvider) => set({ signerOrProvider }),
      updateAccount: (account) => set({ account }),
      updateChain: (chain) => set({ chain }),
    }),
    {
      name: storageKeys.web3,
    }
  )
)
