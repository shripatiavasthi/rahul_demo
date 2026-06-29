import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-body: ${({ theme }) => theme.fonts.body};
    --color-text-primary: ${({ theme }) => theme.colors.textPrimary};
    --color-text-heading: ${({ theme }) => theme.colors.textHeading};
    --color-text-muted: ${({ theme }) => theme.colors.textMuted};
    --color-text-subtle: ${({ theme }) => theme.colors.textSubtle};
    --color-text-input-action: ${({ theme }) => theme.colors.textInputAction};
    --color-text-placeholder: ${({ theme }) => theme.colors.textPlaceholder};
    --color-surface: ${({ theme }) => theme.colors.surface};
    --color-white: ${({ theme }) => theme.colors.white};
    --color-hero-text: ${({ theme }) => theme.colors.heroText};
    --color-border-subtle: ${({ theme }) => theme.colors.borderSubtle};
    --color-hero-gradient-start: ${({ theme }) => theme.colors.heroGradientStart};
    --color-hero-gradient-end: ${({ theme }) => theme.colors.heroGradientEnd};
    --color-hero-overlay-glow: ${({ theme }) => theme.colors.heroOverlayGlow};
    --color-hero-overlay-wash-top: ${({ theme }) => theme.colors.heroOverlayWashTop};
    --color-hero-overlay-wash-bottom: ${({ theme }) => theme.colors.heroOverlayWashBottom};
    --color-panel-border: ${({ theme }) => theme.colors.panelBorder};
    --color-input-border: ${({ theme }) => theme.colors.inputBorder};
    --color-link: ${({ theme }) => theme.colors.link};
    --color-focus: ${({ theme }) => theme.colors.focus};
    --color-focus-ring: ${({ theme }) => theme.colors.focusRing};
    --color-error: ${({ theme }) => theme.colors.error};
    --color-error-ring: ${({ theme }) => theme.colors.errorRing};
    --color-button-start: ${({ theme }) => theme.colors.buttonStart};
    --color-button-end: ${({ theme }) => theme.colors.buttonEnd};
    --color-checkbox: ${({ theme }) => theme.colors.checkbox};
    --color-app-background-glow: ${({ theme }) => theme.colors.appBackgroundGlow};
    --color-app-background-top: ${({ theme }) => theme.colors.appBackgroundTop};
    --color-app-background-bottom: ${({ theme }) => theme.colors.appBackgroundBottom};
    --shadow-elevated: ${({ theme }) => theme.shadows.elevated};
    --shadow-button: ${({ theme }) => theme.shadows.button};
    --radius-card: ${({ theme }) => theme.radius.card};
    --radius-panel: ${({ theme }) => theme.radius.panel};
    --radius-input: ${({ theme }) => theme.radius.input};
    --radius-pill: ${({ theme }) => theme.radius.pill};
  }

  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    font-family: var(--font-body);
    line-height: 1.5;
    font-weight: 400;
    color: var(--color-text-primary);
    background:
      radial-gradient(circle at top, var(--color-app-background-glow), transparent 34%),
      linear-gradient(180deg, var(--color-app-background-top) 0%, var(--color-app-background-bottom) 100%);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input,
  a {
    font: inherit;
  }

  h1,
  h2 {
    font-weight: 500;
  }

  img {
    display: block;
    max-width: 100%;
  }

  #root {
    min-height: 100vh;
  }
`
