import dynamicColors from '.tailwind/colors'
import tailwindConfig from '.tailwind/tailwind.config.js'
import { useTheme } from '@hooks/stores/useTheme'
import { ConfigProvider } from 'antd'
import { AliasToken } from 'antd/es/theme/internal'
import { FC, ReactNode } from 'react'
import defaultTailwindColors from 'tailwindcss/colors'
import resolveConfig from 'tailwindcss/resolveConfig'

interface AntProviderProps {
  children: ReactNode
}

interface AntTokenTheme {
  light: Partial<AliasToken>
  dark: Partial<AliasToken>
}

const { theme: tailwindTheme } = resolveConfig(tailwindConfig as any)

const tailwindColors = {
  light: { ...defaultTailwindColors, ...tailwindTheme.colors, ...dynamicColors.light },
  dark: { ...defaultTailwindColors, ...tailwindTheme.colors, ...dynamicColors.dark },
}

console.log({ tailwindTheme, tailwindColors })

const mapTailwindColorsToAntColors = (colorName: string, color) => {
  const colors = Object.keys(color)

  return colors.reduce((prev, cur, index) => {
    if (index > 0 && index < 11) {
      return {
        ...prev,
        [`${colorName}`]: color[500],
        [`${colorName}${index}`]: color[cur],
        [`${colorName}-${index}`]: color[cur],
      }
    }
    return prev
  }, {})
}

const fontFamily = tailwindTheme.fontFamily.sans.join(', ')

const AntProvider: FC<AntProviderProps> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <ConfigProvider
      theme={{
        token: tokenTheme[theme],
        // algorithm: theme === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        components: {
          Input: {
            colorBgContainer: 'transparent',
          },
          InputNumber: {
            colorBgContainer: 'transparent',
          },
          Table: {
            // colorBgContainer: theme === 'dark' ? tailwindColors.dark.slate[800] : '',
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
    // Config font family
    fontFamily,
    // Config background colors
    colorBgBase: tailwindColors[theme].body,
    // colorBgMask: tailwindColors[theme].,
    // colorBgSpotlight: tailwindColors[theme]. ,

    // Config colors
    colorTextBase: tailwindColors[theme].textContent,
    colorPrimaryText: tailwindColors[theme].primary[500],
    colorPrimaryBorder: tailwindColors[theme].primary[500],
    colorPrimary: tailwindColors[theme].primary[500],

    colorText: tailwindColors[theme].textContent,
    colorBgElevated: tailwindColors[theme].component,

    colorInfo: tailwindColors[theme].sky[500],
    colorSuccess: tailwindColors[theme].success[500],
    colorError: tailwindColors[theme].error[500],
    colorWarning: tailwindColors[theme].warning[500],

    colorIcon: tailwindColors[theme].textContent,
    colorTextLabel: tailwindColors[theme].textContent,

    // Override tailwind colors instead of antd colors
    ...mapTailwindColorsToAntColors('blue', tailwindColors[theme].blue),
    ...mapTailwindColorsToAntColors('cyan', tailwindColors[theme].cyan),
    ...mapTailwindColorsToAntColors('purple', tailwindColors[theme].purple),
    ...mapTailwindColorsToAntColors('green', tailwindColors[theme].green),
    ...mapTailwindColorsToAntColors('yellow', tailwindColors[theme].yellow),
    ...mapTailwindColorsToAntColors('red', tailwindColors[theme].red),
    ...mapTailwindColorsToAntColors('lime', tailwindColors[theme].lime),
    ...mapTailwindColorsToAntColors('gray', tailwindColors[theme].gray),
    ...mapTailwindColorsToAntColors('pink', tailwindColors[theme].pink),
  }
}

const tokenTheme: AntTokenTheme = {
  light: {
    ...defaultTheme('light'),
    colorTextDescription: tailwindColors.dark.slate[300],
  },
  dark: {
    ...defaultTheme('dark'),
    colorBgElevated: tailwindColors.dark.component,
    colorFillSecondary: tailwindColors.dark.slate[400],
    colorTextSecondary: tailwindColors.dark.slate[500],
    colorSplit: tailwindColors.dark.slate[500],
    colorTextDescription: tailwindColors.dark.slate[300],
    colorBgTextHover: tailwindColors.dark.slate[500],
    colorBgContainer: tailwindColors.dark.slate[700],
    controlOutline: tailwindColors.dark.slate[500],
    controlItemBgActiveDisabled: tailwindColors.dark.slate[700],
    colorTextDisabled: tailwindColors.dark.slate[600],
    colorBorder: tailwindColors.dark.slate[700],
    colorTextPlaceholder: tailwindColors.dark.slate[700],
    colorBgLayout: tailwindColors.dark.slate[600],
    // colorLinkHover: tailwindColors.dark.slate[700],
  },
}

export default AntProvider

// slate = {
//   50: "#f8fafc",
//   100: "#f1f5f9",
//   200: "#e2e8f0",
//   300: "#cbd5e1",
//   400: "#94a3b8",
//   500: "#64748b",
//   600: "#475569",
//   700: "#334155",
//   800: "#1e293b",
//   900: "#0f172a",
//   950: "#020617"
// }
