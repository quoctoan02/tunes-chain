type ThemeName = "dark" | "light"

interface Theme {
  theme: ThemeName
  toggle(theme: ThemeName): void
}
