import dynamicColors from '.tailwind/colors'
import tailwindConfig from '.tailwind/tailwind.config.js'
import { useTheme } from '@hooks/stores/useTheme'
import { ConfigProvider } from 'antd'
import { AliasToken } from 'antd/es/theme/internal'
import { FC, ReactNode } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

interface AntProviderProps {
  children: ReactNode
}

interface AntTokenTheme {
  light: Partial<AliasToken>
  dark: Partial<AliasToken>
}

const { theme } = resolveConfig(tailwindConfig as any)

const colors = { light: { ...theme.colors, ...dynamicColors.light }, dark: { ...theme.colors, ...dynamicColors.dark } }

console.log(colors)

const AntProvider: FC<AntProviderProps> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <ConfigProvider
      theme={{
        token: tokenTheme[theme],
        components: {
          Input: {
            colorBgContainer: 'transparent',
          },
          InputNumber: {
            colorBgContainer: 'transparent',
          },
          Table: {
            colorBgContainer: theme === 'dark' ? colors.dark.slate[800] : '',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

const defaultTheme = (theme: ThemeName): Partial<AliasToken> => {
  return {
    colorPrimaryText: colors[theme].primary[500],
    colorText: colors[theme].textContent,
    colorPrimary: colors[theme].primary[500],
    colorBgElevated: colors[theme].component,
    colorSuccess: colors[theme].success[500],
    colorError: colors[theme].error[500],
    colorPrimaryBorder: colors[theme].primary[500],
    colorIcon: colors[theme].textContent,
    colorTextLabel: colors[theme].textContent,
  }
}

const tokenTheme: AntTokenTheme = {
  light: {
    ...defaultTheme('light'),
  },
  dark: {
    ...defaultTheme('dark'),
    colorBgElevated: colors.dark.component,
    colorFillSecondary: colors.dark.slate[300],
    colorSplit: colors.dark.slate[500],
    colorTextDescription: colors.dark.slate[300],
    colorBgTextHover: colors.dark.slate[500],
    colorBgContainer: colors.dark.slate[700],
    controlOutline: colors.dark.slate[500],
    controlItemBgActiveDisabled: colors.dark.slate[700],
    colorTextDisabled: colors.dark.slate[800],
    colorBorder: colors.dark.slate[700],
    colorTextPlaceholder: colors.dark.slate[700],
    colorBgLayout: colors.dark.slate[600],
    // colorLinkHover: colors.dark.slate[700],
  },
}

export default AntProvider
