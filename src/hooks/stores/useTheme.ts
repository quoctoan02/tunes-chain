import { storageKeys } from '@constants/storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTheme = create<Theme>()(
  persist(
    (set, get) => ({
      //states
      theme: 'dark',

      // actions
      toggle: (theme) => {
        document.documentElement.setAttribute('data-theme', theme)
        set({ theme })
      },
    }),
    {
      name: storageKeys.theme,
    }
  )
)
